/*! meshcore-bbs-panel v0.8.13 */
let e,t,i,o,n,s,r,a,l,d,c,h,p,u,m,g,v,f,_,y,b,x,w,k,$,S,C,M,z,T,P,A,E,I,O,R,D,B,N,F,q,H,j,Z,V,K,U,W,G,X,Y,J,Q,ee,te,ie,oe,ne,se,re,ae,le,de,ce,he,pe,ue,me,ge,ve,fe,_e,ye,be,xe,we,ke,$e,Se,Ce,Me,ze,Te,Pe,Ae,Le,Ee,Ie,Oe,Re,De,Be,Ne,Fe,qe,He,je,Ze,Ve,Ke,Ue,We,Ge,Xe,Ye,Je,Qe,et,tt,it,ot,nt,st,rt,at,lt,dt,ct,ht,pt,ut,mt,gt,vt,ft,_t,yt,bt,xt,wt,kt,$t,St,Ct,Mt,zt,Tt,Pt,At,Lt,Et,It,Ot,Rt,Dt,Bt,Nt,Ft,qt,Ht,jt,Zt,Vt,Kt,Ut,Wt,Gt,Xt,Yt,Jt,Qt,ei,ti,ii,oi,ni,si,ri,ai,li,di,ci,hi,pi,ui,mi,gi,vi,fi,_i,yi,bi,xi,wi,ki,$i,Si,Ci,Mi,zi,Ti,Pi,Ai,Li,Ei,Ii,Oi,Ri,Di,Bi,Ni,Fi,qi,Hi,ji,Zi,Vi,Ki,Ui,Wi,Gi,Xi,Yi,Ji,Qi,eo,to,io,oo,no,so,ro,ao,lo,co,ho,po,uo,mo,go,vo,fo,_o,yo,bo,xo,wo,ko,$o,So,Co,Mo,zo,To,Po,Ao,Lo,Eo,Io,Oo,Ro,Do,Bo,No,Fo,qo,Ho,jo,Zo,Vo,Ko,Uo,Wo,Go,Xo,Yo,Jo,Qo,en,tn,on,nn,sn,rn,an,ln,dn,cn,hn,pn,un,mn,gn,vn,fn,_n,yn,bn,xn,wn,kn,$n,Sn,Cn,Mn,zn,Tn,Pn,An,Ln,En,In,On,Rn,Dn,Bn,Nn,Fn,qn,Hn,jn,Zn,Vn,Kn,Un,Wn,Gn,Xn,Yn,Jn,Qn,es,ts,is,os,ns,ss,rs,as,ls,ds,cs,hs,ps,us,ms,gs,vs,fs,_s,ys,bs,xs,ws,ks,$s,Ss,Cs,Ms,zs,Ts,Ps,As,Ls,Es,Is,Os,Rs,Ds,Bs,Ns,Fs,qs,Hs,js,Zs,Vs,Ks,Us,Ws,Gs,Xs,Ys,Js,Qs,er,tr,ir,or,nr,sr,rr,ar,lr,dr,cr,hr,pr,ur,mr,gr,vr,fr,_r,yr,br,xr,wr,kr,$r,Sr,Cr,Mr,zr,Tr,Pr,Ar,Lr,Er,Ir,Or,Rr,Dr,Br,Nr,Fr,qr,Hr,jr,Zr,Vr,Kr,Ur,Wr,Gr,Xr,Yr,Jr,Qr,ea,ta,ia,oa,na,sa,ra,aa,la,da,ca,ha,pa,ua,ma,ga,va,fa,_a,ya,ba,xa,wa,ka,$a,Sa,Ca,Ma,za,Ta,Pa,Aa,La,Ea,Ia,Oa,Ra,Da,Ba,Na,Fa,qa,Ha,ja,Za,Va,Ka,Ua,Wa,Ga,Xa,Ya,Ja,Qa,el,tl,il,ol,nl,sl,rl,al,ll,dl,cl,hl,pl,ul,ml,gl,vl,fl,_l,yl,bl,xl,wl,kl,$l,Sl,Cl,Ml,zl,Tl,Pl,Al,Ll,El,Il,Ol,Rl,Dl,Bl,Nl,Fl,ql,Hl,jl,Zl,Vl,Kl,Ul,Wl,Gl,Xl,Yl,Jl,Ql,ed,td,id,od,nd,sd,rd,ad,ld,dd,cd,hd,pd,ud,md,gd,vd=e=>e;function fd(e,t,i,o){var n,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const _d=globalThis,yd=_d.ShadowRoot&&(void 0===_d.ShadyCSS||_d.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,bd=Symbol(),xd=new WeakMap;let wd=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==bd)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(yd&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=xd.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&xd.set(t,e))}return e}toString(){return this.cssText}};const kd=e=>new wd("string"==typeof e?e:e+"",void 0,bd),$d=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new wd(i,e,bd)},Sd=yd?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return kd(t)})(e):e,{is:Cd,defineProperty:Md,getOwnPropertyDescriptor:zd,getOwnPropertyNames:Td,getOwnPropertySymbols:Pd,getPrototypeOf:Ad}=Object,Ld=globalThis,Ed=Ld.trustedTypes,Id=Ed?Ed.emptyScript:"",Od=Ld.reactiveElementPolyfillSupport,Rd=(e,t)=>e,Dd={toAttribute(e,t){switch(t){case Boolean:e=e?Id:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},Bd=(e,t)=>!Cd(e,t),Nd={attribute:!0,type:String,converter:Dd,reflect:!1,useDefault:!1,hasChanged:Bd};null!==(e=Symbol.metadata)&&void 0!==e||(Symbol.metadata=Symbol("metadata")),null!==(t=Ld.litPropertyMetadata)&&void 0!==t||(Ld.litPropertyMetadata=new WeakMap);let Fd=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),(null!==(t=this.l)&&void 0!==t?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Nd){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&Md(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){var o;const{get:n,set:s}=null!==(o=zd(this.prototype,e))&&void 0!==o?o:{get(){return this[t]},set(e){this[t]=e}};return{get:n,set(t){const o=null==n?void 0:n.call(this);null!=s&&s.call(this,t),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return null!==(t=this.elementProperties.get(e))&&void 0!==t?t:Nd}static _$Ei(){if(this.hasOwnProperty(Rd("elementProperties")))return;const e=Ad(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Rd("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Rd("properties"))){const e=this.properties,t=[...Td(e),...Pd(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(Sd(e))}else void 0!==e&&t.push(Sd(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach(e=>e(this))}addController(e){var t,i;(null!==(t=this._$EO)&&void 0!==t?t:this._$EO=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$EO)||void 0===t||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(yd)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of t){const t=document.createElement("style"),o=_d.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=i.cssText,e.appendChild(t)}})(t,this.constructor.elementStyles),t}connectedCallback(){var e,t;null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$EO)||void 0===t||t.forEach(e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$EO)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){var n;const s=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:Dd).toAttribute(t,i.type);this._$Em=e,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){var n,s,r;const e=i.getPropertyOptions(o),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(n=e.converter)||void 0===n?void 0:n.fromAttribute)?e.converter:Dd;this._$Em=o;const l=a.fromAttribute(t,e.type);this[o]=null!==(s=null!=l?l:null===(r=this._$Ej)||void 0===r?void 0:r.get(o))&&void 0!==s?s:l,this._$Em=null}}requestUpdate(e,t,i,o=!1,n){if(void 0!==e){var s,r;const a=this.constructor;if(!1===o&&(n=this[e]),null!=i||(i=a.getPropertyOptions(e)),!((null!==(s=i.hasChanged)&&void 0!==s?s:Bd)(n,t)||i.useDefault&&i.reflect&&n===(null===(r=this._$Ej)||void 0===r?void 0:r.get(e))&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:n},s){var r,a,l;i&&!(null!==(r=this._$Ej)&&void 0!==r?r:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,null!==(a=null!=s?s:t)&&void 0!==a?a:this[e]),!0!==n||void 0!==s)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(null!==(l=this._$Eq)&&void 0!==l?l:this._$Eq=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){var e;if(null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,i,o)}}let t=!1;const i=this._$AL;try{var o;t=this.shouldUpdate(i),t?(this.willUpdate(i),null!==(o=this._$EO)&&void 0!==o&&o.forEach(e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)}),this.update(i)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null!==(t=this._$EO)&&void 0!==t&&t.forEach(e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};Fd.elementStyles=[],Fd.shadowRootOptions={mode:"open"},Fd[Rd("elementProperties")]=new Map,Fd[Rd("finalized")]=new Map,null!=Od&&Od({ReactiveElement:Fd}),(null!==(i=Ld.reactiveElementVersions)&&void 0!==i?i:Ld.reactiveElementVersions=[]).push("2.1.2");const qd=globalThis,Hd=e=>e,jd=qd.trustedTypes,Zd=jd?jd.createPolicy("lit-html",{createHTML:e=>e}):void 0,Vd="$lit$",Kd=`lit$${Math.random().toFixed(9).slice(2)}$`,Ud="?"+Kd,Wd=`<${Ud}>`,Gd=document,Xd=()=>Gd.createComment(""),Yd=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Jd=Array.isArray,Qd="[ \t\n\f\r]",ec=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tc=/-->/g,ic=/>/g,oc=RegExp(`>|${Qd}(?:([^\\s"'>=/]+)(${Qd}*=${Qd}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),nc=/'/g,sc=/"/g,rc=/^(?:script|style|textarea|title)$/i,ac=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),lc=ac(1),dc=ac(2),cc=Symbol.for("lit-noChange"),hc=Symbol.for("lit-nothing"),pc=new WeakMap,uc=Gd.createTreeWalker(Gd,129);function mc(e,t){if(!Jd(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Zd?Zd.createHTML(t):t}const gc=(e,t)=>{const i=e.length-1,o=[];let n,s=2===t?"<svg>":3===t?"<math>":"",r=ec;for(let t=0;t<i;t++){const i=e[t];let a,l,d=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===ec?"!--"===l[1]?r=tc:void 0!==l[1]?r=ic:void 0!==l[2]?(rc.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=oc):void 0!==l[3]&&(r=oc):r===oc?">"===l[0]?(r=null!=n?n:ec,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?oc:'"'===l[3]?sc:nc):r===sc||r===nc?r=oc:r===tc||r===ic?r=ec:(r=oc,n=void 0);const h=r===oc&&e[t+1].startsWith("/>")?" ":"";s+=r===ec?i+Wd:d>=0?(o.push(a),i.slice(0,d)+Vd+i.slice(d)+Kd+h):i+Kd+(-2===d?t:h)}return[mc(e,s+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class vc{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let n=0,s=0;const r=e.length-1,a=this.parts,[l,d]=gc(e,t);if(this.el=vc.createElement(l,i),uc.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=uc.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(Vd)){const t=d[s++],i=o.getAttribute(e).split(Kd),r=/([.?@])?(.*)/.exec(t);a.push({type:1,index:n,name:r[2],strings:i,ctor:"."===r[1]?xc:"?"===r[1]?wc:"@"===r[1]?kc:bc}),o.removeAttribute(e)}else e.startsWith(Kd)&&(a.push({type:6,index:n}),o.removeAttribute(e));if(rc.test(o.tagName)){const e=o.textContent.split(Kd),t=e.length-1;if(t>0){o.textContent=jd?jd.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],Xd()),uc.nextNode(),a.push({type:2,index:++n});o.append(e[t],Xd())}}}else if(8===o.nodeType)if(o.data===Ud)a.push({type:2,index:n});else{let e=-1;for(;-1!==(e=o.data.indexOf(Kd,e+1));)a.push({type:7,index:n}),e+=Kd.length-1}n++}}static createElement(e,t){const i=Gd.createElement("template");return i.innerHTML=e,i}}function fc(e,t,i=e,o){var n,s,r,a,l;if(t===cc)return t;let d=void 0!==o?null===(n=i._$Co)||void 0===n?void 0:n[o]:i._$Cl;const c=Yd(t)?void 0:t._$litDirective$;return(null===(s=d)||void 0===s?void 0:s.constructor)!==c&&(null!==(r=d)&&void 0!==r&&null!==(a=r._$AO)&&void 0!==a&&a.call(r,!1),void 0===c?d=void 0:(d=new c(e),d._$AT(e,i,o)),void 0!==o?(null!==(l=i._$Co)&&void 0!==l?l:i._$Co=[])[o]=d:i._$Cl=d),void 0!==d&&(t=fc(e,d._$AS(e,t.values),d,o)),t}class _c{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:o}=this._$AD,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:Gd).importNode(i,!0);uc.currentNode=n;let s=uc.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){var d;if(r===l.index){let t;2===l.type?t=new yc(s,s.nextSibling,this,e):1===l.type?t=new l.ctor(s,l.name,l.strings,this,e):6===l.type&&(t=new $c(s,this,e)),this._$AV.push(t),l=o[++a]}r!==(null===(d=l)||void 0===d?void 0:d.index)&&(s=uc.nextNode(),r++)}return uc.currentNode=Gd,n}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class yc{get _$AU(){var e,t;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cv}constructor(e,t,i,o){var n;this.type=2,this._$AH=hc,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get parentNode(){var e;let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null===(e=t)||void 0===e?void 0:e.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=fc(this,e,t),Yd(e)?e===hc||null==e||""===e?(this._$AH!==hc&&this._$AR(),this._$AH=hc):e!==this._$AH&&e!==cc&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>Jd(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==hc&&Yd(this._$AH)?this._$AA.nextSibling.data=e:this.T(Gd.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:o}=e,n="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=vc.createElement(mc(o.h,o.h[0]),this.options)),o);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.p(i);else{const e=new _c(n,this),t=e.u(this.options);e.p(i),this.T(t),this._$AH=e}}_$AC(e){let t=pc.get(e.strings);return void 0===t&&pc.set(e.strings,t=new vc(e)),t}k(e){Jd(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const n of e)o===t.length?t.push(i=new yc(this.O(Xd()),this.O(Xd()),this,this.options)):i=t[o],i._$AI(n),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e!==this._$AB;){var i;const t=Hd(e).nextSibling;Hd(e).remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cv=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class bc{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,n){this.type=1,this._$AH=hc,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=hc}_$AI(e,t=this,i,o){const n=this.strings;let s=!1;if(void 0===n)e=fc(this,e,t,0),s=!Yd(e)||e!==this._$AH&&e!==cc,s&&(this._$AH=e);else{const o=e;let r,a;for(e=n[0],r=0;r<n.length-1;r++)a=fc(this,o[i+r],t,r),a===cc&&(a=this._$AH[r]),s||(s=!Yd(a)||a!==this._$AH[r]),a===hc?e=hc:e!==hc&&(e+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}s&&!o&&this.j(e)}j(e){e===hc?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class xc extends bc{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===hc?void 0:e}}let wc=class extends bc{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==hc)}};class kc extends bc{constructor(e,t,i,o,n){super(e,t,i,o,n),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=fc(this,e,t,0))&&void 0!==i?i:hc)===cc)return;const o=this._$AH,n=e===hc&&o!==hc||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==hc&&(o===hc||n);n&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(t=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==t?t:this.element,e):this._$AH.handleEvent(e)}}class $c{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){fc(this,e)}}const Sc=qd.litHtmlPolyfillSupport;null!=Sc&&Sc(vc,yc),(null!==(o=qd.litHtmlVersions)&&void 0!==o?o:qd.litHtmlVersions=[]).push("3.3.2");const Cc=globalThis;let Mc=class extends Fd{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{var o;const n=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:t;let s=n._$litPart$;if(void 0===s){var r;const e=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;n._$litPart$=s=new yc(t.insertBefore(Xd(),e),e,void 0,null!=i?i:{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return cc}};Mc._$litElement$=!0,Mc.finalized=!0,null===(n=Cc.litElementHydrateSupport)||void 0===n||n.call(Cc,{LitElement:Mc});const zc=Cc.litElementPolyfillSupport;null==zc||zc({LitElement:Mc}),(null!==(s=Cc.litElementVersions)&&void 0!==s?s:Cc.litElementVersions=[]).push("4.2.2");const Tc=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},Pc={attribute:!0,type:String,converter:Dd,reflect:!1,hasChanged:Bd},Ac=(e=Pc,t,i)=>{const{kind:o,metadata:n}=i;let s=globalThis.litPropertyMetadata.get(n);if(void 0===s&&globalThis.litPropertyMetadata.set(n,s=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),s.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,n,e,!0,i)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=i;return function(i){const n=this[o];t.call(this,i),this.requestUpdate(o,n,e,!0,i)}}throw Error("Unsupported decorator location: "+o)};function Lc(e){return(t,i)=>"object"==typeof i?Ac(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function Ec(e){return Lc({...e,state:!0,attribute:!1})}const Ic=$d(r||(r=vd`
  :host {
    display: block;
    width: 100%;
    height: 100vh;
    --chat-bg: var(--chat-card-bg, var(--card-background-color, #fff));
    --bubble-incoming-bg: var(
      --chat-card-bubble-incoming-bg,
      var(--secondary-background-color, #e8e8e8)
    );
    --bubble-outgoing-bg: var(--chat-card-bubble-outgoing-bg, var(--primary-color, #03a9f4));
    --bubble-incoming-text: var(
      --chat-card-bubble-incoming-text,
      var(--primary-text-color, #212121)
    );
    --bubble-outgoing-text: var(--chat-card-bubble-outgoing-text, #fff);
    --sender-color: var(--chat-card-sender-color, var(--primary-color, #03a9f4));
    --timestamp-color: var(--chat-card-timestamp-color, var(--secondary-text-color, #727272));
    --mention-bg: var(--chat-card-mention-bg, rgba(3, 169, 244, 0.15));
    --mention-text: var(--chat-card-mention-text, var(--primary-color, #03a9f4));
    --date-separator-color: var(
      --chat-card-date-separator-color,
      var(--secondary-text-color, #727272)
    );
    --unread-badge-bg: var(--chat-card-unread-badge-bg, var(--primary-color, #03a9f4));
    --input-bg: var(--chat-card-input-bg, var(--card-background-color, #fff));
    --input-border: var(--chat-card-input-border, var(--divider-color, #e0e0e0));
    --scrollbar-thumb: var(--chat-card-scrollbar-thumb, var(--scrollbar-thumb-color, #c1c1c1));
    --system-msg-color: var(--chat-card-system-msg-color, var(--secondary-text-color, #727272));
    --error-color: var(--error-color, #db4437);

    /* ─── Semantic threshold-band colours ───
       Used by the node-summary aggregated card (and any future component
       wanting good/warn/bad/info semantics). The hex defaults match the
       battery / status palette already scattered through this stylesheet
       (#4caf50, #ff9800, #f44336, #2196f3) so no net new palette is
       introduced — these named variables just give the existing colours
       a semantic handle.

       *-bg variants are the translucent fills used by status badges,
       map-link chips, and any chip-style backgrounds the card adds. */
    --good: var(--meshcore-good, #4caf50);
    --warn: var(--meshcore-warn, #ff9800);
    --bad:  var(--meshcore-bad,  #f44336);
    --info: var(--meshcore-info, #2196f3);
    --good-bg: var(--meshcore-good-bg, rgba(76, 175, 80, 0.18));
    --warn-bg: var(--meshcore-warn-bg, rgba(255, 152, 0, 0.18));
    --bad-bg:  var(--meshcore-bad-bg,  rgba(244, 67, 54, 0.18));
    --info-bg: var(--meshcore-info-bg, rgba(33, 150, 243, 0.18));
  }

  /* === Panel Layout === */
  .panel {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: var(--primary-background-color, #fafafa);
  }

  .panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    background: var(--card-background-color, #fff);
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
    flex-shrink: 0;
    gap: 12px;
  }

  .panel-title {
    font-size: 18px;
    font-weight: 500;
    color: var(--primary-text-color);
    flex: 1;
  }

  .device-switcher {
    padding: 8px 12px;
    border: 1px solid var(--input-border);
    border-radius: 8px;
    background: var(--input-bg);
    color: var(--primary-text-color);
    font-size: 13px;
    box-sizing: border-box;
    height: 39px;
    min-height: 39px;
    line-height: normal;
    appearance: menulist;
    -webkit-appearance: menulist;
    cursor: pointer;
  }

  /* === Tab Bar === */
  .tab-bar {
    display: flex;
    gap: 0;
    padding: 0;
    background: var(--card-background-color, #fff);
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
    flex-shrink: 0;
  }

  .tab-bar button {
    flex: 1;
    padding: 12px 16px;
    border: none;
    background: transparent;
    color: var(--secondary-text-color, #727272);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    border-bottom: 3px solid transparent;
    min-height: 48px;
  }

  .tab-bar button:hover {
    color: var(--primary-text-color);
    background: rgba(0, 0, 0, 0.02);
  }

  .tab-bar button.active {
    color: var(--primary-color, #03a9f4);
    border-bottom-color: var(--primary-color, #03a9f4);
  }

  /* === Page Container === */
  .page-container {
    flex: 1;
    overflow: hidden;
    display: flex;
  }

  .page {
    display: none;
    flex: 1;
    overflow: hidden;
  }

  .page.active {
    display: flex;
  }

  /* === Chat Page (with sidebar) === */
  .chat-layout {
    display: flex;
    width: 100%;
    height: 100%;
    gap: 0;
  }

  /* === Message Bubble Styles === */
  .bubble {
    max-width: 85%;
    padding: 8px 12px;
    border-radius: 16px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    position: relative;
    cursor: pointer;
    transition: opacity 0.15s;
    line-height: 1.4;
    font-size: 14px;
  }

  .bubble:active {
    opacity: 0.7;
  }

  .bubble + .bubble {
    margin-top: 2px;
  }

  .bubble.incoming {
    background: var(--bubble-incoming-bg);
    color: var(--bubble-incoming-text);
    border-bottom-left-radius: 4px;
  }

  .bubble.incoming:first-of-type {
    border-top-left-radius: 16px;
  }

  .bubble.outgoing {
    background: var(--bubble-outgoing-bg);
    color: var(--bubble-outgoing-text);
    border-bottom-right-radius: 4px;
  }

  .bubble.outgoing:first-of-type {
    border-top-right-radius: 16px;
  }

  .bubble.system {
    background: transparent;
    color: var(--system-msg-color);
    font-style: italic;
    font-size: 13px;
    text-align: center;
    cursor: default;
    padding: 4px 12px;
  }

  .message-text {
    white-space: pre-wrap;
  }

  .message-text .mention {
    background: var(--mention-bg);
    color: var(--mention-text);
    font-weight: 600;
    padding: 1px 4px;
    border-radius: 4px;
  }

  .bubble.outgoing .message-text .mention {
    background: rgba(255, 255, 255, 0.25);
    color: #fff;
  }

  .timestamp {
    font-size: 11px;
    color: var(--timestamp-color);
    margin-top: 2px;
    padding: 0 4px;
    opacity: 0.8;
  }

  /* === Sender Label === */
  .sender {
    font-size: 12px;
    font-weight: 600;
    color: var(--sender-color);
    margin-bottom: 2px;
    padding: 0 4px;
    max-width: 85%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* === Message Group === */
  .message-group {
    margin-bottom: 8px;
    display: flex;
    flex-direction: column;
  }

  .message-group.outgoing {
    align-items: flex-end;
  }

  .message-group.incoming {
    align-items: flex-start;
  }

  .message-group.system {
    align-items: center;
  }

  /* === Date Separator === */
  .date-separator {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 16px 0 12px;
    color: var(--date-separator-color);
    font-size: 12px;
    font-weight: 500;
  }

  .date-separator::before,
  .date-separator::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--divider-color, #e0e0e0);
  }

  /* === Contact Card === */
  .contact-card {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
    cursor: pointer;
    transition: background 0.15s;
  }

  .contact-card:hover {
    background: rgba(0, 0, 0, 0.02);
  }

  .contact-card.active {
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
    border-left: 3px solid var(--primary-color, #03a9f4);
  }

  .contact-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--primary-color, #03a9f4);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 14px;
    flex-shrink: 0;
  }

  .contact-info {
    flex: 1;
    overflow: hidden;
  }

  .contact-name {
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .contact-prefix {
    font-size: 12px;
    color: var(--secondary-text-color);
    font-family: monospace;
  }

  .contact-status {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .contact-status.online {
    background: #4caf50;
  }

  .contact-status.offline {
    background: var(--secondary-text-color);
  }

  /* === Conversation Sidebar === */
  .conversation-sidebar {
    width: 280px;
    border-right: 1px solid var(--divider-color, #e0e0e0);
    display: flex;
    flex-direction: column;
    background: var(--card-background-color, #fff);
    flex-shrink: 0;
  }

  .sidebar-search {
    padding: 12px;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
  }

  .sidebar-search input {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid var(--input-border);
    border-radius: 20px;
    background: var(--input-bg);
    color: var(--primary-text-color);
    font-size: 13px;
    outline: none;
  }

  .sidebar-search input:focus {
    border-color: var(--primary-color);
  }

  .conversation-list {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .conversation-list::-webkit-scrollbar {
    width: 6px;
  }

  .conversation-list::-webkit-scrollbar-track {
    background: transparent;
  }

  .conversation-list::-webkit-scrollbar-thumb {
    background: var(--scrollbar-thumb);
    border-radius: 3px;
  }

  /* === Chat Container === */
  .chat-container {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 8px 12px;
    background: var(--chat-bg);
    position: relative;
  }

  .chat-container::-webkit-scrollbar {
    width: 6px;
  }

  .chat-container::-webkit-scrollbar-track {
    background: transparent;
  }

  .chat-container::-webkit-scrollbar-thumb {
    background: var(--scrollbar-thumb);
    border-radius: 3px;
  }

  /* === Input Area === */
  .input-area {
    display: flex;
    align-items: flex-end;
    gap: 8px;
    padding: 8px 12px 12px;
    border-top: 1px solid var(--divider-color, #e0e0e0);
    background: var(--input-bg);
    flex-shrink: 0;
  }

  .input-area textarea {
    flex: 1;
    padding: 10px 14px;
    border: 1px solid var(--input-border);
    border-radius: 20px;
    background: var(--chat-bg);
    color: var(--primary-text-color);
    font-size: 14px;
    font-family: inherit;
    resize: none;
    outline: none;
    max-height: 120px;
    min-height: 40px;
    line-height: 1.4;
    transition: border-color 0.2s;
  }

  .input-area textarea:focus {
    border-color: var(--primary-color);
  }

  .input-area textarea::placeholder {
    color: var(--timestamp-color);
  }

  .input-area textarea:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .send-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border: none;
    border-radius: 50%;
    background: var(--primary-color, #03a9f4);
    color: #fff;
    cursor: pointer;
    flex-shrink: 0;
    transition: opacity 0.15s, transform 0.15s;
  }

  .send-button:hover {
    opacity: 0.9;
  }

  .send-button:active {
    transform: scale(0.95);
  }

  .send-button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .send-button svg {
    width: 20px;
    height: 20px;
  }

  /* === Empty State === */
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px 16px;
    color: var(--secondary-text-color);
    text-align: center;
  }

  .empty-state .empty-icon {
    font-size: 32px;
    margin-bottom: 8px;
    opacity: 0.5;
  }

  .empty-state .empty-text {
    font-size: 14px;
  }

  /* === Loading State === */
  .loading-state {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    color: var(--secondary-text-color);
    font-size: 14px;
    gap: 8px;
  }

  .loading-spinner {
    width: 20px;
    height: 20px;
    border: 2px solid var(--divider-color, #e0e0e0);
    border-top-color: var(--primary-color, #03a9f4);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* === Error State === */
  .error-state {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    color: var(--error-color);
    font-size: 13px;
    background: rgba(219, 68, 55, 0.08);
    border-radius: 8px;
    margin: 8px 12px;
  }

  /* === Delivery Status === */
  .delivery-status {
    font-size: 11px;
    color: var(--timestamp-color);
    margin-top: 2px;
    padding: 0 4px;
    opacity: 0.8;
  }

  .delivery-waiting {
    color: var(--timestamp-color);
  }

  .delivery-sent {
    color: var(--primary-color, #03a9f4);
  }

  .delivery-delivered {
    color: #4caf50;
  }

  .delivery-failed {
    color: var(--error-color, #db4437);
  }

  /* === Route Info Inline === */
  .route-info-inline {
    font-size: 11px;
    color: var(--timestamp-color);
    font-family: monospace;
    margin-top: 2px;
    padding: 0 4px;
    opacity: 0.7;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* === Device Cards === */
  .device-card {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 8px;
    background: var(--card-background-color, #fff);
    cursor: pointer;
    transition: all 0.15s;
  }

  .device-card:hover {
    background: rgba(0, 0, 0, 0.02);
    border-color: var(--primary-color, #03a9f4);
  }

  .device-card.active {
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
    border-color: var(--primary-color, #03a9f4);
  }

  .device-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .device-name {
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .device-type {
    font-size: 11px;
    padding: 2px 6px;
    border-radius: 4px;
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
    color: var(--primary-color, #03a9f4);
    font-weight: 500;
  }

  .device-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .device-stat {
    font-size: 12px;
    color: var(--secondary-text-color);
  }

  .device-stat-label {
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .device-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 4px;
  }

  .device-action-btn {
    padding: 6px 10px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 4px;
    background: var(--card-background-color, #fff);
    color: var(--primary-text-color);
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s;
  }

  .device-action-btn:hover {
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
    border-color: var(--primary-color, #03a9f4);
    color: var(--primary-color, #03a9f4);
  }

  .device-action-btn:active {
    transform: scale(0.98);
  }

  /* === Settings Page === */
  .settings-section {
    padding: 16px;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
  }

  .settings-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 12px 0;
    user-select: none;
  }

  .settings-header:hover {
    color: var(--primary-color, #03a9f4);
  }

  .settings-header-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--primary-text-color);
  }

  .settings-header-icon {
    font-size: 18px;
    transition: transform 0.2s;
  }

  .settings-header.collapsed .settings-header-icon {
    transform: rotate(-90deg);
  }

  .settings-content {
    display: none;
    padding: 12px 0;
  }

  .settings-content.expanded {
    display: block;
  }

  .form-group {
    margin-bottom: 16px;
  }

  .form-group:last-child {
    margin-bottom: 0;
  }

  .form-label {
    display: block;
    font-size: 13px;
    font-weight: 500;
    color: var(--primary-text-color);
    margin-bottom: 6px;
  }

  .form-label.required::after {
    content: ' *';
    color: var(--error-color, #db4437);
  }

  .form-input,
  .form-select {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid var(--input-border);
    border-radius: 6px;
    background: var(--input-bg);
    color: var(--primary-text-color);
    font-size: 13px;
    font-family: inherit;
    outline: none;
    transition: border-color 0.2s;
    box-sizing: border-box;
  }

  .form-select {
    height: 39px;
    min-height: 39px;
    line-height: normal;
    appearance: menulist;
    -webkit-appearance: menulist;
  }

  .form-input:focus,
  .form-select:focus {
    border-color: var(--primary-color, #03a9f4);
  }

  .form-input:disabled,
  .form-select:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .form-toggle {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .form-toggle input[type='checkbox'] {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  .form-toggle-label {
    font-size: 13px;
    color: var(--primary-text-color);
    cursor: pointer;
  }

  .form-description {
    font-size: 12px;
    color: var(--secondary-text-color);
    margin-top: 4px;
  }

  .apply-button {
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    background: var(--primary-color, #03a9f4);
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s;
  }

  .apply-button:hover {
    opacity: 0.9;
  }

  .apply-button:active {
    transform: scale(0.98);
  }

  .apply-button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  /* === Dialog Components === */
  .dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 16px;
  }

  .dialog {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    max-height: 80vh;
    border-radius: 12px;
    background: var(--card-background-color, #fff);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  .dialog-header {
    padding: 16px;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
    flex-shrink: 0;
  }

  .dialog-header-title {
    font-size: 16px;
    font-weight: 600;
    color: var(--primary-text-color);
  }

  .dialog-body {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
  }

  .dialog-footer {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    padding: 16px;
    border-top: 1px solid var(--divider-color, #e0e0e0);
    flex-shrink: 0;
  }

  .dialog-button {
    padding: 8px 16px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 6px;
    background: var(--card-background-color, #fff);
    color: var(--primary-text-color);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s;
  }

  .dialog-button:hover {
    background: rgba(0, 0, 0, 0.02);
  }

  .dialog-button.primary {
    background: var(--primary-color, #03a9f4);
    color: #fff;
    border-color: var(--primary-color, #03a9f4);
  }

  .dialog-button.primary:hover {
    opacity: 0.9;
  }

  /* === Command Dialog === */
  .command-select {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid var(--input-border);
    border-radius: 6px;
    background: var(--input-bg);
    color: var(--primary-text-color);
    font-size: 13px;
    outline: none;
    box-sizing: border-box;
    height: 39px;
    min-height: 39px;
    line-height: normal;
    appearance: menulist;
    -webkit-appearance: menulist;
  }

  .command-description {
    font-size: 12px;
    color: var(--secondary-text-color);
    margin-top: 8px;
    padding: 8px;
    border-left: 2px solid var(--primary-color, #03a9f4);
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.05);
    border-radius: 4px;
  }

  .command-params {
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid var(--divider-color, #e0e0e0);
  }

  .command-response {
    font-size: 12px;
    font-family: monospace;
    background: var(--input-bg);
    border: 1px solid var(--input-border);
    border-radius: 6px;
    padding: 12px;
    margin-top: 12px;
    /* normal (not pre-wrap): the structured/grid render path is built from
       indented template literals; pre-wrap would render that indentation as
       blank lines. The plain-text fallback wraps itself in a pre-wrap span to
       preserve multi-line CLI output. */
    white-space: normal;
    word-wrap: break-word;
    max-height: 200px;
    overflow-y: auto;
    color: var(--primary-text-color);
  }

  /* === Channel Management === */
  .channel-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .channel-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 6px;
    background: var(--card-background-color, #fff);
    transition: all 0.15s;
  }

  .channel-item:hover {
    background: rgba(0, 0, 0, 0.02);
    border-color: var(--primary-color, #03a9f4);
  }

  .channel-item-info {
    flex: 1;
  }

  .channel-item-name {
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .channel-item-idx {
    font-size: 12px;
    color: var(--secondary-text-color);
    font-family: monospace;
  }

  .channel-item-actions {
    display: flex;
    gap: 6px;
  }

  .channel-action-btn {
    padding: 6px 10px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 4px;
    background: var(--card-background-color, #fff);
    color: var(--primary-text-color);
    font-size: 12px;
    cursor: pointer;
    transition: all 0.15s;
  }

  .channel-action-btn:hover {
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
    border-color: var(--primary-color, #03a9f4);
    color: var(--primary-color, #03a9f4);
  }

  .channel-add-button {
    padding: 10px 16px;
    border: 2px dashed var(--divider-color, #e0e0e0);
    border-radius: 6px;
    background: transparent;
    color: var(--primary-color, #03a9f4);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s;
  }

  .channel-add-button:hover {
    border-color: var(--primary-color, #03a9f4);
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.05);
  }

  /* === Danger Zone === */
  .danger-zone {
    padding: 12px;
    border: 2px solid var(--error-color, #db4437);
    border-radius: 8px;
    background: rgba(219, 68, 55, 0.05);
  }

  .danger-zone-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--error-color, #db4437);
    margin-bottom: 8px;
  }

  .danger-button {
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    background: var(--error-color, #db4437);
    color: #fff;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s;
  }

  .danger-button:hover {
    opacity: 0.9;
  }

  .danger-button:active {
    transform: scale(0.98);
  }

  .danger-button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  /* === Neighbor Info === */
  .neighbor-chart-container {
    width: 100%;
    height: 300px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 8px;
    background: var(--input-bg);
  }

  .neighbor-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 12px;
  }

  .neighbor-table th {
    padding: 10px 12px;
    text-align: left;
    font-size: 12px;
    font-weight: 600;
    color: var(--primary-text-color);
    border-bottom: 2px solid var(--divider-color, #e0e0e0);
    background: rgba(0, 0, 0, 0.02);
  }

  .neighbor-table td {
    padding: 10px 12px;
    font-size: 12px;
    color: var(--primary-text-color);
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
  }

  .neighbor-table tr:hover {
    background: rgba(0, 0, 0, 0.02);
  }

  /* === Narrow Mode Responsive === */
  :host([narrow]) .device-card {
    border-radius: 0;
    border-left: none;
    border-right: none;
  }

  :host([narrow]) .dialog {
    max-width: 100%;
    border-radius: 0;
  }

  :host([narrow]) .device-stats {
    grid-template-columns: 1fr;
  }

  :host([narrow]) .dialog-overlay {
    padding: 0;
  }

  :host([narrow]) .tab-bar button {
    font-size: 12px;
    padding: 10px 12px;
  }

  :host([narrow]) .conversation-sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
    max-height: 40%;
  }

  :host([narrow]) .chat-layout {
    flex-direction: column;
  }

  /* === Sender Colors === */
  .sender-color-1 {
    --sender-color: #FF6B6B;
  }

  .sender-color-2 {
    --sender-color: #4ECDC4;
  }

  .sender-color-3 {
    --sender-color: #FFE66D;
  }

  .sender-color-4 {
    --sender-color: #95E1D3;
  }

  .sender-color-5 {
    --sender-color: #C7CEEA;
  }

  .sender-color-6 {
    --sender-color: #FF8B94;
  }

  .sender-color-7 {
    --sender-color: #B5EAD7;
  }

  .sender-color-8 {
    --sender-color: #FFB7B2;
  }

  /* === Accessibility === */
  .bubble:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  .send-button:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  .dialog-button:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  .form-input:focus-visible,
  .form-select:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
`)),Oc="0.8.13",Rc=/^<[^>]+>\s*/,Dc=/@\[([^\]]+)\]/g,Bc=/@(\w+)/g,Nc={recipient_type_entity:"select.meshcore_recipient_type",channel_entity:"select.meshcore_channel",contact_entity:"select.meshcore_contact",channel_entity_pattern:"binary_sensor.meshcore_{prefix}_ch_{idx}_messages",contact_entity_pattern:"binary_sensor.meshcore_{prefix}_{contact}_messages",domain_filter:"meshcore"},Fc={...Nc,hours_to_show:48,initial_hours:1,max_messages:500,show_date_separators:!0,group_messages:!0,group_timeout:300,timestamp_format:"relative",update_mode:"auto",refresh_interval:30,enable_cache:!0,cache_ttl:86400,cache_max_size:5242880};async function qc(e){try{return(await e.callWS({type:"meshcore_bbs/get_devices"})).devices||[]}catch(e){return[]}}async function Hc(e,t){try{const i={type:"meshcore_bbs/get_contacts"};return t&&(i.entry_id=t),(await e.callWS(i)).contacts||[]}catch(e){return[]}}async function jc(e,t){try{const i={type:"meshcore_bbs/get_channels"};return t&&(i.entry_id=t),(await e.callWS(i)).channels||[]}catch(e){return[]}}async function Zc(e,t){try{const i={type:"meshcore_bbs/get_device_config"};return t&&(i.entry_id=t),await e.callWS(i)}catch(e){throw new Error("Failed to get device configuration")}}async function Vc(e,t,i){try{const o={type:"meshcore_bbs/set_device_config",settings:t};return i&&(o.entry_id=i),await e.callWS(o)}catch(e){var o;return{success:!1,changed:[],error:null!==(o=null==e?void 0:e.message)&&void 0!==o?o:String(e)}}}async function Kc(e,t,i,o){try{const n={type:"meshcore_bbs/execute_local",command:t};return i&&(n.args=i),o&&(n.entry_id=o),await e.callWS(n)}catch(e){const t=e;return{response:t&&t.message?t.code?`${t.message} (${t.code})`:t.message:String(e),success:!1,timestamp:(new Date).toISOString()}}}async function Uc(e,t,i,o){try{const n={type:"meshcore_bbs/execute_remote",target_prefix:t,command:i};return o&&(n.entry_id=o),await e.callWS(n)}catch(e){const t=e;return{response:t&&t.message?t.code?`${t.message} (${t.code})`:t.message:String(e),success:!1,timestamp:(new Date).toISOString()}}}async function Wc(e,t,i,o){try{const n={type:"meshcore_bbs/add_contact",public_key:t};return i&&(n.name=i),o&&(n.entry_id=o),await e.callWS(n)}catch(e){return{success:!1}}}async function Gc(e,t,i){try{const o={type:"meshcore_bbs/remove_contact",public_key:t};return i&&(o.entry_id=i),await e.callWS(o)}catch(e){return{success:!1}}}async function Xc(e,t="all",i={}){try{var o,n;const s={type:"meshcore_bbs/get_contacts_paginated",category:t,limit:null!==(o=i.limit)&&void 0!==o?o:50,offset:null!==(n=i.offset)&&void 0!==n?n:0};return void 0!==i.nodeType&&(s.node_type=i.nodeType),i.search&&(s.search=i.search),i.entryId&&(s.entry_id=i.entryId),i.sortBy&&(s.sort_by=i.sortBy),await e.callWS(s)}catch(e){return{contacts:[],total:0,counts:{clients:0,repeaters:0,room_servers:0,sensors:0}}}}async function Yc(e){try{return(await e.callWS({type:"meshcore_bbs/radio_entries"})).radios||[]}catch(e){return[]}}class Jc{constructor(){this._counts={},this._lastRead={},this._subscribers=new Set,this._markReadRequestedHandler=null,this._readProgress=null,this._postSwitchTimerHandler=null}subscribe(e){return this._subscribers.add(e),()=>{this._subscribers.delete(e)}}onMarkReadRequested(e){this._markReadRequestedHandler=e}onPostSwitchTimerFire(e){this._postSwitchTimerHandler=e}requestMarkRead(e){e&&this._markReadRequestedHandler&&this._markReadRequestedHandler(e)}_notify(){for(const e of[...this._subscribers])try{e()}catch(e){console.error("[UnreadController] subscriber callback threw",e)}}ingestBackendData(e,t){var i,o;this._counts={...null!==(i=null==e?void 0:e.unread)&&void 0!==i?i:{}},this._lastRead={...null!==(o=null==e?void 0:e.last_read)&&void 0!==o?o:{}},this._notify()}clearEntity(e){e&&this._counts[e]&&(this._counts={...this._counts,[e]:0},this._notify())}get counts(){return this._counts}get lastRead(){return this._lastRead}beginConversation(e,t){var i;this._clearPostSwitchTimer();const o={entityId:e,anchorId:e&&null!==(i=this._lastRead[e])&&void 0!==i?i:null,unreadCountAtSelection:t,graceUntil:Date.now()+1e3,postSwitchTimer:null,markReadFired:!1,lastMarkReadIdSent:null};this._readProgress=o,o.postSwitchTimer=setTimeout(()=>{var e;this._readProgress===o&&(o.postSwitchTimer=null,null===(e=this._postSwitchTimerHandler)||void 0===e||e.call(this))},1e3)}endConversation(){this._clearPostSwitchTimer(),this._readProgress=null}_clearPostSwitchTimer(){const e=this._readProgress;null!=e&&e.postSwitchTimer&&(clearTimeout(e.postSwitchTimer),e.postSwitchTimer=null)}resetUnreadCountAtSelection(){this._readProgress&&(this._readProgress.unreadCountAtSelection=0)}maybeReanchorOnLateData(e){const t=this._readProgress;if(!t||t.entityId!==e)return!1;if(null!==t.anchorId)return!1;if(t.markReadFired)return!1;const i=this._lastRead[e];return!!i&&(t.anchorId=i,!0)}onScrollState(e){return this._tryAdvanceCursor(e.entityId,e.lastMessageVisible,e.hasNewerMessages,e.bufferTailId,!1)}onPillJump(e){return this._tryAdvanceCursor(e.entityId,!0,!1,e.bufferTailId,!0)}_tryAdvanceCursor(e,t,i,o,n){if(!e)return!1;const s=this._readProgress;return!(!s||s.entityId!==e||!n&&Date.now()<s.graceUntil||i||!t||null!==o&&o===s.lastMarkReadIdSent||(s.lastMarkReadIdSent=o,s.markReadFired=!0,this.requestMarkRead(e),0))}badgeCount(e,t,i){if(!e)return 0;const o=this._counts;if(i&&o[i])return o[i];if(i&&/_chan_[kn][0-9a-z-]*_messages$/.test(i))return 0;const n=/^\d+$/.test(e),s=t?`meshcore_${t}_ch_${e}_messages`:null;for(const[t,i]of Object.entries(o))if(!(i<=0))if(n){if(s){if(t.endsWith(s))return i}else if(t.endsWith(`_ch_${e}_messages`))return i}else{const o=e.substring(0,6);if(t.endsWith(`_${o}_messages`))return i}return 0}dividerAfterGroupIdx(e){const t=this._readProgress;if(!t)return null;let i=null;if(t.anchorId){let o=0;for(const n of e)if("date-separator"!==n.type){if(n.group.messages.some(e=>e.id===t.anchorId)){i=o;break}o++}}if(null!==i){let t=0;for(const o of e)if("date-separator"!==o.type){if(t>i&&!o.group.isOutgoing)return t;t++}return null}if(t.unreadCountAtSelection>0){const i=e.filter(e=>"date-separator"!==e.type).length,o=i-t.unreadCountAtSelection;return o>=0?o:0}return null}cursorAtTail(e,t){return!(!e||null===t)&&this._lastRead[e]===t}}const Qc=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function eh(e){const t=(new TextEncoder).encode(e),i=t.length,o=8*i,n=i+9+63&-64,s=new Uint8Array(n);s.set(t),s[i]=128;const r=new DataView(s.buffer);r.setUint32(n-4,o,!1);let a=1779033703,l=3144134277,d=1013904242,c=2773480762,h=1359893119,p=2600822924,u=528734635,m=1541459225;const g=new Int32Array(64);for(let e=0;e<n;e+=64){for(let t=0;t<16;t++)g[t]=r.getInt32(e+4*t,!1);for(let e=16;e<64;e++){const t=(g[e-15]>>>7|g[e-15]<<25)^(g[e-15]>>>18|g[e-15]<<14)^g[e-15]>>>3,i=(g[e-2]>>>17|g[e-2]<<15)^(g[e-2]>>>19|g[e-2]<<13)^g[e-2]>>>10;g[e]=g[e-16]+t+g[e-7]+i|0}let t=a,i=l,o=d,n=c,s=h,v=p,f=u,_=m;for(let e=0;e<64;e++){const r=_+((s>>>6|s<<26)^(s>>>11|s<<21)^(s>>>25|s<<7))+(s&v^~s&f)+Qc[e]+g[e]|0,a=t&i^t&o^i&o;_=f,f=v,v=s,s=n+r|0,n=o,o=i,i=t,t=r+(((t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10))+a|0)|0}a=a+t|0,l=l+i|0,d=d+o|0,c=c+n|0,h=h+s|0,p=p+v|0,u=u+f|0,m=m+_|0}const v=e=>(e>>>0).toString(16).padStart(8,"0");return v(a)+v(l)+v(d)+v(c)+v(h)+v(p)+v(u)+v(m)}function th(e){const t=[],i=new Set;let o;const n=new RegExp(Dc.source,"g");for(;null!==(o=n.exec(e));){const e=o[1];i.has(e)||(i.add(e),t.push(e))}const s=new RegExp(Bc.source,"g");for(;null!==(o=s.exec(e));){const e=o[1];i.has(e)||(i.add(e),t.push(e))}return t}function ih(e){if(!e||0===e.length)return{};let t,i;for(const o of e)void 0===t&&"string"==typeof o.flood_scope&&(t=o.flood_scope),void 0===i&&"boolean"==typeof o.region_scope&&(i=o.region_scope);return{floodScope:t,regionScope:i}}function oh(e){var t,i;const o=ih(e.rx_log_data);return{id:e.id,sender:e.sender,text:e.text,timestamp:new Date(e.timestamp),isOutgoing:e.outgoing,isSystem:!1,raw:e.text,mentions:th(e.text),rxLogData:e.rx_log_data,deliveryStatus:e.delivery_status?{status:e.delivery_status,ackReceived:e.ack_received,repeaterCount:e.repeater_count,roundTripMs:e.round_trip_ms,direct:"direct"===e.message_type}:void 0,repeaterCount:e.repeater_count,floodScope:null!==(t=e.flood_scope)&&void 0!==t?t:o.floodScope,regionScope:null!==(i=e.region_scope)&&void 0!==i?i:o.regionScope}}function nh(e,t){return e.getFullYear()!==t.getFullYear()||e.getMonth()!==t.getMonth()||e.getDate()!==t.getDate()}function sh(e){const t=new Date,i=new Date(t.getFullYear(),t.getMonth(),t.getDate()),o=new Date(e.getFullYear(),e.getMonth(),e.getDate()),n=Math.floor((i.getTime()-o.getTime())/864e5);return 0===n?"Today":1===n?"Yesterday":n<7?e.toLocaleDateString(void 0,{weekday:"long"}):e.toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric"})}class rh{constructor(e){this._messages=[],this._loading=!1,this._error=null,this._entityId=null,this._liveIds=new Set,this._gen=0,this._hass=null,this._pollTimer=null,this._realtimeSubscriptions=[],this._retryCount=0,this._onChange=null,this._fetchDebounce=null,this._active=!1,this._hasOlderMessages=!0,this._loadingOlder=!1,this._hasNewerMessages=!1,this._loadingNewer=!1,this._newMessagesWhileAway=0,this._userAtBottom=!1,this._config=e}get messages(){return this._messages}get loading(){return this._loading}get error(){return this._error}get entityId(){return this._entityId}get loadingOlder(){return this._loadingOlder}get hasOlderMessages(){return this._hasOlderMessages}get loadingNewer(){return this._loadingNewer}get hasNewerMessages(){return this._hasNewerMessages}get newMessagesWhileAway(){return this._newMessagesWhileAway}setUserAtBottom(e){this._userAtBottom!==e&&(this._userAtBottom=e,e&&!this._hasNewerMessages&&this._newMessagesWhileAway>0&&(this._newMessagesWhileAway=0,this._notify()))}resetNewMessagesCounter(){0!==this._newMessagesWhileAway&&(this._newMessagesWhileAway=0,this._notify())}setOnChange(e){this._onChange=e}setHass(e){this._hass=e}setConfig(e){this._config=e}async switchEntity(e,t=null,i=[]){if(e!==this._entityId){if(this._liveIds=new Set(i),this._gen++,this._fetchDebounce&&(clearTimeout(this._fetchDebounce),this._fetchDebounce=null),this._stopUpdates(),this._entityId=e,this._messages=[],this._error=null,this._retryCount=0,this._hasOlderMessages=!0,this._loadingOlder=!1,this._hasNewerMessages=!1,this._loadingNewer=!1,this._newMessagesWhileAway=0,this._userAtBottom=!1,!e)return this._active=!1,void this._notify();this._active=!0,this._startUpdates(e),t?await this._fetchAroundAnchor(e,t):await this._fetchMessages(e)}}async refresh(){this._entityId&&await this._fetchMessages(this._entityId)}addOptimisticMessage(e,t){const i=new Date,o={id:`optimistic_${i.getTime()}_${Math.random().toString(36).slice(2,8)}`,sender:e,text:t,timestamp:i,isOutgoing:!0,isSystem:!1,raw:`${e}: ${t}`,mentions:[]};this._messages=[...this._messages,o],this._notify()}async loadOlderMessages(){const e=this._gen;if(!this._loadingOlder&&this._hasOlderMessages&&this._hass&&this._entityId){this._loadingOlder=!0,this._notify();try{const t=this._messages.find(e=>!e.id.startsWith("rt_")&&!e.id.startsWith("optimistic_")),i={type:"meshcore_bbs/get_stored_messages",entity_id:this._entityId,limit:50};t&&(i.before=t.id);const o=await this._hass.callWS(i);if(e!==this._gen)return;const n=o.messages.map(oh);this._hasOlderMessages=o.has_more;const s=new Set(this._messages.map(e=>e.id)),r=n.filter(e=>!s.has(e.id));r.length>0&&(this._messages=[...r,...this._messages],this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime()))}catch(e){}finally{e===this._gen&&(this._loadingOlder=!1),this._notify()}}}async loadNewerMessages(){const e=this._gen;if(!this._loadingNewer&&this._hasNewerMessages&&this._hass&&this._entityId){this._loadingNewer=!0,this._notify();try{let i;for(let e=this._messages.length-1;e>=0;e--){const t=this._messages[e].id;if(!t.startsWith("rt_")&&!t.startsWith("optimistic_")){i=t;break}}const o={type:"meshcore_bbs/get_stored_messages",entity_id:this._entityId,limit:50};i&&(o.after=i);const n=await this._hass.callWS(o);if(e!==this._gen)return;const s=n.messages.map(oh);this._hasNewerMessages=n.has_more;const r=new Set(s.map(e=>e.id));this._messages=this._messages.filter(e=>!e.id.startsWith("rt_")||!r.has(e.id.substring(3)));const a=new Set(this._messages.map(e=>e.id)),l=s.filter(e=>!a.has(e.id));if(l.length>0){var t;this._messages=[...this._messages,...l],this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime());const e=null!==(t=this._config.max_messages)&&void 0!==t?t:500;this._messages.length>e&&(this._messages=this._messages.slice(-e),this._hasOlderMessages=!0)}}catch(e){}finally{e===this._gen&&(this._loadingNewer=!1),this._notify()}}}async fetchAroundTimestamp(e){const t=new Date(e).getTime(),i=this._messages.find(e=>Math.abs(e.timestamp.getTime()-t)<2e3);if(i)return!0;let o=0;for(;this._hasOlderMessages&&o<20;){await this.loadOlderMessages(),o++;const e=this._messages.find(e=>Math.abs(e.timestamp.getTime()-t)<2e3);if(e)return!0}return!1}pause(){this._stopUpdates(),this._active=!1,this._fetchDebounce&&(clearTimeout(this._fetchDebounce),this._fetchDebounce=null)}async resume(){this._entityId&&!this._active&&(this._active=!0,this._startUpdates(this._entityId),await this._fetchMessages(this._entityId))}destroy(){this._stopUpdates(),this._active=!1,this._fetchDebounce&&(clearTimeout(this._fetchDebounce),this._fetchDebounce=null),this._onChange=null}async _fetchMessages(e){const t=this._gen;if(this._hass){this._loading=!0,this._notify();try{var i;const o=50,n=await this._hass.callWS({type:"meshcore_bbs/get_stored_messages",entity_id:e,limit:o});if(t!==this._gen)return;const s=n.messages.map(oh);this._hasOlderMessages=n.has_more;const r=new Set(s.map(e=>e.id)),a=this._messages.filter(e=>{if(e.id.startsWith("optimistic_")){const t=s.some(t=>t.sender===e.sender&&t.text===e.text);return!t}if(e.id.startsWith("rt_")){const t=e.id.substring(3);return!r.has(t)}return!1});this._messages=[...s,...a],this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime());const l=null!==(i=this._config.max_messages)&&void 0!==i?i:500;this._messages.length>l&&(this._messages=this._messages.slice(-l),this._hasOlderMessages=!0),this._error=null,this._retryCount=0}catch(e){const t=e instanceof Error?e.message:String(e);this._error=`Failed to fetch messages: ${t}`,this._retryCount++}finally{t===this._gen&&(this._loading=!1),this._notify()}}}async _fetchAroundAnchor(e,t){const i=this._gen;if(this._hass){this._loading=!0,this._notify();try{var o;const n=await async function(e,t,i,o=25,n=50){return e.callWS({type:"meshcore_bbs/get_messages_around",entity_id:t,anchor_id:i,before_limit:o,after_limit:n})}(this._hass,e,t);if(i!==this._gen)return;const s=n.messages.map(oh);this._hasOlderMessages=n.has_more_before,this._hasNewerMessages=n.has_more_after;const r=new Set(s.map(e=>e.id)),a=this._messages.filter(e=>{if(e.id.startsWith("optimistic_")){const t=s.some(t=>t.sender===e.sender&&t.text===e.text);return!t}if(e.id.startsWith("rt_")){const t=e.id.substring(3);return!r.has(t)}return!1});this._messages=[...s,...a],this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime());const l=null!==(o=this._config.max_messages)&&void 0!==o?o:500;this._messages.length>l&&(this._messages=this._messages.slice(-l),this._hasOlderMessages=!0),this._error=null,this._retryCount=0}catch(e){const t=e instanceof Error?e.message:String(e);this._error=`Failed to fetch messages: ${t}`,this._retryCount++}finally{i===this._gen&&(this._loading=!1),this._notify()}}}_startUpdates(e){this._startPolling(e),this._subscribeRealtime(e).catch(()=>{})}_isLive(e,t){return e===t||"string"==typeof e&&this._liveIds.has(e)}async _subscribeRealtime(e){const t=this._gen;if(!this._hass)return;const i=[];try{const o=await this._hass.connection.subscribeEvents(t=>{this._isLive(t.data.entity_id,e)&&this._handleRealtimeMessage(t.data)},"meshcore_message");i.push(o);const n=await this._hass.connection.subscribeEvents(t=>{this._isLive(t.data.entity_id,e)&&this._handleDeliveryUpdate(t.data)},"meshcore_delivery_update");if(i.push(n),t!==this._gen)return void i.forEach(e=>e());this._realtimeSubscriptions=i}catch(e){throw i.forEach(e=>e()),e}}_handleRealtimeMessage(e){var t,i;const o=null!==(t=e.sender_name)&&void 0!==t?t:e.sender,n=null!==(i=e.message)&&void 0!==i?i:e.text;if(o===this._config.node_name){if(o&&n){const t=e.ack_received,i=e.repeater_count,r=e.rx_log_data,a=e.message_type;let l;var s;if("dm"===a||"direct"===a)l={status:!0===t?"delivered":"sent",ackReceived:null!=t?t:void 0,direct:!0};else l={status:"sent",repeaterCount:null!=i?i:null!==(s=null==r?void 0:r.length)&&void 0!==s?s:0};for(let e=this._messages.length-1;e>=0;e--){const t=this._messages[e];if(t.id.startsWith("optimistic_")&&t.sender===o&&t.text===n){t.deliveryStatus=l,r&&(t.rxLogData=r),this._notify();break}}}!this._entityId||this._hasNewerMessages||this._hasOlderMessages||this._debouncedFetch(this._entityId)}else{if(o&&n){var r,a;let t=n.replace(Rc,"");const i=o+": ";t.startsWith(i)&&(t=t.substring(i.length));const s=e.timestamp||(new Date).toISOString(),l=new Date(s),d=null!==(r=null!==(a=e.id)&&void 0!==a?a:e.message_id)&&void 0!==r?r:e.send_id,c=d?String(d):function(e,t,i){return eh(`${e}|${t}|${i}`).substring(0,12)}(s,o,t),h=`rt_${c}`,p=this._messages.some(e=>e.id===h||e.id===c||!e.isOutgoing&&e.sender===o&&e.text===t&&Math.abs(e.timestamp.getTime()-l.getTime())<6e4);if(!p){const i=th(t),s=e.rx_log_data,r={id:h,sender:o,text:t,timestamp:l,isOutgoing:!1,isSystem:!1,raw:n,mentions:i,rxLogData:s&&s.length>0?s:void 0,...ih(s)};this._messages.push(r),this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime()),this._userAtBottom&&!this._hasNewerMessages||this._newMessagesWhileAway++,this._notify()}}!this._entityId||this._hasNewerMessages||this._hasOlderMessages||this._debouncedFetch(this._entityId)}}_debouncedFetch(e){this._fetchDebounce&&clearTimeout(this._fetchDebounce),this._fetchDebounce=setTimeout(async()=>{if(this._fetchDebounce=null,this._active)try{await this._fetchMessages(e)}catch(e){}},500)}_handleDeliveryUpdate(e){const t=e.rx_log_data;if(e.progressive&&t&&t.length>0){const i=e.sender_name,o=e.message,n=e.timestamp;if(i&&o){const e=n?new Date(n).getTime():0;for(let n=this._messages.length-1;n>=0;n--){const s=this._messages[n];if(!s.isOutgoing&&s.sender===i&&s.text===o&&(!e||Math.abs(s.timestamp.getTime()-e)<1e4))return s.rxLogData=t,s.repeaterCount=t.length,void this._notify()}}}const i=e.send_id,o=e.status,n=e.repeater_count,s=e.ack_received,r=e.round_trip_ms,a=e.progressive;if(!i)return;let l;l=o||(!0===s?"delivered":!a||void 0!==n&&0!==n?"sent":"waiting");let d=this._messages.find(e=>e.isOutgoing&&e.id===i);if(!d&&!e.late_echo)for(let e=this._messages.length-1;e>=0;e--)if(this._messages[e].isOutgoing){d=this._messages[e];break}d&&(d.deliveryStatus={status:l,repeaterCount:n,ackReceived:s,roundTripMs:r},void 0!==n&&(d.repeaterCount=n),t&&t.length>0&&(d.rxLogData=t),this._notify())}async _pollFetch(e){const t=this._gen;if(this._hass&&!this._hasNewerMessages)try{let o;for(let e=this._messages.length-1;e>=0;e--){const t=this._messages[e].id;if(!t.startsWith("rt_")&&!t.startsWith("optimistic_")){o=t;break}}const n={type:"meshcore_bbs/get_stored_messages",entity_id:e,limit:50};o&&(n.after=o);const s=await this._hass.callWS(n);if(t!==this._gen)return;if(0===s.messages.length)return this._error=null,void(this._retryCount=0);const r=s.messages.map(oh),a=new Set(this._messages.map(e=>e.id)),l=r.filter(e=>!a.has(e.id));if(l.length>0){var i;const e=new Set(l.map(e=>e.id));this._messages=this._messages.filter(t=>!t.id.startsWith("rt_")||!e.has(t.id.substring(3))),this._messages=this._messages.filter(e=>!e.id.startsWith("optimistic_")||!l.some(t=>t.sender===e.sender&&t.text===e.text)),this._messages=[...this._messages,...l],this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime());const t=null!==(i=this._config.max_messages)&&void 0!==i?i:500;this._messages.length>t&&(this._messages=this._messages.slice(-t),this._hasOlderMessages=!0),this._notify()}this._error=null,this._retryCount=0}catch(e){this._retryCount++}}_startPolling(e){const t=()=>{if(!this._active)return;const i=this._retryCount>=5?6e4:3e4;this._pollTimer=setTimeout(async()=>{if(this._active){try{await this._pollFetch(e)}catch(e){}t()}},i)};t()}_stopUpdates(){this._pollTimer&&(clearTimeout(this._pollTimer),this._pollTimer=null);for(const e of this._realtimeSubscriptions)e();this._realtimeSubscriptions=[]}_notify(){this._onChange&&this._onChange()}}const ah={access:"none",admin:!1,user:null,request:null};function lh(e,t){if(!e||!t)return!1;const i=e.toLowerCase(),o=t.toLowerCase();return i.startsWith(o)||o.startsWith(i)}const dh=new class{constructor(){this.snapshot=null,this.error=null,this._listeners=new Set,this._unsub=null,this._connection=null,this._loading=null,this.activeEntryId=null}attach(e){var t;this._hass=e,e.connection!==this._connection&&(this._connection=e.connection,this.detach(!1),this.refresh(),null===(t=e.connection)||void 0===t||t.subscribeEvents(()=>this.refresh(),"meshcore_bbs_updated").then(e=>{this._unsub=e}).catch(()=>{}))}detach(e=!0){if(this._unsub){try{this._unsub()}catch(e){}this._unsub=null}e&&(this._connection=null)}refresh(){return this._hass?(this._loading||(this._loading=(e=this._hass,e.callWS({type:"meshcore_bbs/bbs_get"})).then(e=>{if(null==e||!e.settings)throw new Error("Unexpected BBS response");this.snapshot=e,this.error=null}).catch(e=>{var t;this.error=null!==(t=null==e?void 0:e.message)&&void 0!==t?t:String(e)}).finally(()=>{this._loading=null,this._notify()})),this._loading):Promise.resolve();var e}setSnapshot(e){this.snapshot=e,this._notify()}subscribe(e){return this._listeners.add(e),()=>this._listeners.delete(e)}setActiveEntry(e){e!==this.activeEntryId&&(this.activeEntryId=e,this._notify())}get active(){const e=this.bbsRadio;return!e||!this.activeEntryId||this.activeEntryId===e}get bbsRadio(){var e,t;return(null===(e=this.snapshot)||void 0===e||null===(e=e.settings)||void 0===e?void 0:e.radio_entry_id)||(null===(t=this.snapshot)||void 0===t?void 0:t.radio_entry_id)||null}get radioName(){var e,t;const i=this.bbsRadio;return null!==(e=null===(t=this.snapshot)||void 0===t||null===(t=t.radios)||void 0===t||null===(t=t.find(e=>e.entry_id===i))||void 0===t?void 0:t.name)&&void 0!==e?e:""}get enabled(){var e;return!(null===(e=this.snapshot)||void 0===e||!e.settings.enabled)}statusFor(e){var t,i;const o=this.snapshot;if(!o||!e)return ah;const n=null!==(t=o.users.find(t=>lh(t.pubkey,e)))&&void 0!==t?t:null,s=n?null:null!==(i=o.requests.find(t=>lh(t.pubkey,e)))&&void 0!==i?i:null;return n?{access:n.active?"active":"suspended",admin:n.is_admin,user:n,request:null}:{...ah,request:s}}_notify(){this._listeners.forEach(e=>{try{e()}catch(e){console.error("BBS listener failed",e)}})}};class ch{constructor(e,t=dh){this.host=e,this.state=t,this._unsub=null,e.addController(this)}hostConnected(){this._unsub=this.state.subscribe(()=>this.host.requestUpdate())}hostDisconnected(){var e;null===(e=this._unsub)||void 0===e||e.call(this),this._unsub=null}}function hh(e){return"active"===e.access?e.admin?"BBS admin":"BBS access":"suspended"===e.access?e.admin?"BBS suspended (admin)":"BBS suspended":e.request?"BBS access request":""}let ph=class extends Mc{constructor(){super(...arguments),this.pubkey="",this.bbsController=new ch(this)}render(){if(!dh.active)return hc;const e=dh.statusFor(this.pubkey),t=hh(e);if(!t)return hc;const i=[];return"active"===e.access&&i.push("✅"),"suspended"===e.access&&i.push("⏸️"),e.admin&&i.push("👑"),e.request&&i.push("📨"),lc(a||(a=vd`<span title=${0} role="img" aria-label=${0}>${0}</span>`),t,t,i.join(""))}};ph.styles=$d(l||(l=vd`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 2px;
      margin-left: 4px;
      font-size: 0.85em;
      line-height: 1;
      vertical-align: middle;
      white-space: nowrap;
    }
    :host([hidden]) {
      display: none;
    }
  `)),fd([Lc({type:String})],ph.prototype,"pubkey",void 0),ph=fd([Tc("meshcore-bbs-badge")],ph);let uh=class extends Mc{constructor(){super(...arguments),this.conversations=[],this.activeId=null,this.unreadCounts={},this.nodePrefix=null,this._activeFilter="all",this._filteredConversations=[]}updated(e){(e.has("conversations")||e.has("_activeFilter"))&&this._updateFiltered()}render(){return lc(d||(d=vd`
      <div class="sidebar-header">
        <span class="sidebar-title">Chats</span>
        <button
          class="compose-btn"
          title="Manage contacts & channels"
          aria-label="Manage contacts and channels"
          @click=${0}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 00-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
          </svg>
        </button>
      </div>
      <div class="filter-bar" role="tablist" aria-label="Conversation filter">
        ${0}
        ${0}
        ${0}
        ${0}
      </div>
      <div
        class="conversation-list"
        role="listbox"
        aria-label="Conversations"
        @keydown=${0}>
        ${0}
      </div>
    `),()=>this.dispatchEvent(new CustomEvent("manage-requested",{bubbles:!0,composed:!0})),this._renderFilterBtn("all","All"),this._renderFilterBtn("unread","Unread"),this._renderFilterBtn("dms","DMs"),this._renderFilterBtn("channels","Channels"),this._onListKeyDown,this._filteredConversations.length>0?this._filteredConversations.map((e,t)=>this._renderConversation(e,t)):lc(c||(c=vd`
              <div class="empty-state">
                <div class="empty-text">
                  ${0}
                </div>
              </div>
            `),this._emptyMessage()))}_onListKeyDown(e){var t;const i=e.key;if("ArrowDown"!==i&&"ArrowUp"!==i&&"Home"!==i&&"End"!==i&&"Enter"!==i&&" "!==i)return;const o=this.shadowRoot;if(!o)return;const n=Array.from(o.querySelectorAll(".conversation-item"));if(0===n.length)return;const s=o.activeElement;let r=s?n.indexOf(s):-1;"Enter"!==i&&" "!==i?(e.preventDefault(),"Home"===i?r=0:"End"===i?r=n.length-1:"ArrowDown"===i?r=r<0?0:Math.min(r+1,n.length-1):"ArrowUp"===i&&(r=r<0?n.length-1:Math.max(r-1,0)),null===(t=n[r])||void 0===t||t.focus()):s&&r>=0&&(e.preventDefault(),s.click())}_renderFilterBtn(e,t){const i=this._activeFilter===e;return lc(h||(h=vd`
      <button
        class="filter-btn ${0}"
        role="tab"
        aria-selected=${0}
        @click=${0}>
        ${0}
      </button>
    `),i?"active":"",i?"true":"false",()=>{this._activeFilter=e},t)}_emptyMessage(){switch(this._activeFilter){case"unread":return"No unread conversations";case"dms":return"No direct messages";case"channels":return"No channels";default:return"No conversations yet"}}_renderConversation(e,t){const i="pubkey_prefix"in e,o=i?e.pubkey_prefix:String(e.channel_idx),n=i?e.adv_name:e.name,s=i?e.pubkey_prefix:`Channel ${e.channel_idx}`,r=i?e.pubkey_prefix.substring(0,2).toUpperCase():`#${e.channel_idx}`,a=this.activeId===o,l=this._getUnreadCount(o,i?null:e.conversation_id),d=l>0?`${n}, ${s}, ${l} unread`:`${n}, ${s}`,c=this._filteredConversations.some(e=>("pubkey_prefix"in e?e.pubkey_prefix:String(e.channel_idx))===this.activeId);return lc(p||(p=vd`
      <div
        class=${0}
        role="option"
        tabindex=${0}
        aria-selected=${0}
        aria-label=${0}
        @click=${0}>
        ${0}
        <div class="conversation-info">
          <div class="conversation-name">${0}${0}</div>
          <div class="conversation-detail">${0}</div>
        </div>
        ${0}
      </div>
    `),a?"conversation-item active":"conversation-item",a||!c&&0===t?"0":"-1",a?"true":"false",d,()=>this.dispatchEvent(new CustomEvent("conversation-selected",{detail:{id:o,isContact:i}})),i?lc(u||(u=vd`<div class="conversation-avatar contact" role="button" tabindex="-1"
              title="Contact details" aria-label="Contact details for ${0}"
              @click=${0}
              @keydown=${0}>${0}</div>`),n,e=>this._onAvatarClick(e,o),e=>{"Enter"!==e.key&&" "!==e.key||this._onAvatarClick(e,o)},r):lc(m||(m=vd`<div class="conversation-avatar channel">${0}</div>`),r),n,i?lc(g||(g=vd`<meshcore-bbs-badge .pubkey=${0}></meshcore-bbs-badge>`),o):"",s,l>0?lc(v||(v=vd`<div class="unread-badge" aria-hidden="true">${0}</div>`),l):lc(f||(f=vd`<span class="chevron" aria-hidden="true">›</span>`)))}_onAvatarClick(e,t){e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent("contact-details-requested",{detail:{pubkeyPrefix:t},bubbles:!0,composed:!0}))}_getUnreadCount(e,t){return this.unread?this.unread.badgeCount(e,this.nodePrefix,t):0}_updateFiltered(){switch(this._activeFilter){case"all":this._filteredConversations=[...this.conversations];break;case"unread":this._filteredConversations=this.conversations.filter(e=>{const t="pubkey_prefix"in e,i=t?e.pubkey_prefix:String(e.channel_idx);return this._getUnreadCount(i,t?null:e.conversation_id)>0});break;case"dms":this._filteredConversations=this.conversations.filter(e=>"pubkey_prefix"in e);break;case"channels":this._filteredConversations=this.conversations.filter(e=>!("pubkey_prefix"in e))}}};uh.styles=$d(_||(_=vd`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 280px;
      border-right: 1px solid var(--divider-color, #e0e0e0);
      background: var(--card-background-color, #fff);
      flex-shrink: 0;
    }

    .sidebar-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 12px 0;
      gap: 8px;
    }

    .sidebar-title {
      font-size: 16px;
      font-weight: 600;
      color: var(--primary-text-color);
      flex: 1;
    }

    .compose-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border: none;
      border-radius: 50%;
      background: transparent;
      color: var(--secondary-text-color);
      cursor: pointer;
      transition: all 0.15s;
      flex-shrink: 0;
    }

    .compose-btn:hover {
      background: rgba(0, 0, 0, 0.05);
      color: var(--primary-text-color);
    }

    .filter-bar {
      display: flex;
      padding: 12px 12px 8px;
      gap: 4px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
    }

    .filter-btn {
      flex: 1;
      padding: 6px 4px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 16px;
      background: transparent;
      color: var(--secondary-text-color, #727272);
      font-size: 11px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s;
      white-space: nowrap;
    }

    .filter-btn:hover {
      background: rgba(0, 0, 0, 0.03);
      color: var(--primary-text-color);
    }

    .filter-btn.active {
      background: var(--primary-color, #03a9f4);
      border-color: var(--primary-color, #03a9f4);
      color: #fff;
    }

    .conversation-list {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .conversation-list::-webkit-scrollbar {
      width: 6px;
    }

    .conversation-list::-webkit-scrollbar-track {
      background: transparent;
    }

    .conversation-list::-webkit-scrollbar-thumb {
      background: var(--scrollbar-thumb, var(--scrollbar-thumb-color, #c1c1c1));
      border-radius: 3px;
    }

    .conversation-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      cursor: pointer;
      transition: background 0.15s;
      outline: none;
    }

    .conversation-item:hover,
    .conversation-item:focus-visible {
      background: rgba(0, 0, 0, 0.02);
    }

    .conversation-item:focus-visible {
      outline: 2px solid var(--primary-color, #03a9f4);
      outline-offset: -2px;
    }

    .conversation-item.active {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
      border-left: 3px solid var(--primary-color, #03a9f4);
    }

    .conversation-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--primary-color, #03a9f4);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 14px;
      flex-shrink: 0;
    }

    .conversation-avatar.channel {
      background: var(--accent-color, #ff9800);
    }

    /* Contact avatars open the contact details (see _onAvatarClick). */
    .conversation-avatar.contact {
      cursor: pointer;
      transition: box-shadow 0.15s;
    }

    .conversation-avatar.contact:hover,
    .conversation-avatar.contact:focus-visible {
      box-shadow: 0 0 0 3px rgba(var(--rgb-primary-color, 3, 169, 244), 0.35);
      outline: none;
    }

    .conversation-info {
      flex: 1;
      overflow: hidden;
    }

    .conversation-name {
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .conversation-detail {
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .chevron {
      flex-shrink: 0;
      color: var(--secondary-text-color, #727272);
      font-size: 18px;
      line-height: 1;
      opacity: 0.5;
    }

    .unread-badge {
      background: var(--primary-color, #03a9f4);
      color: #fff;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      font-weight: 600;
      flex-shrink: 0;
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--secondary-text-color, #727272);
      text-align: center;
      padding: 24px;
    }

    .empty-icon {
      font-size: 32px;
      margin-bottom: 8px;
      opacity: 0.5;
    }

    .empty-text {
      font-size: 13px;
    }
  `)),fd([Lc({type:Array})],uh.prototype,"conversations",void 0),fd([Lc({type:String})],uh.prototype,"activeId",void 0),fd([Lc({attribute:!1})],uh.prototype,"unread",void 0),fd([Lc({type:Object})],uh.prototype,"unreadCounts",void 0),fd([Lc({type:String})],uh.prototype,"nodePrefix",void 0),fd([Ec()],uh.prototype,"_activeFilter",void 0),fd([Ec()],uh.prototype,"_filteredConversations",void 0),uh=fd([Tc("meshcore-conversation-list")],uh);const mh=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(","),gh=[];let vh=!1;function fh(){vh||(vh=!0,document.addEventListener("keydown",_h,!0))}function _h(e){0!==gh.length&&gh[gh.length-1]._handleKeyDown(e)}class yh{constructor(e,t){this.host=e,this.opts=t,this._wasOpen=!1,this._previousActive=null,this._inStack=!1,this.host.addController(this),fh()}hostConnected(){fh()}hostDisconnected(){this._inStack&&this._popStack(),this._previousActive=null,this._wasOpen=!1}hostUpdated(){const e=this.opts.isOpen();if(e&&!this._wasOpen)this._previousActive=this._currentDocumentActive(),this._pushStack(),this._focusFirstSoon();else if(!e&&this._wasOpen){this._popStack();const e=this._previousActive;if(this._previousActive=null,e&&e.isConnected&&"function"==typeof e.focus)try{e.focus()}catch(e){}}this._wasOpen=e}_pushStack(){this._inStack||(gh.push(this),this._inStack=!0)}_popStack(){const e=gh.indexOf(this);e>=0&&gh.splice(e,1),this._inStack=!1}_getFocusables(){var e,t,i;const o=null!==(e=null===(t=(i=this.opts).getScope)||void 0===t?void 0:t.call(i))&&void 0!==e?e:this.host.shadowRoot;return o?Array.from(o.querySelectorAll(mh)).filter(e=>!(e.hasAttribute("aria-hidden")||e.hidden||null===e.offsetParent&&0===e.getClientRects().length)):[]}_focusFirstSoon(){queueMicrotask(()=>{var e,t,i;if(!this.opts.isOpen())return;const o=null!==(e=null===(t=(i=this.opts).getScope)||void 0===t?void 0:t.call(i))&&void 0!==e?e:this.host.shadowRoot;if(o&&this._scopeContainsFocus(o))return;const n=this._getFocusables();if(0!==n.length)try{n[0].focus()}catch(e){}})}_scopeContainsFocus(e){let t=document.activeElement;for(;t;){if(t===e)return!0;if(e.host===t)return!0;if("contains"in e&&e.contains(t))return!0;const i=t.shadowRoot;if(!i||!i.activeElement)break;t=i.activeElement}return!1}_currentDocumentActive(){let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}_handleKeyDown(e){var t,i,o;if(!this.opts.isOpen())return;if("Escape"===e.key)return e.preventDefault(),e.stopPropagation(),void this.opts.onEscape();if("Tab"!==e.key)return;const n=this._getFocusables();if(0===n.length)return;const s=null!==(t=null===(i=(o=this.opts).getScope)||void 0===i?void 0:i.call(o))&&void 0!==t?t:this.host.shadowRoot,r=s?this._findFocusedInScope(s):null,a=r?n.indexOf(r):-1;let l;l=e.shiftKey?a<=0?n.length-1:a-1:-1===a||a>=n.length-1?0:a+1,e.preventDefault(),e.stopPropagation();try{n[l].focus()}catch(e){}}_findFocusedInScope(e){let t=document.activeElement;for(;t;){if(e===t||"contains"in e&&e.contains(t)){if(t.shadowRoot&&t.shadowRoot.activeElement){t=t.shadowRoot.activeElement;continue}return t}if(e.host===t){t=e.activeElement;continue}const i=t.shadowRoot;if(!i||!i.activeElement)break;t=i.activeElement}return null}}function bh(e,t){new yh(e,t)}let xh=class extends Mc{constructor(){super(),this.open=!1,this.narrow=!1,this.editMode=!1,this.initialChannelIdx=0,this.initialChannelName="",this.initialScope="",this.initialKey="",this.availableIndices=[],this._channelIdx=0,this._channelName="",this._customKey="",this._autoKey=!0,this._scope="",this._availableScopes=null,this._globalAllowed=!1,this._saving=!1,this._error=null,this._initialized=!1,bh(this,{isOpen:()=>this.open,onEscape:()=>this._onCancel()})}willUpdate(e){if(e.has("open")&&this.open&&!this._initialized){if(this.editMode){this._channelIdx=this.initialChannelIdx,this._channelName=this.initialChannelName,this._scope=this.initialScope;const e=eh(this.initialChannelName).slice(0,32);this.initialKey&&this.initialKey.toLowerCase()!==e?(this._autoKey=!1,this._customKey=this.initialKey.toLowerCase()):(this._autoKey=!0,this._customKey="")}else this._channelIdx=this.availableIndices.length>0?this.availableIndices[0]:0;this._initialized=!0,this._loadScopes()}e.has("open")&&!this.open&&(this._initialized=!1)}async _loadScopes(){if(this._availableScopes=null,!this.hass)return this._availableScopes=[],void(this._globalAllowed=!1);const e=await async function(e,t){try{const i={type:"meshcore_bbs/get_flood_scopes"};t&&(i.entry_id=t);const o=await e.callWS(i);return{scopes:o.scopes||[],global:!!o.global}}catch(e){return{scopes:[],global:!1}}}(this.hass,this.entryId);this._availableScopes=e.scopes,this._globalAllowed=e.global}render(){if(!this.open)return;const e=this._customKey.length,t=32===e||0===e||this._autoKey;return lc(y||(y=vd`
      <div
        class="dialog-overlay"
        @click=${0}>
        <div
          class="dialog"
          role="dialog"
          aria-modal="true"
          aria-label=${0}>
          <div class="dialog-header">
            <div class="dialog-header-title">${0}</div>
          </div>
          <div class="dialog-body">
            ${0}

            <!-- Channel Index -->
            <div class="form-group">
              <label class="form-label required">Channel Index</label>
              ${0}
              <div class="form-description">${0}</div>
            </div>

            <!-- Channel Name -->
            <div class="form-group">
              <label class="form-label required">Channel Name</label>
              <input
                type="text"
                class="form-input"
                placeholder="e.g., general, alerts"
                .value=${0}
                @input=${0}
              />
              <div class="form-description">Friendly name for the channel</div>
            </div>

            <!-- Region Scope -->
            <div class="form-group">
              <label class="form-label">Region scope</label>
              ${0}
            </div>

            <!-- Auto Key Toggle -->
            <div class="form-group">
              <label class="form-toggle">
                <input
                  type="checkbox"
                  ?checked=${0}
                  @change=${0}
                />
                <span class="form-toggle-label">Auto-generate key from name</span>
              </label>
              <div class="form-description">
                Auto-key generates SHA256 hash of the channel name
              </div>
            </div>

            <!-- Custom Key (if not auto) -->
            ${0}
          </div>
          <div class="dialog-footer">
            <button
              class="dialog-button"
              ?disabled=${0}
              @click=${0}>
              Cancel
            </button>
            <button
              class="dialog-button primary"
              ?disabled=${0}
              @click=${0}>
              ${0}
            </button>
          </div>
        </div>
      </div>
    `),this._onOverlayClick,this.editMode?"Edit channel":"Add channel",this.editMode?"Edit Channel":"Add Channel",this._error?lc(b||(b=vd`<div style="padding: 12px; background: rgba(219, 68, 55, 0.1); border-radius: 6px; color: var(--error-color, #db4437); font-size: 13px; margin-bottom: 16px;">
                  ${0}
                </div>`),this._error):"",this.editMode?lc(x||(x=vd`
                    <select class="form-select" disabled>
                      <option value=${0} selected>${0}</option>
                    </select>`),this._channelIdx,this._channelIdx):lc(w||(w=vd`
                    <select
                      class="form-select"
                      @change=${0}>
                      ${0}
                    </select>`),e=>{this._channelIdx=parseInt(e.target.value,10)},this.availableIndices.map(e=>lc(k||(k=vd`
                        <option value=${0} ?selected=${0}>${0}</option>
                      `),e,e===this._channelIdx,e))),this.editMode?"Channel index cannot be changed":"Select an available channel slot",this._channelName,e=>{this._channelName=e.target.value},this._renderScopeField(),this._autoKey,e=>{this._autoKey=e.target.checked},this._autoKey?"":lc($||($=vd`
                  <div class="form-group">
                    <label class="form-label required">Custom Key</label>
                    <input
                      type="text"
                      class="form-input hex-input"
                      placeholder="32 hex characters (a-f, 0-9)"
                      .value=${0}
                      @input=${0}
                    />
                    <div class="hex-counter">${0} / 32 hex characters</div>
                    <div class="form-description">
                      ${0}
                    </div>
                  </div>
                `),this._customKey,e=>{const t=e.target.value.toLowerCase().replace(/[^a-f0-9]/g,"");this._customKey=t.slice(0,32)},this._customKey.length,t?"Valid hex key (16 bytes / 128-bit AES)":`Invalid: expected 32 characters, got ${e}`),this._saving,this._onCancel,!this._channelName||this._saving||!this._autoKey&&!t||!this.editMode&&0===this.availableIndices.length,this._onSave,this._saving?"Saving...":"Save")}_renderScopeField(){const e=this._availableScopes;if(null===e)return lc(S||(S=vd`
        <select class="form-select scope-select" disabled>
          <option selected>Loading…</option>
        </select>
      `));const t=this._globalAllowed?"*":"",i=!this._scope||"*"===this._scope,o=!!this._scope&&"*"!==this._scope&&!e.includes(this._scope);return 0!==e.length||o||this._globalAllowed?lc(M||(M=vd`
      <select
        class="form-select scope-select"
        @change=${0}>
        <option value=${0} ?selected=${0}>All regions (global flood)</option>
        ${0}
        ${0}
      </select>
      <div class="form-description">
        Send this channel's messages only through repeaters configured
        for the selected region. "All regions" floods the whole mesh.
      </div>
    `),e=>{this._scope=e.target.value},t,i,o?lc(z||(z=vd`<option value=${0} selected>${0} (not in allowlist)</option>`),this._scope,this._scope):"",e.map(e=>lc(T||(T=vd`
            <option value=${0} ?selected=${0}>${0}</option>
          `),e,e===this._scope,e))):lc(C||(C=vd`
        <select class="form-select scope-select" disabled>
          <option selected>All regions (global flood)</option>
        </select>
        <div class="form-description scope-empty-hint">
          No region scopes are configured yet. Add scope names in the
          <a
            href="/config/integrations/integration/meshcore"
            target="_blank"
            rel="noopener">MeshCore integration</a>
          first (Configure → Global Settings → Flood Scope Allowlist),
          then reopen this dialog. Region names are agreed within your
          local mesh community — check your community's reference, or
          scan for nearby regions from the MeshCore mobile app.
        </div>
      `))}async _onSave(){if(this.hass&&this._channelName){this._saving=!0,this._error=null;try{(await async function(e,t,i,o,n,s){try{const r={type:"meshcore_bbs/set_channel",channel_idx:t,name:i};return o&&(r.key=o),n&&(r.entry_id=n),void 0!==s&&(r.scope=s),await e.callWS(r)}catch(e){return{success:!1}}}(this.hass,this._channelIdx,this._channelName,this._autoKey?void 0:this._customKey,this.entryId,this._scope)).success?(this.dispatchEvent(new CustomEvent("channel-saved",{detail:{channelIdx:this._channelIdx,name:this._channelName,scope:this._scope},bubbles:!0})),this._reset()):this._error="Failed to save channel"}catch(e){this._error=`Error: ${String(e)}`}finally{this._saving=!1}}}_onCancel(){this._reset(),this.dispatchEvent(new CustomEvent("close",{bubbles:!0}))}_onOverlayClick(e){e.target===e.currentTarget&&this._onCancel()}_reset(){this._channelIdx=0,this._channelName="",this._customKey="",this._autoKey=!0,this._scope="",this._availableScopes=null,this._globalAllowed=!1,this._error=null}};xh.styles=[Ic,$d(P||(P=vd`
      :host {
        display: block;
      }

      :host([narrow]) .dialog {
        max-width: 100%;
      }

      .dialog {
        max-width: 500px;
      }

      .hex-input {
        font-family: monospace;
        letter-spacing: 1px;
      }

      .hex-counter {
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }
    `))],fd([Lc({type:Boolean})],xh.prototype,"open",void 0),fd([Lc({type:Object})],xh.prototype,"hass",void 0),fd([Lc({type:String})],xh.prototype,"entryId",void 0),fd([Lc({type:Boolean})],xh.prototype,"narrow",void 0),fd([Lc({type:Boolean})],xh.prototype,"editMode",void 0),fd([Lc({type:Number})],xh.prototype,"initialChannelIdx",void 0),fd([Lc({type:String})],xh.prototype,"initialChannelName",void 0),fd([Lc({type:String})],xh.prototype,"initialScope",void 0),fd([Lc({type:String})],xh.prototype,"initialKey",void 0),fd([Lc({type:Array})],xh.prototype,"availableIndices",void 0),fd([Ec()],xh.prototype,"_channelIdx",void 0),fd([Ec()],xh.prototype,"_channelName",void 0),fd([Ec()],xh.prototype,"_customKey",void 0),fd([Ec()],xh.prototype,"_autoKey",void 0),fd([Ec()],xh.prototype,"_scope",void 0),fd([Ec()],xh.prototype,"_availableScopes",void 0),fd([Ec()],xh.prototype,"_globalAllowed",void 0),fd([Ec()],xh.prototype,"_saving",void 0),fd([Ec()],xh.prototype,"_error",void 0),xh=fd([Tc("meshcore-channel-dialog")],xh);let wh=class extends Mc{willUpdate(){this._tabInitialized||(this._tabInitialized=!0,this.initialTab&&(this._activeTab=this.initialTab))}constructor(){super(),this.narrow=!1,this._tabInitialized=!1,this._activeTab="contacts",this._contacts=[],this._channels=[],this._searchQuery="",this._categoryFilter="all",this._typeFilter="all",this._loading=!1,this._actionInProgress=null,this._confirmingRemoveContact=null,this._confirmingRemoveChannel=null,this._channelDialogOpen=!1,this._editingChannel=null,this._maxChannels=4,bh(this,{isOpen:()=>!0,onEscape:()=>this._close()})}connectedCallback(){super.connectedCallback(),this._loadData()}render(){var e,t,i,o,n,s,r,a;return lc(A||(A=vd`
      <div
        class="dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Manage contacts and channels"
        @click=${0}>
        <div class="dialog-header">
          <span class="dialog-title">Manage</span>
          <button class="close-btn" aria-label="Close" @click=${0}>✕</button>
        </div>

        <div class="tab-bar">
          <button
            class=${0}
            @click=${0}>
            Contacts
          </button>
          <button
            class=${0}
            @click=${0}>
            Channels
          </button>
        </div>

        ${0}

        <div class="list-area">
          ${0}
        </div>
      </div>

      ${0}
    `),e=>e.stopPropagation(),this._close,"contacts"===this._activeTab?"active":"",()=>this._switchTab("contacts"),"channels"===this._activeTab?"active":"",()=>this._switchTab("channels"),"contacts"===this._activeTab?lc(E||(E=vd`
              <div class="filter-bar">
                <span class="filter-bar-label">Show</span>
                <div class="filter-bar-group">
                  ${0}
                </div>
                <span class="filter-bar-label">Type</span>
                <div class="filter-bar-group">
                  ${0}
                </div>
              </div>
              <div class="search-bar">
                <input
                  type="text"
                  aria-label="Search contacts"
                  placeholder="Search contacts..."
                  .value=${0}
                  @input=${0}
                />
              </div>
            `),["all","added","discovered"].map(e=>lc(I||(I=vd`
                      <button
                        class="filter-chip ${0}"
                        @click=${0}
                      >
                        ${0}
                      </button>
                    `),this._categoryFilter===e?"active":"",()=>{this._categoryFilter=e},"all"===e?"All":"added"===e?"Added":"Discovered")),["all","clients","repeaters"].map(e=>lc(O||(O=vd`
                      <button
                        class="filter-chip ${0}"
                        @click=${0}
                      >
                        ${0}
                      </button>
                    `),this._typeFilter===e?"active":"",()=>{this._typeFilter=e},"all"===e?"All":"clients"===e?"Clients":"Repeaters")),this._searchQuery,e=>{this._searchQuery=e.target.value}):"",this._loading?lc(R||(R=vd`<div class="loading-state">
                <div class="loading-spinner"></div>
                Loading...
              </div>`)):"contacts"===this._activeTab?this._renderContacts():this._renderChannels(),this._channelDialogOpen?lc(D||(D=vd`
            <meshcore-channel-dialog
              .open=${0}
              .hass=${0}
              .entryId=${0}
              .narrow=${0}
              .editMode=${0}
              .initialChannelIdx=${0}
              .initialChannelName=${0}
              .initialScope=${0}
              .initialKey=${0}
              .availableIndices=${0}
              @channel-saved=${0}
              @close=${0}
            ></meshcore-channel-dialog>
          `),!0,this.hass,this.entryId,this.narrow,!!this._editingChannel,null!==(e=null===(t=this._editingChannel)||void 0===t?void 0:t.channel_idx)&&void 0!==e?e:0,null!==(i=null===(o=this._editingChannel)||void 0===o?void 0:o.name)&&void 0!==i?i:"",null!==(n=null===(s=this._editingChannel)||void 0===s?void 0:s.scope)&&void 0!==n?n:"",null!==(r=null===(a=this._editingChannel)||void 0===a||null===(a=a.settings)||void 0===a?void 0:a.channel_secret)&&void 0!==r?r:"",this._getAvailableIndices(),this._onChannelSaved,()=>{this._channelDialogOpen=!1,this._editingChannel=null}):"")}_renderContacts(){const e=this._filterContacts();if(0===e.length){const e=!!this._searchQuery||"all"!==this._categoryFilter||"all"!==this._typeFilter;return lc(B||(B=vd`
        <div class="empty-state">
          <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg></div>
          <div class="empty-text">
            ${0}
          </div>
        </div>
      `),e?"No contacts match":"No contacts discovered")}const t=[...e].sort((e,t)=>e.added_to_node!==t.added_to_node?e.added_to_node?-1:1:e.adv_name.localeCompare(t.adv_name));return t.map(e=>this._renderContactItem(e))}_renderContactItem(e){const t=e.pubkey_prefix.substring(0,2).toUpperCase(),i=e.added_to_node,o=this._confirmingRemoveContact===e.public_key,n=this._actionInProgress===e.public_key;return lc(N||(N=vd`
      <div class="contact-item">
        <div class="contact-avatar">${0}</div>
        <div class="contact-info">
          <div class="contact-name">${0}</div>
          <div class="contact-meta">
            <span class="contact-prefix">${0}</span>
            <span class="badge ${0}">
              ${0}
            </span>
          </div>
        </div>
        ${0}
      </div>
    `),t,e.adv_name||"Unknown",e.pubkey_prefix,i?"added":"discovered",i?lc(F||(F=vd`<svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor" style="vertical-align: -1px; margin-right: 2px;"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>Added`)):"Discovered",o?lc(q||(q=vd`
              <div class="confirm-inline">
                <span class="confirm-text">Remove?</span>
                <button class="confirm-btn yes" @click=${0}>Yes</button>
                <button class="confirm-btn no" @click=${0}>No</button>
              </div>
            `),()=>this._doRemoveContact(e),()=>{this._confirmingRemoveContact=null}):i?lc(H||(H=vd`
                <button
                  class="action-btn remove"
                  ?disabled=${0}
                  @click=${0}>
                  ${0}
                </button>
              `),n,()=>{this._confirmingRemoveContact=e.public_key},n?"...":"Remove"):lc(j||(j=vd`
                <button
                  class="action-btn add"
                  ?disabled=${0}
                  @click=${0}>
                  ${0}
                </button>
              `),n,()=>this._doAddContact(e),n?"...":lc(Z||(Z=vd`<svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" style="vertical-align: -1px; margin-right: 4px;"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>Add`))))}_renderChannels(){if(0===this._channels.length)return lc(V||(V=vd`
        <div class="empty-state">
          <div class="empty-icon">#</div>
          <div class="empty-text">No channels configured</div>
        </div>
        <button class="add-channel-btn" @click=${0}>
          + Add Channel
        </button>
      `),this._openAddChannel);const e=this._confirmingRemoveChannel;return lc(K||(K=vd`
      ${0}
      <button class="add-channel-btn" @click=${0}>
        + Add Channel
      </button>
    `),this._channels.map(t=>{const i=e===t.channel_idx,o=this._actionInProgress===`ch-${t.channel_idx}`;return lc(U||(U=vd`
          <div class="channel-item">
            <div class="channel-icon">#</div>
            <div class="channel-info">
              <div class="channel-name">${0}</div>
              <div class="channel-idx">Index ${0}${0}</div>
            </div>
            ${0}
          </div>
        `),t.name,t.channel_idx,t.scope?lc(W||(W=vd` · scope: ${0}`),t.scope):"",i?lc(G||(G=vd`
                  <div class="confirm-inline">
                    <span class="confirm-text">Remove?</span>
                    <button class="confirm-btn yes" @click=${0}>Yes</button>
                    <button class="confirm-btn no" @click=${0}>No</button>
                  </div>
                `),()=>this._doRemoveChannel(t),()=>{this._confirmingRemoveChannel=null}):lc(X||(X=vd`
                  <div class="channel-actions">
                    <button
                      class="action-btn"
                      ?disabled=${0}
                      @click=${0}>
                      Edit
                    </button>
                    <button
                      class="action-btn remove"
                      ?disabled=${0}
                      @click=${0}>
                      ${0}
                    </button>
                  </div>
                `),o,()=>this._openEditChannel(t),o,()=>{this._confirmingRemoveChannel=t.channel_idx},o?"...":"Remove"))}),this._openAddChannel)}async _loadData(){if(this.hass){this._loading=!0;try{const[e,t]=await Promise.all([Hc(this.hass,this.entryId),jc(this.hass,this.entryId)]);this._contacts=e,this._channels=t;try{const e=await Zc(this.hass,this.entryId);null!=e&&e.max_channels&&(this._maxChannels=e.max_channels)}catch(e){}}finally{this._loading=!1}}}_switchTab(e){this._activeTab=e,this._searchQuery="",this._categoryFilter="all",this._typeFilter="all",this._confirmingRemoveContact=null,this._confirmingRemoveChannel=null}_filterContacts(){let e=this._contacts;if("added"===this._categoryFilter?e=e.filter(e=>e.added_to_node):"discovered"===this._categoryFilter&&(e=e.filter(e=>!e.added_to_node)),"clients"===this._typeFilter?e=e.filter(e=>{var t;const i=null!==(t=e.type)&&void 0!==t?t:0;return 0===i||1===i}):"repeaters"===this._typeFilter&&(e=e.filter(e=>2===e.type)),this._searchQuery){const t=this._searchQuery.toLowerCase();e=e.filter(e=>(e.adv_name||"").toLowerCase().includes(t)||(e.pubkey_prefix||"").toLowerCase().includes(t))}return e}async _doAddContact(e){if(this.hass){this._actionInProgress=e.public_key;try{if((await Wc(this.hass,e.public_key,e.adv_name,this.entryId)).success){const e=await Hc(this.hass,this.entryId);this._contacts=e,this.dispatchEvent(new CustomEvent("contacts-changed",{bubbles:!0,composed:!0}))}}finally{this._actionInProgress=null}}}async _doRemoveContact(e){if(this.hass){this._confirmingRemoveContact=null,this._actionInProgress=e.public_key;try{if((await Gc(this.hass,e.public_key,this.entryId)).success){const e=await Hc(this.hass,this.entryId);this._contacts=e,this.dispatchEvent(new CustomEvent("contacts-changed",{bubbles:!0,composed:!0}))}}finally{this._actionInProgress=null}}}_openAddChannel(){this._editingChannel=null,this._channelDialogOpen=!0}_openEditChannel(e){this._editingChannel=e,this._channelDialogOpen=!0}_getAvailableIndices(){const e=new Set(this._channels.map(e=>e.channel_idx)),t=[];for(let i=0;i<this._maxChannels;i++)e.has(i)||t.push(i);return t}async _doRemoveChannel(e){if(this.hass){this._confirmingRemoveChannel=null,this._actionInProgress=`ch-${e.channel_idx}`;try{if((await async function(e,t,i){try{const o={type:"meshcore_bbs/remove_channel",channel_idx:t};return i&&(o.entry_id=i),await e.callWS(o)}catch(e){return{success:!1}}}(this.hass,e.channel_idx,this.entryId)).success){const e=await jc(this.hass,this.entryId);this._channels=e,this.dispatchEvent(new CustomEvent("channels-changed",{bubbles:!0,composed:!0}))}}finally{this._actionInProgress=null}}}async _onChannelSaved(){if(this._channelDialogOpen=!1,this._editingChannel=null,this.hass){const e=await jc(this.hass,this.entryId);this._channels=e,this.dispatchEvent(new CustomEvent("channels-changed",{bubbles:!0,composed:!0}))}}_close(){this.dispatchEvent(new CustomEvent("manage-closed",{bubbles:!0,composed:!0}))}};async function kh(e){try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(e),!0}catch(e){}const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.opacity="0",document.body.appendChild(t);try{return t.select(),t.setSelectionRange(0,e.length),document.execCommand("copy")}catch(e){return!1}finally{document.body.removeChild(t)}}wh.styles=$d(Y||(Y=vd`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1000;
      padding: 16px;
    }

    .dialog {
      display: flex;
      flex-direction: column;
      max-width: 500px;
      width: 100%;
      max-height: 80vh;
      border-radius: 12px;
      background: var(--card-background-color, #fff);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
      animation: slideUp 0.2s ease-out;
    }

    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    :host([narrow]) .dialog {
      max-width: 100%;
      max-height: 100vh;
      border-radius: 0;
      height: 100%;
    }

    .dialog-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      flex-shrink: 0;
    }

    .dialog-title {
      font-size: 18px;
      font-weight: 600;
      color: var(--primary-text-color);
    }

    .close-btn {
      width: 32px;
      height: 32px;
      border: none;
      background: transparent;
      color: var(--secondary-text-color, #727272);
      font-size: 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: all 0.15s;
    }

    .close-btn:hover {
      color: var(--primary-text-color);
      background: rgba(0, 0, 0, 0.05);
    }

    /* Tab bar */
    .tab-bar {
      display: flex;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      flex-shrink: 0;
    }

    .tab-bar button {
      flex: 1;
      padding: 12px 16px;
      border: none;
      background: transparent;
      color: var(--secondary-text-color, #727272);
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      border-bottom: 3px solid transparent;
    }

    .tab-bar button:hover {
      color: var(--primary-text-color);
      background: rgba(0, 0, 0, 0.02);
    }

    .tab-bar button.active {
      color: var(--primary-color, #03a9f4);
      border-bottom-color: var(--primary-color, #03a9f4);
    }

    /* Filter chips (Contacts tab) */
    .filter-bar {
      display: flex;
      gap: 8px;
      padding: 10px 16px 6px 16px;
      flex-wrap: wrap;
      flex-shrink: 0;
      align-items: center;
    }

    .filter-bar-label {
      font-size: 11px;
      font-weight: 600;
      color: var(--secondary-text-color, #727272);
      text-transform: uppercase;
      letter-spacing: 0.04em;
      flex-shrink: 0;
    }

    .filter-bar-group {
      display: flex;
      gap: 4px;
      flex-wrap: wrap;
    }

    .filter-chip {
      padding: 4px 10px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 12px;
      background: transparent;
      color: var(--secondary-text-color, #727272);
      font-size: 11px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s;
      white-space: nowrap;
    }

    .filter-chip:hover {
      border-color: var(--primary-color, #03a9f4);
      color: var(--primary-color, #03a9f4);
    }

    .filter-chip.active {
      background: var(--primary-color, #03a9f4);
      border-color: var(--primary-color, #03a9f4);
      color: #fff;
    }

    /* Search */
    .search-bar {
      padding: 12px 16px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      flex-shrink: 0;
    }

    .search-bar input {
      width: 100%;
      box-sizing: border-box;
      padding: 8px 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 20px;
      background: var(--primary-background-color, #fafafa);
      color: var(--primary-text-color);
      font-size: 13px;
      outline: none;
      transition: border-color 0.2s;
    }

    .search-bar input:focus {
      border-color: var(--primary-color, #03a9f4);
    }

    .search-bar input::placeholder {
      color: var(--secondary-text-color, #727272);
    }

    /* List area */
    .list-area {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .list-area::-webkit-scrollbar {
      width: 6px;
    }

    .list-area::-webkit-scrollbar-track {
      background: transparent;
    }

    .list-area::-webkit-scrollbar-thumb {
      background: var(--scrollbar-thumb-color, #c1c1c1);
      border-radius: 3px;
    }

    /* Contact items */
    .contact-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      transition: background 0.15s;
    }

    .contact-item:hover {
      background: rgba(0, 0, 0, 0.02);
    }

    .contact-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--primary-color, #03a9f4);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 14px;
      flex-shrink: 0;
    }

    .contact-info {
      flex: 1;
      overflow: hidden;
    }

    .contact-name {
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .contact-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 2px;
    }

    .contact-prefix {
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      font-family: monospace;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .badge {
      font-size: 10px;
      font-weight: 600;
      padding: 2px 6px;
      border-radius: 4px;
      white-space: nowrap;
    }

    .badge.added {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
      color: var(--primary-color, #03a9f4);
    }

    .badge.discovered {
      background: rgba(0, 0, 0, 0.06);
      color: var(--secondary-text-color, #727272);
    }

    /* Action buttons */
    .action-btn {
      padding: 6px 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .action-btn:hover {
      border-color: var(--primary-color, #03a9f4);
      color: var(--primary-color, #03a9f4);
    }

    .action-btn.add {
      border-color: var(--primary-color, #03a9f4);
      color: var(--primary-color, #03a9f4);
    }

    .action-btn.add:hover {
      background: var(--primary-color, #03a9f4);
      color: #fff;
    }

    .action-btn.remove {
      border-color: var(--error-color, #db4437);
      color: var(--error-color, #db4437);
    }

    .action-btn.remove:hover {
      background: var(--error-color, #db4437);
      color: #fff;
    }

    .action-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Confirm inline */
    .confirm-inline {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-shrink: 0;
    }

    .confirm-inline .confirm-text {
      font-size: 12px;
      color: var(--error-color, #db4437);
      font-weight: 500;
    }

    .confirm-inline .confirm-btn {
      padding: 4px 10px;
      border: none;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 600;
      cursor: pointer;
    }

    .confirm-inline .confirm-btn.yes {
      background: var(--error-color, #db4437);
      color: #fff;
    }

    .confirm-inline .confirm-btn.no {
      background: var(--divider-color, #e0e0e0);
      color: var(--primary-text-color);
    }

    /* Channel items */
    .channel-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      transition: background 0.15s;
    }

    .channel-item:hover {
      background: rgba(0, 0, 0, 0.02);
    }

    .channel-icon {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.1);
      color: var(--primary-color, #03a9f4);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 16px;
      flex-shrink: 0;
    }

    .channel-info {
      flex: 1;
      overflow: hidden;
    }

    .channel-name {
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .channel-idx {
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      font-family: monospace;
    }

    .channel-actions {
      display: flex;
      gap: 6px;
      flex-shrink: 0;
    }

    /* Add channel button at bottom */
    .add-channel-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      margin: 12px 16px;
      padding: 10px 16px;
      border: 2px dashed var(--divider-color, #e0e0e0);
      border-radius: 8px;
      background: transparent;
      color: var(--primary-color, #03a9f4);
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s;
    }

    .add-channel-btn:hover {
      border-color: var(--primary-color, #03a9f4);
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.05);
    }

    /* Empty state */
    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 48px 24px;
      color: var(--secondary-text-color, #727272);
      text-align: center;
    }

    .empty-icon {
      font-size: 32px;
      margin-bottom: 8px;
      opacity: 0.5;
    }

    .empty-text {
      font-size: 13px;
    }

    /* Loading */
    .loading-state {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 32px;
      color: var(--secondary-text-color);
      font-size: 13px;
      gap: 8px;
    }

    .loading-spinner {
      width: 20px;
      height: 20px;
      border: 2px solid var(--divider-color, #e0e0e0);
      border-top-color: var(--primary-color, #03a9f4);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `)),fd([Lc({type:Object})],wh.prototype,"hass",void 0),fd([Lc({type:String})],wh.prototype,"entryId",void 0),fd([Lc({type:Boolean})],wh.prototype,"narrow",void 0),fd([Lc({type:String})],wh.prototype,"initialTab",void 0),fd([Ec()],wh.prototype,"_activeTab",void 0),fd([Ec()],wh.prototype,"_contacts",void 0),fd([Ec()],wh.prototype,"_channels",void 0),fd([Ec()],wh.prototype,"_searchQuery",void 0),fd([Ec()],wh.prototype,"_categoryFilter",void 0),fd([Ec()],wh.prototype,"_typeFilter",void 0),fd([Ec()],wh.prototype,"_loading",void 0),fd([Ec()],wh.prototype,"_actionInProgress",void 0),fd([Ec()],wh.prototype,"_confirmingRemoveContact",void 0),fd([Ec()],wh.prototype,"_confirmingRemoveChannel",void 0),fd([Ec()],wh.prototype,"_channelDialogOpen",void 0),fd([Ec()],wh.prototype,"_editingChannel",void 0),fd([Ec()],wh.prototype,"_maxChannels",void 0),wh=fd([Tc("meshcore-manage-dialog")],wh);const $h=3e5,Sh=new class{constructor(){this._nodes=[],this._loadedAt=0,this._loading=null,this._listeners=new Set}attach(e,t){const i=t!==this._entryId;this._hass=e,this._entryId=t,(i||Date.now()-this._loadedAt>$h)&&this.refresh()}setContacts(e){this._nodes=e.filter(e=>e.public_key).map(e=>({key:e.public_key.toLowerCase(),name:e.adv_name||e.public_key.substring(0,8),forwarding:2===e.type||3===e.type,lastAdvert:e.last_advert||0})),this._loadedAt=Date.now(),this._listeners.forEach(e=>e())}refresh(){return this._hass?(this._loading||(this._loading=Xc(this._hass,"all",{limit:5e3,entryId:this._entryId}).then(e=>{e.contacts.length&&this.setContacts(e.contacts)}).finally(()=>{this._loading=null})),this._loading):Promise.resolve()}subscribe(e){return this._listeners.add(e),()=>this._listeners.delete(e)}resolve(e){const t=e.toLowerCase();this._hass&&Date.now()-this._loadedAt>$h&&this.refresh();const i=this._nodes.filter(e=>t&&e.key.startsWith(t)).sort((e,t)=>Number(t.forwarding)-Number(e.forwarding)||t.lastAdvert-e.lastAdvert);return{hash:t,name:i.length?i[0].name:null,others:Math.max(0,i.length-1),candidates:i.map(e=>e.name)}}};class Ch{constructor(e,t=Sh){this.host=e,this.dir=t,this._unsub=null,e.addController(this)}hostConnected(){this._unsub=this.dir.subscribe(()=>this.host.requestUpdate())}hostDisconnected(){var e;null===(e=this._unsub)||void 0===e||e.call(this),this._unsub=null}}let Mh=class extends Mc{constructor(){super(),this.timestampFormat="relative",this._selectedMessage=null,this.nodeDirectoryController=new Ch(this),bh(this,{isOpen:()=>null!==this._selectedMessage,onEscape:()=>{this._selectedMessage=null},getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".message-dialog")}})}render(){return this.group?lc(J||(J=vd`
        ${0}
        ${0}
      `),this._renderGroup(),this._selectedMessage?this._renderMessageDialog(this._selectedMessage):lc(Q||(Q=vd``))):lc(ee||(ee=vd``))}_renderGroup(){if(!this.group)return lc(te||(te=vd``));const e=this.group,t={"message-group":!0,incoming:!e.isOutgoing&&!e.isSystem,outgoing:e.isOutgoing,system:e.isSystem};let i;return e.messages.length>0&&(i=e.messages[0].senderColor||function(e){let t=0;for(let i=0;i<e.length;i++)t=(t<<5)-t+e.charCodeAt(i);const i=["#e57373","#64b5f6","#81c784","#ffb74d","#ba68c8","#4dd0e1","#fff176","#a1887f"];return i[Math.abs(t)%i.length]}(e.sender)),lc(ie||(ie=vd`
      <div class=${0} style=${0}>
        ${0}
        ${0}
      </div>
    `),this._classMap(t),i?`--sender-color: ${i}`:"",e.isSystem||e.isOutgoing?lc(ne||(ne=vd``)):lc(oe||(oe=vd`<div class="sender">${0}</div>`),e.sender),e.messages.map(e=>this._renderBubble(e)))}_renderBubble(e){const t={bubble:!0,incoming:!e.isOutgoing&&!e.isSystem,outgoing:e.isOutgoing,system:e.isSystem},i=e.isOutgoing&&e.deliveryStatus?this._getStatusLabel(e.deliveryStatus):"",o=function(e,t){switch(t){case"relative":default:return function(e){const t=Date.now()-e.getTime(),i=Math.floor(t/1e3),o=Math.floor(i/60),n=Math.floor(o/60);return i<60?"now":o<60?`${o}m`:n<24?`${n}h`:e.toLocaleDateString(void 0,{month:"short",day:"numeric"})}(e);case"time":return e.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});case"datetime":return e.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}}(e.timestamp,this.timestampFormat),n=e.isOutgoing||e.isSystem?null:function(e){if(!e||0===e.length)return null;let t=null;for(const i of e){const e=i.path_nodes,o=i.hop_count,n=e&&e.length>0?e.length:"number"==typeof o?o:0;(null===t||n<t)&&(t=n)}return t}(e.rxLogData),s=null===n?"":`${n} hop${1!==n?"s":""}`,r=e.isOutgoing||e.isSystem||!e.floodScope?"":"*"===e.floodScope?"🌐 all regions":e.floodScope;return lc(se||(se=vd`
      <div class=${0} data-msg-id=${0} @click=${0}>
        <div class="message-text">${0}</div>
        <div class="timestamp">${0}${0}${0}${0}</div>
      </div>
    `),this._classMap(t),e.id,t=>{t.stopPropagation(),this._selectedMessage=e},this._renderTextWithMentions(e.text,e.mentions),i?lc(re||(re=vd`<span class="delivery-status">${0}</span> · `),i):"",o,s?lc(ae||(ae=vd` · <span class="hops">${0}</span>`),s):"",r?lc(le||(le=vd` · <span class="flood-scope">${0}</span>`),r):"")}_getStatusLabel(e){var t;const i=e.status,o=null!==(t=e.repeaterCount)&&void 0!==t?t:0;switch(i){case"pending":case"waiting":return"Waiting...";case"sent":return e.direct?e.ackReceived?"Delivered":"No ACK":o>0?"Repeated":"Unheard";case"delivered":return"Delivered";case"failed":return"Failed";default:return"Sent"}}_renderTextWithMentions(e,t){if(0===t.length)return e;const i=t.map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")),o=new RegExp(`@\\[(${i.join("|")})\\]|@(${i.join("|")})\\b`,"g"),n=[];let s,r=0;for(;null!==(s=o.exec(e));){var a;s.index>r&&n.push(e.slice(r,s.index));const t=null!==(a=s[1])&&void 0!==a?a:s[2];n.push(lc(de||(de=vd`<span class="mention">@${0}</span>`),t)),r=s.index+s[0].length}return r<e.length&&n.push(e.slice(r)),n}_renderRouteEntry(e){var t;const i=null!==(t=e.path_nodes)&&void 0!==t?t:[],o=e.hop_count,n=[];return"number"==typeof e.snr&&n.push(`SNR: ${e.snr}`),"number"==typeof e.rssi&&n.push(`RSSI: ${e.rssi}`),lc(ce||(ce=vd`
      <div class="route-entry">
        <div class="route-hops">
          ${0}
        </div>
        ${0}
      </div>`),i.length?i.map((e,t)=>{var i;const o=Sh.resolve(e),n=o.candidates.length>1?`Possible nodes: ${o.candidates.join(", ")}`:"";return lc(he||(he=vd`${0}<span class="route-hop" title=${0}>
                  <code>${0}</code>
                  <span class="route-name">${0}${0}</span></span>`),t?lc(pe||(pe=vd`<span class="route-sep">›</span>`)):"",n,e.substring(0,4).toUpperCase(),null!==(i=o.name)&&void 0!==i?i:"?",o.others?lc(ue||(ue=vd`<span class="route-more"> +${0}</span>`),o.others):"")}):lc(me||(me=vd`<span>${0}</span>`),o?`${o} hop${1!==o?"s":""}`:"0 hops (heard directly)"),n.length?lc(ge||(ge=vd`<div class="route-meta">${0}${0}</div>`),i.length?`${i.length} hop${1!==i.length?"s":""} · `:"",n.join(" · ")):"")}_renderMessageDialog(e){var t;const i=e.rxLogData&&e.rxLogData.length>0,o=i?e.rxLogData.map(zh).join(" | "):"",n=e.timestamp.toLocaleString(void 0,{weekday:"short",month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit",second:"2-digit"}),s="padding: 8px 16px; font-size: 12px; color: var(--secondary-text-color); border-top: 1px solid var(--divider-color, #e0e0e0);";return lc(ve||(ve=vd`
      <div class="message-dialog-overlay" @click=${0}>
        <div class="message-dialog"
             role="dialog" aria-modal="true" aria-label="Message actions"
             @click=${0}>
          <div class="message-dialog-preview">${0}</div>
          <button class="message-dialog-action" @click=${0}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>Copy Text
          </button>
          ${0}
          ${0}
          <div style=${0}>
            ${0}: ${0}
          </div>
          ${0}
        </div>
      </div>
    `),()=>{this._selectedMessage=null},e=>e.stopPropagation(),e.text,()=>this._copyText(e.text),e.isOutgoing||e.isSystem?lc(_e||(_e=vd``)):lc(fe||(fe=vd`
                <button class="message-dialog-action" @click=${0}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg>Reply
                </button>
              `),()=>this._replyToSender(e)),i?lc(ye||(ye=vd`
                <div class="message-dialog-route" title="Click to copy the route"
                  @click=${0}>
                  ${0}
                </div>
              `),()=>this._copyText(o),e.rxLogData.map(e=>this._renderRouteEntry(e))):lc(be||(be=vd``)),s,e.isOutgoing?"Sent":"Received",n,e.isOutgoing&&e.deliveryStatus?lc(xe||(xe=vd`
                <div style=${0}>
                  ${0}${0}${0}
                </div>
              `),s,e.deliveryStatus.direct?e.deliveryStatus.ackReceived||"delivered"===e.deliveryStatus.status?"ACK received — delivered":"No ACK received — the recipient did not confirm (off, out of range or wrong route)":(null!==(t=e.deliveryStatus.repeaterCount)&&void 0!==t?t:0)>0?`${e.deliveryStatus.repeaterCount} repeater${1===e.deliveryStatus.repeaterCount?"":"s"} responded`:"No repeaters responded",!e.deliveryStatus.direct&&e.deliveryStatus.ackReceived?" · ACK received":"",e.deliveryStatus.roundTripMs?` · ${e.deliveryStatus.roundTripMs}ms RTT`:""):lc(we||(we=vd``)))}async _copyText(e){await kh(e),this._selectedMessage=null}_replyToSender(e){this.dispatchEvent(new CustomEvent("reply-to-sender",{detail:{mention:Th(e)},bubbles:!0,composed:!0})),this._selectedMessage=null}_classMap(e){return Object.entries(e).filter(([,e])=>e).map(([e])=>e).join(" ")}};function zh(e){const t=e.path_nodes,i=e.hop_count,o=e.snr,n=e.rssi,s=[];return t&&t.length>0?s.push(t.map(e=>e.substring(0,4).toUpperCase()).join(" > ")):void 0!==i?s.push(`${i} hop${1!==i?"s":""}`):s.push("0 hops"),null!=o&&s.push(`SNR: ${o}`),null!=n&&s.push(`RSSI: ${n}`),s.join(" · ")}function Th(e){const t=[`@[${e.sender}]`],i=e.rxLogData&&e.rxLogData.length>0?e.rxLogData[0]:null;if(i){const e=i.path_nodes,o=i.hop_count;if(e&&e.length>0){const i=e.map(e=>e.substring(0,4).toLowerCase()).join(",");t.push(`${i} (${e.length} hop${1!==e.length?"s":""})`)}else"number"==typeof o&&o>0?t.push(`${o} hop${1!==o?"s":""}`):t.push("direct (0 hops)");"number"==typeof i.snr&&t.push(`SNR: ${i.snr} dB`),"number"==typeof i.rssi&&t.push(`RSSI: ${i.rssi} dBm`)}const o=e.timestamp,n=e=>String(e).padStart(2,"0");return t.push(`Received at: ${n(o.getHours())}:${n(o.getMinutes())}:${n(o.getSeconds())}`),`${t.join(" | ")} `}Mh.styles=$d(ke||(ke=vd`
    :host {
      display: block;
    }

    .message-group {
      margin-bottom: 8px;
      display: flex;
      flex-direction: column;
    }

    .message-group.outgoing {
      align-items: flex-end;
    }

    .message-group.incoming {
      align-items: flex-start;
    }

    .message-group.system {
      align-items: center;
    }

    .sender {
      font-size: 12px;
      font-weight: 600;
      color: var(--sender-color, var(--primary-color, #03a9f4));
      margin-bottom: 2px;
      padding: 0 4px;
      max-width: 85%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .message-group.outgoing .sender {
      display: none;
    }

    .bubble {
      max-width: 85%;
      padding: 8px 12px;
      border-radius: 16px;
      word-wrap: break-word;
      overflow-wrap: break-word;
      position: relative;
      cursor: pointer;
      transition: opacity 0.15s;
      line-height: 1.4;
      font-size: 14px;
    }

    .bubble:active {
      opacity: 0.7;
    }

    .bubble.search-highlight {
      animation: highlight-flash 2.5s ease-out;
    }

    @keyframes highlight-flash {
      0%, 20% {
        box-shadow: 0 0 0 3px rgba(var(--rgb-primary-color, 3, 169, 244), 0.6);
      }
      100% {
        box-shadow: 0 0 0 3px transparent;
      }
    }

    .bubble + .bubble {
      margin-top: 2px;
    }

    .bubble.incoming {
      background: var(--bubble-incoming-bg, var(--secondary-background-color, #e8e8e8));
      color: var(--bubble-incoming-text, var(--primary-text-color, #212121));
      border-bottom-left-radius: 4px;
    }

    .bubble.incoming:first-of-type {
      border-top-left-radius: 16px;
    }

    .bubble.outgoing {
      background: var(--bubble-outgoing-bg, var(--primary-color, #03a9f4));
      color: var(--bubble-outgoing-text, #fff);
      border-bottom-right-radius: 4px;
    }

    .bubble.outgoing:first-of-type {
      border-top-right-radius: 16px;
    }

    .bubble.system {
      background: transparent;
      color: var(--system-msg-color, var(--secondary-text-color, #727272));
      font-style: italic;
      font-size: 13px;
      text-align: center;
      cursor: default;
      padding: 4px 12px;
    }

    .message-text {
      white-space: pre-wrap;
    }

    .message-text .mention {
      background: var(--mention-bg, rgba(3, 169, 244, 0.15));
      color: var(--mention-text, var(--primary-color, #03a9f4));
      font-weight: 600;
      padding: 1px 4px;
      border-radius: 4px;
    }

    .bubble.outgoing .message-text .mention {
      background: rgba(255, 255, 255, 0.25);
      color: #fff;
    }

    .timestamp {
      font-size: 11px;
      color: var(--timestamp-color, var(--secondary-text-color, #727272));
      margin-top: 2px;
      padding: 0 4px;
    }

    .bubble.outgoing .timestamp {
      color: rgba(255, 255, 255, 0.6);
    }

    .bubble.incoming .timestamp {
      color: var(--secondary-text-color, #727272);
    }

    .message-group.outgoing .timestamp {
      text-align: right;
    }

    .route-info {
      font-size: 10px;
      color: var(--timestamp-color, var(--secondary-text-color, #727272));
      padding: 2px 4px;
      font-family: monospace;
    }

    .route-info-inline {
      font-size: 11px;
      color: var(--timestamp-color, var(--secondary-text-color, #727272));
      font-family: monospace;
      margin-top: 2px;
      padding: 0 4px;
      opacity: 0.7;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .delivery-status {
      color: inherit;
    }

    .flood-scope {
      color: inherit;
      opacity: 0.85;
      white-space: nowrap;
    }

    .message-dialog-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.85);
      z-index: 20;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .message-dialog {
      background: #333;
      border: 2px solid var(--primary-color, #03a9f4);
      border-radius: 12px;
      box-shadow: 0 0 20px rgba(var(--rgb-primary-color, 3, 169, 244), 0.3);
      min-width: 240px;
      max-width: 300px;
      overflow: hidden;
      z-index: 21;
    }

    .message-dialog-preview {
      padding: 12px 16px;
      font-size: 13px;
      color: var(--secondary-text-color);
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 280px;
    }

    .message-dialog-action {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
      padding: 14px 16px;
      border: none;
      background: transparent;
      color: var(--primary-text-color);
      font-size: 15px;
      font-weight: 500;
      cursor: pointer;
      text-align: left;
      min-height: 48px;
      transition: background 0.15s;
    }

    .message-dialog-action:hover,
    .message-dialog-action:active {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
    }

    .message-dialog-action + .message-dialog-action {
      border-top: 1px solid var(--divider-color, #e0e0e0);
    }

    .message-dialog-route {
      padding: 12px 16px;
      font-size: 12px;
      color: var(--secondary-text-color);
      border-top: 1px solid var(--divider-color, #e0e0e0);
      cursor: pointer;
      font-family: monospace;
      word-break: break-all;
      transition: background 0.15s;
    }

    .route-entry + .route-entry {
      margin-top: 8px;
      padding-top: 8px;
      border-top: 1px dashed var(--divider-color, #e0e0e0);
    }

    .route-hops {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 4px 6px;
      font-family: inherit;
      color: var(--primary-text-color);
    }

    .route-hop code {
      font-size: 11px;
      color: var(--secondary-text-color);
      margin-right: 3px;
    }

    .route-more,
    .route-sep {
      color: var(--secondary-text-color);
    }

    .route-meta {
      margin-top: 4px;
    }

    .message-dialog-route:hover,
    .message-dialog-route:active {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
    }
  `)),fd([Lc({type:Object})],Mh.prototype,"group",void 0),fd([Lc({type:Object})],Mh.prototype,"message",void 0),fd([Lc({type:String})],Mh.prototype,"timestampFormat",void 0),fd([Ec()],Mh.prototype,"_selectedMessage",void 0),Mh=fd([Tc("meshcore-message-bubble")],Mh);let Ph=class extends Mc{constructor(){super(),this._query="",this._fromDate="",this._toDate="",this._results=[],this._totalCount=0,this._searching=!1,this._hasSearched=!1,this._showFilters=!1,this._debounceTimer=null,bh(this,{isOpen:()=>!0,onEscape:()=>this.dispatchEvent(new CustomEvent("search-close",{bubbles:!0,composed:!0}))})}render(){return lc($e||($e=vd`
      <div class="search-header">
        <div class="search-row">
          <input
            class="search-input"
            type="text"
            aria-label="Search messages"
            placeholder="Search messages..."
            .value=${0}
            @input=${0}
          />
          <button
            class="filter-toggle ${0}"
            @click=${0}>
            Filters
          </button>
        </div>
        ${0}
        ${0}
      </div>

      <div class="results">
        ${0}
      </div>
    `),this._query,this._onQueryInput,this._showFilters?"active":"",()=>{this._showFilters=!this._showFilters},this._showFilters?lc(Se||(Se=vd`
              <div class="filters">
                <input
                  class="filter-input"
                  type="date"
                  placeholder="From"
                  .value=${0}
                  @change=${0}
                />
                <input
                  class="filter-input"
                  type="date"
                  placeholder="To"
                  .value=${0}
                  @change=${0}
                />
              </div>
            `),this._fromDate,e=>{this._fromDate=e.target.value,this._doSearch()},this._toDate,e=>{this._toDate=e.target.value,this._doSearch()}):"",this._hasSearched?lc(Ce||(Ce=vd`<div class="result-count">${0} result${0}</div>`),this._totalCount,1!==this._totalCount?"s":""):"",this._searching?lc(Me||(Me=vd`<div class="loading-state">Searching...</div>`)):this._hasSearched?0===this._results.length?lc(Te||(Te=vd`
                  <div class="empty-state">
                    <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 14H4V8h4v2c0 1.1.9 2 2 2h6v2h-2v2h2v2h-2v2h6V10h-4v10h2z"/></svg></div>
                    <div class="empty-text">No messages found</div>
                  </div>
                `)):this._results.map(e=>this._renderResult(e)):lc(ze||(ze=vd`
                <div class="empty-state">
                  <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></div>
                  <div class="empty-text">Search your message history</div>
                </div>
              `)))}_renderResult(e){const t=new Date(e.timestamp),i=t.toLocaleDateString(void 0,{month:"short",day:"numeric"}),o=t.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"}),n=this._highlightQuery(e.text);return lc(Pe||(Pe=vd`
      <div class="result-item" @click=${0}>
        <div class="result-meta">
          <span class="result-sender">${0}</span>
          <span class="result-conversation">${0}</span>
          <span>${0} ${0}</span>
        </div>
        <div class="result-text">${0}</div>
      </div>
    `),()=>this._onResultClick(e),e.sender,e.conversation_name,i,o,n)}_highlightQuery(e){if(!this._query.trim())return e;const t=this._query.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),i=new RegExp(`(${t})`,"gi"),o=e.split(i),n=this._query.toLowerCase();return o.map(e=>e.toLowerCase()===n?lc(Ae||(Ae=vd`<mark>${0}</mark>`),e):e)}_onQueryInput(e){this._query=e.target.value,null!==this._debounceTimer&&clearTimeout(this._debounceTimer);const t=this._query.trim().length,i=t>=2,o=0===t,n=!(!this._fromDate&&!this._toDate);i||o&&n?this._debounceTimer=window.setTimeout(()=>this._doSearch(),400):(this._results=[],this._hasSearched=!1)}async _doSearch(){if(!this.hass||!this.entityId)return;const e=this._query.trim(),t=e.length>0,i=!(!this._fromDate&&!this._toDate);if(!t&&!i)return this._results=[],this._totalCount=0,void(this._hasSearched=!1);this._searching=!0,this._hasSearched=!0;try{const t={type:"meshcore_bbs/search_stored_messages",query:e,entity_id:this.entityId,limit:100};this._fromDate&&(t.from_date=`${this._fromDate}T00:00:00`),this._toDate&&(t.to_date=`${this._toDate}T23:59:59.999999`);const i=await this.hass.callWS(t);this._results=i.results||[],this._totalCount=this._results.length}catch(e){this._results=[],this._totalCount=0}finally{this._searching=!1}}_onResultClick(e){this.dispatchEvent(new CustomEvent("result-selected",{detail:{entityId:e.entity_id,messageId:e.id,conversationName:e.conversation_name,timestamp:e.timestamp},bubbles:!0,composed:!0}))}};Ph.styles=$d(Le||(Le=vd`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
    }

    .search-header {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 12px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      flex-shrink: 0;
    }

    .search-row {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .search-input {
      flex: 1;
      padding: 8px 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 20px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 13px;
      outline: none;
      transition: border-color 0.2s;
    }

    .search-input:focus {
      border-color: var(--primary-color, #03a9f4);
    }

    .search-input::placeholder {
      color: var(--secondary-text-color, #727272);
    }

    .filter-toggle {
      padding: 6px 10px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      background: transparent;
      color: var(--secondary-text-color);
      font-size: 12px;
      cursor: pointer;
      flex-shrink: 0;
      transition: all 0.15s;
    }

    .filter-toggle:hover,
    .filter-toggle.active {
      border-color: var(--primary-color, #03a9f4);
      color: var(--primary-color, #03a9f4);
    }

    .filters {
      display: flex;
      gap: 8px;
    }

    .filter-input {
      flex: 1;
      padding: 6px 10px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 12px;
      outline: none;
    }

    .filter-input:focus {
      border-color: var(--primary-color, #03a9f4);
    }

    .result-count {
      font-size: 12px;
      color: var(--secondary-text-color);
      padding: 0 4px;
    }

    .results {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .results::-webkit-scrollbar {
      width: 6px;
    }

    .results::-webkit-scrollbar-track {
      background: transparent;
    }

    .results::-webkit-scrollbar-thumb {
      background: var(--scrollbar-thumb, var(--scrollbar-thumb-color, #c1c1c1));
      border-radius: 3px;
    }

    .result-item {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 10px 12px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      cursor: pointer;
      transition: background 0.15s;
    }

    .result-item:hover {
      background: rgba(0, 0, 0, 0.02);
    }

    .result-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      color: var(--secondary-text-color);
    }

    .result-sender {
      font-weight: 600;
      color: var(--primary-text-color);
    }

    .result-conversation {
      font-style: italic;
    }

    .result-text {
      font-size: 13px;
      color: var(--primary-text-color);
      line-height: 1.4;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .result-text mark {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.2);
      color: inherit;
      border-radius: 2px;
      padding: 0 2px;
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--secondary-text-color);
      text-align: center;
      padding: 24px;
    }

    .empty-icon {
      font-size: 32px;
      margin-bottom: 8px;
      opacity: 0.5;
    }

    .empty-text {
      font-size: 13px;
    }

    .loading-state {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      color: var(--secondary-text-color);
      font-size: 13px;
      gap: 8px;
    }
  `)),fd([Lc({type:Object})],Ph.prototype,"hass",void 0),fd([Lc({type:String})],Ph.prototype,"entryId",void 0),fd([Lc({type:String})],Ph.prototype,"entityId",void 0),fd([Lc({type:String})],Ph.prototype,"meshNodeName",void 0),fd([Ec()],Ph.prototype,"_query",void 0),fd([Ec()],Ph.prototype,"_fromDate",void 0),fd([Ec()],Ph.prototype,"_toDate",void 0),fd([Ec()],Ph.prototype,"_results",void 0),fd([Ec()],Ph.prototype,"_totalCount",void 0),fd([Ec()],Ph.prototype,"_searching",void 0),fd([Ec()],Ph.prototype,"_hasSearched",void 0),fd([Ec()],Ph.prototype,"_showFilters",void 0),Ph=fd([Tc("meshcore-message-search")],Ph);let Ah=class extends Mc{constructor(){super(...arguments),this.pubkey="",this.name="",this._busy=null,this._confirmRemove=!1,this._message="",this._error="",this.bbsController=new ch(this)}willUpdate(e){e.has("hass")&&this.hass&&dh.attach(this.hass),e.has("pubkey")&&(this._message="",this._error="",this._confirmRemove=!1)}render(){var e,t;if(!this.pubkey)return hc;if(!dh.snapshot)return lc(Ee||(Ee=vd`<div class="status muted">${0}</div>`),dh.error?`BBS unavailable: ${dh.error}`:"Loading BBS…");const i=dh.statusFor(this.pubkey),o=null!==(e=null===(t=this.hass)||void 0===t||null===(t=t.user)||void 0===t?void 0:t.is_admin)&&void 0!==e&&e,n=hh(i)||"No BBS access";return lc(Ie||(Ie=vd`
      <div class="status ${0}">
        ${0}${0}
      </div>
      ${0}
      ${0}
      ${0}
      ${0}
      ${0}
    `),"none"!==i.access||i.request?"":"muted",n,i.user&&i.user.name!==this.name?lc(Oe||(Oe=vd` — as “${0}”`),i.user.name):hc,i.request?lc(Re||(Re=vd`
        <div class="request-text">
          ${0} message(s), last ${0}
          ${0}
        </div>`),i.request.hits,new Date(1e3*i.request.last_seen).toLocaleString(),i.request.last_text?lc(De||(De=vd`: “${0}”`),i.request.last_text):hc):hc,o?this._renderButtons(i):hc,this._message?lc(Be||(Be=vd`<div class="feedback">${0}</div>`),this._message):hc,this._error?lc(Ne||(Ne=vd`<div class="feedback error">${0}</div>`),this._error):hc,dh.enabled?hc:lc(Fe||(Fe=vd`<div class="disabled-note">The BBS is off — enable it in Settings → BBS.</div>`)))}_renderButtons(e){const t=(e,t,i="")=>lc(qe||(qe=vd`
      <button class=${0} ?disabled=${0} @click=${0}>
        ${0}
      </button>`),i,null!==this._busy,()=>this._run(e),this._busy===e?"…":t);return this._confirmRemove?lc(He||(He=vd`
        <div class="status">Remove ${0} from the BBS?</div>
        <div class="actions">
          ${0}
          <button @click=${0}>Cancel</button>
        </div>`),this.name||this.pubkey,t("del","Remove","danger"),()=>{this._confirmRemove=!1}):e.request?lc(je||(je=vd`<div class="actions">
        ${0}
        ${0}
      </div>`),t("approve","Approve","primary"),t("reject","Reject","danger")):e.user?lc(Ve||(Ve=vd`<div class="actions">
      ${0}
      ${0}
      <button class="danger" ?disabled=${0}
        @click=${0}>Remove from BBS</button>
    </div>`),"active"===e.access?t("off","Suspend"):t("on","Resume","primary"),e.admin?t("unadmin","Remove admin"):t("admin","Make admin"),null!==this._busy,()=>{this._confirmRemove=!0}):lc(Ze||(Ze=vd`<div class="actions">${0}</div>`),t("add","Add to BBS","primary"))}async _run(e){if(this.hass){this._busy=e,this._message="",this._error="";try{var t,i;const o="approve"===e||"reject"===e?await function(e,t,i,o=""){return e.callWS({type:"meshcore_bbs/bbs_request",op:t,pubkey:i,name:o})}(this.hass,e,null!==(t=null===(i=dh.statusFor(this.pubkey).request)||void 0===i?void 0:i.pubkey)&&void 0!==t?t:this.pubkey,this.name):await function(e,t,i,o=""){return e.callWS({type:"meshcore_bbs/bbs_user",op:t,pubkey:i,name:o})}(this.hass,e,this.pubkey,"add"===e?this.name:"");this._message=o.message,this._confirmRemove=!1,await dh.refresh()}catch(e){var o;this._error=null!==(o=null==e?void 0:e.message)&&void 0!==o?o:String(e)}finally{this._busy=null}}}};Ah.styles=$d(Ke||(Ke=vd`
    :host { display: block; }
    .status {
      font-size: 13px;
      color: var(--primary-text-color);
      margin-bottom: 8px;
    }
    .status.muted { color: var(--secondary-text-color); }
    .request-text {
      font-size: 12px;
      color: var(--secondary-text-color);
      margin-bottom: 8px;
      font-style: italic;
      overflow-wrap: anywhere;
    }
    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    button {
      flex: 1 1 auto;
      min-width: 110px;
      padding: 8px 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 13px;
      cursor: pointer;
    }
    button:hover:not(:disabled) { background: var(--secondary-background-color, #f5f5f5); }
    button:disabled { opacity: 0.6; cursor: default; }
    button.primary {
      background: var(--primary-color, #03a9f4);
      border-color: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
    }
    button.danger { color: var(--error-color, #db4437); }
    .feedback { font-size: 12px; margin-top: 8px; color: var(--secondary-text-color); }
    .feedback.error { color: var(--error-color, #db4437); }
    .disabled-note { font-size: 12px; color: var(--secondary-text-color); margin-top: 8px; }
  `)),fd([Lc({type:Object})],Ah.prototype,"hass",void 0),fd([Lc({type:String})],Ah.prototype,"pubkey",void 0),fd([Lc({type:String})],Ah.prototype,"name",void 0),fd([Ec()],Ah.prototype,"_busy",void 0),fd([Ec()],Ah.prototype,"_confirmRemove",void 0),fd([Ec()],Ah.prototype,"_message",void 0),fd([Ec()],Ah.prototype,"_error",void 0),Ah=fd([Tc("meshcore-bbs-actions")],Ah);let Lh=class extends Mc{constructor(){super(),this.open=!1,this._repeaters=[],this._selected=[],this._search="",this._loading=!1,this._busy=!1,this._error="",this._close=()=>{this.open=!1,this.dispatchEvent(new CustomEvent("route-dialog-closed",{bubbles:!0,composed:!0}))},bh(this,{isOpen:()=>this.open,onEscape:()=>this._close()})}willUpdate(e){(e.has("open")||e.has("contact"))&&this.open&&(this._selected=[],this._search="",this._error="",this._loadRepeaters())}async _loadRepeaters(){if(this.hass){this._loading=!0;try{const e=await Xc(this.hass,"all",{nodeType:2,limit:1e3,sortBy:"name",entryId:this.entryId});this._repeaters=e.contacts}finally{this._loading=!1}}}_nameForHop(e){const t=this._repeaters.filter(t=>{var i;return null===(i=t.public_key)||void 0===i?void 0:i.toLowerCase().startsWith(e)});return 1===t.length?`${t[0].adv_name} (${e})`:e}_renderCurrent(){const e=this.contact;if(e.out_path_len<0)return lc(Ue||(Ue=vd`<span class="current">Flood (automatic)</span>`));const t=function(e,t,i){if(!e||t<=0)return[];const o=2*(Math.max(0,i)+1),n=[];for(let i=0;i<t&&(i+1)*o<=e.length;i++)n.push(e.substring(i*o,(i+1)*o).toLowerCase());return n}(e.out_path,e.out_path_len,e.out_path_hash_mode);return 0===t.length?lc(We||(We=vd`<span class="current">Direct (no repeaters)</span>`)):lc(Ge||(Ge=vd`<span class="current">${0}</span>`),t.map(e=>this._nameForHop(e)).join(" → "))}render(){var e,t;if(!this.open||!this.contact)return hc;const i=null===(e=null===(t=this.hass)||void 0===t||null===(t=t.user)||void 0===t?void 0:t.is_admin)||void 0===e||e,o=this._search.trim().toLowerCase(),n=this._repeaters.filter(e=>!this._selected.includes(e)&&(!o||e.adv_name.toLowerCase().includes(o)||e.public_key.toLowerCase().includes(o)));return lc(Xe||(Xe=vd`
      <div class="backdrop" @click=${0}>
        <div class="dialog" role="dialog" aria-modal="true" aria-label="Direct message route"
          @click=${0}>
          <div class="head">
            <div class="title">Route to ${0}</div>
            <button class="close" aria-label="Close" @click=${0}>✕</button>
          </div>
          <div class="body">
            <div class="hint">Direct messages to this contact go through these repeaters, in order.
              Channel messages always flood and are not affected. If a hop can't reach the next one,
              the message won't be delivered.</div>
            <div class="label">Current route</div>
            ${0}
            <div class="label">New route</div>
            <div class="chips">
              <span class="chip">You</span>
              ${0}
              <span class="arrow">→</span>
              <span class="chip">${0}</span>
            </div>
            <div class="label">Add repeater</div>
            <input type="text" placeholder="Search repeaters…" .value=${0}
              @input=${0}>
            <div class="list">
              ${0}
              ${0}
              ${0}
            </div>
            ${0}
          </div>
          <div class="foot">
            <button ?disabled=${0} @click=${0}>Reset to flood</button>
            <span class="spacer"></span>
            <button @click=${0}>Cancel</button>
            <button class="primary" ?disabled=${0}
              @click=${0}>${0}</button>
          </div>
        </div>
      </div>`),this._close,e=>e.stopPropagation(),this.contact.adv_name,this._close,this._renderCurrent(),this._selected.map((e,t)=>lc(Ye||(Ye=vd`
                <span class="arrow">→</span>
                <span class="chip">${0}
                  <button aria-label="Remove ${0}"
                    @click=${0}>✕</button>
                </span>`),e.adv_name,e.adv_name,()=>{this._selected=this._selected.filter((e,i)=>i!==t)})),this.contact.adv_name,this._search,e=>{this._search=e.target.value},this._loading?lc(Je||(Je=vd`<div class="item">Loading…</div>`)):hc,this._loading||0!==n.length?hc:lc(Qe||(Qe=vd`<div class="item">No repeaters found</div>`)),n.map(e=>lc(et||(et=vd`
                <div class="item" @click=${0}>
                  <span>${0}</span><code>${0}</code>
                </div>`),()=>{this._selected=[...this._selected,e]},e.adv_name,e.public_key.substring(0,8))),this._error?lc(tt||(tt=vd`<div class="error">${0}</div>`),this._error):hc,this._busy||!i,()=>this._apply(!0),this._close,this._busy||!i||0===this._selected.length,()=>this._apply(!1),this._busy?"Saving…":"Save route")}async _apply(e){if(this.hass&&this.contact){this._busy=!0,this._error="";try{const t=await function(e,t,i,o={}){var n;const s={type:"meshcore_bbs/set_contact_route",pubkey_prefix:t,repeaters:i,reset:null!==(n=o.reset)&&void 0!==n&&n};return o.entryId&&(s.entry_id=o.entryId),e.callWS(s)}(this.hass,this.contact.pubkey_prefix,e?[]:this._selected.map(e=>e.public_key),{reset:e,entryId:this.entryId});this.dispatchEvent(new CustomEvent("route-changed",{detail:{contact:this.contact,...t},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("contacts-changed",{bubbles:!0,composed:!0})),this._close()}catch(e){var t;this._error=null!==(t=null==e?void 0:e.message)&&void 0!==t?t:String(e)}finally{this._busy=!1}}}};function Eh(e){var t,i,o,n;for(i=1,o=arguments.length;i<o;i++)for(t in n=arguments[i])e[t]=n[t];return e}Lh.styles=$d(it||(it=vd`
    :host { display: contents; }
    .backdrop {
      position: fixed; inset: 0; background: rgba(0, 0, 0, 0.5);
      display: flex; align-items: center; justify-content: center; z-index: 1001;
    }
    .dialog {
      background: var(--card-background-color, #fff); color: var(--primary-text-color);
      border-radius: 12px; width: min(460px, calc(100vw - 32px)); max-height: calc(100vh - 48px);
      display: flex; flex-direction: column; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
    }
    .head { display: flex; align-items: center; justify-content: space-between; padding: 16px 20px 8px; }
    .title { font-size: 16px; font-weight: 600; }
    .close { background: none; border: none; font-size: 18px; cursor: pointer; color: var(--secondary-text-color); }
    .body { padding: 0 20px 12px; overflow: auto; }
    .label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;
      color: var(--secondary-text-color); margin: 12px 0 6px; }
    .hint { font-size: 12px; color: var(--secondary-text-color); line-height: 1.4; }
    .current { font-family: var(--code-font-family, monospace); font-size: 13px; }
    .chips { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; min-height: 32px; }
    .chip { display: inline-flex; align-items: center; gap: 4px; padding: 4px 8px; border-radius: 14px;
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.12); font-size: 12px; }
    .chip button { background: none; border: none; cursor: pointer; font-size: 13px; padding: 0 2px;
      color: var(--secondary-text-color); }
    .arrow { color: var(--secondary-text-color); font-size: 12px; }
    input[type='text'] { width: 100%; box-sizing: border-box; padding: 8px 10px; border-radius: 8px;
      border: 1px solid var(--divider-color, #e0e0e0); background: var(--primary-background-color, #fafafa);
      color: var(--primary-text-color); font-size: 14px; }
    .list { max-height: 220px; overflow: auto; margin-top: 6px; border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px; }
    .item { display: flex; justify-content: space-between; gap: 8px; padding: 8px 10px; cursor: pointer;
      font-size: 13px; border-top: 1px solid var(--divider-color, #e0e0e0); }
    .item:first-child { border-top: none; }
    .item:hover { background: var(--secondary-background-color, #f5f5f5); }
    .item code { color: var(--secondary-text-color); font-size: 12px; }
    .foot { display: flex; flex-wrap: wrap; gap: 8px; padding: 12px 20px 16px;
      border-top: 1px solid var(--divider-color, #e0e0e0); }
    .foot button { padding: 8px 14px; border-radius: 8px; border: 1px solid var(--divider-color, #e0e0e0);
      background: var(--card-background-color, #fff); color: var(--primary-text-color); cursor: pointer; font-size: 13px; }
    .foot button.primary { background: var(--primary-color, #03a9f4); border-color: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff); }
    .foot button:disabled { opacity: 0.6; cursor: default; }
    .spacer { flex: 1; }
    .error { color: var(--error-color, #db4437); font-size: 12px; margin-top: 8px; }
  `)),fd([Lc({type:Object})],Lh.prototype,"hass",void 0),fd([Lc({type:Object})],Lh.prototype,"contact",void 0),fd([Lc({type:String})],Lh.prototype,"entryId",void 0),fd([Lc({type:Boolean})],Lh.prototype,"open",void 0),fd([Ec()],Lh.prototype,"_repeaters",void 0),fd([Ec()],Lh.prototype,"_selected",void 0),fd([Ec()],Lh.prototype,"_search",void 0),fd([Ec()],Lh.prototype,"_loading",void 0),fd([Ec()],Lh.prototype,"_busy",void 0),fd([Ec()],Lh.prototype,"_error",void 0),Lh=fd([Tc("meshcore-route-dialog")],Lh);var Ih=Object.create||function(){function e(){}return function(t){return e.prototype=t,new e}}();function Oh(e,t){var i=Array.prototype.slice;if(e.bind)return e.bind.apply(e,i.call(arguments,1));var o=i.call(arguments,2);return function(){return e.apply(t,o.length?o.concat(i.call(arguments)):arguments)}}var Rh=0;function Dh(e){return"_leaflet_id"in e||(e._leaflet_id=++Rh),e._leaflet_id}function Bh(e,t,i){var o=t[1],n=t[0],s=o-n;return e===o&&i?e:((e-n)%s+s)%s+n}function Nh(){return!1}function Fh(e,t){if(!1===t)return e;var i=Math.pow(10,void 0===t?6:t);return Math.round(e*i)/i}function qh(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function Hh(e){return qh(e).split(/\s+/)}function jh(e,t){for(var i in Object.prototype.hasOwnProperty.call(e,"options")||(e.options=e.options?Ih(e.options):{}),t)e.options[i]=t[i];return e.options}var Zh=/\{ *([\w_ -]+) *\}/g,Vh=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function Kh(e,t){for(var i=0;i<e.length;i++)if(e[i]===t)return i;return-1}var Uh="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function Wh(e){return window["webkit"+e]||window["moz"+e]||window["ms"+e]}var Gh=0;function Xh(e){var t=+new Date,i=Math.max(0,16-(t-Gh));return Gh=t+i,window.setTimeout(e,i)}var Yh=window.requestAnimationFrame||Wh("RequestAnimationFrame")||Xh,Jh=window.cancelAnimationFrame||Wh("CancelAnimationFrame")||Wh("CancelRequestAnimationFrame")||function(e){window.clearTimeout(e)};function Qh(e,t,i){if(!i||Yh!==Xh)return Yh.call(window,Oh(e,t));e.call(t)}function ep(e){e&&Jh.call(window,e)}function tp(){}tp.extend=function(e){var t=function(){jh(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},i=t.__super__=this.prototype,o=Ih(i);for(var n in o.constructor=t,t.prototype=o,this)Object.prototype.hasOwnProperty.call(this,n)&&"prototype"!==n&&"__super__"!==n&&(t[n]=this[n]);return e.statics&&Eh(t,e.statics),e.includes&&(function(e){if("undefined"!=typeof L&&L&&L.Mixin){e=Vh(e)?e:[e];for(var t=0;t<e.length;t++)e[t]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",(new Error).stack)}}(e.includes),Eh.apply(null,[o].concat(e.includes))),Eh(o,e),delete o.statics,delete o.includes,o.options&&(o.options=i.options?Ih(i.options):{},Eh(o.options,e.options)),o._initHooks=[],o.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0;for(var e=0,t=o._initHooks.length;e<t;e++)o._initHooks[e].call(this)}},t},tp.include=function(e){var t=this.prototype.options;return Eh(this.prototype,e),e.options&&(this.prototype.options=t,this.mergeOptions(e.options)),this},tp.mergeOptions=function(e){return Eh(this.prototype.options,e),this},tp.addInitHook=function(e){var t=Array.prototype.slice.call(arguments,1),i="function"==typeof e?e:function(){this[e].apply(this,t)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};var ip={on:function(e,t,i){if("object"==typeof e)for(var o in e)this._on(o,e[o],t);else for(var n=0,s=(e=Hh(e)).length;n<s;n++)this._on(e[n],t,i);return this},off:function(e,t,i){if(arguments.length)if("object"==typeof e)for(var o in e)this._off(o,e[o],t);else{e=Hh(e);for(var n=1===arguments.length,s=0,r=e.length;s<r;s++)n?this._off(e[s]):this._off(e[s],t,i)}else delete this._events;return this},_on:function(e,t,i,o){if("function"==typeof t){if(!1===this._listens(e,t,i)){i===this&&(i=void 0);var n={fn:t,ctx:i};o&&(n.once=!0),this._events=this._events||{},this._events[e]=this._events[e]||[],this._events[e].push(n)}}else console.warn("wrong listener type: "+typeof t)},_off:function(e,t,i){var o,n,s;if(this._events&&(o=this._events[e]))if(1!==arguments.length)if("function"==typeof t){var r=this._listens(e,t,i);if(!1!==r){var a=o[r];this._firingCount&&(a.fn=Nh,this._events[e]=o=o.slice()),o.splice(r,1)}}else console.warn("wrong listener type: "+typeof t);else{if(this._firingCount)for(n=0,s=o.length;n<s;n++)o[n].fn=Nh;delete this._events[e]}},fire:function(e,t,i){if(!this.listens(e,i))return this;var o=Eh({},t,{type:e,target:this,sourceTarget:t&&t.sourceTarget||this});if(this._events){var n=this._events[e];if(n){this._firingCount=this._firingCount+1||1;for(var s=0,r=n.length;s<r;s++){var a=n[s],l=a.fn;a.once&&this.off(e,l,a.ctx),l.call(a.ctx||this,o)}this._firingCount--}}return i&&this._propagateEvent(o),this},listens:function(e,t,i,o){"string"!=typeof e&&console.warn('"string" type argument expected');var n=t;"function"!=typeof t&&(o=!!t,n=void 0,i=void 0);var s=this._events&&this._events[e];if(s&&s.length&&!1!==this._listens(e,n,i))return!0;if(o)for(var r in this._eventParents)if(this._eventParents[r].listens(e,t,i,o))return!0;return!1},_listens:function(e,t,i){if(!this._events)return!1;var o=this._events[e]||[];if(!t)return!!o.length;i===this&&(i=void 0);for(var n=0,s=o.length;n<s;n++)if(o[n].fn===t&&o[n].ctx===i)return n;return!1},once:function(e,t,i){if("object"==typeof e)for(var o in e)this._on(o,e[o],t,!0);else for(var n=0,s=(e=Hh(e)).length;n<s;n++)this._on(e[n],t,i,!0);return this},addEventParent:function(e){return this._eventParents=this._eventParents||{},this._eventParents[Dh(e)]=e,this},removeEventParent:function(e){return this._eventParents&&delete this._eventParents[Dh(e)],this},_propagateEvent:function(e){for(var t in this._eventParents)this._eventParents[t].fire(e.type,Eh({layer:e.target,propagatedFrom:e.target},e),!0)}};ip.addEventListener=ip.on,ip.removeEventListener=ip.clearAllEventListeners=ip.off,ip.addOneTimeEventListener=ip.once,ip.fireEvent=ip.fire,ip.hasEventListeners=ip.listens;var op=tp.extend(ip);function np(e,t,i){this.x=i?Math.round(e):e,this.y=i?Math.round(t):t}var sp=Math.trunc||function(e){return e>0?Math.floor(e):Math.ceil(e)};function rp(e,t,i){return e instanceof np?e:Vh(e)?new np(e[0],e[1]):null==e?e:"object"==typeof e&&"x"in e&&"y"in e?new np(e.x,e.y):new np(e,t,i)}function ap(e,t){if(e)for(var i=t?[e,t]:e,o=0,n=i.length;o<n;o++)this.extend(i[o])}function lp(e,t){return!e||e instanceof ap?e:new ap(e,t)}function dp(e,t){if(e)for(var i=t?[e,t]:e,o=0,n=i.length;o<n;o++)this.extend(i[o])}function cp(e,t){return e instanceof dp?e:new dp(e,t)}function hp(e,t,i){if(isNaN(e)||isNaN(t))throw new Error("Invalid LatLng object: ("+e+", "+t+")");this.lat=+e,this.lng=+t,void 0!==i&&(this.alt=+i)}function pp(e,t,i){return e instanceof hp?e:Vh(e)&&"object"!=typeof e[0]?3===e.length?new hp(e[0],e[1],e[2]):2===e.length?new hp(e[0],e[1]):null:null==e?e:"object"==typeof e&&"lat"in e?new hp(e.lat,"lng"in e?e.lng:e.lon,e.alt):null}np.prototype={clone:function(){return new np(this.x,this.y)},add:function(e){return this.clone()._add(rp(e))},_add:function(e){return this.x+=e.x,this.y+=e.y,this},subtract:function(e){return this.clone()._subtract(rp(e))},_subtract:function(e){return this.x-=e.x,this.y-=e.y,this},divideBy:function(e){return this.clone()._divideBy(e)},_divideBy:function(e){return this.x/=e,this.y/=e,this},multiplyBy:function(e){return this.clone()._multiplyBy(e)},_multiplyBy:function(e){return this.x*=e,this.y*=e,this},scaleBy:function(e){return new np(this.x*e.x,this.y*e.y)},unscaleBy:function(e){return new np(this.x/e.x,this.y/e.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=sp(this.x),this.y=sp(this.y),this},distanceTo:function(e){var t=(e=rp(e)).x-this.x,i=e.y-this.y;return Math.sqrt(t*t+i*i)},equals:function(e){return(e=rp(e)).x===this.x&&e.y===this.y},contains:function(e){return e=rp(e),Math.abs(e.x)<=Math.abs(this.x)&&Math.abs(e.y)<=Math.abs(this.y)},toString:function(){return"Point("+Fh(this.x)+", "+Fh(this.y)+")"}},ap.prototype={extend:function(e){var t,i;if(!e)return this;if(e instanceof np||"number"==typeof e[0]||"x"in e)t=i=rp(e);else if(t=(e=lp(e)).min,i=e.max,!t||!i)return this;return this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(i.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(i.y,this.max.y)):(this.min=t.clone(),this.max=i.clone()),this},getCenter:function(e){return rp((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,e)},getBottomLeft:function(){return rp(this.min.x,this.max.y)},getTopRight:function(){return rp(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(e){var t,i;return(e="number"==typeof e[0]||e instanceof np?rp(e):lp(e))instanceof ap?(t=e.min,i=e.max):t=i=e,t.x>=this.min.x&&i.x<=this.max.x&&t.y>=this.min.y&&i.y<=this.max.y},intersects:function(e){e=lp(e);var t=this.min,i=this.max,o=e.min,n=e.max,s=n.x>=t.x&&o.x<=i.x,r=n.y>=t.y&&o.y<=i.y;return s&&r},overlaps:function(e){e=lp(e);var t=this.min,i=this.max,o=e.min,n=e.max,s=n.x>t.x&&o.x<i.x,r=n.y>t.y&&o.y<i.y;return s&&r},isValid:function(){return!(!this.min||!this.max)},pad:function(e){var t=this.min,i=this.max,o=Math.abs(t.x-i.x)*e,n=Math.abs(t.y-i.y)*e;return lp(rp(t.x-o,t.y-n),rp(i.x+o,i.y+n))},equals:function(e){return!!e&&(e=lp(e),this.min.equals(e.getTopLeft())&&this.max.equals(e.getBottomRight()))}},dp.prototype={extend:function(e){var t,i,o=this._southWest,n=this._northEast;if(e instanceof hp)t=e,i=e;else{if(!(e instanceof dp))return e?this.extend(pp(e)||cp(e)):this;if(t=e._southWest,i=e._northEast,!t||!i)return this}return o||n?(o.lat=Math.min(t.lat,o.lat),o.lng=Math.min(t.lng,o.lng),n.lat=Math.max(i.lat,n.lat),n.lng=Math.max(i.lng,n.lng)):(this._southWest=new hp(t.lat,t.lng),this._northEast=new hp(i.lat,i.lng)),this},pad:function(e){var t=this._southWest,i=this._northEast,o=Math.abs(t.lat-i.lat)*e,n=Math.abs(t.lng-i.lng)*e;return new dp(new hp(t.lat-o,t.lng-n),new hp(i.lat+o,i.lng+n))},getCenter:function(){return new hp((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new hp(this.getNorth(),this.getWest())},getSouthEast:function(){return new hp(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(e){e="number"==typeof e[0]||e instanceof hp||"lat"in e?pp(e):cp(e);var t,i,o=this._southWest,n=this._northEast;return e instanceof dp?(t=e.getSouthWest(),i=e.getNorthEast()):t=i=e,t.lat>=o.lat&&i.lat<=n.lat&&t.lng>=o.lng&&i.lng<=n.lng},intersects:function(e){e=cp(e);var t=this._southWest,i=this._northEast,o=e.getSouthWest(),n=e.getNorthEast(),s=n.lat>=t.lat&&o.lat<=i.lat,r=n.lng>=t.lng&&o.lng<=i.lng;return s&&r},overlaps:function(e){e=cp(e);var t=this._southWest,i=this._northEast,o=e.getSouthWest(),n=e.getNorthEast(),s=n.lat>t.lat&&o.lat<i.lat,r=n.lng>t.lng&&o.lng<i.lng;return s&&r},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(e,t){return!!e&&(e=cp(e),this._southWest.equals(e.getSouthWest(),t)&&this._northEast.equals(e.getNorthEast(),t))},isValid:function(){return!(!this._southWest||!this._northEast)}},hp.prototype={equals:function(e,t){return!!e&&(e=pp(e),Math.max(Math.abs(this.lat-e.lat),Math.abs(this.lng-e.lng))<=(void 0===t?1e-9:t))},toString:function(e){return"LatLng("+Fh(this.lat,e)+", "+Fh(this.lng,e)+")"},distanceTo:function(e){return gp.distance(this,pp(e))},wrap:function(){return gp.wrapLatLng(this)},toBounds:function(e){var t=180*e/40075017,i=t/Math.cos(Math.PI/180*this.lat);return cp([this.lat-t,this.lng-i],[this.lat+t,this.lng+i])},clone:function(){return new hp(this.lat,this.lng,this.alt)}};var up,mp={latLngToPoint:function(e,t){var i=this.projection.project(e),o=this.scale(t);return this.transformation._transform(i,o)},pointToLatLng:function(e,t){var i=this.scale(t),o=this.transformation.untransform(e,i);return this.projection.unproject(o)},project:function(e){return this.projection.project(e)},unproject:function(e){return this.projection.unproject(e)},scale:function(e){return 256*Math.pow(2,e)},zoom:function(e){return Math.log(e/256)/Math.LN2},getProjectedBounds:function(e){if(this.infinite)return null;var t=this.projection.bounds,i=this.scale(e);return new ap(this.transformation.transform(t.min,i),this.transformation.transform(t.max,i))},infinite:!1,wrapLatLng:function(e){var t=this.wrapLng?Bh(e.lng,this.wrapLng,!0):e.lng;return new hp(this.wrapLat?Bh(e.lat,this.wrapLat,!0):e.lat,t,e.alt)},wrapLatLngBounds:function(e){var t=e.getCenter(),i=this.wrapLatLng(t),o=t.lat-i.lat,n=t.lng-i.lng;if(0===o&&0===n)return e;var s=e.getSouthWest(),r=e.getNorthEast();return new dp(new hp(s.lat-o,s.lng-n),new hp(r.lat-o,r.lng-n))}},gp=Eh({},mp,{wrapLng:[-180,180],R:6371e3,distance:function(e,t){var i=Math.PI/180,o=e.lat*i,n=t.lat*i,s=Math.sin((t.lat-e.lat)*i/2),r=Math.sin((t.lng-e.lng)*i/2),a=s*s+Math.cos(o)*Math.cos(n)*r*r,l=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));return this.R*l}}),vp=6378137,fp={R:vp,MAX_LATITUDE:85.0511287798,project:function(e){var t=Math.PI/180,i=this.MAX_LATITUDE,o=Math.max(Math.min(i,e.lat),-i),n=Math.sin(o*t);return new np(this.R*e.lng*t,this.R*Math.log((1+n)/(1-n))/2)},unproject:function(e){var t=180/Math.PI;return new hp((2*Math.atan(Math.exp(e.y/this.R))-Math.PI/2)*t,e.x*t/this.R)},bounds:(up=vp*Math.PI,new ap([-up,-up],[up,up]))};function _p(e,t,i,o){if(Vh(e))return this._a=e[0],this._b=e[1],this._c=e[2],void(this._d=e[3]);this._a=e,this._b=t,this._c=i,this._d=o}function yp(e,t,i,o){return new _p(e,t,i,o)}_p.prototype={transform:function(e,t){return this._transform(e.clone(),t)},_transform:function(e,t){return t=t||1,e.x=t*(this._a*e.x+this._b),e.y=t*(this._c*e.y+this._d),e},untransform:function(e,t){return t=t||1,new np((e.x/t-this._b)/this._a,(e.y/t-this._d)/this._c)}};var bp,xp=Eh({},gp,{code:"EPSG:3857",projection:fp,transformation:(bp=.5/(Math.PI*fp.R),yp(bp,.5,-bp,.5))}),wp=Eh({},xp,{code:"EPSG:900913"});function kp(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function $p(e,t){var i,o,n,s,r,a,l="";for(i=0,n=e.length;i<n;i++){for(o=0,s=(r=e[i]).length;o<s;o++)l+=(o?"L":"M")+(a=r[o]).x+" "+a.y;l+=t?tu.svg?"z":"x":""}return l||"M0 0"}var Sp=document.documentElement.style,Cp="ActiveXObject"in window,Mp=Cp&&!document.addEventListener,zp="msLaunchUri"in navigator&&!("documentMode"in document),Tp=(eu("webkit"),eu("android")),Pp=eu("android 2")||eu("android 3"),Ap=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10);Tp&&eu("Google")&&Ap<537&&window;var Lp=!!window.opera,Ep=!zp&&eu("chrome");eu("gecko");var Ip=!Ep&&eu("safari"),Op=eu("phantom"),Rp="OTransition"in Sp;navigator.platform.indexOf("Win");var Dp,Bp=Cp&&"transition"in Sp,Np="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Pp,Fp="MozPerspective"in Sp,qp=!window.L_DISABLE_3D&&(Bp||Np||Fp)&&!Rp&&!Op,Hp="undefined"!=typeof orientation||eu("mobile"),jp=!window.PointerEvent&&window.MSPointerEvent,Zp=!(!window.PointerEvent&&!jp),Vp="ontouchstart"in window||!!window.TouchEvent,Kp=!window.L_NO_TOUCH&&(Vp||Zp),Up=Hp&&Lp,Wp=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Gp=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassiveEventSupport",Nh,t),window.removeEventListener("testPassiveEventSupport",Nh,t)}catch(e){}return e}(),Xp=!!document.createElement("canvas").getContext,Yp=!(!document.createElementNS||!kp("svg").createSVGRect),Jp=!!Yp&&((Dp=document.createElement("div")).innerHTML="<svg/>","http://www.w3.org/2000/svg"===(Dp.firstChild&&Dp.firstChild.namespaceURI)),Qp=!Yp&&function(){try{var e=document.createElement("div");e.innerHTML='<v:shape adj="1"/>';var t=e.firstChild;return t.style.behavior="url(#default#VML)",t&&"object"==typeof t.adj}catch(e){return!1}}();function eu(e){return navigator.userAgent.toLowerCase().indexOf(e)>=0}var tu={ielt9:Mp,edge:zp,chrome:Ep,safari:Ip,ie3d:Bp,any3d:qp,mobile:Hp,msPointer:jp,pointer:Zp,touch:Kp,touchNative:Vp,mobileOpera:Up,retina:Wp,passiveEvents:Gp,canvas:Xp,svg:Yp,vml:Qp,inlineSvg:Jp,mac:0===navigator.platform.indexOf("Mac"),linux:0===navigator.platform.indexOf("Linux")},iu=tu.msPointer?"MSPointerDown":"pointerdown",ou=tu.msPointer?"MSPointerMove":"pointermove",nu=tu.msPointer?"MSPointerUp":"pointerup",su=tu.msPointer?"MSPointerCancel":"pointercancel",ru={touchstart:iu,touchmove:ou,touchend:nu,touchcancel:su},au={touchstart:function(e,t){t.MSPOINTER_TYPE_TOUCH&&t.pointerType===t.MSPOINTER_TYPE_TOUCH&&em(t),uu(e,t)},touchmove:uu,touchend:uu,touchcancel:uu},lu={},du=!1;function cu(e){lu[e.pointerId]=e}function hu(e){lu[e.pointerId]&&(lu[e.pointerId]=e)}function pu(e){delete lu[e.pointerId]}function uu(e,t){if(t.pointerType!==(t.MSPOINTER_TYPE_MOUSE||"mouse")){for(var i in t.touches=[],lu)t.touches.push(lu[i]);t.changedTouches=[t],e(t)}}var mu,gu,vu,fu,_u,yu=Iu(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),bu=Iu(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),xu="webkitTransition"===bu||"OTransition"===bu?bu+"End":"transitionend";function wu(e,t){var i=e.style[t]||e.currentStyle&&e.currentStyle[t];if((!i||"auto"===i)&&document.defaultView){var o=document.defaultView.getComputedStyle(e,null);i=o?o[t]:null}return"auto"===i?null:i}function ku(e,t,i){var o=document.createElement(e);return o.className=t||"",i&&i.appendChild(o),o}function $u(e){var t=e.parentNode;t&&t.removeChild(e)}function Su(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function Cu(e){var t=e.parentNode;t&&t.lastChild!==e&&t.appendChild(e)}function Mu(e){var t=e.parentNode;t&&t.firstChild!==e&&t.insertBefore(e,t.firstChild)}function zu(e,t){if(void 0!==e.classList)return e.classList.contains(t);var i=Lu(e);return i.length>0&&new RegExp("(^|\\s)"+t+"(\\s|$)").test(i)}function Tu(e,t){if(void 0!==e.classList)for(var i=Hh(t),o=0,n=i.length;o<n;o++)e.classList.add(i[o]);else if(!zu(e,t)){var s=Lu(e);Au(e,(s?s+" ":"")+t)}}function Pu(e,t){void 0!==e.classList?e.classList.remove(t):Au(e,qh((" "+Lu(e)+" ").replace(" "+t+" "," ")))}function Au(e,t){void 0===e.className.baseVal?e.className=t:e.className.baseVal=t}function Lu(e){return e.correspondingElement&&(e=e.correspondingElement),void 0===e.className.baseVal?e.className:e.className.baseVal}function Eu(e,t){"opacity"in e.style?e.style.opacity=t:"filter"in e.style&&function(e,t){var i=!1,o="DXImageTransform.Microsoft.Alpha";try{i=e.filters.item(o)}catch(e){if(1===t)return}t=Math.round(100*t),i?(i.Enabled=100!==t,i.Opacity=t):e.style.filter+=" progid:"+o+"(opacity="+t+")"}(e,t)}function Iu(e){for(var t=document.documentElement.style,i=0;i<e.length;i++)if(e[i]in t)return e[i];return!1}function Ou(e,t,i){var o=t||new np(0,0);e.style[yu]=(tu.ie3d?"translate("+o.x+"px,"+o.y+"px)":"translate3d("+o.x+"px,"+o.y+"px,0)")+(i?" scale("+i+")":"")}function Ru(e,t){e._leaflet_pos=t,tu.any3d?Ou(e,t):(e.style.left=t.x+"px",e.style.top=t.y+"px")}function Du(e){return e._leaflet_pos||new np(0,0)}if("onselectstart"in document)mu=function(){Zu(window,"selectstart",em)},gu=function(){Ku(window,"selectstart",em)};else{var Bu=Iu(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);mu=function(){if(Bu){var e=document.documentElement.style;vu=e[Bu],e[Bu]="none"}},gu=function(){Bu&&(document.documentElement.style[Bu]=vu,vu=void 0)}}function Nu(){Zu(window,"dragstart",em)}function Fu(){Ku(window,"dragstart",em)}function qu(e){for(;-1===e.tabIndex;)e=e.parentNode;e.style&&(Hu(),fu=e,_u=e.style.outlineStyle,e.style.outlineStyle="none",Zu(window,"keydown",Hu))}function Hu(){fu&&(fu.style.outlineStyle=_u,fu=void 0,_u=void 0,Ku(window,"keydown",Hu))}function ju(e){var t=e.getBoundingClientRect();return{x:t.width/e.offsetWidth||1,y:t.height/e.offsetHeight||1,boundingClientRect:t}}function Zu(e,t,i,o){if(t&&"object"==typeof t)for(var n in t)Gu(e,n,t[n],i);else for(var s=0,r=(t=Hh(t)).length;s<r;s++)Gu(e,t[s],i,o);return this}var Vu="_leaflet_events";function Ku(e,t,i,o){if(1===arguments.length)Uu(e),delete e[Vu];else if(t&&"object"==typeof t)for(var n in t)Xu(e,n,t[n],i);else if(t=Hh(t),2===arguments.length)Uu(e,function(e){return-1!==Kh(t,e)});else for(var s=0,r=t.length;s<r;s++)Xu(e,t[s],i,o);return this}function Uu(e,t){for(var i in e[Vu]){var o=i.split(/\d/)[0];t&&!t(o)||Xu(e,o,null,null,i)}}var Wu={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Gu(e,t,i,o){var n=t+Dh(i)+(o?"_"+Dh(o):"");if(e[Vu]&&e[Vu][n])return this;var s=function(t){return i.call(o||e,t||window.event)},r=s;!tu.touchNative&&tu.pointer&&0===t.indexOf("touch")?s=function(e,t,i){return"touchstart"===t&&(du||(document.addEventListener(iu,cu,!0),document.addEventListener(ou,hu,!0),document.addEventListener(nu,pu,!0),document.addEventListener(su,pu,!0),du=!0)),au[t]?(i=au[t].bind(this,i),e.addEventListener(ru[t],i,!1),i):(console.warn("wrong event specified:",t),Nh)}(e,t,s):tu.touch&&"dblclick"===t?s=function(e,t){e.addEventListener("dblclick",t);var i,o=0;function n(e){if(1===e.detail){if("mouse"!==e.pointerType&&(!e.sourceCapabilities||e.sourceCapabilities.firesTouchEvents)){var n=function(e){if(e.composedPath)return e.composedPath();for(var t=[],i=e.target;i;)t.push(i),i=i.parentNode;return t}(e);if(!n.some(function(e){return e instanceof HTMLLabelElement&&e.attributes.for})||n.some(function(e){return e instanceof HTMLInputElement||e instanceof HTMLSelectElement})){var s=Date.now();s-o<=200?2===++i&&t(function(e){var t,i,o={};for(i in e)t=e[i],o[i]=t&&t.bind?t.bind(e):t;return e=o,o.type="dblclick",o.detail=2,o.isTrusted=!1,o._simulated=!0,o}(e)):i=1,o=s}}}else i=e.detail}return e.addEventListener("click",n),{dblclick:t,simDblclick:n}}(e,s):"addEventListener"in e?"touchstart"===t||"touchmove"===t||"wheel"===t||"mousewheel"===t?e.addEventListener(Wu[t]||t,s,!!tu.passiveEvents&&{passive:!1}):"mouseenter"===t||"mouseleave"===t?(s=function(t){t=t||window.event,om(e,t)&&r(t)},e.addEventListener(Wu[t],s,!1)):e.addEventListener(t,r,!1):e.attachEvent("on"+t,s),e[Vu]=e[Vu]||{},e[Vu][n]=s}function Xu(e,t,i,o,n){n=n||t+Dh(i)+(o?"_"+Dh(o):"");var s=e[Vu]&&e[Vu][n];if(!s)return this;!tu.touchNative&&tu.pointer&&0===t.indexOf("touch")?function(e,t,i){ru[t]?e.removeEventListener(ru[t],i,!1):console.warn("wrong event specified:",t)}(e,t,s):tu.touch&&"dblclick"===t?function(e,t){e.removeEventListener("dblclick",t.dblclick),e.removeEventListener("click",t.simDblclick)}(e,s):"removeEventListener"in e?e.removeEventListener(Wu[t]||t,s,!1):e.detachEvent("on"+t,s),e[Vu][n]=null}function Yu(e){return e.stopPropagation?e.stopPropagation():e.originalEvent?e.originalEvent._stopped=!0:e.cancelBubble=!0,this}function Ju(e){return Gu(e,"wheel",Yu),this}function Qu(e){return Zu(e,"mousedown touchstart dblclick contextmenu",Yu),e._leaflet_disable_click=!0,this}function em(e){return e.preventDefault?e.preventDefault():e.returnValue=!1,this}function tm(e){return em(e),Yu(e),this}var im=tu.linux&&tu.chrome?window.devicePixelRatio:tu.mac?3*window.devicePixelRatio:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function om(e,t){var i=t.relatedTarget;if(!i)return!0;try{for(;i&&i!==e;)i=i.parentNode}catch(e){return!1}return i!==e}var nm=op.extend({run:function(e,t,i,o){this.stop(),this._el=e,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(o||.5,.2),this._startPos=Du(e),this._offset=t.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=Qh(this._animate,this),this._step()},_step:function(e){var t=+new Date-this._startTime,i=1e3*this._duration;t<i?this._runFrame(this._easeOut(t/i),e):(this._runFrame(1),this._complete())},_runFrame:function(e,t){var i=this._startPos.add(this._offset.multiplyBy(e));t&&i._round(),Ru(this._el,i),this.fire("step")},_complete:function(){ep(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(e){return 1-Math.pow(1-e,this._easeOutPower)}}),sm=op.extend({options:{crs:xp,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(e,t){t=jh(this,t),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(e),this._initLayout(),this._onResize=Oh(this._onResize,this),this._initEvents(),t.maxBounds&&this.setMaxBounds(t.maxBounds),void 0!==t.zoom&&(this._zoom=this._limitZoom(t.zoom)),t.center&&void 0!==t.zoom&&this.setView(pp(t.center),t.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=bu&&tu.any3d&&!tu.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),Zu(this._proxy,xu,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(e,t,i){return t=void 0===t?this._zoom:this._limitZoom(t),e=this._limitCenter(pp(e),t,this.options.maxBounds),i=i||{},this._stop(),this._loaded&&!i.reset&&!0!==i&&(void 0!==i.animate&&(i.zoom=Eh({animate:i.animate},i.zoom),i.pan=Eh({animate:i.animate,duration:i.duration},i.pan)),this._zoom!==t?this._tryAnimatedZoom&&this._tryAnimatedZoom(e,t,i.zoom):this._tryAnimatedPan(e,i.pan))?(clearTimeout(this._sizeTimer),this):(this._resetView(e,t,i.pan&&i.pan.noMoveStart),this)},setZoom:function(e,t){return this._loaded?this.setView(this.getCenter(),e,{zoom:t}):(this._zoom=e,this)},zoomIn:function(e,t){return e=e||(tu.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+e,t)},zoomOut:function(e,t){return e=e||(tu.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-e,t)},setZoomAround:function(e,t,i){var o=this.getZoomScale(t),n=this.getSize().divideBy(2),s=(e instanceof np?e:this.latLngToContainerPoint(e)).subtract(n).multiplyBy(1-1/o),r=this.containerPointToLatLng(n.add(s));return this.setView(r,t,{zoom:i})},_getBoundsCenterZoom:function(e,t){t=t||{},e=e.getBounds?e.getBounds():cp(e);var i=rp(t.paddingTopLeft||t.padding||[0,0]),o=rp(t.paddingBottomRight||t.padding||[0,0]),n=this.getBoundsZoom(e,!1,i.add(o));if((n="number"==typeof t.maxZoom?Math.min(t.maxZoom,n):n)===1/0)return{center:e.getCenter(),zoom:n};var s=o.subtract(i).divideBy(2),r=this.project(e.getSouthWest(),n),a=this.project(e.getNorthEast(),n);return{center:this.unproject(r.add(a).divideBy(2).add(s),n),zoom:n}},fitBounds:function(e,t){if(!(e=cp(e)).isValid())throw new Error("Bounds are not valid.");var i=this._getBoundsCenterZoom(e,t);return this.setView(i.center,i.zoom,t)},fitWorld:function(e){return this.fitBounds([[-90,-180],[90,180]],e)},panTo:function(e,t){return this.setView(e,this._zoom,{pan:t})},panBy:function(e,t){if(t=t||{},!(e=rp(e).round()).x&&!e.y)return this.fire("moveend");if(!0!==t.animate&&!this.getSize().contains(e))return this._resetView(this.unproject(this.project(this.getCenter()).add(e)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new nm,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),t.noMoveStart||this.fire("movestart"),!1!==t.animate){Tu(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(e).round();this._panAnim.run(this._mapPane,i,t.duration||.25,t.easeLinearity)}else this._rawPanBy(e),this.fire("move").fire("moveend");return this},flyTo:function(e,t,i){if(!1===(i=i||{}).animate||!tu.any3d)return this.setView(e,t,i);this._stop();var o=this.project(this.getCenter()),n=this.project(e),s=this.getSize(),r=this._zoom;e=pp(e),t=void 0===t?r:t;var a=Math.max(s.x,s.y),l=a*this.getZoomScale(r,t),d=n.distanceTo(o)||1,c=1.42,h=2.0164;function p(e){var t=(l*l-a*a+(e?-1:1)*h*h*d*d)/(2*(e?l:a)*h*d),i=Math.sqrt(t*t+1)-t;return i<1e-9?-18:Math.log(i)}function u(e){return(Math.exp(e)-Math.exp(-e))/2}function m(e){return(Math.exp(e)+Math.exp(-e))/2}var g=p(0);var v=Date.now(),f=(p(1)-g)/c,_=i.duration?1e3*i.duration:1e3*f*.8;return this._moveStart(!0,i.noMoveStart),function i(){var s=(Date.now()-v)/_,l=function(e){return 1-Math.pow(1-e,1.5)}(s)*f;s<=1?(this._flyToFrame=Qh(i,this),this._move(this.unproject(o.add(n.subtract(o).multiplyBy(function(e){return a*(m(g)*function(e){return u(e)/m(e)}(g+c*e)-u(g))/h}(l)/d)),r),this.getScaleZoom(a/function(e){return a*(m(g)/m(g+c*e))}(l),r),{flyTo:!0})):this._move(e,t)._moveEnd(!0)}.call(this),this},flyToBounds:function(e,t){var i=this._getBoundsCenterZoom(e,t);return this.flyTo(i.center,i.zoom,t)},setMaxBounds:function(e){return e=cp(e),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),e.isValid()?(this.options.maxBounds=e,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(e){var t=this.options.minZoom;return this.options.minZoom=e,this._loaded&&t!==e&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(e):this},setMaxZoom:function(e){var t=this.options.maxZoom;return this.options.maxZoom=e,this._loaded&&t!==e&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(e):this},panInsideBounds:function(e,t){this._enforcingBounds=!0;var i=this.getCenter(),o=this._limitCenter(i,this._zoom,cp(e));return i.equals(o)||this.panTo(o,t),this._enforcingBounds=!1,this},panInside:function(e,t){var i=rp((t=t||{}).paddingTopLeft||t.padding||[0,0]),o=rp(t.paddingBottomRight||t.padding||[0,0]),n=this.project(this.getCenter()),s=this.project(e),r=this.getPixelBounds(),a=lp([r.min.add(i),r.max.subtract(o)]),l=a.getSize();if(!a.contains(s)){this._enforcingBounds=!0;var d=s.subtract(a.getCenter()),c=a.extend(s).getSize().subtract(l);n.x+=d.x<0?-c.x:c.x,n.y+=d.y<0?-c.y:c.y,this.panTo(this.unproject(n),t),this._enforcingBounds=!1}return this},invalidateSize:function(e){if(!this._loaded)return this;e=Eh({animate:!1,pan:!0},!0===e?{animate:!0}:e);var t=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var i=this.getSize(),o=t.divideBy(2).round(),n=i.divideBy(2).round(),s=o.subtract(n);return s.x||s.y?(e.animate&&e.pan?this.panBy(s):(e.pan&&this._rawPanBy(s),this.fire("move"),e.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(Oh(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:t,newSize:i})):this},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(e){if(e=this._locateOptions=Eh({timeout:1e4,watch:!1},e),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var t=Oh(this._handleGeolocationResponse,this),i=Oh(this._handleGeolocationError,this);return e.watch?this._locationWatchId=navigator.geolocation.watchPosition(t,i,e):navigator.geolocation.getCurrentPosition(t,i,e),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(e){if(this._container._leaflet_id){var t=e.code,i=e.message||(1===t?"permission denied":2===t?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:t,message:"Geolocation error: "+i+"."})}},_handleGeolocationResponse:function(e){if(this._container._leaflet_id){var t=new hp(e.coords.latitude,e.coords.longitude),i=t.toBounds(2*e.coords.accuracy),o=this._locateOptions;if(o.setView){var n=this.getBoundsZoom(i);this.setView(t,o.maxZoom?Math.min(n,o.maxZoom):n)}var s={latlng:t,bounds:i,timestamp:e.timestamp};for(var r in e.coords)"number"==typeof e.coords[r]&&(s[r]=e.coords[r]);this.fire("locationfound",s)}},addHandler:function(e,t){if(!t)return this;var i=this[e]=new t(this);return this._handlers.push(i),this.options[e]&&i.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch(e){this._container._leaflet_id=void 0,this._containerId=void 0}var e;for(e in void 0!==this._locationWatchId&&this.stopLocate(),this._stop(),$u(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(ep(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload"),this._layers)this._layers[e].remove();for(e in this._panes)$u(this._panes[e]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(e,t){var i=ku("div","leaflet-pane"+(e?" leaflet-"+e.replace("Pane","")+"-pane":""),t||this._mapPane);return e&&(this._panes[e]=i),i},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var e=this.getPixelBounds();return new dp(this.unproject(e.getBottomLeft()),this.unproject(e.getTopRight()))},getMinZoom:function(){return void 0===this.options.minZoom?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return void 0===this.options.maxZoom?void 0===this._layersMaxZoom?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(e,t,i){e=cp(e),i=rp(i||[0,0]);var o=this.getZoom()||0,n=this.getMinZoom(),s=this.getMaxZoom(),r=e.getNorthWest(),a=e.getSouthEast(),l=this.getSize().subtract(i),d=lp(this.project(a,o),this.project(r,o)).getSize(),c=tu.any3d?this.options.zoomSnap:1,h=l.x/d.x,p=l.y/d.y,u=t?Math.max(h,p):Math.min(h,p);return o=this.getScaleZoom(u,o),c&&(o=Math.round(o/(c/100))*(c/100),o=t?Math.ceil(o/c)*c:Math.floor(o/c)*c),Math.max(n,Math.min(s,o))},getSize:function(){return this._size&&!this._sizeChanged||(this._size=new np(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(e,t){var i=this._getTopLeftPoint(e,t);return new ap(i,i.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(e){return this.options.crs.getProjectedBounds(void 0===e?this.getZoom():e)},getPane:function(e){return"string"==typeof e?this._panes[e]:e},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(e,t){var i=this.options.crs;return t=void 0===t?this._zoom:t,i.scale(e)/i.scale(t)},getScaleZoom:function(e,t){var i=this.options.crs;t=void 0===t?this._zoom:t;var o=i.zoom(e*i.scale(t));return isNaN(o)?1/0:o},project:function(e,t){return t=void 0===t?this._zoom:t,this.options.crs.latLngToPoint(pp(e),t)},unproject:function(e,t){return t=void 0===t?this._zoom:t,this.options.crs.pointToLatLng(rp(e),t)},layerPointToLatLng:function(e){var t=rp(e).add(this.getPixelOrigin());return this.unproject(t)},latLngToLayerPoint:function(e){return this.project(pp(e))._round()._subtract(this.getPixelOrigin())},wrapLatLng:function(e){return this.options.crs.wrapLatLng(pp(e))},wrapLatLngBounds:function(e){return this.options.crs.wrapLatLngBounds(cp(e))},distance:function(e,t){return this.options.crs.distance(pp(e),pp(t))},containerPointToLayerPoint:function(e){return rp(e).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(e){return rp(e).add(this._getMapPanePos())},containerPointToLatLng:function(e){var t=this.containerPointToLayerPoint(rp(e));return this.layerPointToLatLng(t)},latLngToContainerPoint:function(e){return this.layerPointToContainerPoint(this.latLngToLayerPoint(pp(e)))},mouseEventToContainerPoint:function(e){return function(e,t){if(!t)return new np(e.clientX,e.clientY);var i=ju(t),o=i.boundingClientRect;return new np((e.clientX-o.left)/i.x-t.clientLeft,(e.clientY-o.top)/i.y-t.clientTop)}(e,this._container)},mouseEventToLayerPoint:function(e){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e))},mouseEventToLatLng:function(e){return this.layerPointToLatLng(this.mouseEventToLayerPoint(e))},_initContainer:function(e){var t=this._container=function(e){return"string"==typeof e?document.getElementById(e):e}(e);if(!t)throw new Error("Map container not found.");if(t._leaflet_id)throw new Error("Map container is already initialized.");Zu(t,"scroll",this._onScroll,this),this._containerId=Dh(t)},_initLayout:function(){var e=this._container;this._fadeAnimated=this.options.fadeAnimation&&tu.any3d,Tu(e,"leaflet-container"+(tu.touch?" leaflet-touch":"")+(tu.retina?" leaflet-retina":"")+(tu.ielt9?" leaflet-oldie":"")+(tu.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var t=wu(e,"position");"absolute"!==t&&"relative"!==t&&"fixed"!==t&&"sticky"!==t&&(e.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var e=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Ru(this._mapPane,new np(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Tu(e.markerPane,"leaflet-zoom-hide"),Tu(e.shadowPane,"leaflet-zoom-hide"))},_resetView:function(e,t,i){Ru(this._mapPane,new np(0,0));var o=!this._loaded;this._loaded=!0,t=this._limitZoom(t),this.fire("viewprereset");var n=this._zoom!==t;this._moveStart(n,i)._move(e,t)._moveEnd(n),this.fire("viewreset"),o&&this.fire("load")},_moveStart:function(e,t){return e&&this.fire("zoomstart"),t||this.fire("movestart"),this},_move:function(e,t,i,o){void 0===t&&(t=this._zoom);var n=this._zoom!==t;return this._zoom=t,this._lastCenter=e,this._pixelOrigin=this._getNewPixelOrigin(e),o?i&&i.pinch&&this.fire("zoom",i):((n||i&&i.pinch)&&this.fire("zoom",i),this.fire("move",i)),this},_moveEnd:function(e){return e&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return ep(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(e){Ru(this._mapPane,this._getMapPanePos().subtract(e))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(e){this._targets={},this._targets[Dh(this._container)]=this;var t=e?Ku:Zu;t(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&t(window,"resize",this._onResize,this),tu.any3d&&this.options.transform3DLimit&&(e?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){ep(this._resizeRequest),this._resizeRequest=Qh(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var e=this._getMapPanePos();Math.max(Math.abs(e.x),Math.abs(e.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(e,t){for(var i,o=[],n="mouseout"===t||"mouseover"===t,s=e.target||e.srcElement,r=!1;s;){if((i=this._targets[Dh(s)])&&("click"===t||"preclick"===t)&&this._draggableMoved(i)){r=!0;break}if(i&&i.listens(t,!0)){if(n&&!om(s,e))break;if(o.push(i),n)break}if(s===this._container)break;s=s.parentNode}return o.length||r||n||!this.listens(t,!0)||(o=[this]),o},_isClickDisabled:function(e){for(;e&&e!==this._container;){if(e._leaflet_disable_click)return!0;e=e.parentNode}},_handleDOMEvent:function(e){var t=e.target||e.srcElement;if(!(!this._loaded||t._leaflet_disable_events||"click"===e.type&&this._isClickDisabled(t))){var i=e.type;"mousedown"===i&&qu(t),this._fireDOMEvent(e,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(e,t,i){if("click"===e.type){var o=Eh({},e);o.type="preclick",this._fireDOMEvent(o,o.type,i)}var n=this._findEventTargets(e,t);if(i){for(var s=[],r=0;r<i.length;r++)i[r].listens(t,!0)&&s.push(i[r]);n=s.concat(n)}if(n.length){"contextmenu"===t&&em(e);var a=n[0],l={originalEvent:e};if("keypress"!==e.type&&"keydown"!==e.type&&"keyup"!==e.type){var d=a.getLatLng&&(!a._radius||a._radius<=10);l.containerPoint=d?this.latLngToContainerPoint(a.getLatLng()):this.mouseEventToContainerPoint(e),l.layerPoint=this.containerPointToLayerPoint(l.containerPoint),l.latlng=d?a.getLatLng():this.layerPointToLatLng(l.layerPoint)}for(r=0;r<n.length;r++)if(n[r].fire(t,l,!0),l.originalEvent._stopped||!1===n[r].options.bubblingMouseEvents&&-1!==Kh(this._mouseEvents,t))return}},_draggableMoved:function(e){return(e=e.dragging&&e.dragging.enabled()?e:this).dragging&&e.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var e=0,t=this._handlers.length;e<t;e++)this._handlers[e].disable()},whenReady:function(e,t){return this._loaded?e.call(t||this,{target:this}):this.on("load",e,t),this},_getMapPanePos:function(){return Du(this._mapPane)||new np(0,0)},_moved:function(){var e=this._getMapPanePos();return e&&!e.equals([0,0])},_getTopLeftPoint:function(e,t){return(e&&void 0!==t?this._getNewPixelOrigin(e,t):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(e,t){var i=this.getSize()._divideBy(2);return this.project(e,t)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(e,t,i){var o=this._getNewPixelOrigin(i,t);return this.project(e,t)._subtract(o)},_latLngBoundsToNewLayerBounds:function(e,t,i){var o=this._getNewPixelOrigin(i,t);return lp([this.project(e.getSouthWest(),t)._subtract(o),this.project(e.getNorthWest(),t)._subtract(o),this.project(e.getSouthEast(),t)._subtract(o),this.project(e.getNorthEast(),t)._subtract(o)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(e){return this.latLngToLayerPoint(e).subtract(this._getCenterLayerPoint())},_limitCenter:function(e,t,i){if(!i)return e;var o=this.project(e,t),n=this.getSize().divideBy(2),s=new ap(o.subtract(n),o.add(n)),r=this._getBoundsOffset(s,i,t);return Math.abs(r.x)<=1&&Math.abs(r.y)<=1?e:this.unproject(o.add(r),t)},_limitOffset:function(e,t){if(!t)return e;var i=this.getPixelBounds(),o=new ap(i.min.add(e),i.max.add(e));return e.add(this._getBoundsOffset(o,t))},_getBoundsOffset:function(e,t,i){var o=lp(this.project(t.getNorthEast(),i),this.project(t.getSouthWest(),i)),n=o.min.subtract(e.min),s=o.max.subtract(e.max);return new np(this._rebound(n.x,-s.x),this._rebound(n.y,-s.y))},_rebound:function(e,t){return e+t>0?Math.round(e-t)/2:Math.max(0,Math.ceil(e))-Math.max(0,Math.floor(t))},_limitZoom:function(e){var t=this.getMinZoom(),i=this.getMaxZoom(),o=tu.any3d?this.options.zoomSnap:1;return o&&(e=Math.round(e/o)*o),Math.max(t,Math.min(i,e))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Pu(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(e,t){var i=this._getCenterOffset(e)._trunc();return!(!0!==(t&&t.animate)&&!this.getSize().contains(i)||(this.panBy(i,t),0))},_createAnimProxy:function(){var e=this._proxy=ku("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(e),this.on("zoomanim",function(e){var t=yu,i=this._proxy.style[t];Ou(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),i===this._proxy.style[t]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){$u(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var e=this.getCenter(),t=this.getZoom();Ou(this._proxy,this.project(e,t),this.getZoomScale(t,1))},_catchTransitionEnd:function(e){this._animatingZoom&&e.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(e,t,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||!1===i.animate||this._nothingToAnimate()||Math.abs(t-this._zoom)>this.options.zoomAnimationThreshold)return!1;var o=this.getZoomScale(t),n=this._getCenterOffset(e)._divideBy(1-1/o);return!(!0!==i.animate&&!this.getSize().contains(n)||(Qh(function(){this._moveStart(!0,i.noMoveStart||!1)._animateZoom(e,t,!0)},this),0))},_animateZoom:function(e,t,i,o){this._mapPane&&(i&&(this._animatingZoom=!0,this._animateToCenter=e,this._animateToZoom=t,Tu(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:e,zoom:t,noUpdate:o}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(Oh(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Pu(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}}),rm=tp.extend({options:{position:"topright"},initialize:function(e){jh(this,e)},getPosition:function(){return this.options.position},setPosition:function(e){var t=this._map;return t&&t.removeControl(this),this.options.position=e,t&&t.addControl(this),this},getContainer:function(){return this._container},addTo:function(e){this.remove(),this._map=e;var t=this._container=this.onAdd(e),i=this.getPosition(),o=e._controlCorners[i];return Tu(t,"leaflet-control"),-1!==i.indexOf("bottom")?o.insertBefore(t,o.firstChild):o.appendChild(t),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?($u(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(e){this._map&&e&&e.screenX>0&&e.screenY>0&&this._map.getContainer().focus()}});sm.include({addControl:function(e){return e.addTo(this),this},removeControl:function(e){return e.remove(),this},_initControlPos:function(){var e=this._controlCorners={},t="leaflet-",i=this._controlContainer=ku("div",t+"control-container",this._container);function o(o,n){var s=t+o+" "+t+n;e[o+n]=ku("div",s,i)}o("top","left"),o("top","right"),o("bottom","left"),o("bottom","right")},_clearControlPos:function(){for(var e in this._controlCorners)$u(this._controlCorners[e]);$u(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var am=rm.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(e,t,i,o){return i<o?-1:o<i?1:0}},initialize:function(e,t,i){for(var o in jh(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1,e)this._addLayer(e[o],o);for(o in t)this._addLayer(t[o],o,!0)},onAdd:function(e){this._initLayout(),this._update(),this._map=e,e.on("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(e){return rm.prototype.addTo.call(this,e),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(e,t){return this._addLayer(e,t),this._map?this._update():this},addOverlay:function(e,t){return this._addLayer(e,t,!0),this._map?this._update():this},removeLayer:function(e){e.off("add remove",this._onLayerChange,this);var t=this._getLayer(Dh(e));return t&&this._layers.splice(this._layers.indexOf(t),1),this._map?this._update():this},expand:function(){Tu(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var e=this._map.getSize().y-(this._container.offsetTop+50);return e<this._section.clientHeight?(Tu(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=e+"px"):Pu(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Pu(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var e="leaflet-control-layers",t=this._container=ku("div",e),i=this.options.collapsed;t.setAttribute("aria-haspopup",!0),Qu(t),Ju(t);var o=this._section=ku("section",e+"-list");i&&(this._map.on("click",this.collapse,this),Zu(t,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var n=this._layersLink=ku("a",e+"-toggle",t);n.href="#",n.title="Layers",n.setAttribute("role","button"),Zu(n,{keydown:function(e){13===e.keyCode&&this._expandSafely()},click:function(e){em(e),this._expandSafely()}},this),i||this.expand(),this._baseLayersList=ku("div",e+"-base",o),this._separator=ku("div",e+"-separator",o),this._overlaysList=ku("div",e+"-overlays",o),t.appendChild(o)},_getLayer:function(e){for(var t=0;t<this._layers.length;t++)if(this._layers[t]&&Dh(this._layers[t].layer)===e)return this._layers[t]},_addLayer:function(e,t,i){this._map&&e.on("add remove",this._onLayerChange,this),this._layers.push({layer:e,name:t,overlay:i}),this.options.sortLayers&&this._layers.sort(Oh(function(e,t){return this.options.sortFunction(e.layer,t.layer,e.name,t.name)},this)),this.options.autoZIndex&&e.setZIndex&&(this._lastZIndex++,e.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Su(this._baseLayersList),Su(this._overlaysList),this._layerControlInputs=[];var e,t,i,o,n=0;for(i=0;i<this._layers.length;i++)o=this._layers[i],this._addItem(o),t=t||o.overlay,e=e||!o.overlay,n+=o.overlay?0:1;return this.options.hideSingleBase&&(e=e&&n>1,this._baseLayersList.style.display=e?"":"none"),this._separator.style.display=t&&e?"":"none",this},_onLayerChange:function(e){this._handlingClick||this._update();var t=this._getLayer(Dh(e.target)),i=t.overlay?"add"===e.type?"overlayadd":"overlayremove":"add"===e.type?"baselayerchange":null;i&&this._map.fire(i,t)},_createRadioElement:function(e,t){var i='<input type="radio" class="leaflet-control-layers-selector" name="'+e+'"'+(t?' checked="checked"':"")+"/>",o=document.createElement("div");return o.innerHTML=i,o.firstChild},_addItem:function(e){var t,i=document.createElement("label"),o=this._map.hasLayer(e.layer);e.overlay?((t=document.createElement("input")).type="checkbox",t.className="leaflet-control-layers-selector",t.defaultChecked=o):t=this._createRadioElement("leaflet-base-layers_"+Dh(this),o),this._layerControlInputs.push(t),t.layerId=Dh(e.layer),Zu(t,"click",this._onInputClick,this);var n=document.createElement("span");n.innerHTML=" "+e.name;var s=document.createElement("span");return i.appendChild(s),s.appendChild(t),s.appendChild(n),(e.overlay?this._overlaysList:this._baseLayersList).appendChild(i),this._checkDisabledLayers(),i},_onInputClick:function(){if(!this._preventClick){var e,t,i=this._layerControlInputs,o=[],n=[];this._handlingClick=!0;for(var s=i.length-1;s>=0;s--)e=i[s],t=this._getLayer(e.layerId).layer,e.checked?o.push(t):e.checked||n.push(t);for(s=0;s<n.length;s++)this._map.hasLayer(n[s])&&this._map.removeLayer(n[s]);for(s=0;s<o.length;s++)this._map.hasLayer(o[s])||this._map.addLayer(o[s]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var e,t,i=this._layerControlInputs,o=this._map.getZoom(),n=i.length-1;n>=0;n--)e=i[n],t=this._getLayer(e.layerId).layer,e.disabled=void 0!==t.options.minZoom&&o<t.options.minZoom||void 0!==t.options.maxZoom&&o>t.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var e=this._section;this._preventClick=!0,Zu(e,"click",em),this.expand();var t=this;setTimeout(function(){Ku(e,"click",em),t._preventClick=!1})}}),lm=rm.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(e){var t="leaflet-control-zoom",i=ku("div",t+" leaflet-bar"),o=this.options;return this._zoomInButton=this._createButton(o.zoomInText,o.zoomInTitle,t+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(o.zoomOutText,o.zoomOutTitle,t+"-out",i,this._zoomOut),this._updateDisabled(),e.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(e){e.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(e){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(e.shiftKey?3:1))},_zoomOut:function(e){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(e.shiftKey?3:1))},_createButton:function(e,t,i,o,n){var s=ku("a",i,o);return s.innerHTML=e,s.href="#",s.title=t,s.setAttribute("role","button"),s.setAttribute("aria-label",t),Qu(s),Zu(s,"click",tm),Zu(s,"click",n,this),Zu(s,"click",this._refocusOnMap,this),s},_updateDisabled:function(){var e=this._map,t="leaflet-disabled";Pu(this._zoomInButton,t),Pu(this._zoomOutButton,t),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||e._zoom===e.getMinZoom())&&(Tu(this._zoomOutButton,t),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||e._zoom===e.getMaxZoom())&&(Tu(this._zoomInButton,t),this._zoomInButton.setAttribute("aria-disabled","true"))}});sm.mergeOptions({zoomControl:!0}),sm.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new lm,this.addControl(this.zoomControl))});var dm=rm.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(e){var t="leaflet-control-scale",i=ku("div",t),o=this.options;return this._addScales(o,t+"-line",i),e.on(o.updateWhenIdle?"moveend":"move",this._update,this),e.whenReady(this._update,this),i},onRemove:function(e){e.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(e,t,i){e.metric&&(this._mScale=ku("div",t,i)),e.imperial&&(this._iScale=ku("div",t,i))},_update:function(){var e=this._map,t=e.getSize().y/2,i=e.distance(e.containerPointToLatLng([0,t]),e.containerPointToLatLng([this.options.maxWidth,t]));this._updateScales(i)},_updateScales:function(e){this.options.metric&&e&&this._updateMetric(e),this.options.imperial&&e&&this._updateImperial(e)},_updateMetric:function(e){var t=this._getRoundNum(e),i=t<1e3?t+" m":t/1e3+" km";this._updateScale(this._mScale,i,t/e)},_updateImperial:function(e){var t,i,o,n=3.2808399*e;n>5280?(t=n/5280,i=this._getRoundNum(t),this._updateScale(this._iScale,i+" mi",i/t)):(o=this._getRoundNum(n),this._updateScale(this._iScale,o+" ft",o/n))},_updateScale:function(e,t,i){e.style.width=Math.round(this.options.maxWidth*i)+"px",e.innerHTML=t},_getRoundNum:function(e){var t=Math.pow(10,(Math.floor(e)+"").length-1),i=e/t;return t*(i>=10?10:i>=5?5:i>=3?3:i>=2?2:1)}}),cm=rm.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(tu.inlineSvg?'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> ':"")+"Leaflet</a>"},initialize:function(e){jh(this,e),this._attributions={}},onAdd:function(e){for(var t in e.attributionControl=this,this._container=ku("div","leaflet-control-attribution"),Qu(this._container),e._layers)e._layers[t].getAttribution&&this.addAttribution(e._layers[t].getAttribution());return this._update(),e.on("layeradd",this._addAttribution,this),this._container},onRemove:function(e){e.off("layeradd",this._addAttribution,this)},_addAttribution:function(e){e.layer.getAttribution&&(this.addAttribution(e.layer.getAttribution()),e.layer.once("remove",function(){this.removeAttribution(e.layer.getAttribution())},this))},setPrefix:function(e){return this.options.prefix=e,this._update(),this},addAttribution:function(e){return e?(this._attributions[e]||(this._attributions[e]=0),this._attributions[e]++,this._update(),this):this},removeAttribution:function(e){return e?(this._attributions[e]&&(this._attributions[e]--,this._update()),this):this},_update:function(){if(this._map){var e=[];for(var t in this._attributions)this._attributions[t]&&e.push(t);var i=[];this.options.prefix&&i.push(this.options.prefix),e.length&&i.push(e.join(", ")),this._container.innerHTML=i.join(' <span aria-hidden="true">|</span> ')}}});sm.mergeOptions({attributionControl:!0}),sm.addInitHook(function(){this.options.attributionControl&&(new cm).addTo(this)}),rm.Layers=am,rm.Zoom=lm,rm.Scale=dm,rm.Attribution=cm;var hm=tp.extend({initialize:function(e){this._map=e},enable:function(){return this._enabled||(this._enabled=!0,this.addHooks()),this},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});hm.addTo=function(e,t){return e.addHandler(t,this),this};var pm,um=tu.touch?"touchstart mousedown":"mousedown",mm=op.extend({options:{clickTolerance:3},initialize:function(e,t,i,o){jh(this,o),this._element=e,this._dragStartTarget=t||e,this._preventOutline=i},enable:function(){this._enabled||(Zu(this._dragStartTarget,um,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(mm._dragging===this&&this.finishDrag(!0),Ku(this._dragStartTarget,um,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(e){if(this._enabled&&(this._moved=!1,!zu(this._element,"leaflet-zoom-anim")))if(e.touches&&1!==e.touches.length)mm._dragging===this&&this.finishDrag();else if(!(mm._dragging||e.shiftKey||1!==e.which&&1!==e.button&&!e.touches||(mm._dragging=this,this._preventOutline&&qu(this._element),Nu(),mu(),this._moving))){this.fire("down");var t=e.touches?e.touches[0]:e,i=function(e){do{e=e.parentNode}while(!(e.offsetWidth&&e.offsetHeight||e===document.body));return e}(this._element);this._startPoint=new np(t.clientX,t.clientY),this._startPos=Du(this._element),this._parentScale=ju(i);var o="mousedown"===e.type;Zu(document,o?"mousemove":"touchmove",this._onMove,this),Zu(document,o?"mouseup":"touchend touchcancel",this._onUp,this)}},_onMove:function(e){if(this._enabled)if(e.touches&&e.touches.length>1)this._moved=!0;else{var t=e.touches&&1===e.touches.length?e.touches[0]:e,i=new np(t.clientX,t.clientY)._subtract(this._startPoint);(i.x||i.y)&&(Math.abs(i.x)+Math.abs(i.y)<this.options.clickTolerance||(i.x/=this._parentScale.x,i.y/=this._parentScale.y,em(e),this._moved||(this.fire("dragstart"),this._moved=!0,Tu(document.body,"leaflet-dragging"),this._lastTarget=e.target||e.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Tu(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(i),this._moving=!0,this._lastEvent=e,this._updatePosition()))}},_updatePosition:function(){var e={originalEvent:this._lastEvent};this.fire("predrag",e),Ru(this._element,this._newPos),this.fire("drag",e)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(e){Pu(document.body,"leaflet-dragging"),this._lastTarget&&(Pu(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Ku(document,"mousemove touchmove",this._onMove,this),Ku(document,"mouseup touchend touchcancel",this._onUp,this),Fu(),gu();var t=this._moved&&this._moving;this._moving=!1,mm._dragging=!1,t&&this.fire("dragend",{noInertia:e,distance:this._newPos.distanceTo(this._startPos)})}});function gm(e,t,i){var o,n,s,r,a,l,d,c,h,p=[1,4,2,8];for(n=0,d=e.length;n<d;n++)e[n]._code=wm(e[n],t);for(r=0;r<4;r++){for(c=p[r],o=[],n=0,s=(d=e.length)-1;n<d;s=n++)a=e[n],l=e[s],a._code&c?l._code&c||((h=xm(l,a,c,t,i))._code=wm(h,t),o.push(h)):(l._code&c&&((h=xm(l,a,c,t,i))._code=wm(h,t),o.push(h)),o.push(a));e=o}return e}function vm(e){for(var t=0,i=0,o=0,n=0;n<e.length;n++){var s=pp(e[n]);t+=s.lat,i+=s.lng,o++}return pp([t/o,i/o])}function fm(e,t){if(!t||!e.length)return e.slice();var i=t*t;return e=function(e,t){for(var i=[e[0]],o=1,n=0,s=e.length;o<s;o++)km(e[o],e[n])>t&&(i.push(e[o]),n=o);return n<s-1&&i.push(e[s-1]),i}(e,i),e=function(e,t){var i=e.length,o=new(typeof Uint8Array!=void 0+""?Uint8Array:Array)(i);o[0]=o[i-1]=1,ym(e,o,t,0,i-1);var n,s=[];for(n=0;n<i;n++)o[n]&&s.push(e[n]);return s}(e,i),e}function _m(e,t,i){return Math.sqrt($m(e,t,i,!0))}function ym(e,t,i,o,n){var s,r,a,l=0;for(r=o+1;r<=n-1;r++)(a=$m(e[r],e[o],e[n],!0))>l&&(s=r,l=a);l>i&&(t[s]=1,ym(e,t,i,o,s),ym(e,t,i,s,n))}function bm(e,t,i,o,n){var s,r,a,l=o?pm:wm(e,i),d=wm(t,i);for(pm=d;;){if(!(l|d))return[e,t];if(l&d)return!1;a=wm(r=xm(e,t,s=l||d,i,n),i),s===l?(e=r,l=a):(t=r,d=a)}}function xm(e,t,i,o,n){var s,r,a=t.x-e.x,l=t.y-e.y,d=o.min,c=o.max;return 8&i?(s=e.x+a*(c.y-e.y)/l,r=c.y):4&i?(s=e.x+a*(d.y-e.y)/l,r=d.y):2&i?(s=c.x,r=e.y+l*(c.x-e.x)/a):1&i&&(s=d.x,r=e.y+l*(d.x-e.x)/a),new np(s,r,n)}function wm(e,t){var i=0;return e.x<t.min.x?i|=1:e.x>t.max.x&&(i|=2),e.y<t.min.y?i|=4:e.y>t.max.y&&(i|=8),i}function km(e,t){var i=t.x-e.x,o=t.y-e.y;return i*i+o*o}function $m(e,t,i,o){var n,s=t.x,r=t.y,a=i.x-s,l=i.y-r,d=a*a+l*l;return d>0&&((n=((e.x-s)*a+(e.y-r)*l)/d)>1?(s=i.x,r=i.y):n>0&&(s+=a*n,r+=l*n)),a=e.x-s,l=e.y-r,o?a*a+l*l:new np(s,r)}function Sm(e){return!Vh(e[0])||"object"!=typeof e[0][0]&&void 0!==e[0][0]}var Cm={project:function(e){return new np(e.lng,e.lat)},unproject:function(e){return new hp(e.y,e.x)},bounds:new ap([-180,-90],[180,90])},Mm={R:6378137,R_MINOR:6356752.314245179,bounds:new ap([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(e){var t=Math.PI/180,i=this.R,o=e.lat*t,n=this.R_MINOR/i,s=Math.sqrt(1-n*n),r=s*Math.sin(o),a=Math.tan(Math.PI/4-o/2)/Math.pow((1-r)/(1+r),s/2);return o=-i*Math.log(Math.max(a,1e-10)),new np(e.lng*t*i,o)},unproject:function(e){for(var t,i=180/Math.PI,o=this.R,n=this.R_MINOR/o,s=Math.sqrt(1-n*n),r=Math.exp(-e.y/o),a=Math.PI/2-2*Math.atan(r),l=0,d=.1;l<15&&Math.abs(d)>1e-7;l++)t=s*Math.sin(a),t=Math.pow((1-t)/(1+t),s/2),a+=d=Math.PI/2-2*Math.atan(r*t)-a;return new hp(a*i,e.x*i/o)}},zm=Eh({},gp,{code:"EPSG:3395",projection:Mm,transformation:function(){var e=.5/(Math.PI*Mm.R);return yp(e,.5,-e,.5)}()}),Tm=Eh({},gp,{code:"EPSG:4326",projection:Cm,transformation:yp(1/180,1,-1/180,.5)}),Pm=Eh({},mp,{projection:Cm,transformation:yp(1,0,-1,0),scale:function(e){return Math.pow(2,e)},zoom:function(e){return Math.log(e)/Math.LN2},distance:function(e,t){var i=t.lng-e.lng,o=t.lat-e.lat;return Math.sqrt(i*i+o*o)},infinite:!0});mp.Earth=gp,mp.EPSG3395=zm,mp.EPSG3857=xp,mp.EPSG900913=wp,mp.EPSG4326=Tm,mp.Simple=Pm;var Am=op.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(e){return e.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(e){return e&&e.removeLayer(this),this},getPane:function(e){return this._map.getPane(e?this.options[e]||e:this.options.pane)},addInteractiveTarget:function(e){return this._map._targets[Dh(e)]=this,this},removeInteractiveTarget:function(e){return delete this._map._targets[Dh(e)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(e){var t=e.target;if(t.hasLayer(this)){if(this._map=t,this._zoomAnimated=t._zoomAnimated,this.getEvents){var i=this.getEvents();t.on(i,this),this.once("remove",function(){t.off(i,this)},this)}this.onAdd(t),this.fire("add"),t.fire("layeradd",{layer:this})}}});sm.include({addLayer:function(e){if(!e._layerAdd)throw new Error("The provided object is not a Layer.");var t=Dh(e);return this._layers[t]||(this._layers[t]=e,e._mapToAdd=this,e.beforeAdd&&e.beforeAdd(this),this.whenReady(e._layerAdd,e)),this},removeLayer:function(e){var t=Dh(e);return this._layers[t]?(this._loaded&&e.onRemove(this),delete this._layers[t],this._loaded&&(this.fire("layerremove",{layer:e}),e.fire("remove")),e._map=e._mapToAdd=null,this):this},hasLayer:function(e){return Dh(e)in this._layers},eachLayer:function(e,t){for(var i in this._layers)e.call(t,this._layers[i]);return this},_addLayers:function(e){for(var t=0,i=(e=e?Vh(e)?e:[e]:[]).length;t<i;t++)this.addLayer(e[t])},_addZoomLimit:function(e){isNaN(e.options.maxZoom)&&isNaN(e.options.minZoom)||(this._zoomBoundLayers[Dh(e)]=e,this._updateZoomLevels())},_removeZoomLimit:function(e){var t=Dh(e);this._zoomBoundLayers[t]&&(delete this._zoomBoundLayers[t],this._updateZoomLevels())},_updateZoomLevels:function(){var e=1/0,t=-1/0,i=this._getZoomSpan();for(var o in this._zoomBoundLayers){var n=this._zoomBoundLayers[o].options;e=void 0===n.minZoom?e:Math.min(e,n.minZoom),t=void 0===n.maxZoom?t:Math.max(t,n.maxZoom)}this._layersMaxZoom=t===-1/0?void 0:t,this._layersMinZoom=e===1/0?void 0:e,i!==this._getZoomSpan()&&this.fire("zoomlevelschange"),void 0===this.options.maxZoom&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),void 0===this.options.minZoom&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Lm=Am.extend({initialize:function(e,t){var i,o;if(jh(this,t),this._layers={},e)for(i=0,o=e.length;i<o;i++)this.addLayer(e[i])},addLayer:function(e){var t=this.getLayerId(e);return this._layers[t]=e,this._map&&this._map.addLayer(e),this},removeLayer:function(e){var t=e in this._layers?e:this.getLayerId(e);return this._map&&this._layers[t]&&this._map.removeLayer(this._layers[t]),delete this._layers[t],this},hasLayer:function(e){return("number"==typeof e?e:this.getLayerId(e))in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(e){var t,i,o=Array.prototype.slice.call(arguments,1);for(t in this._layers)(i=this._layers[t])[e]&&i[e].apply(i,o);return this},onAdd:function(e){this.eachLayer(e.addLayer,e)},onRemove:function(e){this.eachLayer(e.removeLayer,e)},eachLayer:function(e,t){for(var i in this._layers)e.call(t,this._layers[i]);return this},getLayer:function(e){return this._layers[e]},getLayers:function(){var e=[];return this.eachLayer(e.push,e),e},setZIndex:function(e){return this.invoke("setZIndex",e)},getLayerId:function(e){return Dh(e)}}),Em=Lm.extend({addLayer:function(e){return this.hasLayer(e)?this:(e.addEventParent(this),Lm.prototype.addLayer.call(this,e),this.fire("layeradd",{layer:e}))},removeLayer:function(e){return this.hasLayer(e)?(e in this._layers&&(e=this._layers[e]),e.removeEventParent(this),Lm.prototype.removeLayer.call(this,e),this.fire("layerremove",{layer:e})):this},setStyle:function(e){return this.invoke("setStyle",e)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var e=new dp;for(var t in this._layers){var i=this._layers[t];e.extend(i.getBounds?i.getBounds():i.getLatLng())}return e}}),Im=tp.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(e){jh(this,e)},createIcon:function(e){return this._createIcon("icon",e)},createShadow:function(e){return this._createIcon("shadow",e)},_createIcon:function(e,t){var i=this._getIconUrl(e);if(!i){if("icon"===e)throw new Error("iconUrl not set in Icon options (see the docs).");return null}var o=this._createImg(i,t&&"IMG"===t.tagName?t:null);return this._setIconStyles(o,e),(this.options.crossOrigin||""===this.options.crossOrigin)&&(o.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),o},_setIconStyles:function(e,t){var i=this.options,o=i[t+"Size"];"number"==typeof o&&(o=[o,o]);var n=rp(o),s=rp("shadow"===t&&i.shadowAnchor||i.iconAnchor||n&&n.divideBy(2,!0));e.className="leaflet-marker-"+t+" "+(i.className||""),s&&(e.style.marginLeft=-s.x+"px",e.style.marginTop=-s.y+"px"),n&&(e.style.width=n.x+"px",e.style.height=n.y+"px")},_createImg:function(e,t){return(t=t||document.createElement("img")).src=e,t},_getIconUrl:function(e){return tu.retina&&this.options[e+"RetinaUrl"]||this.options[e+"Url"]}}),Om=Im.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(e){return"string"!=typeof Om.imagePath&&(Om.imagePath=this._detectIconPath()),(this.options.imagePath||Om.imagePath)+Im.prototype._getIconUrl.call(this,e)},_stripUrl:function(e){var t=function(e,t,i){var o=t.exec(e);return o&&o[i]};return(e=t(e,/^url\((['"])?(.+)\1\)$/,2))&&t(e,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var e=ku("div","leaflet-default-icon-path",document.body),t=wu(e,"background-image")||wu(e,"backgroundImage");if(document.body.removeChild(e),t=this._stripUrl(t))return t;var i=document.querySelector('link[href$="leaflet.css"]');return i?i.href.substring(0,i.href.length-11-1):""}}),Rm=hm.extend({initialize:function(e){this._marker=e},addHooks:function(){var e=this._marker._icon;this._draggable||(this._draggable=new mm(e,e,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Tu(e,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Pu(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(e){var t=this._marker,i=t._map,o=this._marker.options.autoPanSpeed,n=this._marker.options.autoPanPadding,s=Du(t._icon),r=i.getPixelBounds(),a=i.getPixelOrigin(),l=lp(r.min._subtract(a).add(n),r.max._subtract(a).subtract(n));if(!l.contains(s)){var d=rp((Math.max(l.max.x,s.x)-l.max.x)/(r.max.x-l.max.x)-(Math.min(l.min.x,s.x)-l.min.x)/(r.min.x-l.min.x),(Math.max(l.max.y,s.y)-l.max.y)/(r.max.y-l.max.y)-(Math.min(l.min.y,s.y)-l.min.y)/(r.min.y-l.min.y)).multiplyBy(o);i.panBy(d,{animate:!1}),this._draggable._newPos._add(d),this._draggable._startPos._add(d),Ru(t._icon,this._draggable._newPos),this._onDrag(e),this._panRequest=Qh(this._adjustPan.bind(this,e))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(e){this._marker.options.autoPan&&(ep(this._panRequest),this._panRequest=Qh(this._adjustPan.bind(this,e)))},_onDrag:function(e){var t=this._marker,i=t._shadow,o=Du(t._icon),n=t._map.layerPointToLatLng(o);i&&Ru(i,o),t._latlng=n,e.latlng=n,e.oldLatLng=this._oldLatLng,t.fire("move",e).fire("drag",e)},_onDragEnd:function(e){ep(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",e)}}),Dm=Am.extend({options:{icon:new Om,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(e,t){jh(this,t),this._latlng=pp(e)},onAdd:function(e){this._zoomAnimated=this._zoomAnimated&&e.options.markerZoomAnimation,this._zoomAnimated&&e.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(e){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&e.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(e){var t=this._latlng;return this._latlng=pp(e),this.update(),this.fire("move",{oldLatLng:t,latlng:this._latlng})},setZIndexOffset:function(e){return this.options.zIndexOffset=e,this.update()},getIcon:function(){return this.options.icon},setIcon:function(e){return this.options.icon=e,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var e=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(e)}return this},_initIcon:function(){var e=this.options,t="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=e.icon.createIcon(this._icon),o=!1;i!==this._icon&&(this._icon&&this._removeIcon(),o=!0,e.title&&(i.title=e.title),"IMG"===i.tagName&&(i.alt=e.alt||"")),Tu(i,t),e.keyboard&&(i.tabIndex="0",i.setAttribute("role","button")),this._icon=i,e.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Zu(i,"focus",this._panOnFocus,this);var n=e.icon.createShadow(this._shadow),s=!1;n!==this._shadow&&(this._removeShadow(),s=!0),n&&(Tu(n,t),n.alt=""),this._shadow=n,e.opacity<1&&this._updateOpacity(),o&&this.getPane().appendChild(this._icon),this._initInteraction(),n&&s&&this.getPane(e.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Ku(this._icon,"focus",this._panOnFocus,this),$u(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&$u(this._shadow),this._shadow=null},_setPos:function(e){this._icon&&Ru(this._icon,e),this._shadow&&Ru(this._shadow,e),this._zIndex=e.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(e){this._icon&&(this._icon.style.zIndex=this._zIndex+e)},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center).round();this._setPos(t)},_initInteraction:function(){if(this.options.interactive&&(Tu(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Rm)){var e=this.options.draggable;this.dragging&&(e=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Rm(this),e&&this.dragging.enable()}},setOpacity:function(e){return this.options.opacity=e,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var e=this.options.opacity;this._icon&&Eu(this._icon,e),this._shadow&&Eu(this._shadow,e)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var e=this._map;if(e){var t=this.options.icon.options,i=t.iconSize?rp(t.iconSize):rp(0,0),o=t.iconAnchor?rp(t.iconAnchor):rp(0,0);e.panInside(this._latlng,{paddingTopLeft:o,paddingBottomRight:i.subtract(o)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}}),Bm=Am.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(e){this._renderer=e.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(e){return jh(this,e),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&e&&Object.prototype.hasOwnProperty.call(e,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Nm=Bm.extend({options:{fill:!0,radius:10},initialize:function(e,t){jh(this,t),this._latlng=pp(e),this._radius=this.options.radius},setLatLng:function(e){var t=this._latlng;return this._latlng=pp(e),this.redraw(),this.fire("move",{oldLatLng:t,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(e){return this.options.radius=this._radius=e,this.redraw()},getRadius:function(){return this._radius},setStyle:function(e){var t=e&&e.radius||this._radius;return Bm.prototype.setStyle.call(this,e),this.setRadius(t),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var e=this._radius,t=this._radiusY||e,i=this._clickTolerance(),o=[e+i,t+i];this._pxBounds=new ap(this._point.subtract(o),this._point.add(o))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(e){return e.distanceTo(this._point)<=this._radius+this._clickTolerance()}}),Fm=Nm.extend({initialize:function(e,t,i){if("number"==typeof t&&(t=Eh({},i,{radius:t})),jh(this,t),this._latlng=pp(e),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(e){return this._mRadius=e,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var e=[this._radius,this._radiusY||this._radius];return new dp(this._map.layerPointToLatLng(this._point.subtract(e)),this._map.layerPointToLatLng(this._point.add(e)))},setStyle:Bm.prototype.setStyle,_project:function(){var e=this._latlng.lng,t=this._latlng.lat,i=this._map,o=i.options.crs;if(o.distance===gp.distance){var n=Math.PI/180,s=this._mRadius/gp.R/n,r=i.project([t+s,e]),a=i.project([t-s,e]),l=r.add(a).divideBy(2),d=i.unproject(l).lat,c=Math.acos((Math.cos(s*n)-Math.sin(t*n)*Math.sin(d*n))/(Math.cos(t*n)*Math.cos(d*n)))/n;(isNaN(c)||0===c)&&(c=s/Math.cos(Math.PI/180*t)),this._point=l.subtract(i.getPixelOrigin()),this._radius=isNaN(c)?0:l.x-i.project([d,e-c]).x,this._radiusY=l.y-r.y}else{var h=o.unproject(o.project(this._latlng).subtract([this._mRadius,0]));this._point=i.latLngToLayerPoint(this._latlng),this._radius=this._point.x-i.latLngToLayerPoint(h).x}this._updateBounds()}}),qm=Bm.extend({options:{smoothFactor:1,noClip:!1},initialize:function(e,t){jh(this,t),this._setLatLngs(e)},getLatLngs:function(){return this._latlngs},setLatLngs:function(e){return this._setLatLngs(e),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(e){for(var t,i,o=1/0,n=null,s=$m,r=0,a=this._parts.length;r<a;r++)for(var l=this._parts[r],d=1,c=l.length;d<c;d++){var h=s(e,t=l[d-1],i=l[d],!0);h<o&&(o=h,n=s(e,t,i))}return n&&(n.distance=Math.sqrt(o)),n},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return function(e,t){var i,o,n,s,r,a,l,d;if(!e||0===e.length)throw new Error("latlngs not passed");Sm(e)||(console.warn("latlngs are not flat! Only the first ring will be used"),e=e[0]);var c=pp([0,0]),h=cp(e);h.getNorthWest().distanceTo(h.getSouthWest())*h.getNorthEast().distanceTo(h.getNorthWest())<1700&&(c=vm(e));var p=e.length,u=[];for(i=0;i<p;i++){var m=pp(e[i]);u.push(t.project(pp([m.lat-c.lat,m.lng-c.lng])))}for(i=0,o=0;i<p-1;i++)o+=u[i].distanceTo(u[i+1])/2;if(0===o)d=u[0];else for(i=0,s=0;i<p-1;i++)if(r=u[i],a=u[i+1],(s+=n=r.distanceTo(a))>o){l=(s-o)/n,d=[a.x-l*(a.x-r.x),a.y-l*(a.y-r.y)];break}var g=t.unproject(rp(d));return pp([g.lat+c.lat,g.lng+c.lng])}(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(e,t){return t=t||this._defaultShape(),e=pp(e),t.push(e),this._bounds.extend(e),this.redraw()},_setLatLngs:function(e){this._bounds=new dp,this._latlngs=this._convertLatLngs(e)},_defaultShape:function(){return Sm(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(e){for(var t=[],i=Sm(e),o=0,n=e.length;o<n;o++)i?(t[o]=pp(e[o]),this._bounds.extend(t[o])):t[o]=this._convertLatLngs(e[o]);return t},_project:function(){var e=new ap;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,e),this._bounds.isValid()&&e.isValid()&&(this._rawPxBounds=e,this._updateBounds())},_updateBounds:function(){var e=this._clickTolerance(),t=new np(e,e);this._rawPxBounds&&(this._pxBounds=new ap([this._rawPxBounds.min.subtract(t),this._rawPxBounds.max.add(t)]))},_projectLatlngs:function(e,t,i){var o,n,s=e[0]instanceof hp,r=e.length;if(s){for(n=[],o=0;o<r;o++)n[o]=this._map.latLngToLayerPoint(e[o]),i.extend(n[o]);t.push(n)}else for(o=0;o<r;o++)this._projectLatlngs(e[o],t,i)},_clipPoints:function(){var e=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(e))if(this.options.noClip)this._parts=this._rings;else{var t,i,o,n,s,r,a,l=this._parts;for(t=0,o=0,n=this._rings.length;t<n;t++)for(i=0,s=(a=this._rings[t]).length;i<s-1;i++)(r=bm(a[i],a[i+1],e,i,!0))&&(l[o]=l[o]||[],l[o].push(r[0]),r[1]===a[i+1]&&i!==s-2||(l[o].push(r[1]),o++))}},_simplifyPoints:function(){for(var e=this._parts,t=this.options.smoothFactor,i=0,o=e.length;i<o;i++)e[i]=fm(e[i],t)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(e,t){var i,o,n,s,r,a,l=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(e))return!1;for(i=0,s=this._parts.length;i<s;i++)for(o=0,n=(r=(a=this._parts[i]).length)-1;o<r;n=o++)if((t||0!==o)&&_m(e,a[n],a[o])<=l)return!0;return!1}});qm._flat=function(e){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Sm(e)};var Hm=qm.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return function(e,t){var i,o,n,s,r,a,l,d,c;if(!e||0===e.length)throw new Error("latlngs not passed");Sm(e)||(console.warn("latlngs are not flat! Only the first ring will be used"),e=e[0]);var h=pp([0,0]),p=cp(e);p.getNorthWest().distanceTo(p.getSouthWest())*p.getNorthEast().distanceTo(p.getNorthWest())<1700&&(h=vm(e));var u=e.length,m=[];for(i=0;i<u;i++){var g=pp(e[i]);m.push(t.project(pp([g.lat-h.lat,g.lng-h.lng])))}for(a=l=d=0,i=0,o=u-1;i<u;o=i++)n=m[i],s=m[o],r=n.y*s.x-s.y*n.x,l+=(n.x+s.x)*r,d+=(n.y+s.y)*r,a+=3*r;c=0===a?m[0]:[l/a,d/a];var v=t.unproject(rp(c));return pp([v.lat+h.lat,v.lng+h.lng])}(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(e){var t=qm.prototype._convertLatLngs.call(this,e),i=t.length;return i>=2&&t[0]instanceof hp&&t[0].equals(t[i-1])&&t.pop(),t},_setLatLngs:function(e){qm.prototype._setLatLngs.call(this,e),Sm(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Sm(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var e=this._renderer._bounds,t=this.options.weight,i=new np(t,t);if(e=new ap(e.min.subtract(i),e.max.add(i)),this._parts=[],this._pxBounds&&this._pxBounds.intersects(e))if(this.options.noClip)this._parts=this._rings;else for(var o,n=0,s=this._rings.length;n<s;n++)(o=gm(this._rings[n],e,!0)).length&&this._parts.push(o)},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(e){var t,i,o,n,s,r,a,l,d=!1;if(!this._pxBounds||!this._pxBounds.contains(e))return!1;for(n=0,a=this._parts.length;n<a;n++)for(s=0,r=(l=(t=this._parts[n]).length)-1;s<l;r=s++)i=t[s],o=t[r],i.y>e.y!=o.y>e.y&&e.x<(o.x-i.x)*(e.y-i.y)/(o.y-i.y)+i.x&&(d=!d);return d||qm.prototype._containsPoint.call(this,e,!0)}}),jm=Em.extend({initialize:function(e,t){jh(this,t),this._layers={},e&&this.addData(e)},addData:function(e){var t,i,o,n=Vh(e)?e:e.features;if(n){for(t=0,i=n.length;t<i;t++)((o=n[t]).geometries||o.geometry||o.features||o.coordinates)&&this.addData(o);return this}var s=this.options;if(s.filter&&!s.filter(e))return this;var r=Zm(e,s);return r?(r.feature=Ym(e),r.defaultOptions=r.options,this.resetStyle(r),s.onEachFeature&&s.onEachFeature(e,r),this.addLayer(r)):this},resetStyle:function(e){return void 0===e?this.eachLayer(this.resetStyle,this):(e.options=Eh({},e.defaultOptions),this._setLayerStyle(e,this.options.style),this)},setStyle:function(e){return this.eachLayer(function(t){this._setLayerStyle(t,e)},this)},_setLayerStyle:function(e,t){e.setStyle&&("function"==typeof t&&(t=t(e.feature)),e.setStyle(t))}});function Zm(e,t){var i,o,n,s,r="Feature"===e.type?e.geometry:e,a=r?r.coordinates:null,l=[],d=t&&t.pointToLayer,c=t&&t.coordsToLatLng||Km;if(!a&&!r)return null;switch(r.type){case"Point":return Vm(d,e,i=c(a),t);case"MultiPoint":for(n=0,s=a.length;n<s;n++)i=c(a[n]),l.push(Vm(d,e,i,t));return new Em(l);case"LineString":case"MultiLineString":return o=Um(a,"LineString"===r.type?0:1,c),new qm(o,t);case"Polygon":case"MultiPolygon":return o=Um(a,"Polygon"===r.type?1:2,c),new Hm(o,t);case"GeometryCollection":for(n=0,s=r.geometries.length;n<s;n++){var h=Zm({geometry:r.geometries[n],type:"Feature",properties:e.properties},t);h&&l.push(h)}return new Em(l);case"FeatureCollection":for(n=0,s=r.features.length;n<s;n++){var p=Zm(r.features[n],t);p&&l.push(p)}return new Em(l);default:throw new Error("Invalid GeoJSON object.")}}function Vm(e,t,i,o){return e?e(t,i):new Dm(i,o&&o.markersInheritOptions&&o)}function Km(e){return new hp(e[1],e[0],e[2])}function Um(e,t,i){for(var o,n=[],s=0,r=e.length;s<r;s++)o=t?Um(e[s],t-1,i):(i||Km)(e[s]),n.push(o);return n}function Wm(e,t){return void 0!==(e=pp(e)).alt?[Fh(e.lng,t),Fh(e.lat,t),Fh(e.alt,t)]:[Fh(e.lng,t),Fh(e.lat,t)]}function Gm(e,t,i,o){for(var n=[],s=0,r=e.length;s<r;s++)n.push(t?Gm(e[s],Sm(e[s])?0:t-1,i,o):Wm(e[s],o));return!t&&i&&n.length>0&&n.push(n[0].slice()),n}function Xm(e,t){return e.feature?Eh({},e.feature,{geometry:t}):Ym(t)}function Ym(e){return"Feature"===e.type||"FeatureCollection"===e.type?e:{type:"Feature",properties:{},geometry:e}}var Jm={toGeoJSON:function(e){return Xm(this,{type:"Point",coordinates:Wm(this.getLatLng(),e)})}};Dm.include(Jm),Fm.include(Jm),Nm.include(Jm),qm.include({toGeoJSON:function(e){var t=!Sm(this._latlngs);return Xm(this,{type:(t?"Multi":"")+"LineString",coordinates:Gm(this._latlngs,t?1:0,!1,e)})}}),Hm.include({toGeoJSON:function(e){var t=!Sm(this._latlngs),i=t&&!Sm(this._latlngs[0]),o=Gm(this._latlngs,i?2:t?1:0,!0,e);return t||(o=[o]),Xm(this,{type:(i?"Multi":"")+"Polygon",coordinates:o})}}),Lm.include({toMultiPoint:function(e){var t=[];return this.eachLayer(function(i){t.push(i.toGeoJSON(e).geometry.coordinates)}),Xm(this,{type:"MultiPoint",coordinates:t})},toGeoJSON:function(e){var t=this.feature&&this.feature.geometry&&this.feature.geometry.type;if("MultiPoint"===t)return this.toMultiPoint(e);var i="GeometryCollection"===t,o=[];return this.eachLayer(function(t){if(t.toGeoJSON){var n=t.toGeoJSON(e);if(i)o.push(n.geometry);else{var s=Ym(n);"FeatureCollection"===s.type?o.push.apply(o,s.features):o.push(s)}}}),i?Xm(this,{geometries:o,type:"GeometryCollection"}):{type:"FeatureCollection",features:o}}});var Qm=Am.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(e,t,i){this._url=e,this._bounds=cp(t),jh(this,i)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Tu(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){$u(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(e){return this.options.opacity=e,this._image&&this._updateOpacity(),this},setStyle:function(e){return e.opacity&&this.setOpacity(e.opacity),this},bringToFront:function(){return this._map&&Cu(this._image),this},bringToBack:function(){return this._map&&Mu(this._image),this},setUrl:function(e){return this._url=e,this._image&&(this._image.src=e),this},setBounds:function(e){return this._bounds=cp(e),this._map&&this._reset(),this},getEvents:function(){var e={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(e.zoomanim=this._animateZoom),e},setZIndex:function(e){return this.options.zIndex=e,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var e="IMG"===this._url.tagName,t=this._image=e?this._url:ku("img");Tu(t,"leaflet-image-layer"),this._zoomAnimated&&Tu(t,"leaflet-zoom-animated"),this.options.className&&Tu(t,this.options.className),t.onselectstart=Nh,t.onmousemove=Nh,t.onload=Oh(this.fire,this,"load"),t.onerror=Oh(this._overlayOnError,this,"error"),(this.options.crossOrigin||""===this.options.crossOrigin)&&(t.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),e?this._url=t.src:(t.src=this._url,t.alt=this.options.alt)},_animateZoom:function(e){var t=this._map.getZoomScale(e.zoom),i=this._map._latLngBoundsToNewLayerBounds(this._bounds,e.zoom,e.center).min;Ou(this._image,i,t)},_reset:function(){var e=this._image,t=new ap(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=t.getSize();Ru(e,t.min),e.style.width=i.x+"px",e.style.height=i.y+"px"},_updateOpacity:function(){Eu(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var e=this.options.errorOverlayUrl;e&&this._url!==e&&(this._url=e,this._image.src=e)},getCenter:function(){return this._bounds.getCenter()}});Qm.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var e="VIDEO"===this._url.tagName,t=this._image=e?this._url:ku("video");if(Tu(t,"leaflet-image-layer"),this._zoomAnimated&&Tu(t,"leaflet-zoom-animated"),this.options.className&&Tu(t,this.options.className),t.onselectstart=Nh,t.onmousemove=Nh,t.onloadeddata=Oh(this.fire,this,"load"),e){for(var i=t.getElementsByTagName("source"),o=[],n=0;n<i.length;n++)o.push(i[n].src);this._url=i.length>0?o:[t.src]}else{Vh(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(t.style,"objectFit")&&(t.style.objectFit="fill"),t.autoplay=!!this.options.autoplay,t.loop=!!this.options.loop,t.muted=!!this.options.muted,t.playsInline=!!this.options.playsInline;for(var s=0;s<this._url.length;s++){var r=ku("source");r.src=this._url[s],t.appendChild(r)}}}}),Qm.extend({_initImage:function(){var e=this._image=this._url;Tu(e,"leaflet-image-layer"),this._zoomAnimated&&Tu(e,"leaflet-zoom-animated"),this.options.className&&Tu(e,this.options.className),e.onselectstart=Nh,e.onmousemove=Nh}});var eg=Am.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(e,t){e&&(e instanceof hp||Vh(e))?(this._latlng=pp(e),jh(this,t)):(jh(this,e),this._source=t),this.options.content&&(this._content=this.options.content)},openOn:function(e){return(e=arguments.length?e:this._source._map).hasLayer(this)||e.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(e){return this._map?this.close():(arguments.length?this._source=e:e=this._source,this._prepareOpen(),this.openOn(e._map)),this},onAdd:function(e){this._zoomAnimated=e._zoomAnimated,this._container||this._initLayout(),e._fadeAnimated&&Eu(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),e._fadeAnimated&&Eu(this._container,1),this.bringToFront(),this.options.interactive&&(Tu(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(e){e._fadeAnimated?(Eu(this._container,0),this._removeTimeout=setTimeout(Oh($u,void 0,this._container),200)):$u(this._container),this.options.interactive&&(Pu(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(e){return this._latlng=pp(e),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(e){return this._content=e,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var e={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(e.zoomanim=this._animateZoom),e},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Cu(this._container),this},bringToBack:function(){return this._map&&Mu(this._container),this},_prepareOpen:function(e){var t=this._source;if(!t._map)return!1;if(t instanceof Em){t=null;var i=this._source._layers;for(var o in i)if(i[o]._map){t=i[o];break}if(!t)return!1;this._source=t}if(!e)if(t.getCenter)e=t.getCenter();else if(t.getLatLng)e=t.getLatLng();else{if(!t.getBounds)throw new Error("Unable to get source layer LatLng.");e=t.getBounds().getCenter()}return this.setLatLng(e),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var e=this._contentNode,t="function"==typeof this._content?this._content(this._source||this):this._content;if("string"==typeof t)e.innerHTML=t;else{for(;e.hasChildNodes();)e.removeChild(e.firstChild);e.appendChild(t)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var e=this._map.latLngToLayerPoint(this._latlng),t=rp(this.options.offset),i=this._getAnchor();this._zoomAnimated?Ru(this._container,e.add(i)):t=t.add(e).add(i);var o=this._containerBottom=-t.y,n=this._containerLeft=-Math.round(this._containerWidth/2)+t.x;this._container.style.bottom=o+"px",this._container.style.left=n+"px"}},_getAnchor:function(){return[0,0]}});sm.include({_initOverlay:function(e,t,i,o){var n=t;return n instanceof e||(n=new e(o).setContent(t)),i&&n.setLatLng(i),n}}),Am.include({_initOverlay:function(e,t,i,o){var n=i;return n instanceof e?(jh(n,o),n._source=this):(n=t&&!o?t:new e(o,this)).setContent(i),n}});var tg=eg.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(e){return!(e=arguments.length?e:this._source._map).hasLayer(this)&&e._popup&&e._popup.options.autoClose&&e.removeLayer(e._popup),e._popup=this,eg.prototype.openOn.call(this,e)},onAdd:function(e){eg.prototype.onAdd.call(this,e),e.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Bm||this._source.on("preclick",Yu))},onRemove:function(e){eg.prototype.onRemove.call(this,e),e.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Bm||this._source.off("preclick",Yu))},getEvents:function(){var e=eg.prototype.getEvents.call(this);return(void 0!==this.options.closeOnClick?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(e.preclick=this.close),this.options.keepInView&&(e.moveend=this._adjustPan),e},_initLayout:function(){var e="leaflet-popup",t=this._container=ku("div",e+" "+(this.options.className||"")+" leaflet-zoom-animated"),i=this._wrapper=ku("div",e+"-content-wrapper",t);if(this._contentNode=ku("div",e+"-content",i),Qu(t),Ju(this._contentNode),Zu(t,"contextmenu",Yu),this._tipContainer=ku("div",e+"-tip-container",t),this._tip=ku("div",e+"-tip",this._tipContainer),this.options.closeButton){var o=this._closeButton=ku("a",e+"-close-button",t);o.setAttribute("role","button"),o.setAttribute("aria-label","Close popup"),o.href="#close",o.innerHTML='<span aria-hidden="true">&#215;</span>',Zu(o,"click",function(e){em(e),this.close()},this)}},_updateLayout:function(){var e=this._contentNode,t=e.style;t.width="",t.whiteSpace="nowrap";var i=e.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),t.width=i+1+"px",t.whiteSpace="",t.height="";var o=e.offsetHeight,n=this.options.maxHeight,s="leaflet-popup-scrolled";n&&o>n?(t.height=n+"px",Tu(e,s)):Pu(e,s),this._containerWidth=this._container.offsetWidth},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center),i=this._getAnchor();Ru(this._container,t.add(i))},_adjustPan:function(){if(this.options.autoPan)if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning)this._autopanning=!1;else{var e=this._map,t=parseInt(wu(this._container,"marginBottom"),10)||0,i=this._container.offsetHeight+t,o=this._containerWidth,n=new np(this._containerLeft,-i-this._containerBottom);n._add(Du(this._container));var s=e.layerPointToContainerPoint(n),r=rp(this.options.autoPanPadding),a=rp(this.options.autoPanPaddingTopLeft||r),l=rp(this.options.autoPanPaddingBottomRight||r),d=e.getSize(),c=0,h=0;s.x+o+l.x>d.x&&(c=s.x+o-d.x+l.x),s.x-c-a.x<0&&(c=s.x-a.x),s.y+i+l.y>d.y&&(h=s.y+i-d.y+l.y),s.y-h-a.y<0&&(h=s.y-a.y),(c||h)&&(this.options.keepInView&&(this._autopanning=!0),e.fire("autopanstart").panBy([c,h]))}},_getAnchor:function(){return rp(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}});sm.mergeOptions({closePopupOnClick:!0}),sm.include({openPopup:function(e,t,i){return this._initOverlay(tg,e,t,i).openOn(this),this},closePopup:function(e){return(e=arguments.length?e:this._popup)&&e.close(),this}}),Am.include({bindPopup:function(e,t){return this._popup=this._initOverlay(tg,this._popup,e,t),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(e){return this._popup&&(this instanceof Em||(this._popup._source=this),this._popup._prepareOpen(e||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},setPopupContent:function(e){return this._popup&&this._popup.setContent(e),this},getPopup:function(){return this._popup},_openPopup:function(e){if(this._popup&&this._map){tm(e);var t=e.layer||e.target;this._popup._source!==t||t instanceof Bm?(this._popup._source=t,this.openPopup(e.latlng)):this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(e.latlng)}},_movePopup:function(e){this._popup.setLatLng(e.latlng)},_onKeyPress:function(e){13===e.originalEvent.keyCode&&this._openPopup(e)}});var ig=eg.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(e){eg.prototype.onAdd.call(this,e),this.setOpacity(this.options.opacity),e.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(e){eg.prototype.onRemove.call(this,e),e.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var e=eg.prototype.getEvents.call(this);return this.options.permanent||(e.preclick=this.close),e},_initLayout:function(){var e="leaflet-tooltip "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=ku("div",e),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+Dh(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(e){var t,i,o=this._map,n=this._container,s=o.latLngToContainerPoint(o.getCenter()),r=o.layerPointToContainerPoint(e),a=this.options.direction,l=n.offsetWidth,d=n.offsetHeight,c=rp(this.options.offset),h=this._getAnchor();"top"===a?(t=l/2,i=d):"bottom"===a?(t=l/2,i=0):"center"===a?(t=l/2,i=d/2):"right"===a?(t=0,i=d/2):"left"===a?(t=l,i=d/2):r.x<s.x?(a="right",t=0,i=d/2):(a="left",t=l+2*(c.x+h.x),i=d/2),e=e.subtract(rp(t,i,!0)).add(c).add(h),Pu(n,"leaflet-tooltip-right"),Pu(n,"leaflet-tooltip-left"),Pu(n,"leaflet-tooltip-top"),Pu(n,"leaflet-tooltip-bottom"),Tu(n,"leaflet-tooltip-"+a),Ru(n,e)},_updatePosition:function(){var e=this._map.latLngToLayerPoint(this._latlng);this._setPosition(e)},setOpacity:function(e){this.options.opacity=e,this._container&&Eu(this._container,e)},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center);this._setPosition(t)},_getAnchor:function(){return rp(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}});sm.include({openTooltip:function(e,t,i){return this._initOverlay(ig,e,t,i).openOn(this),this},closeTooltip:function(e){return e.close(),this}}),Am.include({bindTooltip:function(e,t){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(ig,this._tooltip,e,t),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(e){if(e||!this._tooltipHandlersAdded){var t=e?"off":"on",i={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?i.add=this._openTooltip:(i.mouseover=this._openTooltip,i.mouseout=this.closeTooltip,i.click=this._openTooltip,this._map?this._addFocusListeners():i.add=this._addFocusListeners),this._tooltip.options.sticky&&(i.mousemove=this._moveTooltip),this[t](i),this._tooltipHandlersAdded=!e}},openTooltip:function(e){return this._tooltip&&(this instanceof Em||(this._tooltip._source=this),this._tooltip._prepareOpen(e)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(e){return this._tooltip&&this._tooltip.setContent(e),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(e){var t="function"==typeof e.getElement&&e.getElement();t&&(Zu(t,"focus",function(){this._tooltip._source=e,this.openTooltip()},this),Zu(t,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(e){var t="function"==typeof e.getElement&&e.getElement();t&&t.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(e){if(this._tooltip&&this._map)if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var t=this;this._map.once("moveend",function(){t._openOnceFlag=!1,t._openTooltip(e)})}else this._tooltip._source=e.layer||e.target,this.openTooltip(this._tooltip.options.sticky?e.latlng:void 0)},_moveTooltip:function(e){var t,i,o=e.latlng;this._tooltip.options.sticky&&e.originalEvent&&(t=this._map.mouseEventToContainerPoint(e.originalEvent),i=this._map.containerPointToLayerPoint(t),o=this._map.layerPointToLatLng(i)),this._tooltip.setLatLng(o)}}),Im.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(e){var t=e&&"DIV"===e.tagName?e:document.createElement("div"),i=this.options;if(i.html instanceof Element?(Su(t),t.appendChild(i.html)):t.innerHTML=!1!==i.html?i.html:"",i.bgPos){var o=rp(i.bgPos);t.style.backgroundPosition=-o.x+"px "+-o.y+"px"}return this._setIconStyles(t,"icon"),t},createShadow:function(){return null}}),Im.Default=Om;var og=Am.extend({options:{tileSize:256,opacity:1,updateWhenIdle:tu.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(e){jh(this,e)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(e){e._addZoomLimit(this)},onRemove:function(e){this._removeAllTiles(),$u(this._container),e._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Cu(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Mu(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(e){return this.options.opacity=e,this._updateOpacity(),this},setZIndex:function(e){return this.options.zIndex=e,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var e=this._clampZoom(this._map.getZoom());e!==this._tileZoom&&(this._tileZoom=e,this._updateLevels()),this._update()}return this},getEvents:function(){var e,t,i,o,n,s,r,a={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=(e=this._onMoveEnd,t=this.options.updateInterval,i=this,r=function(){o=!1,n&&(s.apply(i,n),n=!1)},s=function(){o?n=arguments:(e.apply(i,arguments),setTimeout(r,t),o=!0)},s)),a.move=this._onMove),this._zoomAnimated&&(a.zoomanim=this._animateZoom),a},createTile:function(){return document.createElement("div")},getTileSize:function(){var e=this.options.tileSize;return e instanceof np?e:new np(e,e)},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(e){for(var t,i=this.getPane().children,o=-e(-1/0,1/0),n=0,s=i.length;n<s;n++)t=i[n].style.zIndex,i[n]!==this._container&&t&&(o=e(o,+t));isFinite(o)&&(this.options.zIndex=o+e(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!tu.ielt9){Eu(this._container,this.options.opacity);var e=+new Date,t=!1,i=!1;for(var o in this._tiles){var n=this._tiles[o];if(n.current&&n.loaded){var s=Math.min(1,(e-n.loaded)/200);Eu(n.el,s),s<1?t=!0:(n.active?i=!0:this._onOpaqueTile(n),n.active=!0)}}i&&!this._noPrune&&this._pruneTiles(),t&&(ep(this._fadeFrame),this._fadeFrame=Qh(this._updateOpacity,this))}},_onOpaqueTile:Nh,_initContainer:function(){this._container||(this._container=ku("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var e=this._tileZoom,t=this.options.maxZoom;if(void 0!==e){for(var i in this._levels)i=Number(i),this._levels[i].el.children.length||i===e?(this._levels[i].el.style.zIndex=t-Math.abs(e-i),this._onUpdateLevel(i)):($u(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var o=this._levels[e],n=this._map;return o||((o=this._levels[e]={}).el=ku("div","leaflet-tile-container leaflet-zoom-animated",this._container),o.el.style.zIndex=t,o.origin=n.project(n.unproject(n.getPixelOrigin()),e).round(),o.zoom=e,this._setZoomTransform(o,n.getCenter(),n.getZoom()),o.el.offsetWidth,this._onCreateLevel(o)),this._level=o,o}},_onUpdateLevel:Nh,_onRemoveLevel:Nh,_onCreateLevel:Nh,_pruneTiles:function(){if(this._map){var e,t,i=this._map.getZoom();if(i>this.options.maxZoom||i<this.options.minZoom)this._removeAllTiles();else{for(e in this._tiles)(t=this._tiles[e]).retain=t.current;for(e in this._tiles)if((t=this._tiles[e]).current&&!t.active){var o=t.coords;this._retainParent(o.x,o.y,o.z,o.z-5)||this._retainChildren(o.x,o.y,o.z,o.z+2)}for(e in this._tiles)this._tiles[e].retain||this._removeTile(e)}}},_removeTilesAtZoom:function(e){for(var t in this._tiles)this._tiles[t].coords.z===e&&this._removeTile(t)},_removeAllTiles:function(){for(var e in this._tiles)this._removeTile(e)},_invalidateAll:function(){for(var e in this._levels)$u(this._levels[e].el),this._onRemoveLevel(Number(e)),delete this._levels[e];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(e,t,i,o){var n=Math.floor(e/2),s=Math.floor(t/2),r=i-1,a=new np(+n,+s);a.z=+r;var l=this._tileCoordsToKey(a),d=this._tiles[l];return d&&d.active?(d.retain=!0,!0):(d&&d.loaded&&(d.retain=!0),r>o&&this._retainParent(n,s,r,o))},_retainChildren:function(e,t,i,o){for(var n=2*e;n<2*e+2;n++)for(var s=2*t;s<2*t+2;s++){var r=new np(n,s);r.z=i+1;var a=this._tileCoordsToKey(r),l=this._tiles[a];l&&l.active?l.retain=!0:(l&&l.loaded&&(l.retain=!0),i+1<o&&this._retainChildren(n,s,i+1,o))}},_resetView:function(e){var t=e&&(e.pinch||e.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),t,t)},_animateZoom:function(e){this._setView(e.center,e.zoom,!0,e.noUpdate)},_clampZoom:function(e){var t=this.options;return void 0!==t.minNativeZoom&&e<t.minNativeZoom?t.minNativeZoom:void 0!==t.maxNativeZoom&&t.maxNativeZoom<e?t.maxNativeZoom:e},_setView:function(e,t,i,o){var n=Math.round(t);n=void 0!==this.options.maxZoom&&n>this.options.maxZoom||void 0!==this.options.minZoom&&n<this.options.minZoom?void 0:this._clampZoom(n);var s=this.options.updateWhenZooming&&n!==this._tileZoom;o&&!s||(this._tileZoom=n,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),void 0!==n&&this._update(e),i||this._pruneTiles(),this._noPrune=!!i),this._setZoomTransforms(e,t)},_setZoomTransforms:function(e,t){for(var i in this._levels)this._setZoomTransform(this._levels[i],e,t)},_setZoomTransform:function(e,t,i){var o=this._map.getZoomScale(i,e.zoom),n=e.origin.multiplyBy(o).subtract(this._map._getNewPixelOrigin(t,i)).round();tu.any3d?Ou(e.el,n,o):Ru(e.el,n)},_resetGrid:function(){var e=this._map,t=e.options.crs,i=this._tileSize=this.getTileSize(),o=this._tileZoom,n=this._map.getPixelWorldBounds(this._tileZoom);n&&(this._globalTileRange=this._pxBoundsToTileRange(n)),this._wrapX=t.wrapLng&&!this.options.noWrap&&[Math.floor(e.project([0,t.wrapLng[0]],o).x/i.x),Math.ceil(e.project([0,t.wrapLng[1]],o).x/i.y)],this._wrapY=t.wrapLat&&!this.options.noWrap&&[Math.floor(e.project([t.wrapLat[0],0],o).y/i.x),Math.ceil(e.project([t.wrapLat[1],0],o).y/i.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(e){var t=this._map,i=t._animatingZoom?Math.max(t._animateToZoom,t.getZoom()):t.getZoom(),o=t.getZoomScale(i,this._tileZoom),n=t.project(e,this._tileZoom).floor(),s=t.getSize().divideBy(2*o);return new ap(n.subtract(s),n.add(s))},_update:function(e){var t=this._map;if(t){var i=this._clampZoom(t.getZoom());if(void 0===e&&(e=t.getCenter()),void 0!==this._tileZoom){var o=this._getTiledPixelBounds(e),n=this._pxBoundsToTileRange(o),s=n.getCenter(),r=[],a=this.options.keepBuffer,l=new ap(n.getBottomLeft().subtract([a,-a]),n.getTopRight().add([a,-a]));if(!(isFinite(n.min.x)&&isFinite(n.min.y)&&isFinite(n.max.x)&&isFinite(n.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var d in this._tiles){var c=this._tiles[d].coords;c.z===this._tileZoom&&l.contains(new np(c.x,c.y))||(this._tiles[d].current=!1)}if(Math.abs(i-this._tileZoom)>1)this._setView(e,i);else{for(var h=n.min.y;h<=n.max.y;h++)for(var p=n.min.x;p<=n.max.x;p++){var u=new np(p,h);if(u.z=this._tileZoom,this._isValidTile(u)){var m=this._tiles[this._tileCoordsToKey(u)];m?m.current=!0:r.push(u)}}if(r.sort(function(e,t){return e.distanceTo(s)-t.distanceTo(s)}),0!==r.length){this._loading||(this._loading=!0,this.fire("loading"));var g=document.createDocumentFragment();for(p=0;p<r.length;p++)this._addTile(r[p],g);this._level.el.appendChild(g)}}}}},_isValidTile:function(e){var t=this._map.options.crs;if(!t.infinite){var i=this._globalTileRange;if(!t.wrapLng&&(e.x<i.min.x||e.x>i.max.x)||!t.wrapLat&&(e.y<i.min.y||e.y>i.max.y))return!1}if(!this.options.bounds)return!0;var o=this._tileCoordsToBounds(e);return cp(this.options.bounds).overlaps(o)},_keyToBounds:function(e){return this._tileCoordsToBounds(this._keyToTileCoords(e))},_tileCoordsToNwSe:function(e){var t=this._map,i=this.getTileSize(),o=e.scaleBy(i),n=o.add(i);return[t.unproject(o,e.z),t.unproject(n,e.z)]},_tileCoordsToBounds:function(e){var t=this._tileCoordsToNwSe(e),i=new dp(t[0],t[1]);return this.options.noWrap||(i=this._map.wrapLatLngBounds(i)),i},_tileCoordsToKey:function(e){return e.x+":"+e.y+":"+e.z},_keyToTileCoords:function(e){var t=e.split(":"),i=new np(+t[0],+t[1]);return i.z=+t[2],i},_removeTile:function(e){var t=this._tiles[e];t&&($u(t.el),delete this._tiles[e],this.fire("tileunload",{tile:t.el,coords:this._keyToTileCoords(e)}))},_initTile:function(e){Tu(e,"leaflet-tile");var t=this.getTileSize();e.style.width=t.x+"px",e.style.height=t.y+"px",e.onselectstart=Nh,e.onmousemove=Nh,tu.ielt9&&this.options.opacity<1&&Eu(e,this.options.opacity)},_addTile:function(e,t){var i=this._getTilePos(e),o=this._tileCoordsToKey(e),n=this.createTile(this._wrapCoords(e),Oh(this._tileReady,this,e));this._initTile(n),this.createTile.length<2&&Qh(Oh(this._tileReady,this,e,null,n)),Ru(n,i),this._tiles[o]={el:n,coords:e,current:!0},t.appendChild(n),this.fire("tileloadstart",{tile:n,coords:e})},_tileReady:function(e,t,i){t&&this.fire("tileerror",{error:t,tile:i,coords:e});var o=this._tileCoordsToKey(e);(i=this._tiles[o])&&(i.loaded=+new Date,this._map._fadeAnimated?(Eu(i.el,0),ep(this._fadeFrame),this._fadeFrame=Qh(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),t||(Tu(i.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:i.el,coords:e})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),tu.ielt9||!this._map._fadeAnimated?Qh(this._pruneTiles,this):setTimeout(Oh(this._pruneTiles,this),250)))},_getTilePos:function(e){return e.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(e){var t=new np(this._wrapX?Bh(e.x,this._wrapX):e.x,this._wrapY?Bh(e.y,this._wrapY):e.y);return t.z=e.z,t},_pxBoundsToTileRange:function(e){var t=this.getTileSize();return new ap(e.min.unscaleBy(t).floor(),e.max.unscaleBy(t).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var e in this._tiles)if(!this._tiles[e].loaded)return!1;return!0}}),ng=og.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(e,t){this._url=e,(t=jh(this,t)).detectRetina&&tu.retina&&t.maxZoom>0?(t.tileSize=Math.floor(t.tileSize/2),t.zoomReverse?(t.zoomOffset--,t.minZoom=Math.min(t.maxZoom,t.minZoom+1)):(t.zoomOffset++,t.maxZoom=Math.max(t.minZoom,t.maxZoom-1)),t.minZoom=Math.max(0,t.minZoom)):t.zoomReverse?t.minZoom=Math.min(t.maxZoom,t.minZoom):t.maxZoom=Math.max(t.minZoom,t.maxZoom),"string"==typeof t.subdomains&&(t.subdomains=t.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(e,t){return this._url===e&&void 0===t&&(t=!0),this._url=e,t||this.redraw(),this},createTile:function(e,t){var i=document.createElement("img");return Zu(i,"load",Oh(this._tileOnLoad,this,t,i)),Zu(i,"error",Oh(this._tileOnError,this,t,i)),(this.options.crossOrigin||""===this.options.crossOrigin)&&(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),"string"==typeof this.options.referrerPolicy&&(i.referrerPolicy=this.options.referrerPolicy),i.alt="",i.src=this.getTileUrl(e),i},getTileUrl:function(e){var t={r:tu.retina?"@2x":"",s:this._getSubdomain(e),x:e.x,y:e.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var i=this._globalTileRange.max.y-e.y;this.options.tms&&(t.y=i),t["-y"]=i}return function(e,t){return e.replace(Zh,function(e,i){var o=t[i];if(void 0===o)throw new Error("No value provided for variable "+e);return"function"==typeof o&&(o=o(t)),o})}(this._url,Eh(t,this.options))},_tileOnLoad:function(e,t){tu.ielt9?setTimeout(Oh(e,this,null,t),0):e(null,t)},_tileOnError:function(e,t,i){var o=this.options.errorTileUrl;o&&t.getAttribute("src")!==o&&(t.src=o),e(i,t)},_onTileRemove:function(e){e.tile.onload=null},_getZoomForUrl:function(){var e=this._tileZoom,t=this.options.maxZoom;return this.options.zoomReverse&&(e=t-e),e+this.options.zoomOffset},_getSubdomain:function(e){var t=Math.abs(e.x+e.y)%this.options.subdomains.length;return this.options.subdomains[t]},_abortLoading:function(){var e,t;for(e in this._tiles)if(this._tiles[e].coords.z!==this._tileZoom&&((t=this._tiles[e].el).onload=Nh,t.onerror=Nh,!t.complete)){t.src=Uh;var i=this._tiles[e].coords;$u(t),delete this._tiles[e],this.fire("tileabort",{tile:t,coords:i})}},_removeTile:function(e){var t=this._tiles[e];if(t)return t.el.setAttribute("src",Uh),og.prototype._removeTile.call(this,e)},_tileReady:function(e,t,i){if(this._map&&(!i||i.getAttribute("src")!==Uh))return og.prototype._tileReady.call(this,e,t,i)}});function sg(e,t){return new ng(e,t)}var rg=ng.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(e,t){this._url=e;var i=Eh({},this.defaultWmsParams);for(var o in t)o in this.options||(i[o]=t[o]);var n=(t=jh(this,t)).detectRetina&&tu.retina?2:1,s=this.getTileSize();i.width=s.x*n,i.height=s.y*n,this.wmsParams=i},onAdd:function(e){this._crs=this.options.crs||e.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var t=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[t]=this._crs.code,ng.prototype.onAdd.call(this,e)},getTileUrl:function(e){var t=this._tileCoordsToNwSe(e),i=this._crs,o=lp(i.project(t[0]),i.project(t[1])),n=o.min,s=o.max,r=(this._wmsVersion>=1.3&&this._crs===Tm?[n.y,n.x,s.y,s.x]:[n.x,n.y,s.x,s.y]).join(","),a=ng.prototype.getTileUrl.call(this,e);return a+function(e,t,i){var o=[];for(var n in e)o.push(encodeURIComponent(i?n.toUpperCase():n)+"="+encodeURIComponent(e[n]));return(t&&-1!==t.indexOf("?")?"&":"?")+o.join("&")}(this.wmsParams,a,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+r},setParams:function(e,t){return Eh(this.wmsParams,e),t||this.redraw(),this}});ng.WMS=rg,sg.wms=function(e,t){return new rg(e,t)};var ag=Am.extend({options:{padding:.1},initialize:function(e){jh(this,e),Dh(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Tu(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var e={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(e.zoomanim=this._onAnimZoom),e},_onAnimZoom:function(e){this._updateTransform(e.center,e.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(e,t){var i=this._map.getZoomScale(t,this._zoom),o=this._map.getSize().multiplyBy(.5+this.options.padding),n=this._map.project(this._center,t),s=o.multiplyBy(-i).add(n).subtract(this._map._getNewPixelOrigin(e,t));tu.any3d?Ou(this._container,s,i):Ru(this._container,s)},_reset:function(){for(var e in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[e]._reset()},_onZoomEnd:function(){for(var e in this._layers)this._layers[e]._project()},_updatePaths:function(){for(var e in this._layers)this._layers[e]._update()},_update:function(){var e=this.options.padding,t=this._map.getSize(),i=this._map.containerPointToLayerPoint(t.multiplyBy(-e)).round();this._bounds=new ap(i,i.add(t.multiplyBy(1+2*e)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),lg=ag.extend({options:{tolerance:0},getEvents:function(){var e=ag.prototype.getEvents.call(this);return e.viewprereset=this._onViewPreReset,e},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){ag.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var e=this._container=document.createElement("canvas");Zu(e,"mousemove",this._onMouseMove,this),Zu(e,"click dblclick mousedown mouseup contextmenu",this._onClick,this),Zu(e,"mouseout",this._handleMouseOut,this),e._leaflet_disable_events=!0,this._ctx=e.getContext("2d")},_destroyContainer:function(){ep(this._redrawRequest),delete this._ctx,$u(this._container),Ku(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){for(var e in this._redrawBounds=null,this._layers)this._layers[e]._update();this._redraw()}},_update:function(){if(!this._map._animatingZoom||!this._bounds){ag.prototype._update.call(this);var e=this._bounds,t=this._container,i=e.getSize(),o=tu.retina?2:1;Ru(t,e.min),t.width=o*i.x,t.height=o*i.y,t.style.width=i.x+"px",t.style.height=i.y+"px",tu.retina&&this._ctx.scale(2,2),this._ctx.translate(-e.min.x,-e.min.y),this.fire("update")}},_reset:function(){ag.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(e){this._updateDashArray(e),this._layers[Dh(e)]=e;var t=e._order={layer:e,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=t),this._drawLast=t,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(e){this._requestRedraw(e)},_removePath:function(e){var t=e._order,i=t.next,o=t.prev;i?i.prev=o:this._drawLast=o,o?o.next=i:this._drawFirst=i,delete e._order,delete this._layers[Dh(e)],this._requestRedraw(e)},_updatePath:function(e){this._extendRedrawBounds(e),e._project(),e._update(),this._requestRedraw(e)},_updateStyle:function(e){this._updateDashArray(e),this._requestRedraw(e)},_updateDashArray:function(e){if("string"==typeof e.options.dashArray){var t,i,o=e.options.dashArray.split(/[, ]+/),n=[];for(i=0;i<o.length;i++){if(t=Number(o[i]),isNaN(t))return;n.push(t)}e.options._dashArray=n}else e.options._dashArray=e.options.dashArray},_requestRedraw:function(e){this._map&&(this._extendRedrawBounds(e),this._redrawRequest=this._redrawRequest||Qh(this._redraw,this))},_extendRedrawBounds:function(e){if(e._pxBounds){var t=(e.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new ap,this._redrawBounds.extend(e._pxBounds.min.subtract([t,t])),this._redrawBounds.extend(e._pxBounds.max.add([t,t]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var e=this._redrawBounds;if(e){var t=e.getSize();this._ctx.clearRect(e.min.x,e.min.y,t.x,t.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var e,t=this._redrawBounds;if(this._ctx.save(),t){var i=t.getSize();this._ctx.beginPath(),this._ctx.rect(t.min.x,t.min.y,i.x,i.y),this._ctx.clip()}this._drawing=!0;for(var o=this._drawFirst;o;o=o.next)e=o.layer,(!t||e._pxBounds&&e._pxBounds.intersects(t))&&e._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(e,t){if(this._drawing){var i,o,n,s,r=e._parts,a=r.length,l=this._ctx;if(a){for(l.beginPath(),i=0;i<a;i++){for(o=0,n=r[i].length;o<n;o++)s=r[i][o],l[o?"lineTo":"moveTo"](s.x,s.y);t&&l.closePath()}this._fillStroke(l,e)}}},_updateCircle:function(e){if(this._drawing&&!e._empty()){var t=e._point,i=this._ctx,o=Math.max(Math.round(e._radius),1),n=(Math.max(Math.round(e._radiusY),1)||o)/o;1!==n&&(i.save(),i.scale(1,n)),i.beginPath(),i.arc(t.x,t.y/n,o,0,2*Math.PI,!1),1!==n&&i.restore(),this._fillStroke(i,e)}},_fillStroke:function(e,t){var i=t.options;i.fill&&(e.globalAlpha=i.fillOpacity,e.fillStyle=i.fillColor||i.color,e.fill(i.fillRule||"evenodd")),i.stroke&&0!==i.weight&&(e.setLineDash&&e.setLineDash(t.options&&t.options._dashArray||[]),e.globalAlpha=i.opacity,e.lineWidth=i.weight,e.strokeStyle=i.color,e.lineCap=i.lineCap,e.lineJoin=i.lineJoin,e.stroke())},_onClick:function(e){for(var t,i,o=this._map.mouseEventToLayerPoint(e),n=this._drawFirst;n;n=n.next)(t=n.layer).options.interactive&&t._containsPoint(o)&&("click"!==e.type&&"preclick"!==e.type||!this._map._draggableMoved(t))&&(i=t);this._fireEvent(!!i&&[i],e)},_onMouseMove:function(e){if(this._map&&!this._map.dragging.moving()&&!this._map._animatingZoom){var t=this._map.mouseEventToLayerPoint(e);this._handleMouseHover(e,t)}},_handleMouseOut:function(e){var t=this._hoveredLayer;t&&(Pu(this._container,"leaflet-interactive"),this._fireEvent([t],e,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(e,t){if(!this._mouseHoverThrottled){for(var i,o,n=this._drawFirst;n;n=n.next)(i=n.layer).options.interactive&&i._containsPoint(t)&&(o=i);o!==this._hoveredLayer&&(this._handleMouseOut(e),o&&(Tu(this._container,"leaflet-interactive"),this._fireEvent([o],e,"mouseover"),this._hoveredLayer=o)),this._fireEvent(!!this._hoveredLayer&&[this._hoveredLayer],e),this._mouseHoverThrottled=!0,setTimeout(Oh(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(e,t,i){this._map._fireDOMEvent(t,i||t.type,e)},_bringToFront:function(e){var t=e._order;if(t){var i=t.next,o=t.prev;i&&(i.prev=o,o?o.next=i:i&&(this._drawFirst=i),t.prev=this._drawLast,this._drawLast.next=t,t.next=null,this._drawLast=t,this._requestRedraw(e))}},_bringToBack:function(e){var t=e._order;if(t){var i=t.next,o=t.prev;o&&(o.next=i,i?i.prev=o:o&&(this._drawLast=o),t.prev=null,t.next=this._drawFirst,this._drawFirst.prev=t,this._drawFirst=t,this._requestRedraw(e))}}}),dg=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(e){return document.createElement("<lvml:"+e+' class="lvml">')}}catch(e){}return function(e){return document.createElement("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),cg={_initContainer:function(){this._container=ku("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(ag.prototype._update.call(this),this.fire("update"))},_initPath:function(e){var t=e._container=dg("shape");Tu(t,"leaflet-vml-shape "+(this.options.className||"")),t.coordsize="1 1",e._path=dg("path"),t.appendChild(e._path),this._updateStyle(e),this._layers[Dh(e)]=e},_addPath:function(e){var t=e._container;this._container.appendChild(t),e.options.interactive&&e.addInteractiveTarget(t)},_removePath:function(e){var t=e._container;$u(t),e.removeInteractiveTarget(t),delete this._layers[Dh(e)]},_updateStyle:function(e){var t=e._stroke,i=e._fill,o=e.options,n=e._container;n.stroked=!!o.stroke,n.filled=!!o.fill,o.stroke?(t||(t=e._stroke=dg("stroke")),n.appendChild(t),t.weight=o.weight+"px",t.color=o.color,t.opacity=o.opacity,o.dashArray?t.dashStyle=Vh(o.dashArray)?o.dashArray.join(" "):o.dashArray.replace(/( *, *)/g," "):t.dashStyle="",t.endcap=o.lineCap.replace("butt","flat"),t.joinstyle=o.lineJoin):t&&(n.removeChild(t),e._stroke=null),o.fill?(i||(i=e._fill=dg("fill")),n.appendChild(i),i.color=o.fillColor||o.color,i.opacity=o.fillOpacity):i&&(n.removeChild(i),e._fill=null)},_updateCircle:function(e){var t=e._point.round(),i=Math.round(e._radius),o=Math.round(e._radiusY||i);this._setPath(e,e._empty()?"M0 0":"AL "+t.x+","+t.y+" "+i+","+o+" 0,23592600")},_setPath:function(e,t){e._path.v=t},_bringToFront:function(e){Cu(e._container)},_bringToBack:function(e){Mu(e._container)}},hg=tu.vml?dg:kp,pg=ag.extend({_initContainer:function(){this._container=hg("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=hg("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){$u(this._container),Ku(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!this._map._animatingZoom||!this._bounds){ag.prototype._update.call(this);var e=this._bounds,t=e.getSize(),i=this._container;this._svgSize&&this._svgSize.equals(t)||(this._svgSize=t,i.setAttribute("width",t.x),i.setAttribute("height",t.y)),Ru(i,e.min),i.setAttribute("viewBox",[e.min.x,e.min.y,t.x,t.y].join(" ")),this.fire("update")}},_initPath:function(e){var t=e._path=hg("path");e.options.className&&Tu(t,e.options.className),e.options.interactive&&Tu(t,"leaflet-interactive"),this._updateStyle(e),this._layers[Dh(e)]=e},_addPath:function(e){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(e._path),e.addInteractiveTarget(e._path)},_removePath:function(e){$u(e._path),e.removeInteractiveTarget(e._path),delete this._layers[Dh(e)]},_updatePath:function(e){e._project(),e._update()},_updateStyle:function(e){var t=e._path,i=e.options;t&&(i.stroke?(t.setAttribute("stroke",i.color),t.setAttribute("stroke-opacity",i.opacity),t.setAttribute("stroke-width",i.weight),t.setAttribute("stroke-linecap",i.lineCap),t.setAttribute("stroke-linejoin",i.lineJoin),i.dashArray?t.setAttribute("stroke-dasharray",i.dashArray):t.removeAttribute("stroke-dasharray"),i.dashOffset?t.setAttribute("stroke-dashoffset",i.dashOffset):t.removeAttribute("stroke-dashoffset")):t.setAttribute("stroke","none"),i.fill?(t.setAttribute("fill",i.fillColor||i.color),t.setAttribute("fill-opacity",i.fillOpacity),t.setAttribute("fill-rule",i.fillRule||"evenodd")):t.setAttribute("fill","none"))},_updatePoly:function(e,t){this._setPath(e,$p(e._parts,t))},_updateCircle:function(e){var t=e._point,i=Math.max(Math.round(e._radius),1),o="a"+i+","+(Math.max(Math.round(e._radiusY),1)||i)+" 0 1,0 ",n=e._empty()?"M0 0":"M"+(t.x-i)+","+t.y+o+2*i+",0 "+o+2*-i+",0 ";this._setPath(e,n)},_setPath:function(e,t){e._path.setAttribute("d",t)},_bringToFront:function(e){Cu(e._path)},_bringToBack:function(e){Mu(e._path)}});tu.vml&&pg.include(cg),sm.include({getRenderer:function(e){var t=e.options.renderer||this._getPaneRenderer(e.options.pane)||this.options.renderer||this._renderer;return t||(t=this._renderer=this._createRenderer()),this.hasLayer(t)||this.addLayer(t),t},_getPaneRenderer:function(e){if("overlayPane"===e||void 0===e)return!1;var t=this._paneRenderers[e];return void 0===t&&(t=this._createRenderer({pane:e}),this._paneRenderers[e]=t),t},_createRenderer:function(e){return this.options.preferCanvas&&function(e){return tu.canvas?new lg(e):null}(e)||function(e){return tu.svg||tu.vml?new pg(e):null}(e)}}),Hm.extend({initialize:function(e,t){Hm.prototype.initialize.call(this,this._boundsToLatLngs(e),t)},setBounds:function(e){return this.setLatLngs(this._boundsToLatLngs(e))},_boundsToLatLngs:function(e){return[(e=cp(e)).getSouthWest(),e.getNorthWest(),e.getNorthEast(),e.getSouthEast()]}}),pg.create=hg,pg.pointsToPath=$p,jm.geometryToLayer=Zm,jm.coordsToLatLng=Km,jm.coordsToLatLngs=Um,jm.latLngToCoords=Wm,jm.latLngsToCoords=Gm,jm.getFeature=Xm,jm.asFeature=Ym,sm.mergeOptions({boxZoom:!0});var ug=hm.extend({initialize:function(e){this._map=e,this._container=e._container,this._pane=e._panes.overlayPane,this._resetStateTimeout=0,e.on("unload",this._destroy,this)},addHooks:function(){Zu(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Ku(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){$u(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){0!==this._resetStateTimeout&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(e){if(!e.shiftKey||1!==e.which&&1!==e.button)return!1;this._clearDeferredResetState(),this._resetState(),mu(),Nu(),this._startPoint=this._map.mouseEventToContainerPoint(e),Zu(document,{contextmenu:tm,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(e){this._moved||(this._moved=!0,this._box=ku("div","leaflet-zoom-box",this._container),Tu(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(e);var t=new ap(this._point,this._startPoint),i=t.getSize();Ru(this._box,t.min),this._box.style.width=i.x+"px",this._box.style.height=i.y+"px"},_finish:function(){this._moved&&($u(this._box),Pu(this._container,"leaflet-crosshair")),gu(),Fu(),Ku(document,{contextmenu:tm,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(e){if((1===e.which||1===e.button)&&(this._finish(),this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(Oh(this._resetState,this),0);var t=new dp(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(t).fire("boxzoomend",{boxZoomBounds:t})}},_onKeyDown:function(e){27===e.keyCode&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});sm.addInitHook("addHandler","boxZoom",ug),sm.mergeOptions({doubleClickZoom:!0});var mg=hm.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(e){var t=this._map,i=t.getZoom(),o=t.options.zoomDelta,n=e.originalEvent.shiftKey?i-o:i+o;"center"===t.options.doubleClickZoom?t.setZoom(n):t.setZoomAround(e.containerPoint,n)}});sm.addInitHook("addHandler","doubleClickZoom",mg),sm.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var gg=hm.extend({addHooks:function(){if(!this._draggable){var e=this._map;this._draggable=new mm(e._mapPane,e._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),e.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),e.on("zoomend",this._onZoomEnd,this),e.whenReady(this._onZoomEnd,this))}Tu(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Pu(this._map._container,"leaflet-grab"),Pu(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var e=this._map;if(e._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var t=cp(this._map.options.maxBounds);this._offsetLimit=lp(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;e.fire("movestart").fire("dragstart"),e.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(e){if(this._map.options.inertia){var t=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(i),this._times.push(t),this._prunePositions(t)}this._map.fire("move",e).fire("drag",e)},_prunePositions:function(e){for(;this._positions.length>1&&e-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var e=this._map.getSize().divideBy(2),t=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=t.subtract(e).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(e,t){return e-(e-t)*this._viscosity},_onPreDragLimit:function(){if(this._viscosity&&this._offsetLimit){var e=this._draggable._newPos.subtract(this._draggable._startPos),t=this._offsetLimit;e.x<t.min.x&&(e.x=this._viscousLimit(e.x,t.min.x)),e.y<t.min.y&&(e.y=this._viscousLimit(e.y,t.min.y)),e.x>t.max.x&&(e.x=this._viscousLimit(e.x,t.max.x)),e.y>t.max.y&&(e.y=this._viscousLimit(e.y,t.max.y)),this._draggable._newPos=this._draggable._startPos.add(e)}},_onPreDragWrap:function(){var e=this._worldWidth,t=Math.round(e/2),i=this._initialWorldOffset,o=this._draggable._newPos.x,n=(o-t+i)%e+t-i,s=(o+t+i)%e-t-i,r=Math.abs(n+i)<Math.abs(s+i)?n:s;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=r},_onDragEnd:function(e){var t=this._map,i=t.options,o=!i.inertia||e.noInertia||this._times.length<2;if(t.fire("dragend",e),o)t.fire("moveend");else{this._prunePositions(+new Date);var n=this._lastPos.subtract(this._positions[0]),s=(this._lastTime-this._times[0])/1e3,r=i.easeLinearity,a=n.multiplyBy(r/s),l=a.distanceTo([0,0]),d=Math.min(i.inertiaMaxSpeed,l),c=a.multiplyBy(d/l),h=d/(i.inertiaDeceleration*r),p=c.multiplyBy(-h/2).round();p.x||p.y?(p=t._limitOffset(p,t.options.maxBounds),Qh(function(){t.panBy(p,{duration:h,easeLinearity:r,noMoveStart:!0,animate:!0})})):t.fire("moveend")}}});sm.addInitHook("addHandler","dragging",gg),sm.mergeOptions({keyboard:!0,keyboardPanDelta:80});var vg=hm.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(e){this._map=e,this._setPanDelta(e.options.keyboardPanDelta),this._setZoomDelta(e.options.zoomDelta)},addHooks:function(){var e=this._map._container;e.tabIndex<=0&&(e.tabIndex="0"),Zu(e,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Ku(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var e=document.body,t=document.documentElement,i=e.scrollTop||t.scrollTop,o=e.scrollLeft||t.scrollLeft;this._map._container.focus(),window.scrollTo(o,i)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(e){var t,i,o=this._panKeys={},n=this.keyCodes;for(t=0,i=n.left.length;t<i;t++)o[n.left[t]]=[-1*e,0];for(t=0,i=n.right.length;t<i;t++)o[n.right[t]]=[e,0];for(t=0,i=n.down.length;t<i;t++)o[n.down[t]]=[0,e];for(t=0,i=n.up.length;t<i;t++)o[n.up[t]]=[0,-1*e]},_setZoomDelta:function(e){var t,i,o=this._zoomKeys={},n=this.keyCodes;for(t=0,i=n.zoomIn.length;t<i;t++)o[n.zoomIn[t]]=e;for(t=0,i=n.zoomOut.length;t<i;t++)o[n.zoomOut[t]]=-e},_addHooks:function(){Zu(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Ku(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(e){if(!(e.altKey||e.ctrlKey||e.metaKey)){var t,i=e.keyCode,o=this._map;if(i in this._panKeys){if(!o._panAnim||!o._panAnim._inProgress)if(t=this._panKeys[i],e.shiftKey&&(t=rp(t).multiplyBy(3)),o.options.maxBounds&&(t=o._limitOffset(rp(t),o.options.maxBounds)),o.options.worldCopyJump){var n=o.wrapLatLng(o.unproject(o.project(o.getCenter()).add(t)));o.panTo(n)}else o.panBy(t)}else if(i in this._zoomKeys)o.setZoom(o.getZoom()+(e.shiftKey?3:1)*this._zoomKeys[i]);else{if(27!==i||!o._popup||!o._popup.options.closeOnEscapeKey)return;o.closePopup()}tm(e)}}});sm.addInitHook("addHandler","keyboard",vg),sm.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var fg=hm.extend({addHooks:function(){Zu(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Ku(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(e){var t=function(e){return tu.edge?e.wheelDeltaY/2:e.deltaY&&0===e.deltaMode?-e.deltaY/im:e.deltaY&&1===e.deltaMode?20*-e.deltaY:e.deltaY&&2===e.deltaMode?60*-e.deltaY:e.deltaX||e.deltaZ?0:e.wheelDelta?(e.wheelDeltaY||e.wheelDelta)/2:e.detail&&Math.abs(e.detail)<32765?20*-e.detail:e.detail?e.detail/-32765*60:0}(e),i=this._map.options.wheelDebounceTime;this._delta+=t,this._lastMousePos=this._map.mouseEventToContainerPoint(e),this._startTime||(this._startTime=+new Date);var o=Math.max(i-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(Oh(this._performZoom,this),o),tm(e)},_performZoom:function(){var e=this._map,t=e.getZoom(),i=this._map.options.zoomSnap||0;e._stop();var o=this._delta/(4*this._map.options.wheelPxPerZoomLevel),n=4*Math.log(2/(1+Math.exp(-Math.abs(o))))/Math.LN2,s=i?Math.ceil(n/i)*i:n,r=e._limitZoom(t+(this._delta>0?s:-s))-t;this._delta=0,this._startTime=null,r&&("center"===e.options.scrollWheelZoom?e.setZoom(t+r):e.setZoomAround(this._lastMousePos,t+r))}});sm.addInitHook("addHandler","scrollWheelZoom",fg),sm.mergeOptions({tapHold:tu.touchNative&&tu.safari&&tu.mobile,tapTolerance:15});var _g=hm.extend({addHooks:function(){Zu(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Ku(this._map._container,"touchstart",this._onDown,this)},_onDown:function(e){if(clearTimeout(this._holdTimeout),1===e.touches.length){var t=e.touches[0];this._startPos=this._newPos=new np(t.clientX,t.clientY),this._holdTimeout=setTimeout(Oh(function(){this._cancel(),this._isTapValid()&&(Zu(document,"touchend",em),Zu(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",t))},this),600),Zu(document,"touchend touchcancel contextmenu",this._cancel,this),Zu(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function e(){Ku(document,"touchend",em),Ku(document,"touchend touchcancel",e)},_cancel:function(){clearTimeout(this._holdTimeout),Ku(document,"touchend touchcancel contextmenu",this._cancel,this),Ku(document,"touchmove",this._onMove,this)},_onMove:function(e){var t=e.touches[0];this._newPos=new np(t.clientX,t.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(e,t){var i=new MouseEvent(e,{bubbles:!0,cancelable:!0,view:window,screenX:t.screenX,screenY:t.screenY,clientX:t.clientX,clientY:t.clientY});i._simulated=!0,t.target.dispatchEvent(i)}});sm.addInitHook("addHandler","tapHold",_g),sm.mergeOptions({touchZoom:tu.touch,bounceAtZoomLimits:!0});var yg=hm.extend({addHooks:function(){Tu(this._map._container,"leaflet-touch-zoom"),Zu(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Pu(this._map._container,"leaflet-touch-zoom"),Ku(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(e){var t=this._map;if(e.touches&&2===e.touches.length&&!t._animatingZoom&&!this._zooming){var i=t.mouseEventToContainerPoint(e.touches[0]),o=t.mouseEventToContainerPoint(e.touches[1]);this._centerPoint=t.getSize()._divideBy(2),this._startLatLng=t.containerPointToLatLng(this._centerPoint),"center"!==t.options.touchZoom&&(this._pinchStartLatLng=t.containerPointToLatLng(i.add(o)._divideBy(2))),this._startDist=i.distanceTo(o),this._startZoom=t.getZoom(),this._moved=!1,this._zooming=!0,t._stop(),Zu(document,"touchmove",this._onTouchMove,this),Zu(document,"touchend touchcancel",this._onTouchEnd,this),em(e)}},_onTouchMove:function(e){if(e.touches&&2===e.touches.length&&this._zooming){var t=this._map,i=t.mouseEventToContainerPoint(e.touches[0]),o=t.mouseEventToContainerPoint(e.touches[1]),n=i.distanceTo(o)/this._startDist;if(this._zoom=t.getScaleZoom(n,this._startZoom),!t.options.bounceAtZoomLimits&&(this._zoom<t.getMinZoom()&&n<1||this._zoom>t.getMaxZoom()&&n>1)&&(this._zoom=t._limitZoom(this._zoom)),"center"===t.options.touchZoom){if(this._center=this._startLatLng,1===n)return}else{var s=i._add(o)._divideBy(2)._subtract(this._centerPoint);if(1===n&&0===s.x&&0===s.y)return;this._center=t.unproject(t.project(this._pinchStartLatLng,this._zoom).subtract(s),this._zoom)}this._moved||(t._moveStart(!0,!1),this._moved=!0),ep(this._animRequest);var r=Oh(t._move,t,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=Qh(r,this,!0),em(e)}},_onTouchEnd:function(){this._moved&&this._zooming?(this._zooming=!1,ep(this._animRequest),Ku(document,"touchmove",this._onTouchMove,this),Ku(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))):this._zooming=!1}});sm.addInitHook("addHandler","touchZoom",yg),sm.BoxZoom=ug,sm.DoubleClickZoom=mg,sm.Drag=gg,sm.Keyboard=vg,sm.ScrollWheelZoom=fg,sm.TapHold=_g,sm.TouchZoom=yg;const bg={map:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",attribution:'Tiles © Esri — Esri, HERE, Garmin, © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors, GIS User Community',maxZoom:19},satellite:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",attribution:"Imagery © Esri, Maxar, Earthstar Geographics",maxZoom:19}},xg='/* required styles */\r\n\r\n.leaflet-pane,\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-tile-container,\r\n.leaflet-pane > svg,\r\n.leaflet-pane > canvas,\r\n.leaflet-zoom-box,\r\n.leaflet-image-layer,\r\n.leaflet-layer {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\t}\r\n.leaflet-container {\r\n\toverflow: hidden;\r\n\t}\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t        user-select: none;\r\n\t  -webkit-user-drag: none;\r\n\t}\r\n/* Prevents IE11 from highlighting tiles in blue */\r\n.leaflet-tile::selection {\r\n\tbackground: transparent;\r\n}\r\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\r\n.leaflet-safari .leaflet-tile {\r\n\timage-rendering: -webkit-optimize-contrast;\r\n\t}\r\n/* hack that prevents hw layers "stretching" when loading new tiles */\r\n.leaflet-safari .leaflet-tile-container {\r\n\twidth: 1600px;\r\n\theight: 1600px;\r\n\t-webkit-transform-origin: 0 0;\r\n\t}\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\tdisplay: block;\r\n\t}\r\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\r\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\r\n.leaflet-container .leaflet-overlay-pane svg {\r\n\tmax-width: none !important;\r\n\tmax-height: none !important;\r\n\t}\r\n.leaflet-container .leaflet-marker-pane img,\r\n.leaflet-container .leaflet-shadow-pane img,\r\n.leaflet-container .leaflet-tile-pane img,\r\n.leaflet-container img.leaflet-image-layer,\r\n.leaflet-container .leaflet-tile {\r\n\tmax-width: none !important;\r\n\tmax-height: none !important;\r\n\twidth: auto;\r\n\tpadding: 0;\r\n\t}\r\n\r\n.leaflet-container img.leaflet-tile {\r\n\t/* See: https://bugs.chromium.org/p/chromium/issues/detail?id=600120 */\r\n\tmix-blend-mode: plus-lighter;\r\n}\r\n\r\n.leaflet-container.leaflet-touch-zoom {\r\n\t-ms-touch-action: pan-x pan-y;\r\n\ttouch-action: pan-x pan-y;\r\n\t}\r\n.leaflet-container.leaflet-touch-drag {\r\n\t-ms-touch-action: pinch-zoom;\r\n\t/* Fallback for FF which doesn\'t support pinch-zoom */\r\n\ttouch-action: none;\r\n\ttouch-action: pinch-zoom;\r\n}\r\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\r\n\t-ms-touch-action: none;\r\n\ttouch-action: none;\r\n}\r\n.leaflet-container {\r\n\t-webkit-tap-highlight-color: transparent;\r\n}\r\n.leaflet-container a {\r\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\r\n}\r\n.leaflet-tile {\r\n\tfilter: inherit;\r\n\tvisibility: hidden;\r\n\t}\r\n.leaflet-tile-loaded {\r\n\tvisibility: inherit;\r\n\t}\r\n.leaflet-zoom-box {\r\n\twidth: 0;\r\n\theight: 0;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\tz-index: 800;\r\n\t}\r\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\r\n.leaflet-overlay-pane svg {\r\n\t-moz-user-select: none;\r\n\t}\r\n\r\n.leaflet-pane         { z-index: 400; }\r\n\r\n.leaflet-tile-pane    { z-index: 200; }\r\n.leaflet-overlay-pane { z-index: 400; }\r\n.leaflet-shadow-pane  { z-index: 500; }\r\n.leaflet-marker-pane  { z-index: 600; }\r\n.leaflet-tooltip-pane   { z-index: 650; }\r\n.leaflet-popup-pane   { z-index: 700; }\r\n\r\n.leaflet-map-pane canvas { z-index: 100; }\r\n.leaflet-map-pane svg    { z-index: 200; }\r\n\r\n.leaflet-vml-shape {\r\n\twidth: 1px;\r\n\theight: 1px;\r\n\t}\r\n.lvml {\r\n\tbehavior: url(#default#VML);\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\t}\r\n\r\n\r\n/* control positioning */\r\n\r\n.leaflet-control {\r\n\tposition: relative;\r\n\tz-index: 800;\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn\'t have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-top,\r\n.leaflet-bottom {\r\n\tposition: absolute;\r\n\tz-index: 1000;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-top {\r\n\ttop: 0;\r\n\t}\r\n.leaflet-right {\r\n\tright: 0;\r\n\t}\r\n.leaflet-bottom {\r\n\tbottom: 0;\r\n\t}\r\n.leaflet-left {\r\n\tleft: 0;\r\n\t}\r\n.leaflet-control {\r\n\tfloat: left;\r\n\tclear: both;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tfloat: right;\r\n\t}\r\n.leaflet-top .leaflet-control {\r\n\tmargin-top: 10px;\r\n\t}\r\n.leaflet-bottom .leaflet-control {\r\n\tmargin-bottom: 10px;\r\n\t}\r\n.leaflet-left .leaflet-control {\r\n\tmargin-left: 10px;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tmargin-right: 10px;\r\n\t}\r\n\r\n\r\n/* zoom and fade animations */\r\n\r\n.leaflet-fade-anim .leaflet-popup {\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.2s linear;\r\n\t   -moz-transition: opacity 0.2s linear;\r\n\t        transition: opacity 0.2s linear;\r\n\t}\r\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r\n\topacity: 1;\r\n\t}\r\n.leaflet-zoom-animated {\r\n\t-webkit-transform-origin: 0 0;\r\n\t    -ms-transform-origin: 0 0;\r\n\t        transform-origin: 0 0;\r\n\t}\r\nsvg.leaflet-zoom-animated {\r\n\twill-change: transform;\r\n}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\t-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t}\r\n.leaflet-zoom-anim .leaflet-tile,\r\n.leaflet-pan-anim .leaflet-tile {\r\n\t-webkit-transition: none;\r\n\t   -moz-transition: none;\r\n\t        transition: none;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-hide {\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n\r\n/* cursors */\r\n\r\n.leaflet-interactive {\r\n\tcursor: pointer;\r\n\t}\r\n.leaflet-grab {\r\n\tcursor: -webkit-grab;\r\n\tcursor:    -moz-grab;\r\n\tcursor:         grab;\r\n\t}\r\n.leaflet-crosshair,\r\n.leaflet-crosshair .leaflet-interactive {\r\n\tcursor: crosshair;\r\n\t}\r\n.leaflet-popup-pane,\r\n.leaflet-control {\r\n\tcursor: auto;\r\n\t}\r\n.leaflet-dragging .leaflet-grab,\r\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\r\n.leaflet-dragging .leaflet-marker-draggable {\r\n\tcursor: move;\r\n\tcursor: -webkit-grabbing;\r\n\tcursor:    -moz-grabbing;\r\n\tcursor:         grabbing;\r\n\t}\r\n\r\n/* marker & overlays interactivity */\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-image-layer,\r\n.leaflet-pane > svg path,\r\n.leaflet-tile-container {\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-marker-icon.leaflet-interactive,\r\n.leaflet-image-layer.leaflet-interactive,\r\n.leaflet-pane > svg path.leaflet-interactive,\r\nsvg.leaflet-image-layer.leaflet-interactive path {\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn\'t have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n/* visual tweaks */\r\n\r\n.leaflet-container {\r\n\tbackground: #ddd;\r\n\toutline-offset: 1px;\r\n\t}\r\n.leaflet-container a {\r\n\tcolor: #0078A8;\r\n\t}\r\n.leaflet-zoom-box {\r\n\tborder: 2px dotted #38f;\r\n\tbackground: rgba(255,255,255,0.5);\r\n\t}\r\n\r\n\r\n/* general typography */\r\n.leaflet-container {\r\n\tfont-family: "Helvetica Neue", Arial, Helvetica, sans-serif;\r\n\tfont-size: 12px;\r\n\tfont-size: 0.75rem;\r\n\tline-height: 1.5;\r\n\t}\r\n\r\n\r\n/* general toolbar styles */\r\n\r\n.leaflet-bar {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\r\n\tborder-radius: 4px;\r\n\t}\r\n.leaflet-bar a {\r\n\tbackground-color: #fff;\r\n\tborder-bottom: 1px solid #ccc;\r\n\twidth: 26px;\r\n\theight: 26px;\r\n\tline-height: 26px;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n\t}\r\n.leaflet-bar a,\r\n.leaflet-control-layers-toggle {\r\n\tbackground-position: 50% 50%;\r\n\tbackground-repeat: no-repeat;\r\n\tdisplay: block;\r\n\t}\r\n.leaflet-bar a:hover,\r\n.leaflet-bar a:focus {\r\n\tbackground-color: #f4f4f4;\r\n\t}\r\n.leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 4px;\r\n\tborder-top-right-radius: 4px;\r\n\t}\r\n.leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n\tborder-bottom: none;\r\n\t}\r\n.leaflet-bar a.leaflet-disabled {\r\n\tcursor: default;\r\n\tbackground-color: #f4f4f4;\r\n\tcolor: #bbb;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 2px;\r\n\tborder-top-right-radius: 2px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 2px;\r\n\tborder-bottom-right-radius: 2px;\r\n\t}\r\n\r\n/* zoom control */\r\n\r\n.leaflet-control-zoom-in,\r\n.leaflet-control-zoom-out {\r\n\tfont: bold 18px \'Lucida Console\', Monaco, monospace;\r\n\ttext-indent: 1px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\r\n\tfont-size: 22px;\r\n\t}\r\n\r\n\r\n/* layers control */\r\n\r\n.leaflet-control-layers {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\r\n\tbackground: #fff;\r\n\tborder-radius: 5px;\r\n\t}\r\n.leaflet-control-layers-toggle {\r\n\tbackground-image: url(images/layers.png);\r\n\twidth: 36px;\r\n\theight: 36px;\r\n\t}\r\n.leaflet-retina .leaflet-control-layers-toggle {\r\n\tbackground-image: url(images/layers-2x.png);\r\n\tbackground-size: 26px 26px;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers-toggle {\r\n\twidth: 44px;\r\n\theight: 44px;\r\n\t}\r\n.leaflet-control-layers .leaflet-control-layers-list,\r\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r\n\tdisplay: none;\r\n\t}\r\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\t}\r\n.leaflet-control-layers-expanded {\r\n\tpadding: 6px 10px 6px 6px;\r\n\tcolor: #333;\r\n\tbackground: #fff;\r\n\t}\r\n.leaflet-control-layers-scrollbar {\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n\tpadding-right: 5px;\r\n\t}\r\n.leaflet-control-layers-selector {\r\n\tmargin-top: 2px;\r\n\tposition: relative;\r\n\ttop: 1px;\r\n\t}\r\n.leaflet-control-layers label {\r\n\tdisplay: block;\r\n\tfont-size: 13px;\r\n\tfont-size: 1.08333em;\r\n\t}\r\n.leaflet-control-layers-separator {\r\n\theight: 0;\r\n\tborder-top: 1px solid #ddd;\r\n\tmargin: 5px -10px 5px -6px;\r\n\t}\r\n\r\n/* Default icon URLs */\r\n.leaflet-default-icon-path { /* used only in path-guessing heuristic, see L.Icon.Default */\r\n\tbackground-image: url(images/marker-icon.png);\r\n\t}\r\n\r\n\r\n/* attribution and scale controls */\r\n\r\n.leaflet-container .leaflet-control-attribution {\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.8);\r\n\tmargin: 0;\r\n\t}\r\n.leaflet-control-attribution,\r\n.leaflet-control-scale-line {\r\n\tpadding: 0 5px;\r\n\tcolor: #333;\r\n\tline-height: 1.4;\r\n\t}\r\n.leaflet-control-attribution a {\r\n\ttext-decoration: none;\r\n\t}\r\n.leaflet-control-attribution a:hover,\r\n.leaflet-control-attribution a:focus {\r\n\ttext-decoration: underline;\r\n\t}\r\n.leaflet-attribution-flag {\r\n\tdisplay: inline !important;\r\n\tvertical-align: baseline !important;\r\n\twidth: 1em;\r\n\theight: 0.6669em;\r\n\t}\r\n.leaflet-left .leaflet-control-scale {\r\n\tmargin-left: 5px;\r\n\t}\r\n.leaflet-bottom .leaflet-control-scale {\r\n\tmargin-bottom: 5px;\r\n\t}\r\n.leaflet-control-scale-line {\r\n\tborder: 2px solid #777;\r\n\tborder-top: none;\r\n\tline-height: 1.1;\r\n\tpadding: 2px 5px 1px;\r\n\twhite-space: nowrap;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\tbackground: rgba(255, 255, 255, 0.8);\r\n\ttext-shadow: 1px 1px #fff;\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child) {\r\n\tborder-top: 2px solid #777;\r\n\tborder-bottom: none;\r\n\tmargin-top: -2px;\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r\n\tborder-bottom: 2px solid #777;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-attribution,\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tbox-shadow: none;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tborder: 2px solid rgba(0,0,0,0.2);\r\n\tbackground-clip: padding-box;\r\n\t}\r\n\r\n\r\n/* popup */\r\n\r\n.leaflet-popup {\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\tmargin-bottom: 20px;\r\n\t}\r\n.leaflet-popup-content-wrapper {\r\n\tpadding: 1px;\r\n\ttext-align: left;\r\n\tborder-radius: 12px;\r\n\t}\r\n.leaflet-popup-content {\r\n\tmargin: 13px 24px 13px 20px;\r\n\tline-height: 1.3;\r\n\tfont-size: 13px;\r\n\tfont-size: 1.08333em;\r\n\tmin-height: 1px;\r\n\t}\r\n.leaflet-popup-content p {\r\n\tmargin: 17px 0;\r\n\tmargin: 1.3em 0;\r\n\t}\r\n.leaflet-popup-tip-container {\r\n\twidth: 40px;\r\n\theight: 20px;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\tmargin-top: -1px;\r\n\tmargin-left: -20px;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-popup-tip {\r\n\twidth: 17px;\r\n\theight: 17px;\r\n\tpadding: 1px;\r\n\r\n\tmargin: -10px auto 0;\r\n\tpointer-events: auto;\r\n\r\n\t-webkit-transform: rotate(45deg);\r\n\t   -moz-transform: rotate(45deg);\r\n\t    -ms-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\t}\r\n.leaflet-popup-content-wrapper,\r\n.leaflet-popup-tip {\r\n\tbackground: white;\r\n\tcolor: #333;\r\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tborder: none;\r\n\ttext-align: center;\r\n\twidth: 24px;\r\n\theight: 24px;\r\n\tfont: 16px/24px Tahoma, Verdana, sans-serif;\r\n\tcolor: #757575;\r\n\ttext-decoration: none;\r\n\tbackground: transparent;\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button:hover,\r\n.leaflet-container a.leaflet-popup-close-button:focus {\r\n\tcolor: #585858;\r\n\t}\r\n.leaflet-popup-scrolled {\r\n\toverflow: auto;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-content-wrapper {\r\n\t-ms-zoom: 1;\r\n\t}\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\twidth: 24px;\r\n\tmargin: 0 auto;\r\n\r\n\t-ms-filter: "progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";\r\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-control-zoom,\r\n.leaflet-oldie .leaflet-control-layers,\r\n.leaflet-oldie .leaflet-popup-content-wrapper,\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\tborder: 1px solid #999;\r\n\t}\r\n\r\n\r\n/* div icon */\r\n\r\n.leaflet-div-icon {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #666;\r\n\t}\r\n\r\n\r\n/* Tooltip */\r\n/* Base styles for the element that has a tooltip */\r\n.leaflet-tooltip {\r\n\tposition: absolute;\r\n\tpadding: 6px;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 3px;\r\n\tcolor: #222;\r\n\twhite-space: nowrap;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tpointer-events: none;\r\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-tooltip.leaflet-interactive {\r\n\tcursor: pointer;\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-tooltip-top:before,\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tborder: 6px solid transparent;\r\n\tbackground: transparent;\r\n\tcontent: "";\r\n\t}\r\n\r\n/* Directions */\r\n\r\n.leaflet-tooltip-bottom {\r\n\tmargin-top: 6px;\r\n}\r\n.leaflet-tooltip-top {\r\n\tmargin-top: -6px;\r\n}\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-top:before {\r\n\tleft: 50%;\r\n\tmargin-left: -6px;\r\n\t}\r\n.leaflet-tooltip-top:before {\r\n\tbottom: 0;\r\n\tmargin-bottom: -12px;\r\n\tborder-top-color: #fff;\r\n\t}\r\n.leaflet-tooltip-bottom:before {\r\n\ttop: 0;\r\n\tmargin-top: -12px;\r\n\tmargin-left: -6px;\r\n\tborder-bottom-color: #fff;\r\n\t}\r\n.leaflet-tooltip-left {\r\n\tmargin-left: -6px;\r\n}\r\n.leaflet-tooltip-right {\r\n\tmargin-left: 6px;\r\n}\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\ttop: 50%;\r\n\tmargin-top: -6px;\r\n\t}\r\n.leaflet-tooltip-left:before {\r\n\tright: 0;\r\n\tmargin-right: -12px;\r\n\tborder-left-color: #fff;\r\n\t}\r\n.leaflet-tooltip-right:before {\r\n\tleft: 0;\r\n\tmargin-left: -12px;\r\n\tborder-right-color: #fff;\r\n\t}\r\n\r\n/* Printing */\r\n\r\n@media print {\r\n\t/* Prevent printers from removing background-images of controls. */\r\n\t.leaflet-control {\r\n\t\t-webkit-print-color-adjust: exact;\r\n\t\tprint-color-adjust: exact;\r\n\t\t}\r\n\t}\r\n',wg="meshcore_bbs.map_layer";let kg=class extends Mc{constructor(){super(...arguments),this.lat=0,this.lon=0,this.height=240,this.zoom=15,this._layer=function(){try{return"satellite"===localStorage.getItem(wg)?"satellite":"map"}catch(e){return"map"}}()}get tileUrl(){return bg[this._layer].url}_setLayer(e){this._layer=e;try{localStorage.setItem(wg,e)}catch(e){}}updated(e){var t,i,o;if(this._container&&Number.isFinite(this.lat)&&Number.isFinite(this.lon))try{if(this._map){if(e.has("lat")||e.has("lon")){var n;this._map.setView([this.lat,this.lon],this._map.getZoom()),null===(n=this._marker)||void 0===n||n.setLatLng([this.lat,this.lon])}}else this._map=(t=this._container,i={zoomControl:!0,attributionControl:!0},new sm(t,i)).setView([this.lat,this.lon],this.zoom),this._marker=(o=[this.lat,this.lon],new Nm(o,{radius:8,color:"#fff",weight:2,fillColor:"#e53935",fillOpacity:1})).addTo(this._map),this._resize=new ResizeObserver(()=>{var e;return null===(e=this._map)||void 0===e?void 0:e.invalidateSize()}),this._resize.observe(this._container);if(!this._tiles||e.has("_layer")){var s;const e=bg[this._layer];null===(s=this._tiles)||void 0===s||s.remove(),this._tiles=sg(e.url,{attribution:e.attribution,maxZoom:e.maxZoom,subdomains:"abcd"}).addTo(this._map)}}catch(e){console.warn("MeshCore BBS: map unavailable",e)}}disconnectedCallback(){var e,t;super.disconnectedCallback(),null===(e=this._resize)||void 0===e||e.disconnect(),null===(t=this._map)||void 0===t||t.remove(),this._map=void 0,this._tiles=void 0,this._marker=void 0}render(){if(!Number.isFinite(this.lat)||!Number.isFinite(this.lon))return hc;const{lat:e,lon:t}=this;return lc(ot||(ot=vd`
      <div class="bar">
        <span class="switch" role="group" aria-label="Map layer">
          <button class=${0} aria-pressed=${0}
            @click=${0}>Map</button>
          <button class=${0} aria-pressed=${0}
            @click=${0}>Satellite</button>
        </span>
      </div>
      <div class="map" style="height: ${0}px"></div>
      <div class="meta">
        <span>${0}, ${0}${0}</span>
        <a href="https://www.openstreetmap.org/?mlat=${0}&mlon=${0}#map=16/${0}/${0}"
          target="_blank" rel="noopener noreferrer">OpenStreetMap ↗</a>
      </div>`),"map"===this._layer?"on":"","map"===this._layer,()=>this._setLayer("map"),"satellite"===this._layer?"on":"","satellite"===this._layer,()=>this._setLayer("satellite"),this.height,e.toFixed(5),t.toFixed(5),void 0!==this.alt?` · ${this.alt} m`:"",e,t,e,t)}};kg.styles=[kd(xg.startsWith("__")?"":xg),$d(nt||(nt=vd`
      :host { display: block; }
      .bar { display: flex; justify-content: space-between; align-items: center; gap: 8px; margin-bottom: 6px; }
      .switch { display: inline-flex; border: 1px solid var(--divider-color, #e0e0e0); border-radius: 8px; overflow: hidden; }
      .switch button { border: none; background: var(--card-background-color, #fff); color: var(--primary-text-color);
        padding: 4px 10px; font-size: 12px; cursor: pointer; }
      .switch button.on { background: var(--primary-color, #03a9f4); color: var(--text-primary-color, #fff); }
      .map { width: 100%; border-radius: 8px; overflow: hidden; background: #ddd; z-index: 0; }
      .meta { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 4px 8px; font-size: 12px;
        color: var(--secondary-text-color); margin-top: 4px; }
      .meta a { color: var(--primary-color, #03a9f4); margin-left: 8px; }
    `))],fd([Lc({type:Number})],kg.prototype,"lat",void 0),fd([Lc({type:Number})],kg.prototype,"lon",void 0),fd([Lc({type:Number})],kg.prototype,"alt",void 0),fd([Lc({type:Number})],kg.prototype,"height",void 0),fd([Lc({type:Number})],kg.prototype,"zoom",void 0),fd([Ec()],kg.prototype,"_layer",void 0),fd([(e,t,i)=>((e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i))(e,t,{get(){return(()=>{var e,t;return null!==(e=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(".map"))&&void 0!==e?e:null})()}})],kg.prototype,"_container",void 0),kg=fd([Tc("meshcore-location-map")],kg);const $g={temperature:"°C",humidity:"%",barometer:"hPa",voltage:"V",current:"A",percentage:"%",altitude:"m",illuminance:"lx",power:"W",energy:"kWh",frequency:"Hz",distance:"m",concentration:"ppm",direction:"°"},Sg={voltage:"Voltage",temperature:"Temperature",humidity:"Humidity",barometer:"Pressure",current:"Current",percentage:"Percentage",altitude:"Altitude",illuminance:"Illuminance",power:"Power",gps:"GPS"};let Cg=class extends Mc{constructor(){super(),this.open=!1,this._loading=!1,this._result=null,this._error="",this._close=()=>{this.open=!1,this.dispatchEvent(new CustomEvent("telemetry-dialog-closed",{bubbles:!0,composed:!0}))},bh(this,{isOpen:()=>this.open,onEscape:()=>this._close()})}willUpdate(e){(e.has("open")||e.has("contact"))&&this.open&&(this._result=null,this._error="",this._request())}async _request(){if(this.hass&&this.contact){this._loading=!0,this._error="";try{this._result=await function(e,t,i){const o={type:"meshcore_bbs/request_telemetry",pubkey_prefix:t};return i&&(o.entry_id=i),e.callWS(o)}(this.hass,this.contact.pubkey_prefix,this.entryId)}catch(t){var e;this._error=null!==(e=null==t?void 0:t.message)&&void 0!==e?e:String(t)}finally{this._loading=!1}}}_label(e,t){var i;const o=null!==(i=Sg[e.type])&&void 0!==i?i:e.type.charAt(0).toUpperCase()+e.type.slice(1),n=t.filter(t=>t.type===e.type).length>1;return n?`${o} (ch ${e.channel})`:o}render(){var e,t;if(!this.open||!this.contact)return hc;const i=null!==(e=null===(t=this._result)||void 0===t?void 0:t.lpp)&&void 0!==e?e:null,o=(null!=i?i:[]).filter(e=>"gps"!==e.type),n=function(e,t){const i=null==e?void 0:e.find(e=>"gps"===e.type&&e.value&&"object"==typeof e.value);if(i){const e=i.value;if(Number.isFinite(e.latitude)&&Number.isFinite(e.longitude)&&(0!==e.latitude||0!==e.longitude))return{lat:e.latitude,lon:e.longitude,alt:e.altitude,source:"telemetry"}}return t&&(0!==t.adv_lat||0!==t.adv_lon)&&Number.isFinite(t.adv_lat)&&Number.isFinite(t.adv_lon)?{lat:t.adv_lat,lon:t.adv_lon,source:"advert"}:null}(i,this.contact);return lc(st||(st=vd`
      <div class="backdrop" @click=${0}>
        <div class="dialog" role="dialog" aria-modal="true" aria-label="Telemetry"
          @click=${0}>
          <div class="head">
            <div class="title">Telemetry — ${0}</div>
            <button class="close" aria-label="Close" @click=${0}>✕</button>
          </div>
          <div class="body">
            ${0}
            ${0}
            ${0}
            ${0}
          </div>
          <div class="foot">
            <button ?disabled=${0} @click=${0}>Refresh</button>
            <button class="primary" @click=${0}>Close</button>
          </div>
        </div>
      </div>`),this._close,e=>e.stopPropagation(),this.contact.adv_name,this._close,this._loading?lc(rt||(rt=vd`<div class="status">Requesting telemetry over the mesh… (up to ~30 s)</div>`)):hc,this._error?lc(at||(at=vd`<div class="error">${0}</div>`),this._error):hc,this._result?lc(lt||(lt=vd`
              <div class="status">Received ${0}
                · ${0} s</div>
              ${0}`),new Date(1e3*this._result.received_at).toLocaleTimeString(),(this._result.elapsed_ms/1e3).toFixed(1),o.length?lc(dt||(dt=vd`
                <div class="label">Values</div>
                <div class="grid">
                  ${0}
                </div>`),o.map(e=>lc(ct||(ct=vd`
                    <div class="cell"><div class="k">${0}</div><div class="v">${0}</div></div>`),this._label(e,o),function(e){var t;const i=null!==(t=$g[e.type])&&void 0!==t?t:"";if("number"==typeof e.value){const t=Math.abs(e.value)>=100?e.value.toFixed(0):String(Math.round(100*e.value)/100);return i?`${t} ${i}`:t}if(Array.isArray(e.value))return e.value.join(", ");if(e.value&&"object"==typeof e.value){if("gps"===e.type){var o,n;const t=e.value;return`${null===(o=t.latitude)||void 0===o?void 0:o.toFixed(5)}, ${null===(n=t.longitude)||void 0===n?void 0:n.toFixed(5)}${void 0!==t.altitude?` · ${t.altitude} m`:""}`}return Object.entries(e.value).map(([e,t])=>`${e}: ${t}`).join(", ")}return String(e.value)}(e)))):lc(ht||(ht=vd`<div class="status">No sensor values in the answer.</div>`))):hc,n?lc(pt||(pt=vd`
              <div class="label">Position ${0}</div>
              <meshcore-location-map .lat=${0} .lon=${0} .alt=${0} .height=${0}>
              </meshcore-location-map>`),"telemetry"===n.source?"(GPS, telemetry)":"(advertised)",n.lat,n.lon,n.alt,260):this._loading?hc:lc(ut||(ut=vd`<div class="label">Position</div><div class="status">No position available.</div>`)),this._loading,()=>this._request(),this._close)}};Cg.styles=$d(mt||(mt=vd`
    :host { display: contents; }
    .backdrop { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.5); display: flex;
      align-items: center; justify-content: center; z-index: 1001; }
    .dialog { background: var(--card-background-color, #fff); color: var(--primary-text-color);
      border-radius: 12px; width: min(520px, calc(100vw - 32px)); max-height: calc(100vh - 48px);
      display: flex; flex-direction: column; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25); }
    .head { display: flex; align-items: center; justify-content: space-between; padding: 16px 20px 8px; }
    .title { font-size: 16px; font-weight: 600; }
    .close { background: none; border: none; font-size: 18px; cursor: pointer; color: var(--secondary-text-color); }
    .body { padding: 0 20px 12px; overflow: auto; }
    .label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;
      color: var(--secondary-text-color); margin: 12px 0 6px; }
    .status { font-size: 13px; color: var(--secondary-text-color); }
    .error { font-size: 13px; color: var(--error-color, #db4437); }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 8px; }
    .cell { background: var(--secondary-background-color, #f5f5f5); border-radius: 8px; padding: 8px 10px; }
    .cell .k { font-size: 11px; color: var(--secondary-text-color); }
    .cell .v { font-size: 15px; font-weight: 600; margin-top: 2px; overflow-wrap: anywhere; }
    iframe { width: 100%; height: 260px; border: 0; border-radius: 8px; background: #ddd; }
    .map-meta { display: flex; justify-content: space-between; gap: 8px; font-size: 12px;
      color: var(--secondary-text-color); margin-top: 4px; }
    .map-meta a { color: var(--primary-color, #03a9f4); }
    .foot { display: flex; gap: 8px; justify-content: flex-end; padding: 12px 20px 16px;
      border-top: 1px solid var(--divider-color, #e0e0e0); }
    .foot button { padding: 8px 14px; border-radius: 8px; border: 1px solid var(--divider-color, #e0e0e0);
      background: var(--card-background-color, #fff); color: var(--primary-text-color); cursor: pointer; font-size: 13px; }
    .foot button.primary { background: var(--primary-color, #03a9f4); border-color: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff); }
    .foot button:disabled { opacity: 0.6; cursor: default; }
  `)),fd([Lc({type:Object})],Cg.prototype,"hass",void 0),fd([Lc({type:Object})],Cg.prototype,"contact",void 0),fd([Lc({type:String})],Cg.prototype,"entryId",void 0),fd([Lc({type:Boolean})],Cg.prototype,"open",void 0),fd([Ec()],Cg.prototype,"_loading",void 0),fd([Ec()],Cg.prototype,"_result",void 0),fd([Ec()],Cg.prototype,"_error",void 0),Cg=fd([Tc("meshcore-telemetry-dialog")],Cg);let Mg=class extends Mc{constructor(){super(),this.open=!1,this.pendingAction=null,this._routeOpen=!1,this._telemetryOpen=!1,this.bbsController=new ch(this),this._confirming=!1,this._confirmAction=null,this._onRouteChanged=e=>{const t=e.detail;this.node&&"adv_name"in this.node&&(this.node={...this.node,out_path:t.out_path,out_path_len:t.out_path_len,out_path_hash_mode:t.out_path_len<0?-1:t.path_hash_mode},this.dispatchEvent(new CustomEvent("node-updated",{detail:{node:this.node},bubbles:!0,composed:!0})))},bh(this,{isOpen:()=>this.open,onEscape:()=>{this._confirming?(this._confirming=!1,this._confirmAction=null):this._close()}})}render(){if(!this.open||!this.node)return lc(gt||(gt=vd``));const e="adv_name"in this.node,t=e?2===this.node.type:"repeater"===this.node.type,i=e&&3===this.node.type,o=e?1===this.node.type:"client"===this.node.type,n=e&&4===this.node.type,s=e?this.node.adv_name:this.node.name,r=this.node.pubkey_prefix,a=e&&!!this.node.bbs_placeholder;let l=lc(vt||(vt=vd`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`)),d="Contact",c="";return t?(l=lc(ft||(ft=vd`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`)),d="Repeater",c="repeater"):i?(l=lc(_t||(_t=vd`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`)),d="Room Server",c="room-server"):n?(l=lc(yt||(yt=vd`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>`)),d="Sensor",c="sensor"):o&&(l=lc(bt||(bt=vd`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`)),d="Client",c="client"),lc(xt||(xt=vd`
      <div class="dialog-backdrop" @click=${0}>
        <div
          class="dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Node detail — ${0}"
          @click=${0}>
          <div class="dialog-header">
            <div class=${0}>${0}</div>
            <div class="dialog-title">
              <div class="dialog-name">${0}${0}</div>
              <div class="dialog-type">${0}</div>
            </div>
            <button class="dialog-close" aria-label="Close" @click=${0}>✕</button>
          </div>

          <div class="dialog-content">
            ${0}
          </div>
        </div>
      </div>
      ${0}
    `),this._close,s,e=>e.stopPropagation(),`dialog-avatar ${c}`,l,s,r?lc(wt||(wt=vd`<meshcore-bbs-badge .pubkey=${0}></meshcore-bbs-badge>`),r):"",d,this._close,this._confirming?lc(kt||(kt=vd`
                  <div class="confirm-section">
                    <div class="confirm-text">
                      ${0}
                    </div>
                    ${0}
                    <div class="confirm-actions">
                      <button class="confirm-btn yes" @click=${0}>Yes</button>
                      <button class="confirm-btn no" @click=${0}>Cancel</button>
                    </div>
                  </div>
                `),"remove-contact"===this._confirmAction?"Remove this as an Added Contact?":"","remove-contact"===this._confirmAction?lc($t||($t=vd`
                      <div class="confirm-description">Removing the contact will make it a Discovered Contact.</div>
                    `)):lc(St||(St=vd``)),()=>this._confirmAction_exec(),()=>{this._confirming=!1,this._confirmAction=null}):lc(Ct||(Ct=vd`
                  ${0}

                  ${0}

                  <div class="section">
                    <div class="section-header">Information</div>
                    <div class="info-grid">
                      <div class="info-item">
                        <div class="info-label">Public Key Prefix</div>
                        <div class="info-value">${0}</div>
                      </div>
                      <div class="info-item">
                        <div class="info-label">Type</div>
                        <div class="info-value">${0}</div>
                      </div>
                      ${0}
                    </div>
                  </div>

                  ${0}

                  ${0}

                `),a?lc(Mt||(Mt=vd``)):lc(zt||(zt=vd`<div class="section">
                    <div class="section-header">Quick Actions</div>
                    <div class="quick-actions ${0}">
                      ${0}
                      ${0}
                      ${0}
                      ${0}
                      ${0}
                    </div>
                  </div>`),e?"":"full",e&&this.node.added_to_node&&(o||i)?lc(Tt||(Tt=vd`
                        <button class="action-btn" @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>Message</button>
                      `),()=>this._dispatchEvent("message")):lc(Pt||(Pt=vd``)),e&&this.node.added_to_node?lc(At||(At=vd`
                        <button class="action-btn" title="Request this contact's telemetry and position"
                          @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M3 13h2v7H3zm4-4h2v11H7zm4-4h2v15h-2zm4 7h2v8h-2zm4-3h2v11h-2z"/></svg>Telemetry</button>
                      `),()=>{this._telemetryOpen=!0}):lc(Lt||(Lt=vd``)),e&&this.node.added_to_node?lc(Et||(Et=vd`
                        <button class="action-btn" title="Choose the repeaters direct messages go through"
                          @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6 3a3 3 0 00-1 5.83V21h2V8.83A3 3 0 006 3zm12 12a3 3 0 00-2.83 2H10v2h5.17A3 3 0 1018 15zM9 7h6a2 2 0 010 4H11a4 4 0 000 8h-1v-2h1a2 2 0 010-4h4a4 4 0 000-8H9z"/></svg>Route</button>
                      `),()=>{this._routeOpen=!0}):lc(It||(It=vd``)),r&&!o?lc(Ot||(Ot=vd`
                        <button class="action-btn" @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M2 12a2 2 0 104 0 2 2 0 10-4 0zM10 12a2 2 0 104 0 2 2 0 10-4 0zM18 12a2 2 0 104 0 2 2 0 10-4 0zM7 10l3 2-3 2zM15 10l3 2-3 2z"/></svg>Trace</button>
                      `),()=>this._dispatchEvent("trace")):lc(Rt||(Rt=vd``)),e&&this.node.added_to_node?lc(Dt||(Dt=vd`<button class="action-btn warning"
                            ?disabled=${0}
                            @click=${0}>${0}</button>`),"remove-contact"===this.pendingAction,()=>{this._confirming=!0,this._confirmAction="remove-contact"},"remove-contact"===this.pendingAction?"Removing…":"Remove Contact"):e?lc(Bt||(Bt=vd`<button class="action-btn"
                            ?disabled=${0}
                            @click=${0}>${0}</button>`),"add-contact"===this.pendingAction,()=>this._dispatchEvent("add-contact"),"add-contact"===this.pendingAction?lc(Nt||(Nt=vd`Adding…`)):lc(Ft||(Ft=vd`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>Add Contact`))):lc(qt||(qt=vd``))),e&&r&&dh.active?lc(Ht||(Ht=vd`
                    <div class="section">
                      <div class="section-header">BBS</div>
                      <meshcore-bbs-actions .hass=${0} .pubkey=${0} .name=${0}></meshcore-bbs-actions>
                    </div>`),this.hass,r,s):lc(jt||(jt=vd``)),r,d,e?lc(Zt||(Zt=vd`
                        <div class="info-item">
                          <div class="info-label">Last Advert</div>
                          <div class="info-value">
                            ${0}
                          </div>
                        </div>
                        <div class="info-item">
                          <div class="info-label">Status</div>
                          <div class="info-value">${0}</div>
                        </div>
                      `),this.node.last_advert?new Date(1e3*this.node.last_advert).toLocaleString():"Unknown",this.node.added_to_node?"Added Contact":"Discovered Contact"):lc(Vt||(Vt=vd``)),!e||0===this.node.adv_lat&&0===this.node.adv_lon?lc(Ut||(Ut=vd``)):lc(Kt||(Kt=vd`
                        <div class="section">
                          <div class="section-header">Location</div>
                          <div class="info-grid">
                            <div class="info-item">
                              <div class="info-label">Latitude</div>
                              <div class="info-value">${0}</div>
                            </div>
                            <div class="info-item">
                              <div class="info-label">Longitude</div>
                              <div class="info-value">${0}</div>
                            </div>
                          </div>
                          <meshcore-location-map style="margin-top: 8px;"
                            .lat=${0}
                            .lon=${0}
                            .height=${0}></meshcore-location-map>
                        </div>
                      `),this.node.adv_lat.toFixed(6),this.node.adv_lon.toFixed(6),this.node.adv_lat,this.node.adv_lon,200),e&&this.node.out_path?lc(Wt||(Wt=vd`
                        <div class="section">
                          <div class="section-header">Network</div>
                          <div class="info-item">
                            <div class="info-label">Route (Outgoing Path)</div>
                            <div class="info-value">${0}</div>
                          </div>
                          ${0}
                        </div>
                      `),this.node.out_path,this.node.out_path_len?lc(Gt||(Gt=vd`
                                <div class="info-item" style="margin-top: 8px;">
                                  <div class="info-label">Path Length</div>
                                  <div class="info-value">${0} hops</div>
                                </div>
                              `),this.node.out_path_len):lc(Xt||(Xt=vd``))):lc(Yt||(Yt=vd``))),e?lc(Jt||(Jt=vd`
        <meshcore-route-dialog
          .hass=${0}
          .contact=${0}
          .entryId=${0}
          ?open=${0}
          @route-dialog-closed=${0}
          @route-changed=${0}></meshcore-route-dialog>
        <meshcore-telemetry-dialog
          .hass=${0}
          .contact=${0}
          .entryId=${0}
          ?open=${0}
          @telemetry-dialog-closed=${0}></meshcore-telemetry-dialog>`),this.hass,this.node,this.entryId,this._routeOpen,e=>{e.stopPropagation(),this._routeOpen=!1},this._onRouteChanged,this.hass,this.node,this.entryId,this._telemetryOpen,e=>{e.stopPropagation(),this._telemetryOpen=!1}):lc(Qt||(Qt=vd``)))}_close(){this.open=!1,this._confirming=!1,this._confirmAction=null,this.dispatchEvent(new CustomEvent("node-detail-closed",{bubbles:!0,composed:!0}))}_dispatchEvent(e){this.dispatchEvent(new CustomEvent(`node-${e}`,{detail:{node:this.node},bubbles:!0,composed:!0}))}_confirmAction_exec(){this._confirmAction&&this._dispatchEvent(this._confirmAction),this._close()}};Mg.styles=$d(ei||(ei=vd`
    :host {
      display: contents;
    }

    .dialog-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      animation: fadeIn 0.2s;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .dialog {
      background: var(--card-background-color, #fff);
      border-radius: 8px;
      max-width: 500px;
      max-height: 80vh;
      overflow-y: auto;
      box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
      animation: slideUp 0.3s;
    }

    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    .dialog-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
    }

    .dialog-avatar {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: var(--primary-color, #03a9f4);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 24px;
      flex-shrink: 0;
    }

    .dialog-avatar.repeater { background: #ff9800; }
    .dialog-avatar.room-server { background: #9c27b0; }
    .dialog-avatar.sensor { background: #607d8b; }
    .dialog-avatar.client { background: #4caf50; }

    .dialog-title { flex: 1; overflow: hidden; }

    .dialog-name {
      font-size: 18px;
      font-weight: 600;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .dialog-type {
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      margin-top: 2px;
    }

    .dialog-close {
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: var(--secondary-text-color);
      padding: 0;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .dialog-close:hover { color: var(--primary-text-color); }

    .dialog-content { padding: 16px; }

    .section { margin-bottom: 16px; }

    .section-header {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      color: var(--secondary-text-color, #727272);
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }

    .quick-actions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
    }

    .quick-actions.full { grid-template-columns: 1fr; }

    .action-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      padding: 8px 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      background: transparent;
      color: var(--primary-text-color);
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s;
    }

    .action-btn:hover {
      background: var(--primary-color, #03a9f4);
      color: #fff;
      border-color: var(--primary-color, #03a9f4);
    }

    .action-btn.warning {
      color: #ff9800;
      border-color: rgba(255, 152, 0, 0.4);
    }

    .action-btn.warning:hover {
      background: #ff9800;
      color: #fff;
      border-color: #ff9800;
    }

    .action-btn.danger {
      color: var(--error-color, #db4437);
      border-color: rgba(219, 68, 55, 0.3);
    }

    .action-btn.danger:hover {
      background: var(--error-color, #db4437);
      color: #fff;
      border-color: var(--error-color, #db4437);
    }

    .action-btn:disabled {
      opacity: 0.6;
      cursor: wait;
      pointer-events: none;
    }

    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    .info-item {
      padding: 8px;
      background: var(--primary-background-color, #fafafa);
      border-radius: 6px;
    }

    .info-label {
      font-size: 11px;
      color: var(--secondary-text-color, #727272);
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    .info-value {
      font-size: 13px;
      color: var(--primary-text-color);
      margin-top: 4px;
      word-break: break-all;
      font-family: monospace;
    }

    .confirm-section {
      padding: 12px;
      background: rgba(219, 68, 55, 0.08);
      border: 1px solid rgba(219, 68, 55, 0.2);
      border-radius: 6px;
      margin-bottom: 12px;
    }

    .confirm-text {
      font-size: 13px;
      color: var(--primary-text-color);
      margin-bottom: 8px;
    }

    .confirm-description {
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      margin-bottom: 10px;
    }

    .confirm-actions { display: flex; gap: 6px; }

    .confirm-btn {
      padding: 6px 10px;
      border: none;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
    }

    .confirm-btn.yes { background: var(--error-color, #db4437); color: #fff; }
    .confirm-btn.no { background: var(--divider-color, #e0e0e0); color: var(--primary-text-color); }

  `)),fd([Lc({type:Object})],Mg.prototype,"node",void 0),fd([Lc({type:Boolean})],Mg.prototype,"open",void 0),fd([Lc({type:Object})],Mg.prototype,"hass",void 0),fd([Lc({type:String})],Mg.prototype,"pendingAction",void 0),fd([Lc({type:String})],Mg.prototype,"entryId",void 0),fd([Ec()],Mg.prototype,"_routeOpen",void 0),fd([Ec()],Mg.prototype,"_telemetryOpen",void 0),fd([Ec()],Mg.prototype,"_confirming",void 0),fd([Ec()],Mg.prototype,"_confirmAction",void 0),Mg=fd([Tc("meshcore-node-detail-dialog")],Mg);let zg=class extends Mc{constructor(){super(...arguments),this.conversations=[],this.selectedId=null,this.narrow=!1,this.lastRead={},this._messageStore=null,this._unsubUnread=null,this._inputText="",this._sending=!1,this._viewportNarrow=!1,this._mediaQuery=null,this._mediaHandler=null,this._narrowShowMessages=!1,this._manageOpen=!1,this._manageInitialTab="contacts",this._searchOpen=!1,this._bbsPopupOpen=!1,this.bbsController=new ch(this),this._detailContact=null,this._currentEntityId=null,this._conversationResolved=!1,this._pendingScroll=null,this._scrollInFlight=!1,this._scrollGuardUntil=0,this._lastMessageCount=0,this._onContactDetailsRequested=e=>{const t=e.detail.pubkeyPrefix,i=this.conversations.find(e=>"pubkey_prefix"in e&&e.pubkey_prefix===t);i&&(this._detailContact=i)}}get _isNarrow(){return this.narrow||this._viewportNarrow}connectedCallback(){super.connectedCallback(),this.config&&!this._messageStore&&(this._messageStore=new rh(this.config),this._messageStore.setOnChange(()=>this.requestUpdate())),this.unread&&!this._unsubUnread&&(this._unsubUnread=this.unread.subscribe(()=>{this.lastRead=this.unread.lastRead,this.requestUpdate()}),this.lastRead=this.unread.lastRead,this.unread.onPostSwitchTimerFire(()=>this._checkAndMarkReadIfAtBottom())),this._mediaQuery=window.matchMedia("(max-width: 870px)"),this._viewportNarrow=this._mediaQuery.matches,this._mediaHandler=e=>{this._viewportNarrow=e.matches},this._mediaQuery.addEventListener("change",this._mediaHandler)}disconnectedCallback(){var e;super.disconnectedCallback(),this._messageStore&&(this._messageStore.destroy(),this._messageStore=null),this._unsubUnread&&(this._unsubUnread(),this._unsubUnread=null),null===(e=this.unread)||void 0===e||e.endConversation(),this._mediaQuery&&this._mediaHandler&&(this._mediaQuery.removeEventListener("change",this._mediaHandler),this._mediaQuery=null,this._mediaHandler=null)}updated(e){if(e.has("hass")&&this.hass&&this._messageStore&&this._messageStore.setHass(this.hass),e.has("config")&&this.config&&this._messageStore){this._messageStore.setConfig(this.config);const t=e.get("config");t&&t.entry_id!==this.config.entry_id&&(this.selectedId=null,this._currentEntityId=null,this._conversationResolved=!1,this._pendingScroll=null,this._lastMessageCount=0,this.unread.endConversation(),this._messageStore.switchEntity(null),this.dispatchEvent(new CustomEvent("active-entity-changed",{detail:{entityId:null},bubbles:!0,composed:!0})))}if(e.has("selectedId")&&this._onConversationSelected(),e.has("lastRead")&&this._currentEntityId&&this._conversationResolved&&null===this._pendingScroll&&this.unread.maybeReanchorOnLateData(this._currentEntityId)&&(this._pendingScroll="last-read"),this._pendingScroll){const e=this._messageStore,t=e&&!e.loading;t&&e.messages.length>0?(this._executeScroll(this._pendingScroll),this._pendingScroll=null,this._lastMessageCount=e.messages.length):t&&0===e.messages.length&&(this._pendingScroll=null)}else if(this._messageStore){const e=this._messageStore.messages.length;e>this._lastMessageCount&&this._lastMessageCount>0&&this._scrollToBottomIfNearEnd(),this._lastMessageCount=e}}render(){var e,t,i,o,n,s;return this._isNarrow?this._narrowShowMessages?lc(ti||(ti=vd`
          <div class="chat-layout">
            <div class="chat-main narrow-full">
              <div class="narrow-header">
                <button class="back-button" @click=${0}>← Back</button>
                <span class="narrow-conv-name">${0}${0}${0}</span>
                <div class="chat-header-actions">
                  ${0}
                  <button class="header-action-btn" title="Search messages" aria-label="Search messages" @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></button>
                </div>
              </div>
              ${0}
              ${0}
            </div>
          </div>
        `),()=>this._narrowShowMessages=!1,this._getConversationName(),this._renderBbsBadge(),this._renderScopeChip(),this._renderBbsHeaderButton(),()=>{this._searchOpen=!this._searchOpen},this._renderChatArea(),this._renderBbsPopup()):lc(ii||(ii=vd`
          <div class="chat-layout narrow-list-only">
            <meshcore-conversation-list
              .conversations=${0}
              .activeId=${0}
              .unread=${0}
              .unreadCounts=${0}
              .nodePrefix=${0}
              @conversation-selected=${0}
              @contact-details-requested=${0}
              @manage-requested=${0}></meshcore-conversation-list>
            ${0}
            ${0}
          </div>
        `),this.conversations,this.selectedId,this.unread,this.unread.counts,(null===(n=this.config)||void 0===n?void 0:n.node_prefix)||null,e=>{const t=e.detail.id;t===this.selectedId&&(this.unread.resetUnreadCountAtSelection(),this._pendingScroll="bottom"),this.selectedId=t,this._narrowShowMessages=!0},this._onContactDetailsRequested,()=>this._onManageRequested(),this._renderContactDetails(),this._manageOpen?lc(oi||(oi=vd`
              <meshcore-manage-dialog
                .hass=${0}
                .entryId=${0}
                .narrow=${0}
                .initialTab=${0}
                @manage-closed=${0}
                @contacts-changed=${0}
                @channels-changed=${0}
              ></meshcore-manage-dialog>
            `),this.hass,null===(s=this.config)||void 0===s?void 0:s.entry_id,this.narrow,this._manageInitialTab,()=>this._manageOpen=!1,this._onContactsChanged,this._onChannelsChanged):lc(ni||(ni=vd``))):lc(si||(si=vd`
      <div class="chat-layout">
        <meshcore-conversation-list
          .conversations=${0}
          .activeId=${0}
          .unread=${0}
          .unreadCounts=${0}
          .nodePrefix=${0}
          @conversation-selected=${0}
          @contact-details-requested=${0}
          @manage-requested=${0}></meshcore-conversation-list>
        ${0}
        <div class="chat-main">
          ${0}
          ${0}
              ${0}
        </div>
        ${0}
        ${0}
      </div>
    `),this.conversations,this.selectedId,this.unread,this.unread.counts,(null===(e=this.config)||void 0===e?void 0:e.node_prefix)||null,e=>{const t=e.detail.id;t===this.selectedId&&(this.unread.resetUnreadCountAtSelection(),this._pendingScroll="bottom"),this.selectedId=t},this._onContactDetailsRequested,()=>this._onManageRequested(),this._renderContactDetails(),this.selectedId?lc(ri||(ri=vd`
            <div class="narrow-header" style="display: flex; align-items: center; padding: 8px 16px;">
              <div style="flex: 1; font-size: 14px; font-weight: 500; color: var(--primary-text-color);">
                ${0}${0}${0}
              </div>
              <div class="chat-header-actions">
                ${0}
                <button class="header-action-btn" title="Search messages" aria-label="Search messages" @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></button>
              </div>
            </div>
          `),this._getConversationName(),this._renderBbsBadge(),this._renderScopeChip(),this._renderBbsHeaderButton(),()=>{this._searchOpen=!this._searchOpen}):"",this._renderChatArea(),this._renderBbsPopup(),this._searchOpen?lc(ai||(ai=vd`
          <div class="search-panel">
            <meshcore-message-search
              .hass=${0}
              .entryId=${0}
              .entityId=${0}
              .meshNodeName=${0}
              @result-selected=${0}
              @search-close=${0}
            ></meshcore-message-search>
          </div>
        `),this.hass,null===(t=this.config)||void 0===t?void 0:t.entry_id,this._currentEntityId||void 0,null===(i=this.config)||void 0===i?void 0:i.node_name,this._onSearchResultSelected,()=>{this._searchOpen=!1}):"",this._manageOpen?lc(li||(li=vd`
          <meshcore-manage-dialog
            .hass=${0}
            .entryId=${0}
            .narrow=${0}
            .initialTab=${0}
            @manage-closed=${0}
            @contacts-changed=${0}
            @channels-changed=${0}
          ></meshcore-manage-dialog>
        `),this.hass,null===(o=this.config)||void 0===o?void 0:o.entry_id,this.narrow,this._manageInitialTab,()=>this._manageOpen=!1,this._onContactsChanged,this._onChannelsChanged):lc(di||(di=vd``)))}_renderChatArea(){var e,t,i,o,n,s;if(!this._messageStore||!this.selectedId)return lc(ci||(ci=vd`
        <div class="empty-state">
          <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg></div>
          <div class="empty-text">Select a conversation to start</div>
          <div class="empty-subtext">Choose a channel or contact from the list</div>
        </div>
      `));if(!this._conversationResolved)return lc(hi||(hi=vd`
        <div class="empty-state">
          <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg></div>
          <div class="empty-text">Conversation unavailable</div>
          <div class="empty-subtext">This contact may no longer be added to the node</div>
        </div>
      `));const r=this._messageStore.messages,a=function(e,t){var i;const o=null!==(i=t.group_timeout)&&void 0!==i?i:300,n=!1!==t.group_messages?function(e,t){if(0===e.length)return[];const i=[];let o=null;for(const n of e)!o||n.isSystem||o.isSystem||n.sender!==o.sender||(n.timestamp.getTime()-o.endTime.getTime())/1e3>t?(o={sender:n.sender,isOutgoing:n.isOutgoing,isSystem:n.isSystem,messages:[n],startTime:n.timestamp,endTime:n.timestamp},i.push(o)):(o.messages.push(n),o.endTime=n.timestamp);return i}(e,o):e.map(e=>({sender:e.sender,isOutgoing:e.isOutgoing,isSystem:e.isSystem,messages:[e],startTime:e.timestamp,endTime:e.timestamp}));if(0===n.length)return[];const s=[];let r=null;for(const e of n){const i=e.startTime;!1===t.show_date_separators||r&&!nh(r,i)||s.push({type:"date-separator",date:i,label:sh(i)}),s.push({type:"group",group:e}),r=i}return s}(r,{group_messages:null===(e=null===(t=this.config)||void 0===t?void 0:t.group_messages)||void 0===e||e,group_timeout:null!==(i=null===(o=this.config)||void 0===o?void 0:o.group_timeout)&&void 0!==i?i:300,show_date_separators:null===(n=null===(s=this.config)||void 0===s?void 0:s.show_date_separators)||void 0===n||n});return lc(pi||(pi=vd`
      <div class="chat-container" @reply-to-sender=${0} @scroll=${0}>
        ${0}
        ${0}
        ${0}
        ${0}
        ${0}
        ${0}
      </div>
      <div class="input-area">
        <textarea
          placeholder="Type a message..."
          aria-label="Message text. Press Enter to send, Shift+Enter for newline."
          .value=${0}
          @input=${0}
          @keydown=${0}
          ?disabled=${0}></textarea>
        <button
          class="send-button"
          aria-label="Send message"
          @click=${0}
          ?disabled=${0}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16151496 C3.34915502,0.9 2.40734225,0.9 1.77946707,1.4429026 C0.994623095,2.0752101 0.837654326,3.00778453 1.15159189,3.98029867 L3.03521743,10.4212916 C3.03521743,10.5783889 3.19218622,10.7354863 3.50612381,10.7354863 L16.6915026,11.5209733 C16.6915026,11.5209733 17.1624089,11.5209733 17.1624089,12.0492776 C17.1624089,12.5775818 16.6915026,12.4744748 16.6915026,12.4744748 Z"/>
          </svg>
        </button>
      </div>
    `),this._onReplyToSender,this._onChatScroll,this._messageStore.loadingOlder?lc(ui||(ui=vd`<div class="loading-older"><div class="loading-spinner"></div></div>`)):lc(mi||(mi=vd``)),this._messageStore.error?lc(gi||(gi=vd`
              <div class="error-state">
                <span><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg></span>
                <span>${0}</span>
              </div>
            `),this._messageStore.error):lc(vi||(vi=vd``)),this._messageStore.loading&&0===r.length?lc(fi||(fi=vd`
              <div class="loading-state">
                <div class="loading-spinner"></div>
                Loading messages...
              </div>
            `)):lc(_i||(_i=vd``)),0!==a.length||this._messageStore.loading?lc(bi||(bi=vd``)):lc(yi||(yi=vd`
              <div class="empty-state">
                <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h5v7h7v9H6z"/></svg></div>
                <div class="empty-text">No messages yet</div>
                <div class="empty-subtext">Be the first to send a message!</div>
              </div>
            `)),this._renderItemsWithDivider(a),this._renderNewMessagesIndicator(),this._inputText,e=>{const t=e.target;this._inputText=t.value},e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),this._sendMessage())},this._sending||!this.selectedId,()=>this._sendMessage(),this._sending||!this.selectedId||!this._inputText.trim())}_renderItemsWithDivider(e){const t=[];let i=0,o=!1;const n=this.unread.dividerAfterGroupIdx(e);for(const a of e){var s,r;"date-separator"!==a.type?(o||null===n||i!==n||(t.push(lc(wi||(wi=vd`
          <div class="unread-divider">
            <span>New messages</span>
          </div>
        `))),o=!0),t.push(lc(ki||(ki=vd`
        <meshcore-message-bubble
          .group=${0}
          .timestampFormat=${0}></meshcore-message-bubble>
      `),a.group,null!==(s=null===(r=this.config)||void 0===r?void 0:r.timestamp_format)&&void 0!==s?s:"relative")),i++):t.push(lc(xi||(xi=vd`
          <div class="date-separator">
            <span>${0}</span>
          </div>
        `),a.label))}return t}_renderNewMessagesIndicator(){const e=this._messageStore;if(!e)return lc($i||($i=vd``));const t=e.newMessagesWhileAway,i=e.hasNewerMessages;if(null!==this._pendingScroll||this._scrollInFlight)return lc(Si||(Si=vd``));const o=function(e){return e.counter>0?`↓ ${e.counter} new`:e.hasNewer||e.hasContentBelow?e.cursorAtTail&&!e.hasNewer?"↓ latest":"↓ unread":null}({counter:t,hasNewer:i,hasContentBelow:this._hasContentBelowViewport(),cursorAtTail:this.unread.cursorAtTail(this._currentEntityId,this._latestNonTempMessageId())});return null===o?lc(Ci||(Ci=vd``)):lc(Mi||(Mi=vd`
      <button class="new-messages-indicator" @click=${0}>
        ${0}
      </button>
    `),this._jumpToBottom,o)}_onConversationSelected(){if(this.selectedId&&this._messageStore&&this.config&&this.hass){var e;const t=this.conversations.find(e=>"pubkey_prefix"in e?e.pubkey_prefix===this.selectedId:String(e.channel_idx)===this.selectedId);if(!t)return this._conversationResolved=!1,this._currentEntityId=null,void(this._messageStore&&this._messageStore.switchEntity(null));this._conversationResolved=!0;let i=null;const o=[];if("pubkey_prefix"in t){const e=t.pubkey_prefix;i=function(e,t,i){const o=i.substring(0,6);if(t.contact_entity_pattern&&t.node_prefix){const i=t.contact_entity_pattern.replace("{prefix}",t.node_prefix).replace("{contact}",o);if(e.states[i])return i}const n=`_${o}_messages`,s=t.node_prefix?`_${t.node_prefix}_`:"";for(const t of Object.keys(e.states))if(t.startsWith("binary_sensor.")&&t.endsWith(n)&&(!s||t.includes(s)))return t;return null}(this.hass,this.config,e)}else{const e=t,n=e.channel_idx;e.conversation_id?(i=e.conversation_id,this.config.node_prefix&&o.push(`binary_sensor.meshcore_${this.config.node_prefix}_ch_${n}_messages`)):i=function(e,t,i){if(t.channel_entity_pattern&&t.node_prefix){const o=t.channel_entity_pattern.replace("{prefix}",t.node_prefix).replace("{idx}",String(i));if(e.states[o])return o}const o=`_ch_${i}_messages`,n=t.node_prefix?`_${t.node_prefix}_`:"";for(const t of Object.keys(e.states))if(t.startsWith("binary_sensor.")&&t.endsWith(o)&&(!n||t.includes(n)))return t;return null}(this.hass,this.config,n)}this._currentEntityId=i,this.dispatchEvent(new CustomEvent("active-entity-changed",{detail:{entityId:i},bubbles:!0,composed:!0}));const n=this._getUnreadCountForSelected(),s=i&&(null===(e=this.lastRead)||void 0===e?void 0:e[i])||null;this._pendingScroll=s||n>0?"last-read":"bottom",this._lastMessageCount=0,this.unread.beginConversation(i,n),this._messageStore.switchEntity(i,s,o)}}async _sendMessage(){if(this._sending||!this._inputText.trim()||!this.selectedId||!this.hass||!this.config)return;if(!this._conversationResolved)return void console.warn("Cannot send — conversation not resolved");this._sending=!0;const e=this._inputText.trim();this._inputText="";try{var t;this._messageStore&&(this._messageStore.addOptimisticMessage(this.config.node_name,e),this._pendingScroll="bottom");const o=null===(t=this.config)||void 0===t?void 0:t.entry_id;if(this._isContact())await async function(e,t,i,o){try{const n={pubkey_prefix:t,message:i};o&&(n.entry_id=o),await e.callService("meshcore","send_message",n)}catch(e){throw new Error(`Failed to send direct message: ${String(e)}`)}}(this.hass,this.selectedId,e,o);else{var i;const t=parseInt(this.selectedId,10);if(isNaN(t)||t<0||t>255)return console.error("Invalid channel index:",this.selectedId),void(this._inputText=e);await async function(e,t,i,o,n){try{const s={channel_idx:t,message:i};o&&(s.entry_id=o),n&&(s.scope=n),await e.callService("meshcore","send_channel_message",s)}catch(e){throw new Error(`Failed to send channel message: ${String(e)}`)}}(this.hass,t,e,o,null!==(i=this._getActiveChannelScope())&&void 0!==i?i:void 0)}}catch(t){console.error("Failed to send message:",t),this._inputText=e}finally{this._sending=!1}}_latestNonTempMessageId(){var e,t;const i=null!==(e=null===(t=this._messageStore)||void 0===t?void 0:t.messages)&&void 0!==e?e:[];for(let e=i.length-1;e>=0;e--){const t=i[e].id;if(!t.startsWith("rt_")&&!t.startsWith("optimistic_"))return t}return null}_isContact(){return!!this.selectedId&&!/^\d+$/.test(this.selectedId)}_onManageRequested(){this._manageInitialTab="contacts",this._manageOpen=!0}_onContactsChanged(){this.dispatchEvent(new CustomEvent("contacts-changed",{bubbles:!0,composed:!0}))}_onChannelsChanged(){this.dispatchEvent(new CustomEvent("channels-changed",{bubbles:!0,composed:!0}))}_onReplyToSender(e){const{mention:t}=e.detail;t&&(this._inputText=t+this._inputText,this.requestUpdate())}_renderContactDetails(){var e;const t=this._detailContact,i=()=>{this._detailContact=null},o=e=>{this.dispatchEvent(new CustomEvent("node-action",{detail:{action:e,node:t},bubbles:!0,composed:!0})),"message"!==e&&"trace"!==e||i()};return lc(zi||(zi=vd`
      <meshcore-node-detail-dialog
        .hass=${0}
        .entryId=${0}
        .node=${0}
        ?open=${0}
        @node-detail-closed=${0}
        @node-updated=${0}
        @node-message=${0}
        @node-trace=${0}
        @node-add-contact=${0}
        @node-remove-contact=${0}>
      </meshcore-node-detail-dialog>`),this.hass,null===(e=this.config)||void 0===e?void 0:e.entry_id,null!=t?t:void 0,!!t,i,e=>{e.stopPropagation(),this._detailContact=e.detail.node},e=>{e.stopPropagation(),t&&(this.selectedId=t.pubkey_prefix,this._narrowShowMessages=!0),i()},e=>{e.stopPropagation(),o("trace")},e=>{e.stopPropagation(),o("add-contact")},e=>{e.stopPropagation(),o("remove-contact")})}_selectedContactPrefix(){if(!this.selectedId)return null;const e=this.conversations.find(e=>"pubkey_prefix"in e&&e.pubkey_prefix===this.selectedId);return e?e.pubkey_prefix:null}_renderBbsBadge(){const e=this._selectedContactPrefix();return e&&dh.active?lc(Ti||(Ti=vd`<meshcore-bbs-badge .pubkey=${0}></meshcore-bbs-badge>`),e):""}_renderBbsHeaderButton(){return this._selectedContactPrefix()&&dh.active?lc(Pi||(Pi=vd`<button class="header-action-btn" title="BBS access" aria-label="BBS access"
      @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M4 4h16v2H4zm0 4h10v2H4zm0 4h16v2H4zm0 4h10v2H4zm13-1 3 3-3 3v-2h-3v-2h3z"/></svg></button>`),()=>{this._bbsPopupOpen=!0}):""}_renderBbsPopup(){const e=this._selectedContactPrefix();if(!this._bbsPopupOpen||!e)return"";const t=()=>{this._bbsPopupOpen=!1};return lc(Ai||(Ai=vd`
      <div class="bbs-popup-overlay" @click=${0}
        @keydown=${0}>
        <div class="bbs-popup" role="dialog" aria-modal="true" aria-label="BBS access"
          @click=${0}>
          <div class="bbs-popup-header">
            <span>BBS — ${0}</span>
            <button class="header-action-btn" aria-label="Close" @click=${0}>✕</button>
          </div>
          <meshcore-bbs-actions .hass=${0} .pubkey=${0}
            .name=${0}></meshcore-bbs-actions>
        </div>
      </div>`),t,e=>{"Escape"===e.key&&t()},e=>e.stopPropagation(),this._getConversationName(),t,this.hass,e,this._getConversationName())}_getConversationName(){if(!this.selectedId)return"";const e=this.conversations.find(e=>"pubkey_prefix"in e?e.pubkey_prefix===this.selectedId:String(e.channel_idx)===this.selectedId);return e?"pubkey_prefix"in e?e.adv_name:e.name:this.selectedId}_getActiveChannelScope(){if(!this.selectedId||this._isContact())return null;const e=this.conversations.find(e=>!("pubkey_prefix"in e)&&String(e.channel_idx)===this.selectedId);return e&&e.scope||null}_renderScopeChip(){const e=this._getActiveChannelScope();return e?lc(Li||(Li=vd`<button
      class="scope-chip"
      title="Region scope: messages on this channel flood only through '${0}' repeaters. Click to manage."
      aria-label="Region scope ${0} — manage channels"
      @click=${0}>🌐 ${0}</button>`),e,e,()=>{this._manageInitialTab="channels",this._manageOpen=!0},e):""}_getChatContainer(){var e;return null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(".chat-container")}_isScrollGuarded(){return this._scrollInFlight||Date.now()<this._scrollGuardUntil}_executeScroll(e){this._scrollInFlight=!0,"last-read"===e&&(this._scrollGuardUntil=Date.now()+2e3),this._doScrollWithRetry(e,0)}_doScrollWithRetry(e,t){this.updateComplete.then(()=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{const i=this._getChatContainer();if(!i)return void(this._scrollInFlight=!1);if("bottom"===e)return i.scrollTop=i.scrollHeight,void(this._scrollInFlight=!1);const o=i.querySelector(".unread-divider");if(o){const e=i.getBoundingClientRect(),t=o.getBoundingClientRect();i.scrollTop+=t.top-e.top,this._scrollInFlight=!1}else t<10?setTimeout(()=>this._doScrollWithRetry(e,t+1),50):(i.scrollTop=i.scrollHeight,this._scrollInFlight=!1)})})})}_scrollToBottomIfNearEnd(){if(this._isScrollGuarded())return;const e=this._messageStore;null!=e&&e.hasNewerMessages||this.updateComplete.then(()=>{requestAnimationFrame(()=>{if(this._isScrollGuarded())return;const e=this._getChatContainer();e&&e.scrollHeight-e.scrollTop-e.clientHeight<150&&(e.scrollTop=e.scrollHeight,this._checkAndMarkReadIfAtBottom())})})}_onChatScroll(e){const t=e.target,i=this._messageStore;if(!t||!i)return;const o=t.scrollTop,n=t.scrollHeight-t.scrollTop-t.clientHeight<150;if(i.setUserAtBottom(n),o<150&&i.hasOlderMessages&&!i.loadingOlder&&!this._isScrollGuarded()){const e=t.scrollHeight;i.loadOlderMessages().then(()=>{this.updateComplete.then(()=>{requestAnimationFrame(()=>{const i=t.scrollHeight-e;i>0&&(t.scrollTop+=i)})})})}n&&(i.hasNewerMessages&&!i.loadingNewer?i.loadNewerMessages():i.hasNewerMessages||this._checkAndMarkReadIfAtBottom())}_isLastMessageVisible(){const e=this._getChatContainer();if(!e)return!1;const t=e.querySelectorAll("meshcore-message-bubble"),i=t[t.length-1];if(!i)return!1;const o=e.getBoundingClientRect().bottom;return i.getBoundingClientRect().bottom<=o+5}_hasContentBelowViewport(){var e,t;return!!this._getChatContainer()&&(0!==(null!==(e=null===(t=this._messageStore)||void 0===t?void 0:t.messages.length)&&void 0!==e?e:0)&&!this._isLastMessageVisible())}_checkAndMarkReadIfAtBottom(){const e=this._messageStore;this._currentEntityId&&e&&this.unread.onScrollState({entityId:this._currentEntityId,lastMessageVisible:this._isLastMessageVisible(),hasNewerMessages:e.hasNewerMessages,bufferTailId:this._latestNonTempMessageId()})&&e.resetNewMessagesCounter()}async _jumpToBottom(){const e=this._messageStore;if(e){for(;e.hasNewerMessages&&!e.loadingNewer;)await e.loadNewerMessages();await this.updateComplete,requestAnimationFrame(()=>{const t=this._getChatContainer();t&&(t.scrollTop=t.scrollHeight,this._currentEntityId&&this.unread.onPillJump({entityId:this._currentEntityId,bufferTailId:this._latestNonTempMessageId()})&&e.resetNewMessagesCounter())})}}_getUnreadCountForSelected(){var e,t;return this.selectedId&&this.unread?this.unread.badgeCount(this.selectedId,null!==(e=null===(t=this.config)||void 0===t?void 0:t.node_prefix)&&void 0!==e?e:null,this._currentEntityId):0}_onSearchResultSelected(e){const{entityId:t,messageId:i,timestamp:o}=e.detail;t&&this._messageStore&&(this._messageStore.switchEntity(t),this._currentEntityId=t),i&&this._scrollToAndHighlight(i,o)}_scrollToAndHighlight(e,t){this.updateComplete.then(()=>{requestAnimationFrame(()=>{this._findAndHighlightBubble(e)||t&&this._messageStore&&this._messageStore.fetchAroundTimestamp(t).then(t=>{t&&this.updateComplete.then(()=>{requestAnimationFrame(()=>{this._findAndHighlightBubble(e)})})})})})}_findAndHighlightBubble(e){var t;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".chat-container");if(!i)return!1;const o=i.querySelectorAll("meshcore-message-bubble");for(const t of Array.from(o)){var n;const i=null===(n=t.shadowRoot)||void 0===n?void 0:n.querySelector(`[data-msg-id="${e}"]`);if(i)return i.scrollIntoView({behavior:"smooth",block:"center"}),i.classList.add("search-highlight"),setTimeout(()=>i.classList.remove("search-highlight"),2500),!0}return!1}};zg.styles=$d(Ei||(Ei=vd`
    :host {
      display: flex;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .chat-layout {
      display: flex;
      width: 100%;
      height: 100%;
      gap: 0;
    }

    .chat-main {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      background: var(--chat-bg);
    }

    .chat-container {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 8px 12px;
      background: var(--chat-bg);
      position: relative;
      /* Disable browser-level scroll anchoring. The lazy-load-older
       * path in _onChatScroll manually preserves scroll position by
       * adding the prepended content height to scrollTop. With the
       * default (overflow-anchor: auto), the browser ALSO shifts
       * scrollTop by the prepended height -- and the two
       * compensations stack, landing the viewport past the divider
       * at the new buffer tail. That misfires mark-read on channel
       * re-entry. See 2026-05-15 unread-clearing investigation. */
      overflow-anchor: none;
    }

    .chat-container::-webkit-scrollbar {
      width: 6px;
    }

    .chat-container::-webkit-scrollbar-track {
      background: transparent;
    }

    .chat-container::-webkit-scrollbar-thumb {
      background: var(--scrollbar-thumb, var(--scrollbar-thumb-color, #c1c1c1));
      border-radius: 3px;
    }

    .input-area {
      display: flex;
      align-items: flex-end;
      gap: 8px;
      padding: 8px 12px 12px;
      border-top: 1px solid var(--divider-color, #e0e0e0);
      background: var(--input-bg);
      flex-shrink: 0;
    }

    .input-area textarea {
      flex: 1;
      padding: 10px 14px;
      border: 1px solid var(--input-border);
      border-radius: 20px;
      background: var(--chat-bg);
      color: var(--primary-text-color);
      font-size: 14px;
      font-family: inherit;
      resize: none;
      outline: none;
      max-height: 120px;
      min-height: 40px;
      line-height: 1.4;
      transition: border-color 0.2s;
      box-sizing: border-box;
    }

    .input-area textarea:focus {
      border-color: var(--primary-color, #03a9f4);
    }

    .input-area textarea::placeholder {
      color: var(--secondary-text-color, #727272);
    }

    .input-area textarea:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .send-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border: none;
      border-radius: 50%;
      background: var(--primary-color, #03a9f4);
      color: #fff;
      cursor: pointer;
      flex-shrink: 0;
      transition: opacity 0.15s, transform 0.15s;
    }

    .send-button:hover {
      opacity: 0.9;
    }

    .send-button:active {
      transform: scale(0.95);
    }

    .send-button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .send-button svg {
      width: 20px;
      height: 20px;
      /* Optical centering: the right-pointing icon's visual mass sits
         ~2px left of its bounding-box center at this size, so a
         geometrically centered glyph reads as shifted left. */
      transform: translateX(2px);
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--secondary-text-color, #727272);
      text-align: center;
      padding: 32px 16px;
    }

    .empty-icon {
      font-size: 48px;
      margin-bottom: 16px;
      opacity: 0.5;
    }

    .empty-text {
      font-size: 16px;
      margin-bottom: 8px;
    }

    .empty-subtext {
      font-size: 13px;
      opacity: 0.7;
    }

    .error-state {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      color: var(--error-color, #db4437);
      font-size: 13px;
      background: rgba(219, 68, 55, 0.08);
      border-radius: 8px;
      margin: 8px 12px;
    }

    .loading-state {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      color: var(--secondary-text-color, #727272);
      font-size: 14px;
      gap: 8px;
    }

    .loading-older {
      display: flex;
      justify-content: center;
      padding: 12px;
    }

    .loading-spinner {
      width: 20px;
      height: 20px;
      border: 2px solid var(--divider-color, #e0e0e0);
      border-top-color: var(--primary-color, #03a9f4);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    .date-separator {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 16px 0 12px;
      color: var(--secondary-text-color, #727272);
      font-size: 12px;
      font-weight: 500;
    }

    .date-separator::before,
    .date-separator::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--divider-color, #e0e0e0);
    }

    .unread-divider {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 12px 0;
      color: var(--error-color, #db4437);
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.3px;
    }

    .unread-divider::before,
    .unread-divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--error-color, #db4437);
      opacity: 0.5;
    }

    .narrow-header {
      display: flex;
      align-items: center;
      padding: 12px 16px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      background: var(--card-background-color, #fff);
      flex-shrink: 0;
    }

    .back-button {
      padding: 8px 12px;
      border: none;
      background: transparent;
      color: var(--primary-color, #03a9f4);
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s;
    }

    .back-button:hover {
      background: rgba(0, 0, 0, 0.05);
      border-radius: 4px;
    }

    .narrow-conv-name {
      flex: 1;
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* Region-scope indicator next to the channel name in the thread
       header. Always visible while a scoped channel is active so the
       user knows what scope they're sending under without opening the
       channel-edit dialog. */
    .scope-chip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      margin-left: 8px;
      padding: 1px 8px;
      border: none;
      border-radius: 10px;
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.15));
      color: var(--secondary-text-color);
      font-size: 12px;
      line-height: 18px;
      vertical-align: middle;
      cursor: pointer;
      white-space: nowrap;
    }

    .scope-chip:hover {
      color: var(--primary-text-color);
    }

    .narrow-full {
      width: 100% !important;
    }

    .narrow-list-only {
      width: 100% !important;
    }

    .narrow-list-only meshcore-conversation-list {
      width: 100% !important;
      flex-shrink: 1;
    }

    .chat-header-actions {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-left: auto;
    }

    .bbs-popup-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
    .bbs-popup {
      background: var(--card-background-color, #fff);
      border-radius: 12px;
      padding: 16px 20px 20px;
      width: min(420px, calc(100vw - 32px));
      box-sizing: border-box;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    }
    .bbs-popup-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      font-size: 15px;
      font-weight: 600;
      color: var(--primary-text-color);
      margin-bottom: 12px;
    }

    .header-action-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border: none;
      border-radius: 50%;
      background: transparent;
      color: var(--secondary-text-color);
      cursor: pointer;
      transition: all 0.15s;
      font-size: 16px;
    }

    .header-action-btn:hover {
      background: rgba(0, 0, 0, 0.05);
      color: var(--primary-text-color);
    }

    .search-panel {
      width: 300px;
      border-left: 1px solid var(--divider-color, #e0e0e0);
      background: var(--card-background-color, #fff);
      flex-shrink: 0;
      overflow: hidden;
    }

    /* "↓ N new" indicator. Shown when new messages
       arrived while scrolled away from the bottom OR when the buffer
       tail isn't yet the conversation's newest message. Click loads
       any unloaded newer messages, scrolls to bottom, and fires
       mark-read. Sticky-positioned at the bottom of the chat
       container so it sits above the input area while scrolled. */
    .new-messages-indicator {
      position: sticky;
      bottom: 12px;
      /* 'align-self: center' requires a flex parent (chat-
         container is 'display: block'); 'margin: 0 auto' requires a
         block-level element with finite width (button defaults to
         'inline-block'). Both were no-ops. Using left + transform
         works with sticky positioning regardless of parent layout. */
      left: 50%;
      transform: translateX(-50%);
      padding: 6px 14px;
      border: none;
      border-radius: 16px;
      background: var(--primary-color, #03a9f4);
      color: #fff;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
      transition: opacity 0.15s, transform 0.15s;
      z-index: 2;
    }

    .new-messages-indicator:hover {
      opacity: 0.92;
    }

    .new-messages-indicator:active {
      /* Combine the centering transform with the press
         offset. A single 'transform' declaration replaces any prior
         one, so ':active' must restate both. */
      transform: translateX(-50%) translateY(1px);
    }
  `)),fd([Lc({type:Object})],zg.prototype,"hass",void 0),fd([Lc({type:Object})],zg.prototype,"config",void 0),fd([Lc({type:Array})],zg.prototype,"conversations",void 0),fd([Lc({type:String})],zg.prototype,"selectedId",void 0),fd([Lc({type:Boolean})],zg.prototype,"narrow",void 0),fd([Lc({attribute:!1})],zg.prototype,"unread",void 0),fd([Lc({type:Object})],zg.prototype,"lastRead",void 0),fd([Ec()],zg.prototype,"_messageStore",void 0),fd([Ec()],zg.prototype,"_inputText",void 0),fd([Ec()],zg.prototype,"_sending",void 0),fd([Ec()],zg.prototype,"_viewportNarrow",void 0),fd([Ec()],zg.prototype,"_narrowShowMessages",void 0),fd([Ec()],zg.prototype,"_manageOpen",void 0),fd([Ec()],zg.prototype,"_manageInitialTab",void 0),fd([Ec()],zg.prototype,"_searchOpen",void 0),fd([Ec()],zg.prototype,"_bbsPopupOpen",void 0),fd([Ec()],zg.prototype,"_detailContact",void 0),fd([Ec()],zg.prototype,"_currentEntityId",void 0),fd([Ec()],zg.prototype,"_conversationResolved",void 0),fd([Ec()],zg.prototype,"_pendingScroll",void 0),zg=fd([Tc("meshcore-bbs-page")],zg);class Tg{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const Pg=(Ag=class extends Tg{constructor(e){if(super(e),this._timer=null,this._startX=0,this._startY=0,this._attached=!1,this._callback=null,this._element=null,this._onPointerDown=e=>this._handleDown(e),this._onPointerUp=()=>this._cancelTimer(),this._onPointerMove=e=>this._handleMove(e),this._onContextMenu=e=>{null!==this._timer&&e.preventDefault()},6!==e.type)throw new Error("longPress directive must be used on an element")}render(e){}update(e,[t]){if(this._callback=t,!this._attached){this._element=e.element;const t=this._element;t.addEventListener("pointerdown",this._onPointerDown),t.addEventListener("pointerup",this._onPointerUp),t.addEventListener("pointercancel",this._onPointerUp),t.addEventListener("pointermove",this._onPointerMove),t.addEventListener("contextmenu",this._onContextMenu),this._attached=!0}return this.render(t)}_handleDown(e){0===e.button&&(this._startX=e.clientX,this._startY=e.clientY,this._cancelTimer(),this._timer=setTimeout(()=>{var e;this._timer=null,null===(e=this._callback)||void 0===e||e.call(this)},500))}_handleMove(e){if(null===this._timer)return;const t=e.clientX-this._startX,i=e.clientY-this._startY;t*t+i*i>100&&this._cancelTimer()}_cancelTimer(){null!==this._timer&&(clearTimeout(this._timer),this._timer=null)}},(...e)=>({_$litDirective$:Ag,values:e}));var Ag;let Lg=class extends Mc{constructor(){super(...arguments),this.entityId="",this.label="",this.icon="",this.colorScheme="neutral"}render(){var e,t,i;if(!this.hass||!this.entityId)return hc;const o=this.hass.states[this.entityId];if(!o)return hc;const n=o.state,s=(null===(e=o.attributes)||void 0===e?void 0:e.unit_of_measurement)||"",r=this.label||(null===(t=o.attributes)||void 0===t?void 0:t.friendly_name)||this.entityId,a="unavailable"===n||"unknown"===n,l=null===(i=this.hass.entities)||void 0===i||null===(i=i[this.entityId])||void 0===i?void 0:i.display_precision;let d="";if("battery"===this.colorScheme){const e=parseFloat(n);isNaN(e)||(d=e>50?"battery-high":e>20?"battery-medium":"battery-low")}else"signal"===this.colorScheme&&(d="signal");return lc(Ii||(Ii=vd`
      <div class="tile ${0}"
           @click=${0}
           @contextmenu=${0}
           ${0}>
        <div class="tile-value-row">
          ${0}
          <span>${0}${0}</span>
        </div>
        <div class="tile-label">${0}</div>
      </div>
    `),a?"unavailable":"",this._openMoreInfo,this._onRightClick,Pg(()=>this._onRightClick(new MouseEvent("contextmenu"))),this.icon?lc(Oi||(Oi=vd`<span class="tile-icon ${0}">${0}</span>`),d,this._renderIcon()):hc,a?"—":this._formatValue(n,l),s?lc(Ri||(Ri=vd`<span class="tile-unit">${0}</span>`),s):hc,r)}_openMoreInfo(){if(!this.entityId)return;const e=new CustomEvent("hass-more-info",{detail:{entityId:this.entityId},bubbles:!0,composed:!0});this.dispatchEvent(e)}_onRightClick(e){e.preventDefault(),this.entityId&&this.dispatchEvent(new CustomEvent("tile-context-menu",{detail:{entityId:this.entityId,label:this.label},bubbles:!0,composed:!0}))}_formatValue(e,t){const i=parseFloat(e);return isNaN(i)?e:null!=t&&t>=0?i.toFixed(t):e.includes(".")?e:i.toString()}_renderIcon(){switch(this.icon){case"battery":return lc(Di||(Di=vd`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>`));case"signal":return lc(Bi||(Bi=vd`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`));case"clock":return lc(Ni||(Ni=vd`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`));case"power":return lc(Fi||(Fi=vd`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"/></svg>`));case"thermometer":return lc(qi||(qi=vd`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-8c0-.55.45-1 1-1s1 .45 1 1h-1v1h1v2h-1v1h1v2h-2V5z"/></svg>`));case"counter":return lc(Hi||(Hi=vd`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`));case"chart":return lc(ji||(ji=vd`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/></svg>`));default:return lc(Zi||(Zi=vd`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></svg>`))}}};Lg.styles=$d(Vi||(Vi=vd`
    :host {
      display: block;
    }

    .tile {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 12px 8px;
      border-radius: 8px;
      background: var(--primary-background-color, #fafafa);
      border: 1px solid var(--divider-color, #e0e0e0);
      min-width: 0;
      gap: 4px;
      transition: border-color 0.2s;
      cursor: pointer;
      user-select: none;
      -webkit-user-select: none;
    }

    .tile:hover {
      border-color: var(--primary-color, #03a9f4);
    }

    .tile:active {
      background: var(--secondary-background-color, #f0f0f0);
    }

    .tile-value-row {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 18px;
      font-weight: 600;
      color: var(--primary-text-color);
      line-height: 1.2;
    }

    .tile-icon {
      display: flex;
      align-items: center;
      color: var(--secondary-text-color);
    }

    .tile-icon.battery-high { color: #4caf50; }
    .tile-icon.battery-medium { color: #ff9800; }
    .tile-icon.battery-low { color: #f44336; }
    .tile-icon.signal { color: #2196f3; }

    .tile-label {
      font-size: 11px;
      color: var(--secondary-text-color);
      text-align: center;
      line-height: 1.2;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 100%;
    }

    .tile-unit {
      font-size: 12px;
      font-weight: 400;
      color: var(--secondary-text-color);
    }

    .unavailable {
      opacity: 0.5;
    }
  `)),fd([Lc({type:Object})],Lg.prototype,"hass",void 0),fd([Lc({type:String})],Lg.prototype,"entityId",void 0),fd([Lc({type:String})],Lg.prototype,"label",void 0),fd([Lc({type:String})],Lg.prototype,"icon",void 0),fd([Lc({type:String})],Lg.prototype,"colorScheme",void 0),Lg=fd([Tc("meshcore-sensor-tile")],Lg);const Eg={battery_pct:{displayMin:0,displayMax:100,direction:"higher_better",classify:e=>e<20?"bad":e<50?"warn":"good",tooltip:"Green ≥ 50%, Yellow 20–50%, Red < 20% (critical < 10%). Home Assistant low-battery convention.",source:"https://community.home-assistant.io/t/low-battery-level-detection-notification-for-all-battery-sensors/258664"},rssi:{displayMin:-130,displayMax:-30,direction:"higher_better",classify:e=>e<-115?"bad":e<-100?"warn":"good",tooltip:"Green > −100 dBm, Yellow −100 to −115 dBm, Red < −115 dBm. Lower (more negative) RSSI means a weaker received signal.",source:"https://www.thethingsnetwork.org/docs/lorawan/rssi-and-snr/"},snr:{displayMin:-20,displayMax:20,direction:"higher_better",classify:e=>e<-7?"bad":e<0?"warn":"good",tooltip:"Green > 0 dB, Yellow −7 to 0 dB, Red < −7 dB. Demodulation floor is spreading-factor dependent (Semtech AN1200.13).",source:"https://www.openhacks.com/uploadsproductos/loradesignguide_std.pdf"},noise_floor:{displayMin:-130,displayMax:-90,direction:"lower_better",classify:e=>e>-105?"bad":e>-115?"warn":"good",tooltip:"Green < −115 dBm, Yellow −115 to −105 dBm, Red > −105 dBm. Above −105 dBm typically indicates man-made RF interference, not thermal noise.",source:"https://www.openhacks.com/uploadsproductos/loradesignguide_std.pdf"},tx_airtime_util:{displayMin:0,displayMax:20,direction:"lower_better",classify:e=>e>10?"bad":e>2?"warn":"good",tooltip:"Green < 2%, Yellow 2–10%, Red > 10%. EU868 sub-band 1% / general 10% duty-cycle ceiling (ETSI EN 300 220-2; eCFR 47 CFR 15.247).",source:"https://www.etsi.org/deliver/etsi_en/300200_300299/30022002/03.03.01_60/en_30022002v030301p.pdf"},rx_airtime_util:{displayMin:0,displayMax:100,direction:"lower_better",classify:e=>e>50?"bad":e>25?"warn":"good",tooltip:"Green < 25%, Yellow 25–50%, Red > 50%. High RX utilisation usually means heavy mesh traffic or environmental interference saturating the receiver."},channel_util:{displayMin:0,displayMax:100,direction:"lower_better",classify:e=>e>50?"bad":e>25?"warn":"good",tooltip:"Green < 25%, Yellow 25–50%, Red > 50%. Channel utilisation aggregates all activity on the radio channel."},hop_count:{displayMin:0,displayMax:32,direction:"lower_better",classify:e=>e>=16?"bad":e>=7?"warn":"good",tooltip:"Green ≤ 6, Yellow 7–15, Red ≥ 16. MeshCore allows up to 64 hops; community-recommended meshes run well under 32. Each hop adds airtime cost and latency.",source:"https://nodakmesh.org/blog/meshcore-path-hash-explained"},uptime_hours:{displayMin:0,displayMax:168,direction:"higher_better",classify:e=>e<1?"bad":e<24?"warn":"good",tooltip:"Green > 24 h, Yellow 1–24 h, Red < 1 h. Very recent reboot suggests a watchdog reset or brownout."},last_seen_hours:{displayMin:0,displayMax:6,direction:"lower_better",classify:e=>e>4?"bad":e>2?"warn":"good",tooltip:"Green < 2 h, Yellow 2–4 h, Red > 4 h. Should be tuned to the node’s advertising interval; nodes that advertise hourly should appear far more often than nodes that advertise every 6 hours."},request_success_rate:{displayMin:0,displayMax:100,direction:"higher_better",classify:e=>e<70?"bad":e<90?"warn":"good",tooltip:'Green > 90%, Yellow 70–90%, Red < 70%. Caller is responsible for the min-sample floor — bars should render with band="info" until at least 50 attempts have accumulated.'},duplicate_ratio:{displayMin:0,displayMax:100,direction:"lower_better",classify:()=>"info",tooltip:""},tx_queue_len:{displayMin:0,displayMax:30,direction:"lower_better",classify:e=>e>10?"bad":e>5?"warn":"good",tooltip:"Number of messages queued for transmission. Healthy nodes drain the queue quickly. Sustained backlog (> 10) indicates channel saturation or a stuck transmitter."},temperature:{displayMin:-20,displayMax:140,direction:"higher_better",classify:e=>e<0||e>125?"bad":"good",tooltip:"Red below 0°F (≈ −18°C) or above 125°F (≈ 52°C); green otherwise. Extreme ambient temperatures risk damage to the radio, battery, or enclosure."}};function Ig(e,t){const i=t.displayMax-t.displayMin;if(i<=0)return 0;const o=(e-t.displayMin)/i,n="higher_better"===t.direction?o:1-o;return Math.max(0,Math.min(100,100*n))}function Og(e,t){if(!Number.isFinite(t))return{band:"info",fillPct:0,tooltip:""};const i=Eg[e];return i?{band:i.classify(t),fillPct:Ig(t,i),tooltip:i.tooltip,source:i.source}:{band:"info",fillPct:0,tooltip:""}}function Rg(e,t=12){const i=[...e].sort((e,t)=>e.start-t.start),o=i.map(()=>0);let n=0;return i.forEach((e,i)=>{const s=Number.isFinite(e.change)&&e.change>0?e.change:0;if(0===s)return;const r=Math.max(n,i-t),a=i-r+1;for(let e=r;e<=i;e++)o[e]+=s/a;n=i+1}),i.map((e,t)=>({start:e.start,perMin:o[t]/60}))}function Dg(e){var t;if("number"==typeof e.lu)return 1e3*e.lu;if("number"==typeof e.lc)return 1e3*e.lc;const i=null!==(t=e.last_updated)&&void 0!==t?t:e.last_changed;return i?new Date(i).getTime():NaN}function Bg(e,t=()=>!0){if(!Array.isArray(e))return null;for(let o=e.length-1;o>=0;o--){var i;const n=null!==(i=e[o].s)&&void 0!==i?i:e[o].state,s=void 0===n?NaN:parseFloat(n),r=Dg(e[o]);if(Number.isFinite(s)&&t(s)&&Number.isFinite(r))return{value:s,ts:r}}return null}async function Ng(e,t,i=7){return Bg(await Fg(e,t,i))}async function Fg(e,t,i){const o=await e.callWS({type:"history/history_during_period",start_time:new Date(Date.now()-24*i*60*60*1e3).toISOString(),entity_ids:[t],minimal_response:!0,no_attributes:!0,significant_changes_only:!1});return null==o?void 0:o[t]}async function qg(e,t,i=7){return Bg(await Fg(e,t,i),e=>e>0)}let Hg=class extends Mc{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.band="info"}render(){const e=this.max-this.min;let t=0;return Number.isFinite(this.value)&&e>0&&(t=(this.value-this.min)/e*100,t=Math.max(0,Math.min(100,t))),lc(Ki||(Ki=vd`
      <div class="stat-bar"
           role="progressbar"
           aria-valuenow="${0}"
           aria-valuemin="${0}"
           aria-valuemax="${0}">
        <div class="stat-bar-fill ${0}"
             style="width: ${0}%"></div>
      </div>
    `),this.value,this.min,this.max,this.band,t)}};Hg.styles=$d(Ui||(Ui=vd`
    :host {
      display: block;
      width: 100%;
    }
    .stat-bar {
      position: relative;
      height: 8px;
      width: 100%;
      background: var(--divider-color, #e0e0e0);
      border-radius: 4px;
      overflow: hidden;
    }
    .stat-bar-fill {
      height: 100%;
      border-radius: 4px;
      transition: width 0.4s ease;
    }
    .stat-bar-fill.good { background: var(--good, #4caf50); }
    .stat-bar-fill.warn { background: var(--warn, #ff9800); }
    .stat-bar-fill.bad  { background: var(--bad,  #f44336); }
    .stat-bar-fill.info { background: var(--info, #2196f3); }
  `)),fd([Lc({type:Number})],Hg.prototype,"value",void 0),fd([Lc({type:Number})],Hg.prototype,"min",void 0),fd([Lc({type:Number})],Hg.prototype,"max",void 0),fd([Lc({type:String})],Hg.prototype,"band",void 0),Hg=fd([Tc("meshcore-stat-bar")],Hg);let jg=class extends Mc{constructor(){super(...arguments),this.segments=[],this.legend="below"}_denom(){if(void 0!==this.total&&this.total>0)return this.total;const e=this.segments.reduce((e,t)=>e+(Number.isFinite(t.value)?t.value:0),0);return e>0?e:1}render(){if(!this.segments.length)return hc;const e=this._denom();return lc(Wi||(Wi=vd`
      <div class="stat-bar"
           role="img"
           aria-label="${0}">
        ${0}
      </div>
      ${0}
    `),this.segments.map(e=>`${e.label} ${e.value}`).join(", "),this.segments.map(t=>{const i=Number.isFinite(t.value)?Math.max(0,t.value):0;if(0===i)return hc;const o=i/e*100;return lc(Gi||(Gi=vd`<div class="stat-bar-segment ${0}"
                           style="width: ${0}%"
                           title="${0}: ${0}"></div>`),t.kind,o,t.label,t.value)}),"none"!==this.legend?lc(Xi||(Xi=vd`
          <div class="stat-bar-legend ${0}">
            ${0}
            ${0}
          </div>`),"inline"===this.legend?"inline":"",this.segments.filter(e=>Number.isFinite(e.value)&&e.value>=0).map(e=>lc(Yi||(Yi=vd`<span><span class="legend-swatch ${0}"></span>${0}</span>`),e.kind,e.label)),this.extraLegendText?lc(Ji||(Ji=vd`<span class="legend-extra">${0}</span>`),this.extraLegendText):hc):hc)}};jg.styles=$d(Qi||(Qi=vd`
    :host { display: block; width: 100%; }

    .stat-bar {
      position: relative;
      height: 8px;
      width: 100%;
      background: var(--divider-color, #e0e0e0);
      border-radius: 4px;
      overflow: hidden;
      display: flex;
      gap: 1px;
    }
    .stat-bar-segment {
      height: 100%;
      transition: width 0.4s ease;
      cursor: help;
    }
    .stat-bar-segment.flood   { background: var(--info, #2196f3); }
    .stat-bar-segment.direct  { background: var(--good, #4caf50); }
    .stat-bar-segment.other   { background: var(--secondary-text-color); opacity: 0.55; }
    .stat-bar-segment.success { background: var(--good, #4caf50); }
    .stat-bar-segment.failure { background: var(--bad,  #f44336); }
    .stat-bar-segment.tx      { background: var(--info, #2196f3); }
    .stat-bar-segment.rx      { background: var(--good, #4caf50); }
    .stat-bar-segment.idle    { background: transparent; }

    .stat-bar-legend {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 12px;
      margin-top: 4px;
      font-size: 11px;
      color: var(--secondary-text-color);
    }
    .stat-bar-legend > span {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      white-space: nowrap;
    }
    .legend-swatch {
      width: 8px;
      height: 8px;
      border-radius: 2px;
      flex-shrink: 0;
    }
    .legend-swatch.flood   { background: var(--info, #2196f3); }
    .legend-swatch.direct  { background: var(--good, #4caf50); }
    .legend-swatch.other   { background: var(--secondary-text-color); opacity: 0.55; }
    .legend-swatch.success { background: var(--good, #4caf50); }
    .legend-swatch.failure { background: var(--bad,  #f44336); }
    .legend-swatch.tx      { background: var(--info, #2196f3); }
    .legend-swatch.rx      { background: var(--good, #4caf50); }
    .legend-swatch.idle    {
      background: var(--divider-color, #e0e0e0);
      border: 1px solid var(--secondary-text-color);
    }

    .stat-bar-legend.inline {
      gap: 4px 8px;
      margin-top: 2px;
      font-size: 10px;
    }
  `)),fd([Lc({type:Array})],jg.prototype,"segments",void 0),fd([Lc({type:Number})],jg.prototype,"total",void 0),fd([Lc({type:String})],jg.prototype,"legend",void 0),fd([Lc({type:String})],jg.prototype,"extraLegendText",void 0),jg=fd([Tc("meshcore-stacked-bar")],jg);let Zg=class extends Mc{constructor(){super(...arguments),this.content="",this._open=!1,this._onOpen=()=>{this._open||(this._open=!0,window.addEventListener("scroll",this._onScroll,!0))},this._onClose=()=>{this._open&&(this._open=!1,window.removeEventListener("scroll",this._onScroll,!0))},this._onScroll=()=>this._onClose()}render(){return this.content?lc(eo||(eo=vd`
      <button class="info-tip"
              type="button"
              aria-label="More information"
              @mouseenter=${0}
              @mouseleave=${0}
              @focus=${0}
              @blur=${0}
              @click=${0}>
        <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="7" cy="4" r="1.2" fill="currentColor"></circle>
          <rect x="6.1" y="6.2" width="1.8" height="5.2" rx="0.6" fill="currentColor"></rect>
        </svg>
        <span class="info-tip-content ${0}" role="tooltip">
          ${0}
          ${0}
        </span>
      </button>
    `),this._onOpen,this._onClose,this._onOpen,this._onClose,this._stopPropagation,this._open?"open":"",this.content,this.source?lc(to||(to=vd`<span class="src">${0}</span>`),this.source):hc):hc}updated(){this._open&&this._positionPopover()}disconnectedCallback(){window.removeEventListener("scroll",this._onScroll,!0),super.disconnectedCallback()}_stopPropagation(e){e.stopPropagation()}_positionPopover(){const e=this.shadowRoot;if(!e)return;const t=e.querySelector(".info-tip"),i=e.querySelector(".info-tip-content");if(!t||!i)return;const o=t.getBoundingClientRect(),n=i.getBoundingClientRect(),s=window.innerWidth,r=window.innerHeight;let a=o.left+o.width/2-n.width/2,l=o.bottom+6;a<8?a=8:a+n.width>s-8&&(a=Math.max(8,s-8-n.width)),l+n.height>r-8&&(l=o.top-6-n.height,l<8&&(l=8)),i.style.left=`${a}px`,i.style.top=`${l}px`}};Zg.styles=$d(io||(io=vd`
    :host {
      display: inline-flex;
      vertical-align: middle;
    }
    button.info-tip {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 14px;
      height: 14px;
      margin-left: 4px;
      border-radius: 50%;
      color: var(--secondary-text-color);
      background: var(--divider-color, #e0e0e0);
      cursor: help;
      user-select: none;
      flex-shrink: 0;
      border: none;
      padding: 0;
    }
    /* The "i" glyph is drawn as inline SVG (not a Unicode character) so
       its dot + stem sit on the geometric center of the 14×14 button
       regardless of font metrics. Using a Unicode glyph here previously
       produced two stacked, optically-misaligned rings — the CSS-drawn
       button background plus the glyph's own circled-i ring. */
    button.info-tip svg {
      display: block;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
    button.info-tip:hover,
    button.info-tip:focus {
      color: var(--card-background-color, #fff);
      background: var(--primary-color, #03a9f4);
      outline: none;
    }
    /* Popover is position: fixed so we can clamp it to the viewport on
       open (see _positionPopover). top / left are set by JS each time
       the popover opens; visibility is toggled by the .open class
       rather than :hover/:focus so we control the timing of the
       measurement that drives the clamp. */
    .info-tip-content {
      position: fixed;
      top: 0;
      left: 0;
      display: none;
      width: 260px;
      max-width: calc(100vw - 16px);
      padding: 10px 12px;
      background: var(--card-background-color, #fff);
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
      font-size: 11px;
      font-weight: normal;
      color: var(--primary-text-color);
      text-align: left;
      line-height: 1.45;
      z-index: 100;
      white-space: normal;
      pointer-events: none;
    }
    .info-tip-content.open {
      display: block;
    }
    .info-tip-content .src {
      display: block;
      margin-top: 6px;
      font-size: 10px;
      color: var(--secondary-text-color);
      word-break: break-all;
    }
  `)),fd([Lc({type:String})],Zg.prototype,"content",void 0),fd([Lc({type:String})],Zg.prototype,"source",void 0),fd([Ec()],Zg.prototype,"_open",void 0),Zg=fd([Tc("meshcore-info-tip")],Zg);const Vg=[{key:"sent_flood",label:"Sent · Flood",color:"var(--info, #2196f3)",dash:!1},{key:"sent_direct",label:"Sent · Direct",color:"var(--info, #2196f3)",dash:!0},{key:"recv_flood",label:"Recv · Flood",color:"var(--good, #4caf50)",dash:!1},{key:"recv_direct",label:"Recv · Direct",color:"var(--good, #4caf50)",dash:!0},{key:"errors",label:"Errors",color:"var(--bad, #f44336)",dash:!1}];let Kg=class extends Mc{constructor(){super(...arguments),this.data=[],this.width=700,this.height=170,this.timeRange=48,this._hoverIndex=null,this._onPointerMove=e=>{const t=this._indexFromEvent(e);null!=t&&t!==this._hoverIndex&&(this._hoverIndex=t)},this._onPointerDown=e=>{const t=this._indexFromEvent(e);null!=t&&(this._hoverIndex=t===this._hoverIndex?null:t)},this._onPointerLeave=e=>{"mouse"===e.pointerType&&(this._hoverIndex=null)}}render(){return this.data&&0!==this.data.length?lc(oo||(oo=vd`
      <div class="chart-container">
        <div class="plot">
          ${0}
          ${0}
        </div>
        <div class="legend">
          ${0}
        </div>
      </div>
    `),this._renderChart(),null!=this._hoverIndex?this._renderTooltip():hc,Vg.map(e=>lc(no||(no=vd`<div class="legend-item">
              <span class="legend-line ${0}"
                    style="border-top-color:${0}"></span>${0}
            </div>`),e.dash?"dashed":"",e.color,e.label))):hc}_timeLabel(e,t){const i=Math.round((t-e)/36e5);return i<=0?"now":`-${i}h`}_fmtValue(e){return"number"==typeof e&&isFinite(e)?0===e?"0":e<1?e.toFixed(2):e.toFixed(1):"—"}_geom(){const e=this.width,t=this.height,i=e-40-12,o=t-12-22;let n=0;for(const e of this.data)for(const t of Vg){const i=e.values[t.key];"number"==typeof i&&isFinite(i)&&(n=Math.max(n,i))}n<=0&&(n=1);const s=Date.now(),r=36e5*this.timeRange,a=s-r;return{padL:40,padR:12,padT:12,padB:22,w:e,h:t,cw:i,ch:o,maxV:n,now:s,range:r,oldest:a,xScale:e=>40+(e-a)/r*i,yScale:e=>12+o-e/n*o}}_nearestBucket(e){const{xScale:t}=this._geom();let i=-1,o=1/0;for(let n=0;n<this.data.length;n++){const s=Math.abs(t(this.data[n].timestamp)-e);s<o&&(o=s,i=n)}return i}_indexFromEvent(e){const t=this.renderRoot.querySelector("svg");if(!t||0===this.data.length)return null;const i=t.getBoundingClientRect();if(0===i.width)return null;const o=(e.clientX-i.left)/i.width*this.width;return this._nearestBucket(o)}_renderChart(){const e=this._geom(),{padL:t,padR:i,padT:o,padB:n,w:s,h:r,ch:a,maxV:l,now:d,range:c,oldest:h,xScale:p,yScale:u}=e,m=[0,l/2,l].map(e=>{const o=u(e);return dc(so||(so=vd`
        <line x1="${0}" y1="${0}" x2="${0}" y2="${0}"
          stroke="var(--divider-color,#e0e0e0)" stroke-dasharray="4,4" opacity="0.3" />
        <text x="${0}" y="${0}" font-size="9" text-anchor="end"
          fill="var(--secondary-text-color,#727272)">${0}</text>`),t,o,s-i,o,t-6,o+3,e<1?e.toFixed(1):Math.round(e))}),g=[h,h+c/2,d].map(e=>dc(ro||(ro=vd`
        <text x="${0}" y="${0}" font-size="9" text-anchor="middle"
          fill="var(--secondary-text-color,#727272)">${0}</text>`),p(e),r-n+14,this._timeLabel(e,d))),v=Vg.map(e=>{const t=this.data.filter(t=>"number"==typeof t.values[e.key]&&isFinite(t.values[e.key])).map(t=>`${p(t.timestamp).toFixed(1)},${u(t.values[e.key]).toFixed(1)}`);if(0===t.length)return dc(ao||(ao=vd``));if(1===t.length){const[i,o]=t[0].split(",");return dc(lo||(lo=vd`<circle cx="${0}" cy="${0}" r="2" fill="${0}" />`),i,o,e.color)}return dc(co||(co=vd`<polyline points="${0}" fill="none" stroke="${0}"
        stroke-width="1.5" stroke-dasharray="${0}"
        stroke-linecap="round" stroke-linejoin="round" />`),t.join(" "),e.color,e.dash?"5,3":"none")});let f=dc(ho||(ho=vd``));if(null!=this._hoverIndex&&this._hoverIndex<this.data.length){const e=this.data[this._hoverIndex],t=p(e.timestamp),i=Vg.map(i=>{const o=e.values[i.key];return"number"==typeof o&&isFinite(o)?dc(uo||(uo=vd`<circle cx="${0}" cy="${0}" r="3" fill="${0}"
          stroke="var(--card-background-color,#fff)" stroke-width="1" />`),t,u(o),i.color):dc(po||(po=vd``))});f=dc(mo||(mo=vd`
        <line x1="${0}" y1="${0}" x2="${0}" y2="${0}"
          stroke="var(--primary-text-color,#888)" stroke-width="1" opacity="0.35" />
        ${0}`),t,o,t,r-n,i)}return dc(go||(go=vd`
      <svg viewBox="0 0 ${0} ${0}" xmlns="http://www.w3.org/2000/svg" role="img"
           aria-label="Message rate over the last ${0} hours"
           @pointermove="${0}"
           @pointerdown="${0}"
           @pointerleave="${0}">
        ${0}
        <line x1="${0}" y1="${0}" x2="${0}" y2="${0}"
          stroke="var(--divider-color,#e0e0e0)" stroke-width="1" />
        <line x1="${0}" y1="${0}" x2="${0}" y2="${0}"
          stroke="var(--divider-color,#e0e0e0)" stroke-width="1" />
        ${0}
        ${0}
        ${0}
        <text x="${0}" y="${0}" font-size="9"
          fill="var(--secondary-text-color,#727272)">msg/min</text>
        <rect x="${0}" y="${0}" width="${0}" height="${0}"
          fill="transparent" style="pointer-events:all" />
      </svg>`),s,r,this.timeRange,this._onPointerMove,this._onPointerDown,this._onPointerLeave,m,t,o,t,r-n,t,r-n,s-i,r-n,v,f,g,t,o-2,t,o,e.cw,a)}_renderTooltip(){const e=this._hoverIndex;if(null==e||e>=this.data.length)return hc;const t=this._geom(),i=this.data[e],o=t.xScale(i.timestamp)/t.w*100,n=o>55,s=new Date(i.timestamp).toLocaleString([],{weekday:"short",hour:"2-digit",minute:"2-digit"}),r=n?`left:${o}%; transform:translateX(calc(-100% - 8px));`:`left:${o}%; transform:translateX(8px);`;return lc(vo||(vo=vd`
      <div class="tooltip" style="${0}">
        <div class="tt-head">${0} · msg/min</div>
        ${0}
      </div>
    `),r,s,Vg.map(e=>lc(fo||(fo=vd`<div class="tt-row">
            <span class="sw ${0}" style="border-top-color:${0}"></span>
            <span class="lbl">${0}</span>
            <span class="val">${0}</span>
          </div>`),e.dash?"dashed":"",e.color,e.label,this._fmtValue(i.values[e.key]))))}};Kg.styles=$d(_o||(_o=vd`
    :host { display: block; width: 100%; }
    svg { width: 100%; height: auto; display: block; touch-action: pan-y; }
    .chart-container {
      width: 100%;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      background: var(--input-bg);
      padding: 10px 12px;
      box-sizing: border-box;
    }
    /* Shrink-wraps the SVG so the tooltip can be positioned in % of the SVG
       box — percentages map exactly because the SVG fills this wrapper, with
       no dependence on the rendered scale factor. */
    .plot { position: relative; }
    .tooltip {
      position: absolute;
      top: 4px;
      z-index: 2;
      pointer-events: none;
      background: var(--card-background-color, var(--input-bg, #fff));
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      padding: 6px 8px;
      font-size: 11px;
      color: var(--primary-text-color, #212121);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
      white-space: nowrap;
    }
    .tt-head {
      font-weight: 600;
      margin-bottom: 4px;
      color: var(--secondary-text-color, #727272);
    }
    .tt-row { display: flex; align-items: center; gap: 6px; line-height: 1.5; }
    .tt-row .sw {
      display: inline-block;
      width: 12px;
      height: 0;
      border-top: 2px solid;
      flex-shrink: 0;
    }
    .tt-row .sw.dashed { border-top-style: dashed; }
    .tt-row .lbl { flex: 1; padding-right: 8px; }
    .tt-row .val { font-variant-numeric: tabular-nums; text-align: right; }
    .legend {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 6px;
    }
    .legend-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
      color: var(--secondary-text-color);
    }
    .legend-line {
      display: inline-block;
      width: 16px;
      height: 0;
      border-top: 2px solid;
      flex-shrink: 0;
    }
    .legend-line.dashed { border-top-style: dashed; }
  `)),fd([Lc({type:Array})],Kg.prototype,"data",void 0),fd([Lc({type:Number})],Kg.prototype,"width",void 0),fd([Lc({type:Number})],Kg.prototype,"height",void 0),fd([Lc({type:Number})],Kg.prototype,"timeRange",void 0),fd([Ec()],Kg.prototype,"_hoverIndex",void 0),Kg=fd([Tc("meshcore-message-rate-chart")],Kg);let Ug=class extends Mc{constructor(){super(...arguments),this.entities=[],this.hiddenCount=0,this._rateHistory=[],this._rateHistoryKey=null,this._airtimeFallback={},this._lastKnown={},this._airtimeFetchKeys={},this._lastKnownFetchKeys={}}render(){if(!this.hass||!this.device)return hc;const e=new Set,t=this._renderHeroTiles(e),i=this._buildGroups(e);return lc(yo||(yo=vd`
      <div class="hero-row">
        ${0}
      </div>

      ${0}

      ${0}
    `),t,this._renderMessageActivityCard(),i.length>0?lc(bo||(bo=vd`
          <div class="subsection-label">
            Sensors${0}
          </div>

          <div class="sensor-grid">
            ${0}
          </div>`),this.hiddenCount>0?lc(xo||(xo=vd`<span class="hidden-suffix">(${0} hidden)</span>`),this.hiddenCount):hc,i.map(e=>this._renderGroup(e))):hc)}updated(e){var t;if(!this.hass||!this.device)return;if(!e.has("hass")&&!e.has("device")&&!e.has("entities"))return;this._maybeFetchAirtimeHistory(),this._maybeFetchLastKnown();const i=this._findEntityIdMatching("nb_sent"),o=null!==(t=null==i?void 0:i.entity_id)&&void 0!==t?t:null;o&&o!==this._rateHistoryKey?(this._rateHistoryKey=o,this._fetchRateHistory()):o||null===this._rateHistoryKey||(this._rateHistoryKey=null,this._rateHistory=[])}_deriveRateId(e,t){return e.replace(`_${t}_`,`_${t}_rate_`)}async _fetchRateHistory(){if(!this.hass)return;const e=[["sent_flood","sent_flood"],["sent_direct","sent_direct"],["recv_flood","recv_flood"],["recv_direct","recv_direct"],["errors","recv_errors"]],t=[];for(const[i,o]of e){const e=this._findEntityIdMatching(o);e&&t.push([i,this._deriveRateId(e.entity_id,o)])}if(0===t.length)return void(this._rateHistory=[]);const i=await this._ratesFromTotals(e);if(i)this._rateHistory=i;else try{const e=await this.hass.callWS({type:"recorder/statistics_during_period",start_time:new Date(Date.now()-1728e5).toISOString(),end_time:(new Date).toISOString(),statistic_ids:t.map(([,e])=>e),period:"hour"}),i={};for(const[n,s]of t){const t=e[s];if(Array.isArray(t))for(const e of t){var o;if(null==e.start||null==e.mean)continue;const t=new Date(e.start).getTime();(null!==(o=i[t])&&void 0!==o?o:i[t]={})[n]=e.mean}}this._rateHistory=Object.entries(i).map(([e,t])=>({timestamp:parseInt(e,10),values:t})).sort((e,t)=>e.timestamp-t.timestamp)}catch(e){this._rateHistory=[]}}async _ratesFromTotals(e){var t;if(!this.hass)return null;const i=[];for(const[t,o]of e){const e=this._findEntityIdMatching(o);e&&!e.entity_id.includes(`_${o}_rate_`)&&i.push([t,e.entity_id])}if(!i.length)return null;try{const e=await this.hass.callWS({type:"recorder/statistics_during_period",start_time:new Date(Date.now()-1728e5).toISOString(),end_time:(new Date).toISOString(),statistic_ids:i.map(([,e])=>e),period:"hour",types:["change"]}),s={};let r=!1;for(const[a,l]of i){var o;const i=(null!==(o=e[l])&&void 0!==o?o:[]).filter(e=>null!=e.start).map(e=>{var t;return{start:new Date(e.start).getTime(),change:Number(null!==(t=e.change)&&void 0!==t?t:0)}});i.some(e=>e.change>0)&&(r=!0);for(const e of Rg(i)){var n;(null!==(n=s[t=e.start])&&void 0!==n?n:s[t]={})[a]=e.perMin}}return r?Object.entries(s).map(([e,t])=>({timestamp:parseInt(e,10),values:t})).sort((e,t)=>e.timestamp-t.timestamp):null}catch(e){return null}}_renderMessageActivityCard(){return this._rateHistory.length?lc(wo||(wo=vd`
      <div class="subsection-label">Message activity (48h)</div>
      <meshcore-message-rate-chart .data=${0}></meshcore-message-rate-chart>
    `),this._rateHistory):hc}_renderHeroTiles(e){const t=this.device;return"companion"===t.type?this._renderCompanionHero(e):"repeater"===t.type?this._renderRepeaterHero(e):this._renderClientHero(e)}_renderRepeaterHero(e){return lc(ko||(ko=vd`
      ${0}
      ${0}
      ${0}
      ${0}
      ${0}
      ${0}
    `),this._renderBatteryTile(),this._renderSignalTile(),this._renderRadioActivityTile(),this._renderMessagesSentTile(e),this._renderMessagesReceivedTile(e),this._renderRequestsTile(e))}_renderClientHero(e){return lc($o||($o=vd`
      ${0}
      ${0}
      ${0}
    `),this._renderBatteryTile(),this._renderSignalTile(),this._renderRequestsTile(e))}_renderCompanionHero(e){return lc(So||(So=vd`
      ${0}
      ${0}
      ${0}
      ${0}
      ${0}
      ${0}
    `),this._renderBatteryTile(),this._renderSignalTile(),this._renderCompanionRadioActivityTile(),this._renderMessagesSentTile(e),this._renderMessagesReceivedTile(e),this._renderLocationTile())}_renderBatteryTile(){var e;const t=this._findByMetric("battery_pct");if(!t)return hc;const i=this._readNumber(t.entity_id),o=null!==(e=this._findEntityIdMatching("battery_voltage"))&&void 0!==e?e:this._findEntityByLabel("Voltage"),n=o?this._readNumber(o.entity_id):NaN,s=Og("battery_pct",i);return lc(Co||(Co=vd`
      <div class="hero-tile" @click=${0}>
        <div class="hero-tile-head">
          <span>Battery${0}</span>
          <span class="status-dot ${0}"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">
            ${0}<span class="unit">%</span>
          </span>
          ${0}
        </div>
        <meshcore-stat-bar
          .value=${0}
          .min=${0}
          .max=${0}
          .band=${0}>
        </meshcore-stat-bar>
      </div>
    `),()=>this._fireMoreInfo(t.entity_id),this._renderInfoTip(s),s.band,this._formatNumber(i,0),Number.isFinite(n)?lc(Mo||(Mo=vd`<span class="secondary">· ${0} V</span>`),n.toFixed(3)):hc,i,0,100,s.band)}_renderSignalTile(){const e=this._findByMetric("rssi");if(!e)return hc;const t=this._readNumber(e.entity_id),i=this._findByMetric("snr"),o=i?this._readNumber(i.entity_id):NaN,n=Og("rssi",t);return lc(zo||(zo=vd`
      <div class="hero-tile" @click=${0}>
        <div class="hero-tile-head">
          <span>Last message strength${0}</span>
          <span class="status-dot ${0}"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">
            ${0}<span class="unit">dBm</span>
          </span>
          ${0}
        </div>
        <meshcore-stat-bar
          .value=${0}
          .min=${0}
          .max=${0}
          .band=${0}>
        </meshcore-stat-bar>
      </div>
    `),()=>this._fireMoreInfo(e.entity_id),this._renderInfoTip(n),n.band,this._formatNumber(t,0),Number.isFinite(o)?lc(To||(To=vd`<span class="secondary">· SNR ${0} dB</span>`),o.toFixed(1)):hc,t,-130,-30,n.band)}_maybeFetchAirtimeHistory(){var e;if(this.hass&&"repeater"===(null===(e=this.device)||void 0===e?void 0:e.type))for(const e of["tx_airtime_util","rx_airtime_util"]){var t,i;const o=this._findByMetric(e);if(!o||0!==this._readNumber(o.entity_id))continue;const n=o.entity_id,s=`${n}@${null!==(t=null===(i=this.hass.states[n])||void 0===i?void 0:i.last_updated)&&void 0!==t?t:""}`;this._airtimeFetchKeys[n]!==s&&(this._airtimeFetchKeys[n]=s,qg(this.hass,n).then(e=>{this._airtimeFallback={...this._airtimeFallback,[n]:e}}).catch(()=>{this._airtimeFallback={...this._airtimeFallback,[n]:null}}))}}_maybeFetchLastKnown(){if(this.hass&&this.device&&"companion"!==this.device.type)for(const t of this.entities){var e;if(t.booleanProblem)continue;const i=this.hass.states[t.entity_id],o=null==i?void 0:i.state;if("unknown"!==o&&"unavailable"!==o)continue;const n=t.entity_id,s=`${n}@${null!==(e=null==i?void 0:i.last_updated)&&void 0!==e?e:""}`;this._lastKnownFetchKeys[n]!==s&&(this._lastKnownFetchKeys[n]=s,Ng(this.hass,n).then(e=>{this._lastKnown={...this._lastKnown,[n]:e}}).catch(()=>{this._lastKnown={...this._lastKnown,[n]:null}}))}}_airtimeValue(e){if(!e)return{value:0,historyTs:null};const t=this._readNumber(e.entity_id),i=this._airtimeFallback[e.entity_id];return 0===t&&i?{value:i.value,historyTs:i.ts}:{value:Number.isFinite(t)?Math.max(0,t):0,historyTs:null}}_renderRadioActivityTile(){var e,t;const i=this._findByMetric("tx_airtime_util"),o=this._findByMetric("rx_airtime_util");if(!i&&!o)return hc;const n=this._airtimeValue(i),s=this._airtimeValue(o),r=n.value,a=s.value,l=Math.max(null!==(e=n.historyTs)&&void 0!==e?e:0,null!==(t=s.historyTs)&&void 0!==t?t:0)||null,d=Math.max(0,100-r-a),c=Og("tx_airtime_util",r).band,h=Og("rx_airtime_util",a).band,p=this._worseBand(c,h),u=[{value:r,label:`TX ${r.toFixed(1)}%`,kind:"tx"},{value:a,label:`RX ${a.toFixed(1)}%`,kind:"rx"},{value:d,label:`Idle ${d.toFixed(1)}%`,kind:"idle"}],m=r+a;return lc(Po||(Po=vd`
      <div class="hero-tile"
           @click=${0}>
        <div class="hero-tile-head">
          <span>Radio activity${0}</span>
          <span class="status-dot ${0}"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">${0}<span class="unit">%</span></span>
        </div>
        <div class="ra-bar-wrap">
          <meshcore-stacked-bar
            .segments=${0}
            .total=${0}
            .legend=${0}>
          </meshcore-stacked-bar>
          <div class="ra-legend">
            ${0}
            ${0}
            <span class="ra-legend-item">
              <span class="legend-swatch idle"></span>Idle ${0}%
            </span>
          </div>
          ${0}
        </div>
      </div>
    `),()=>i&&this._fireMoreInfo(i.entity_id),this._renderInfoTip({band:p,fillPct:0,tooltip:"Half-duplex composition over the last reporting interval. The radio can transmit OR receive, never both. TX above 10% indicates duty-cycle pressure; sustained TX+RX above 30% means the channel is congested."}),p,m.toFixed(1),u,100,"none",i?lc(Ao||(Ao=vd`<span class="ra-legend-item" @click=${0}>
                  <span class="legend-swatch tx"></span>TX ${0}%
                </span>`),e=>{e.stopPropagation(),i&&this._fireMoreInfo(i.entity_id)},r.toFixed(1)):lc(Lo||(Lo=vd`<span class="ra-legend-item">
                  <span class="legend-swatch tx"></span>TX ${0}%
                </span>`),r.toFixed(1)),o?lc(Eo||(Eo=vd`<span class="ra-legend-item" @click=${0}>
                  <span class="legend-swatch rx"></span>RX ${0}%
                </span>`),e=>{e.stopPropagation(),o&&this._fireMoreInfo(o.entity_id)},a.toFixed(1)):lc(Io||(Io=vd`<span class="ra-legend-item">
                  <span class="legend-swatch rx"></span>RX ${0}%
                </span>`),a.toFixed(1)),d.toFixed(1),l?lc(Oo||(Oo=vd`<div class="ra-history-note"
              title="The repeater has been polled only once since the last update of this sensor, so it reads 0%. Showing the last real reading from history.">
              Last reading · ${0}
            </div>`),new Date(l).toLocaleString(void 0,{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})):hc)}_renderMessagesSentTile(e){const t=this._findEntityIdMatching("nb_sent"),i=this._findEntityIdMatching("sent_flood"),o=this._findEntityIdMatching("sent_direct");if(!t||!i&&!o)return hc;const n=this._readNumber(t.entity_id),s=i?this._readNumber(i.entity_id):0,r=o?this._readNumber(o.entity_id):0,a=[{value:s,label:`Flood ${s}`,kind:"flood"},{value:r,label:`Direct ${r}`,kind:"direct"}];return e.add(t.entity_id),i&&e.add(i.entity_id),o&&e.add(o.entity_id),lc(Ro||(Ro=vd`
      <div class="hero-tile" @click=${0}>
        <div class="hero-tile-head">
          <span>Messages Sent${0}</span>
          <span class="status-dot info"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">${0}</span>
        </div>
        <meshcore-stacked-bar
          .segments=${0}
          .legend=${0}>
        </meshcore-stacked-bar>
      </div>
    `),()=>this._fireMoreInfo(t.entity_id),this._renderInfoTip({band:"info",fillPct:0,tooltip:"Messages sent (lifetime), split by send mode:\n• Flood — broadcast retransmits visible to all neighbours.\n• Direct — routed point-to-point along a path."}),this._formatCount(n),a,"inline")}_renderMessagesReceivedTile(e){const t=this._findEntityIdMatching("nb_recv"),i=this._findEntityIdMatching("recv_flood"),o=this._findEntityIdMatching("recv_direct"),n=this._findEntityIdMatching("flood_dups"),s=this._findEntityIdMatching("direct_dups");if(!t||!i&&!o)return hc;const r=this._readNumber(t.entity_id),a=i?this._readNumber(i.entity_id):0,l=o?this._readNumber(o.entity_id):0,d=[{value:a,label:`Flood ${a}`,kind:"flood"},{value:l,label:`Direct ${l}`,kind:"direct"}],c=n?this._readNumber(n.entity_id):0,h=s?this._readNumber(s.entity_id):0,p=(Number.isFinite(c)?c:0)+(Number.isFinite(h)?h:0),u=r>0?p/r*100:0;e.add(t.entity_id),i&&e.add(i.entity_id),o&&e.add(o.entity_id),n&&e.add(n.entity_id),s&&e.add(s.entity_id);const m=this._findEntityIdMatching("recv_errors"),g=m?this._readNumber(m.entity_id):NaN,v=Number.isFinite(g)?g:0,f=r+v,_=f>0?v/f*100:0;return m&&e.add(m.entity_id),lc(Do||(Do=vd`
      <div class="hero-tile" @click=${0}>
        <div class="hero-tile-head">
          <span>Messages Received${0}</span>
          <span class="status-dot info"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">${0}</span>
        </div>
        <meshcore-stacked-bar
          .segments=${0}
          .legend=${0}>
        </meshcore-stacked-bar>
        ${0}
        ${0}
        <div class="msg-legend">
          <span><span class="msg-swatch flood"></span>Flood ${0}</span>
          <span><span class="msg-swatch direct"></span>Direct ${0}</span>
          ${0}
          ${0}
        </div>
      </div>
    `),()=>this._fireMoreInfo(t.entity_id),this._renderInfoTip({band:"info",fillPct:0,tooltip:"Messages received (lifetime), split by receive mode:\n• Flood — broadcast packets received from neighbours.\n• Direct — routed packets where this node is on the path.\n\nEach bar below is a percentage of its own total:\n• Red = receive errors (CRC failures), as a share of all reception attempts (received + errors) — i.e. the error rate.\n• Amber = duplicate receptions, as a share of received messages (duplicates are a subset of received).\n\nBoth are context only, not banded — in a flooding mesh every active neighbour retransmits the same flood once, so a high duplicate ratio is normal (a 2-neighbour repeater sees ~50%, a 3-neighbour ~67%, etc.)."}),this._formatCount(r),d,"none",v>0?lc(Bo||(Bo=vd`<div class="err-line"
                      title="Receive errors (CRC failures): ${0} — ${0}% of reception attempts (received + errors)">
              <div class="err-line-fill" style="width:${0}%"></div>
            </div>`),v,_.toFixed(1),Math.min(100,_).toFixed(1)):hc,p>0?lc(No||(No=vd`<div class="dup-line"
                      title="Duplicate receptions: ${0} — ${0}% of received messages">
              <div class="dup-line-fill" style="width:${0}%"></div>
            </div>`),p,u.toFixed(1),Math.min(100,u).toFixed(1)):hc,a,l,v>0?lc(Fo||(Fo=vd`<span><span class="msg-swatch error"></span>Error ${0}</span>`),v):hc,p>0?lc(qo||(qo=vd`<span><span class="msg-swatch dup"></span>Dup ${0}</span>`),p):hc)}_renderRequestsTile(e){const t=this._findEntityIdMatching("request_succ"),i=this._findEntityIdMatching("request_fail");if(!t||!i)return hc;const o=this._readNumber(t.entity_id),n=this._readNumber(i.entity_id),s=o+n,r=s>0?o/s*100:0,a=s>=50?Og("request_success_rate",r):{band:"info",fillPct:0,tooltip:""},l=[{value:o,label:`OK ${o}`,kind:"success"},{value:n,label:`Fail ${n}`,kind:"failure"}];return e.add(t.entity_id),e.add(i.entity_id),lc(Ho||(Ho=vd`
      <div class="hero-tile" @click=${0}>
        <div class="hero-tile-head">
          <span>Requests${0}</span>
          <span class="status-dot ${0}"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">${0}</span>
          ${0}
        </div>
        <meshcore-stacked-bar
          .segments=${0}
          .legend=${0}>
        </meshcore-stacked-bar>
      </div>
    `),()=>this._fireMoreInfo(t.entity_id),this._renderInfoTip({...a,tooltip:"Outgoing requests this node initiated (login, telemetry, neighbour query) and how they resolved. Success rate bands: Green > 90%, Yellow 70–90%, Red < 70%, with a minimum sample of 50 attempts to colour. Below the floor, the bar stays neutral — too few samples to judge."}),a.band,s>0?`${r.toFixed(0)}%`:"—",s>0?lc(jo||(jo=vd`<span class="secondary">· ${0} attempt${0}</span>`),s,1===s?"":"s"):hc,l,"inline")}_formatCount(e){return Number.isFinite(e)?Math.round(e).toLocaleString():"—"}_renderLocationTile(){const e=this._findEntityIdMatching("latitude"),t=this._findEntityIdMatching("longitude");let i=e?this._readNumber(e.entity_id):NaN,o=t?this._readNumber(t.entity_id):NaN,n="entity";!Number.isFinite(i)&&Number.isFinite(this.fallbackLatitude)&&(i=this.fallbackLatitude,n="fallback"),!Number.isFinite(o)&&Number.isFinite(this.fallbackLongitude)&&(o=this.fallbackLongitude,n="fallback");const s=Number.isFinite(i)&&Number.isFinite(o)&&(0!==i||0!==o);if(!s)return hc;let r=null;if("entity"===n&&e){var a;const t=null===(a=this.hass)||void 0===a||null===(a=a.states[e.entity_id])||void 0===a?void 0:a.last_updated;if(t){const e=new Date(t);Number.isNaN(e.getTime())||(r=e)}}else"fallback"===n&&Number.isFinite(this.fallbackUpdated)&&(r=new Date(1e3*this.fallbackUpdated));const l=s&&r?this._formatRelativeTime(r):"";return lc(Zo||(Zo=vd`
      <div class="hero-tile" @click=${0}>
        <div class="hero-tile-head">
          <span>Location${0}</span>
        </div>
        <div class="hero-tile-value">
          ${0}
        </div>
        ${0}
      </div>
    `),()=>{e&&this._fireMoreInfo(e.entity_id)},"fallback"===n?lc(Vo||(Vo=vd`<span style="opacity:0.55;text-transform:none;letter-spacing:0;font-size:10px;margin-left:4px;">via contact</span>`)):hc,s?lc(Ko||(Ko=vd`<span class="coord-pair">
                ${0}, ${0}
              </span>`),i.toFixed(4),o.toFixed(4)):lc(Uo||(Uo=vd`<span class="primary">—</span>`)),l?lc(Wo||(Wo=vd`<div class="loc-updated">Updated ${0}</div>`),l):hc)}_formatRelativeTime(e){const t=(Date.now()-e.getTime())/1e3;return!Number.isFinite(t)||t<0||t<60?"just now":t<3600?`${Math.floor(t/60)} min ago`:t<86400?`${Math.floor(t/3600)} h ago`:`${Math.floor(t/86400)} d ago`}_renderCompanionRadioActivityTile(){const e=this._findEntityIdMatching("tx_airtime"),t=this._findEntityIdMatching("rx_airtime"),i=this._findByMetric("uptime_hours");if(!e&&!t||!i)return hc;const o=this._readUptimeMinutes(i);if(!Number.isFinite(o)||o<=0)return hc;const n=e?this._readNumber(e.entity_id):0,s=t?this._readNumber(t.entity_id):0;if(!Number.isFinite(n)&&!Number.isFinite(s))return hc;const r=e=>Number.isFinite(e)?Math.min(100,Math.max(0,e/o*100)):0,a=r(n),l=r(s),d=Math.max(0,100-a-l),c=Og("tx_airtime_util",a).band,h=Og("rx_airtime_util",l).band,p=this._worseBand(c,h),u=[{value:a,label:`TX ${a.toFixed(1)}%`,kind:"tx"},{value:l,label:`RX ${l.toFixed(1)}%`,kind:"rx"},{value:d,label:`Idle ${d.toFixed(1)}%`,kind:"idle"}],m=a+l;return lc(Go||(Go=vd`
      <div class="hero-tile"
           @click=${0}>
        <div class="hero-tile-head">
          <span>Radio activity${0}</span>
          <span class="status-dot ${0}"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">${0}<span class="unit">%</span></span>
        </div>
        <div class="ra-bar-wrap">
          <meshcore-stacked-bar
            .segments=${0}
            .total=${0}
            .legend=${0}>
          </meshcore-stacked-bar>
          <div class="ra-legend">
            ${0}
            ${0}
            <span class="ra-legend-item">
              <span class="legend-swatch idle"></span>Idle ${0}%
            </span>
          </div>
        </div>
      </div>
    `),()=>e&&this._fireMoreInfo(e.entity_id),this._renderInfoTip({band:p,fillPct:0,tooltip:"Lifetime-average half-duplex composition: cumulative TX / RX airtime divided by uptime since the node last booted. The radio can transmit OR receive, never both. Unlike a managed repeater (which reports utilisation over the last interval), the companion exposes only cumulative airtime, so this is a long-run average and will not reflect short recent bursts."}),p,m.toFixed(1),u,100,"none",e?lc(Xo||(Xo=vd`<span class="ra-legend-item" @click=${0}>
                  <span class="legend-swatch tx"></span>TX ${0}%
                </span>`),t=>{t.stopPropagation(),e&&this._fireMoreInfo(e.entity_id)},a.toFixed(1)):lc(Yo||(Yo=vd`<span class="ra-legend-item">
                  <span class="legend-swatch tx"></span>TX ${0}%
                </span>`),a.toFixed(1)),t?lc(Jo||(Jo=vd`<span class="ra-legend-item" @click=${0}>
                  <span class="legend-swatch rx"></span>RX ${0}%
                </span>`),e=>{e.stopPropagation(),t&&this._fireMoreInfo(t.entity_id)},l.toFixed(1)):lc(Qo||(Qo=vd`<span class="ra-legend-item">
                  <span class="legend-swatch rx"></span>RX ${0}%
                </span>`),l.toFixed(1)),d.toFixed(1))}_readUptimeMinutes(e){var t,i;const o=this._readNumber(e.entity_id);if(!Number.isFinite(o))return NaN;switch(null!==(t=null===(i=this.hass)||void 0===i||null===(i=i.states[e.entity_id])||void 0===i||null===(i=i.attributes)||void 0===i?void 0:i.unit_of_measurement)&&void 0!==t?t:""){case"d":return 1440*o;case"h":return 60*o;case"min":return o;default:return o/60}}_buildGroups(e){var t;const i={"Radio · live":[],"Radio · configuration":[],Status:[],Identity:[]};for(const t of this.entities)e.has(t.entity_id)||this._isHeroDuplicate(t)||i[this._groupOf(t)].push(this._renderRow(t));const o="companion"===(null===(t=this.device)||void 0===t?void 0:t.type),n=["Radio · configuration","Identity"];return Object.entries(i).filter(([e,t])=>!(0===t.length||o&&n.includes(e))).map(([e,t])=>({name:e,rows:t}))}_isHeroDuplicate(e){return"battery_pct"===e.metricKey||2===e.sortOrder||"snr"===e.metricKey||"rssi"===e.metricKey||"uptime_hours"===e.metricKey||"tx_airtime_util"===e.metricKey||"rx_airtime_util"===e.metricKey||"Airtime"===e.label||"RX Airtime"===e.label}_groupOf(e){const t=e.entity_id,i=e.sortOrder;return e.booleanProblem||2===i?"Status":6===i?"Radio · configuration":4===i||5===i||9===i||10===i||11===i||12===i||t.includes("noise_floor")||t.includes("tx_queue")?"Radio · live":t.includes("frequency")||t.includes("bandwidth")||t.includes("spreading_factor")||t.includes("rate_limiter")?"Radio · configuration":t.includes("hop_count")||t.includes("out_path")||t.includes("last_seen")||t.includes("last_advert")||3===i||8===i||7===i?"Status":"Identity"}_renderGroup(e){return lc(en||(en=vd`
      <div class="group-label">${0}</div>
      ${0}
    `),e.name,e.rows)}_renderRow(e){var t,i,o,n,s,r;if(e.booleanProblem){var a;const t=null===(a=this.hass)||void 0===a||null===(a=a.states[e.entity_id])||void 0===a?void 0:a.state,i=void 0===t||"unknown"===t||"unavailable"===t,o="on"===t,n=i?"info":o?"bad":"good";return lc(tn||(tn=vd`
        <div class="sensor-item"
             @click=${0}
             @contextmenu=${0}
             ${0}>
          <span class="status-dot ${0}"></span>
          <span class="si-label">${0}</span>
          <span class="si-value">${0}</span>
          <span class="si-bar"></span>
        </div>
      `),()=>this._fireMoreInfo(e.entity_id),t=>this._fireContextMenu(t,e),Pg(()=>this._fireContextMenu(void 0,e)),n,e.label,i?"—":o?"Detected":"OK")}const l=null===(t=this.hass)||void 0===t?void 0:t.states[e.entity_id],d=null==l?void 0:l.state,c="unknown"!==d&&"unavailable"!==d||null===(i=this._lastKnown[e.entity_id])||void 0===i?null:i,h=c?c.value:this._readNumber(e.entity_id),p=null!==(o=null==l||null===(n=l.attributes)||void 0===n?void 0:n.unit_of_measurement)&&void 0!==o?o:"",u=e.metricKey?this._evaluateForRow(e.metricKey,h,e):null,m=null!==(s=null==u?void 0:u.band)&&void 0!==s?s:"info",g=e.staticTooltip||(null==u?void 0:u.tooltip)||"",v=g?{band:m,fillPct:null!==(r=null==u?void 0:u.fillPct)&&void 0!==r?r:0,tooltip:g,source:null==u?void 0:u.source}:null,f=c?this._formatRowValue(e,h,String(h)):this._formatRowValue(e,h,null==l?void 0:l.state),_=c?`Last known value (${new Date(c.ts).toLocaleString()}) — the sensor has no current reading yet`:"";return lc(on||(on=vd`
      <div class="sensor-item"
           @click=${0}
           @contextmenu=${0}
           ${0}>
        <span class="status-dot ${0}"></span>
        <span class="si-label">
          ${0}${0}
        </span>
        <span class="si-value ${0}" title=${0}>
          ${0}${0}
        </span>
        <span class="si-bar">
          ${0}
        </span>
      </div>
    `),()=>this._fireMoreInfo(e.entity_id),t=>this._fireContextMenu(t,e),Pg(()=>this._fireContextMenu(void 0,e)),m,e.label,v?this._renderInfoTip(v):hc,c?"stale":"",_,f,p?lc(nn||(nn=vd`<span class="unit">${0}</span>`),p):hc,u&&e.metricKey?lc(sn||(sn=vd`<meshcore-stat-bar
                .value=${0}
                .min=${0}
                .max=${0}
                .band=${0}>
              </meshcore-stat-bar>`),u.fillPct,0,100,m):hc)}_evaluateForRow(e,t,i){if("uptime_hours"===e){var o,n;let s=t;switch(null!==(o=null===(n=this.hass)||void 0===n||null===(n=n.states[i.entity_id])||void 0===n||null===(n=n.attributes)||void 0===n?void 0:n.unit_of_measurement)&&void 0!==o?o:""){case"d":s=24*t;break;case"h":s=t;break;case"min":s=t/60;break;default:s=t/3600}return Og(e,s)}var s,r;return Og(e,"temperature"===e&&(null!==(s=null===(r=this.hass)||void 0===r||null===(r=r.states[i.entity_id])||void 0===r||null===(r=r.attributes)||void 0===r?void 0:r.unit_of_measurement)&&void 0!==s?s:"").includes("C")?9*t/5+32:t)}_findByMetric(e){return this.entities.find(t=>t.metricKey===e)}_findEntityIdMatching(e){return this.entities.find(t=>t.entity_id.includes(e))}_findEntityByLabel(e){return this.entities.find(t=>t.label===e)}_readNumber(e){var t;const i=null===(t=this.hass)||void 0===t?void 0:t.states[e];if(!i||"unavailable"===i.state||"unknown"===i.state)return NaN;const o=parseFloat(i.state);return Number.isFinite(o)?o:NaN}_formatNumber(e,t){return Number.isFinite(e)?e.toFixed(t):"—"}_formatRowValue(e,t,i){var o;if("unavailable"===i||"unknown"===i)return"—";if(!Number.isFinite(t))return null!=i?i:"—";const n=null===(o=this.hass)||void 0===o||null===(o=o.entities)||void 0===o||null===(o=o[e.entity_id])||void 0===o?void 0:o.display_precision;return null!=n&&n>=0?t.toFixed(n):i&&i.includes(".")?i:t.toString()}_renderInfoTip(e){var t;return e.tooltip?lc(rn||(rn=vd`<meshcore-info-tip
      .content=${0}
      .source=${0}>
    </meshcore-info-tip>`),e.tooltip,null!==(t=e.source)&&void 0!==t?t:""):hc}_worseBand(e,t){const i={good:0,info:0,warn:1,bad:2};return i[e]>=i[t]?e:t}_fireMoreInfo(e){e&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}_fireContextMenu(e,t){null==e||e.preventDefault(),this.dispatchEvent(new CustomEvent("tile-context-menu",{detail:{entityId:t.entity_id,label:t.label},bubbles:!0,composed:!0}))}};Ug.styles=$d(an||(an=vd`
    /* container-type lets the sensor grid's @container query react to this
       card's own width rather than the raw viewport. */
    :host { display: block; container-type: inline-size; }

    /* ─── Hero row ─── */
    .hero-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 12px;
      margin-bottom: 16px;
    }
    .hero-tile {
      background: var(--secondary-background-color, #f0f0f0);
      border-radius: 10px;
      padding: 12px 14px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      cursor: pointer;
      border: 1px solid transparent;
      transition: border-color 0.15s;
    }
    .hero-tile:hover { border-color: var(--primary-color, #03a9f4); }
    .hero-tile-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.4px;
      color: var(--secondary-text-color);
    }
    .hero-tile-value {
      display: flex;
      align-items: baseline;
      gap: 6px;
      flex-wrap: wrap;
    }
    .hero-tile-value .primary {
      font-size: 22px;
      font-weight: 600;
      color: var(--primary-text-color);
      line-height: 1;
    }
    .hero-tile-value .secondary {
      font-size: 13px;
      color: var(--secondary-text-color);
    }
    .hero-tile-value .compact {
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
    }
    /* Clickable TX/RX segments inside Radio activity hero tile */
    .ra-segment {
      cursor: pointer;
      border-radius: 3px;
      padding: 0 2px;
      transition: background 0.15s;
    }
    .ra-segment:hover {
      background: rgba(127, 127, 127, 0.18);
    }

    /* Bar + custom legend wrapper — keeps the legend tight to the bar
       (4px) regardless of the hero-tile's 8px flex-column gap, matching
       the spacing inside Messages Sent / Received tiles. */
    .ra-bar-wrap { display: block; }

    /* Radio activity legend (matches the stacked-bar inline legend
       layout used by Messages Sent / Received) */
    .si-value.stale {
      font-style: italic;
      opacity: 0.7;
    }

    .ra-history-note {
      margin-top: 4px;
      font-size: 11px;
      font-style: italic;
      color: var(--secondary-text-color);
    }

    .ra-legend {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 12px;
      margin-top: 4px;
      font-size: 11px;
      color: var(--secondary-text-color);
    }
    .ra-legend-item {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      white-space: nowrap;
    }
    .ra-legend-item:hover {
      color: var(--primary-text-color);
      cursor: pointer;
    }
    .legend-swatch {
      width: 8px;
      height: 8px;
      border-radius: 2px;
      flex-shrink: 0;
    }
    .legend-swatch.tx   { background: var(--info, #2196f3); }
    .legend-swatch.rx   { background: var(--good, #4caf50); }
    .legend-swatch.idle {
      background: var(--divider-color, #e0e0e0);
      border: 1px solid var(--secondary-text-color);
    }

    /* ─── Status dots ─── */
    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
      display: inline-block;
    }
    .status-dot.good { background: var(--good, #4caf50); }
    .status-dot.warn { background: var(--warn, #ff9800); }
    .status-dot.bad  { background: var(--bad,  #f44336); }
    .status-dot.info { background: var(--info, #2196f3); }

    /* ─── Subsection label ─── */
    .subsection-label {
      font-size: 11px;
      font-weight: 600;
      color: var(--secondary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
      margin-top: 16px;
    }
    .hidden-suffix {
      font-weight: 400;
      text-transform: none;
      opacity: 0.6;
      margin-left: 6px;
    }

    /* ─── Sensor grid ─── responsive: one column on a narrow card, two
       once the card is wide. The breakpoint is a @container query keyed on
       :host's inline-size, so it reacts to the card width (panel layout,
       sidebar state) rather than just the raw viewport. Category headers
       span the full width so paired sensors stay within their category. */
    .sensor-grid {
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 28px;
    }
    @container (min-width: 620px) {
      .sensor-grid { grid-template-columns: 1fr 1fr; }
    }
    .group-label {
      grid-column: 1 / -1;
      padding: 12px 4px 4px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--secondary-text-color);
    }
    .sensor-item {
      display: grid;
      grid-template-columns: 14px minmax(0, 1fr) auto minmax(72px, 120px);
      align-items: center;
      gap: 10px;
      padding: 8px 4px;
      border-top: 1px solid var(--divider-color);
      font-size: 13px;
      cursor: pointer;
    }
    .sensor-item:hover { background: rgba(127, 127, 127, 0.06); }
    .si-label {
      color: var(--secondary-text-color);
      min-width: 0;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .si-value {
      color: var(--primary-text-color);
      font-weight: 500;
      text-align: right;
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }
    .si-bar { min-width: 0; }
    .si-bar meshcore-stat-bar { width: 100%; }

    .unit {
      font-size: 11px;
      font-weight: 400;
      color: var(--secondary-text-color);
      margin-left: 2px;
    }

    .map-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 10px;
      border-radius: 12px;
      background: var(--info-bg, rgba(33, 150, 243, 0.18));
      color: var(--info, #2196f3);
      font-size: 11px;
      font-weight: 500;
      text-decoration: none;
      cursor: pointer;
    }
    .coord-pair {
      font-family: ui-monospace, 'SF Mono', Menlo, monospace;
      font-size: 13px;
      color: var(--primary-text-color);
    }
    .loc-updated {
      font-size: 11px;
      color: var(--secondary-text-color);
      margin-top: 2px;
    }

    .dup-annotation {
      font-size: 11px;
      color: var(--secondary-text-color);
      font-style: italic;
      margin-top: 2px;
    }
    .dup-annotation .num {
      font-weight: 500;
      color: var(--primary-text-color);
      font-style: normal;
    }
    /* Thin red line beneath the Messages Received composition bar showing
       the lifetime receive-error share. */
    .err-line {
      height: 3px;
      width: 100%;
      margin-top: 3px;
      background: var(--divider-color, #e0e0e0);
      border-radius: 2px;
      overflow: hidden;
      cursor: help;
    }
    .err-line-fill {
      height: 100%;
      background: var(--bad, #f44336);
    }
    /* Duplicates line — same thin track, amber fill, stacked under the
       error line. */
    .dup-line {
      height: 3px;
      width: 100%;
      margin-top: 2px;
      background: var(--divider-color, #e0e0e0);
      border-radius: 2px;
      overflow: hidden;
      cursor: help;
    }
    .dup-line-fill {
      height: 100%;
      background: var(--warning, #ff9800);
    }
    /* Unified legend beneath the Messages Received bar stack. */
    .msg-legend {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 10px;
      margin-top: 5px;
      font-size: 10px;
      color: var(--secondary-text-color);
    }
    .msg-legend > span {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      white-space: nowrap;
    }
    .msg-swatch {
      width: 8px;
      height: 8px;
      border-radius: 2px;
      flex-shrink: 0;
    }
    .msg-swatch.flood  { background: var(--info, #2196f3); }
    .msg-swatch.direct { background: var(--good, #4caf50); }
    .msg-swatch.error  { background: var(--bad, #f44336); }
    .msg-swatch.dup    { background: var(--warning, #ff9800); }
  `)),fd([Lc({type:Object})],Ug.prototype,"hass",void 0),fd([Lc({type:Object})],Ug.prototype,"device",void 0),fd([Lc({type:Array})],Ug.prototype,"entities",void 0),fd([Lc({type:Number})],Ug.prototype,"hiddenCount",void 0),fd([Lc({type:Number})],Ug.prototype,"fallbackLatitude",void 0),fd([Lc({type:Number})],Ug.prototype,"fallbackLongitude",void 0),fd([Lc({type:Number})],Ug.prototype,"fallbackUpdated",void 0),fd([Ec()],Ug.prototype,"_rateHistory",void 0),fd([Ec()],Ug.prototype,"_airtimeFallback",void 0),fd([Ec()],Ug.prototype,"_lastKnown",void 0),Ug=fd([Tc("meshcore-node-summary")],Ug);let Wg=class extends Mc{constructor(){super(...arguments),this.data=[],this.neighbors=[],this.width=600,this.height=200,this.timeRange=24,this.COLORS=["#FF6B6B","#4ECDC4","#FFE66D","#95E1D3","#C7CEEA","#FF8B94","#B5EAD7","#FFB7B2"]}render(){if(!this.data||0===this.data.length||0===this.neighbors.length)return lc(ln||(ln=vd`
        <div class="chart-container">
          <div class="empty-state">No data available</div>
        </div>
      `));const e=this._renderChart();return lc(dn||(dn=vd`
      <div class="chart-container">
        ${0}
        <div class="legend">
          ${0}
        </div>
      </div>
    `),e,this.neighbors.map((e,t)=>{const i=this.COLORS[t%this.COLORS.length];return lc(cn||(cn=vd`
              <div class="legend-item">
                <div class="legend-dot" style="background-color: ${0}"></div>
                <span>${0}</span>
              </div>
            `),i,e)}))}_renderChart(){const e=50,t=this.width-100,i=this.height-100;let o=1/0,n=-1/0;this.data.forEach(e=>{Object.values(e.values).forEach(e=>{"number"==typeof e&&(o=Math.min(o,e),n=Math.max(n,e))})}),isFinite(o)&&isFinite(n)||(o=-10,n=20);const s=n-o,r=o-.1*s,a=n+.1*s,l=t=>this.height-e-(t-r)/(a-r)*i,d=60*this.timeRange*60*1e3,c=Date.now(),h=c-d,p=i=>e+(i-h)/d*t,u=[];for(let t=0;t<=5;t++){const i=r+t/5*(a-r),o=l(i);u.push(dc(hn||(hn=vd`
          <line x1="${0}" y1="${0}" x2="${0}" y2="${0}"
            stroke="var(--divider-color, #e0e0e0)" stroke-dasharray="4,4" opacity="0.3" />
          <text x="${0}" y="${0}" font-size="10" text-anchor="end"
            fill="var(--secondary-text-color, #727272)">${0}dB</text>
        `),e,o,this.width-e,o,42,o+4,Math.round(i)))}const m=[];for(let t=0;t<=5;t++){const i=h+t/5*d,o=p(i),n=this._formatTimeLabel(i,c);m.push(dc(pn||(pn=vd`
          <text x="${0}" y="${0}" font-size="10" text-anchor="middle"
            fill="var(--secondary-text-color, #727272)">${0}</text>
        `),o,this.height-e+16,n))}const g=this.neighbors.map((e,t)=>{const i=this.COLORS[t%this.COLORS.length],o=[];return this.data.forEach(t=>{const i=t.values[e];if("number"==typeof i&&isFinite(i)){const e=p(t.timestamp),n=l(i);o.push(`${e},${n}`)}}),0===o.length?dc(un||(un=vd``)):dc(mn||(mn=vd`
        <polyline points="${0}" fill="none" stroke="${0}"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      `),o.join(" "),i)});return dc(gn||(gn=vd`
      <svg width="${0}" height="${0}" xmlns="http://www.w3.org/2000/svg">
        <!-- Background -->
        <rect width="${0}" height="${0}" fill="var(--input-bg)" />

        <!-- Grid lines -->
        ${0}

        <!-- Y-axis -->
        <line x1="${0}" y1="${0}" x2="${0}"
          y2="${0}" stroke="var(--divider-color, #e0e0e0)" stroke-width="1" />

        <!-- X-axis -->
        <line x1="${0}" y1="${0}"
          x2="${0}" y2="${0}"
          stroke="var(--divider-color, #e0e0e0)" stroke-width="1" />

        <!-- Data lines -->
        ${0}

        <!-- Time labels -->
        ${0}
      </svg>
    `),this.width,this.height,this.width,this.height,u,e,e,e,this.height-e,e,this.height-e,this.width-e,this.height-e,g,m)}_formatTimeLabel(e,t){const i=(t-e)/36e5;return i>=24?`${Math.round(i)}h ago`:0===i?"Now":`${Math.round(i)}h`}};Wg.styles=$d(vn||(vn=vd`
    :host {
      display: block;
      width: 100%;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    svg {
      width: 100%;
      height: auto;
      display: block;
    }

    .chart-container {
      width: 100%;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      background: var(--input-bg);
      padding: 12px;
      box-sizing: border-box;
    }

    .empty-state {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 200px;
      color: var(--secondary-text-color, #727272);
      font-size: 14px;
    }

    .legend {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid var(--divider-color, #e0e0e0);
    }

    .legend-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: var(--primary-text-color);
    }

    .legend-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }
  `)),fd([Lc({type:Array})],Wg.prototype,"data",void 0),fd([Lc({type:Array})],Wg.prototype,"neighbors",void 0),fd([Lc({type:Number})],Wg.prototype,"width",void 0),fd([Lc({type:Number})],Wg.prototype,"height",void 0),fd([Lc({type:Number})],Wg.prototype,"timeRange",void 0),Wg=fd([Tc("meshcore-snr-chart")],Wg);let Gg=class extends Mc{constructor(){super(),this.open=!1,this.title="Confirm",this.message="",this.confirmLabel="Confirm",this.cancelLabel="Cancel",this.dangerous=!1,this._typedValue="",bh(this,{isOpen:()=>this.open,onEscape:()=>this._onCancel()})}render(){if(!this.open)return;const e=this.requireTyped&&this._typedValue!==this.requireTyped;return lc(fn||(fn=vd`
      <div class="dialog-overlay" @click=${0}>
        <div
          class="dialog"
          role="dialog"
          aria-modal="true"
          aria-label=${0}>
          <div class="dialog-header">
            <div class="dialog-header-title">${0}</div>
          </div>
          <div class="dialog-body">
            <div style="margin-bottom: 16px;">${0}</div>
            ${0}
          </div>
          <div class="dialog-footer">
            <button
              class="dialog-button"
              @click=${0}>
              ${0}
            </button>
            <button
              class="dialog-button primary ${0}"
              ?disabled=${0}
              @click=${0}>
              ${0}
            </button>
          </div>
        </div>
      </div>
    `),this._onOverlayClick,this.title,this.title,this.message,this.requireTyped?lc(_n||(_n=vd`
                  <div class="form-group">
                    <label class="form-label">Type to confirm</label>
                    <input
                      type="text"
                      class="form-input"
                      placeholder="Type '${0}'"
                      .value=${0}
                      @input=${0}
                    />
                    <div class="form-description">
                      Type '${0}' to enable confirmation
                    </div>
                  </div>
                `),this.requireTyped,this._typedValue,e=>{this._typedValue=e.target.value},this.requireTyped):"",this._onCancel,this.cancelLabel,this.dangerous?"danger-button":"",e,this._onConfirm,this.confirmLabel)}_onOverlayClick(e){e.target===e.currentTarget&&this._onCancel()}_onCancel(){this._typedValue="",this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0}))}_onConfirm(){this.dispatchEvent(new CustomEvent("confirm",{bubbles:!0})),this._typedValue=""}};Gg.styles=[Ic,$d(yn||(yn=vd`
      :host {
        display: block;
      }
    `))],fd([Lc({type:Boolean})],Gg.prototype,"open",void 0),fd([Lc({type:String})],Gg.prototype,"title",void 0),fd([Lc({type:String})],Gg.prototype,"message",void 0),fd([Lc({type:String})],Gg.prototype,"confirmLabel",void 0),fd([Lc({type:String})],Gg.prototype,"cancelLabel",void 0),fd([Lc({type:Boolean})],Gg.prototype,"dangerous",void 0),fd([Lc({type:String})],Gg.prototype,"requireTyped",void 0),fd([Ec()],Gg.prototype,"_typedValue",void 0),Gg=fd([Tc("meshcore-confirm-dialog")],Gg);const Xg=e=>{if(null==e)return;const t=Number(e);return Number.isFinite(t)?t:void 0},Yg=["None","Share (Live GPS)","Saved Prefs"],Jg=["1-Byte","2-Byte","3-Byte"],Qg=["Deny","Allow (Per Contact Flags)","Allow All"],ev=[{label:"Overwrite Oldest When Full",value:1},{label:"Auto-Add Chat (Companion)",value:2},{label:"Auto-Add Repeater",value:4},{label:"Auto-Add Room Server",value:8},{label:"Auto-Add Sensor",value:16}];function tv(e,t){const i=Xg(e);return void 0!==i&&void 0!==t[i]?t[i]:`Unknown (${e})`}const iv=[{name:"reboot",description:"Restart the device",category:"Device Management",dangerous:!0},{name:"poweroff",description:"Power off the device (v1.14.1+)",category:"Device Management",dangerous:!0},{name:"send_appstart",description:"Initialize connection, returns SELF_INFO with device details",category:"Device Management",responseFormat:"Device info with name, public key, radio params, location"},{name:"send_device_query",description:"Query device info (firmware, capabilities, path hash mode)",category:"Device Management",responseFormat:"Device information including firmware version and capabilities"},{name:"get_bat",description:"Get battery voltage and percentage",category:"Device Info",responseFormat:"Battery: {voltage}mV ({percentage}%)"},{name:"get_time",description:"Get device's current RTC time",category:"Device Info",responseFormat:"Epoch timestamp or formatted time string"},{name:"get_self_telemetry",description:"Get local device telemetry data",category:"Device Info",responseFormat:"Telemetry data including temperature, voltage, uptime"},{name:"set_time",description:"Set device RTC time",category:"Device Info",params:[{name:"val",type:"number",description:"Epoch seconds (Unix timestamp)",required:!0}]},{name:"set_radio",description:"Set radio parameters (frequency, bandwidth, spreading factor, coding rate)",category:"Radio Settings",params:[{name:"freq",type:"number",description:"Frequency in MHz (v1.15.0+ allows down to 150)",required:!0,min:150,max:1e3},{name:"bw",type:"number",description:"Bandwidth in kHz",required:!0,min:7.8,max:500},{name:"sf",type:"number",description:"Spreading factor",required:!0,min:5,max:12},{name:"cr",type:"number",description:"Coding rate",required:!0,min:5,max:8}],responseFormat:"OK - radio parameters set (reboot required)"},{name:"get_allowed_repeat_freq",description:"Get allowed repeater frequencies",category:"Radio Settings",responseFormat:"List of allowed frequency ranges"},{name:"set_tx_power",description:"Set transmit power",category:"Radio Settings",params:[{name:"val",type:"number",description:"TX power in dBm",required:!0,min:-9,max:22}],responseFormat:"OK - TX power set to {val}dBm"},{name:"set_radio.rxgain",description:"Set RX boosted gain mode (SX1262/SX1268; also LR1110 v1.16.0+)",category:"Radio Settings",params:[{name:"state",type:"select",description:"Enable or disable RX boosted gain",required:!0,options:["on","off"]}]},{name:"set_coords",description:"Set GPS coordinates (latitude and longitude)",category:"Location",params:[{name:"lat",type:"number",description:"Latitude in decimal degrees",required:!0,min:-90,max:90},{name:"lon",type:"number",description:"Longitude in decimal degrees",required:!0,min:-180,max:180}],responseFormat:"OK - coordinates set"},{name:"set_path_hash_mode",description:"Set path hash mode (0, 1, or 2) for routing optimization",category:"Network",params:[{name:"mode",label:"Path Hash Mode",type:"select",description:"Routing path-hash width",required:!0,selectOptions:[{label:"1-Byte (0)",value:0},{label:"2-Byte (1)",value:1},{label:"3-Byte (2)",value:2}]}]},{name:"set_flood_max",description:"Set maximum flood hops (network-wide broadcast limit)",category:"Network",params:[{name:"val",type:"number",description:"Maximum number of hops for flood messages",required:!0,min:0,max:64}],responseFormat:"OK - flood max set to {val}"},{name:"send_advert",description:"Send a local or flood advertisement",category:"Network",params:[{name:"flood",type:"boolean",description:"True for flood advert, false for local-only",required:!1,default:!1}],responseFormat:"Advertisement sent"},{name:"get_stats_core",description:"Get core mesh statistics (messages, packets, routing)",category:"Statistics",responseFormat:"Core statistics including message counts and routing info"},{name:"get_stats_radio",description:"Get radio statistics (TX/RX counts, errors, signal quality)",category:"Statistics",responseFormat:"Radio statistics including TX/RX packet counts and error rates"},{name:"get_stats_packets",description:"Get detailed packet statistics",category:"Statistics",responseFormat:"Packet-level statistics"},{name:"set_custom_var",description:"Set a custom variable (sensor data)",category:"Advanced",params:[{name:"key",type:"string",description:"Variable name",required:!0},{name:"value",type:"string",description:"Variable value",required:!0}],responseFormat:"OK - variable set"},{name:"get_custom_vars",description:"Get all custom variables",category:"Advanced",responseFormat:"Dictionary of all custom variables"},{name:"set_tuning",description:"Set timing parameters (RX delay and airtime factor)",category:"Advanced",params:[{name:"rx_dly",type:"number",description:"RX delay base",required:!0},{name:"af",type:"number",description:"Airtime factor",required:!0}]},{name:"set_name",description:"Set device name",category:"Device Info",dangerous:!0,dangerMessage:"Changing the device name will change all entity IDs. Automations, scripts, and dashboards using current entity IDs will need to be updated.",params:[{name:"name",type:"string",description:"New device name",required:!0}],responseFormat:"OK - name set to {name}"},{name:"set_multi_acks",description:"Enable or disable multi-ack mode",category:"Advanced",params:[{name:"multi_acks",label:"Multi-Acks",type:"boolean",description:"Enable multi-acks",required:!0,default:!1}]},{name:"set_advert_loc_policy",description:"Set location advertisement policy",category:"Network",params:[{name:"advert_loc_policy",label:"Location Ad Policy",type:"select",description:"How this node shares its location in adverts",required:!0,selectOptions:[{label:"None (0)",value:0},{label:"Share — Live GPS (1)",value:1},{label:"Saved Prefs (2)",value:2}]}]},{name:"set_manual_add_contacts",description:"Set manual contact adding mode",category:"Advanced",params:[{name:"manual_add_contacts",label:"Manual Add Contacts",type:"boolean",description:"Enable manual contact addition (off = auto-add)",required:!0,default:!1}]},{name:"set_telemetry_mode_base",description:"Set base telemetry mode",category:"Advanced",params:[{name:"telemetry_mode_base",label:"Base Telemetry Mode",type:"select",description:"Who may read base telemetry",required:!0,selectOptions:[{label:"Deny (0)",value:0},{label:"Allow Per Contact Flags (1)",value:1},{label:"Allow All (2)",value:2}]}]},{name:"set_telemetry_mode_loc",description:"Set location telemetry mode",category:"Advanced",params:[{name:"telemetry_mode_loc",label:"Location Telemetry Mode",type:"select",description:"Who may read location telemetry",required:!0,selectOptions:[{label:"Deny (0)",value:0},{label:"Allow Per Contact Flags (1)",value:1},{label:"Allow All (2)",value:2}]}]},{name:"set_telemetry_mode_env",description:"Set environment telemetry mode",category:"Advanced",params:[{name:"telemetry_mode_env",label:"Environment Telemetry Mode",type:"select",description:"Who may read environment telemetry",required:!0,selectOptions:[{label:"Deny (0)",value:0},{label:"Allow Per Contact Flags (1)",value:1},{label:"Allow All (2)",value:2}]}]},{name:"get_channel",description:"Get channel information by index",category:"Advanced",params:[{name:"channel_idx",type:"number",description:"Channel index",required:!0}]},{name:"set_channel",description:"Set channel name and optional secret",category:"Advanced",params:[{name:"channel_idx",type:"number",description:"Channel index",required:!0},{name:"name",type:"string",description:"Channel name (use # prefix for auto-derived key)",required:!0}]},{name:"export_private_key",description:"Export private key (may be disabled by firmware)",category:"Advanced",responseFormat:"Private key in hex format"},{name:"import_private_key",description:"Import private key (reboot required)",category:"Advanced",dangerous:!0,dangerMessage:"Importing a private key changes the device identity and all entity IDs. Automations, scripts, and dashboards using current entity IDs will need to be updated.",params:[{name:"key",type:"string",description:"Private key in hex format",required:!0}]},{name:"sign",description:"Sign data with the device private key",category:"Advanced",params:[{name:"data",type:"string",description:"Data to sign (hex format)",required:!0}]},{name:"send_msg",description:"Send a direct text message to a contact",category:"Messaging",params:[{name:"contact",type:"string",description:"Contact name, public key prefix, or full public key",required:!0},{name:"message",type:"string",description:"Message text",required:!0}]},{name:"send_msg_with_retry",description:"Send a message with automatic retry and path reset",category:"Messaging",params:[{name:"contact",type:"string",description:"Contact name, public key prefix, or full public key",required:!0},{name:"message",type:"string",description:"Message text",required:!0}]},{name:"send_chan_msg",description:"Send a message to a channel (group message)",category:"Messaging",params:[{name:"channel",type:"number",description:"Channel index",required:!0},{name:"message",type:"string",description:"Message text",required:!0}]},{name:"send_cmd",description:"Send a CLI command to a remote node over the mesh",category:"Messaging",params:[{name:"contact",type:"string",description:"Contact name, public key prefix, or full public key",required:!0},{name:"command",type:"string",description:"CLI command to execute on remote node",required:!0}]},{name:"send_login",description:"Login to a remote node with admin password",category:"Messaging",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0},{name:"password",type:"string",description:"Admin password",required:!0}]},{name:"send_logout",description:"Logout from a remote node",category:"Messaging",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"send_statusreq",description:"Request status from a remote node",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"send_telemetry_req",description:"Request telemetry data from a remote node",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"send_path_discovery",description:"Initiate path discovery to a remote node",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_status_sync",description:"Request status from a node (synchronous)",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_telemetry_sync",description:"Request telemetry data from a node (synchronous)",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_mma_sync",description:"Request min/max/avg statistics for a time range",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0},{name:"start",type:"number",description:"Start time (epoch seconds)",required:!0},{name:"end",type:"number",description:"End time (epoch seconds)",required:!0}]},{name:"req_acl_sync",description:"Request access control list from a node",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_neighbours_sync",description:"Request neighbor list from a remote node",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"fetch_all_neighbours",description:"Fetch complete neighbor list with pagination",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_regions_sync",description:"Request region information from a node",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_owner_sync",description:"Request owner information (name and description)",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_basic_sync",description:"Request basic node information",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"get_contacts",description:"Retrieve all known contacts from the device",category:"Advanced",params:[{name:"lastmod",type:"number",description:"Only get contacts modified since this timestamp (optional)",required:!1}]},{name:"reset_path",description:"Reset routing path to flood for a contact",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"share_contact",description:"Share a contact info on the mesh",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"export_contact",description:"Export a contact card (or self if no contact specified)",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key (optional, defaults to self)",required:!1}]},{name:"import_contact",description:"Import a contact card",category:"Advanced",params:[{name:"card_data",type:"string",description:"Contact card data (hex encoded)",required:!0}]},{name:"remove_contact",description:"Remove a contact from the list",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"update_contact",description:"Update contact routing path and flags",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0},{name:"path",type:"string",description:"Routing path (hex string)",required:!0},{name:"flags",type:"string",description:"Contact flags",required:!0}]},{name:"add_contact",description:"Add a contact to the list",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"change_contact_path",description:"Change a contact routing path",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0},{name:"path",type:"number",description:"New path (integer)",required:!0}]},{name:"change_contact_flags",description:"Change a contact flags",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0},{name:"flags",type:"number",description:"New flags (integer)",required:!0}]},{name:"set_autoadd_config",description:"Configure auto-add behavior for new contacts",category:"Advanced",params:[{name:"flag",label:"Auto-Add Config",type:"bitmask",description:"Which contact types to auto-add, plus overwrite-oldest policy",required:!0,bits:ev}]},{name:"get_autoadd_config",description:"Get current auto-add configuration",category:"Advanced"},{name:"send_binary_req",description:"Send a raw binary request to a remote node",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0},{name:"req_type",type:"number",description:"Binary request type",required:!0}]},{name:"set_flood_scope",description:"Set flood scope filter for broadcast messages",category:"Network",params:[{name:"scope",type:"string",description:"Flood scope (int, string, or hex)",required:!0}]},{name:"set_default_flood_scope",description:"Set the persistent default flood scope used when no per-message scope is set (v1.15.0+)",category:"Network",params:[{name:"scope",type:"string",description:'Channel/region name (e.g. "public"), or empty / "*" / "0" / "None" to clear',required:!0}],responseFormat:"OK"},{name:"get_default_flood_scope",description:"Get the persistent default flood scope (v1.15.0+)",category:"Network",responseFormat:"Scope name + 16-byte key, or null if unset"},{name:"send_control_data",description:"Send raw control data packet to the mesh",category:"Advanced",params:[{name:"control_type",type:"number",description:"Control data type",required:!0},{name:"payload",type:"string",description:"Payload data (hex encoded)",required:!0}]},{name:"send_node_discover_req",description:"Broadcast node discovery request",category:"Network",params:[{name:"filter",type:"number",description:"Discovery filter",required:!0},{name:"prefix_only",type:"boolean",description:"Only use public key prefix for matching",required:!1,default:!1}]},{name:"get_msg",description:"Retrieve pending incoming messages",category:"Messaging",params:[{name:"timeout",type:"number",description:"Timeout in seconds to wait for messages (optional)",required:!1,default:5}]},{name:"send_trace",description:"Send a trace packet through specific repeaters",category:"Advanced",params:[{name:"auth_code",type:"number",description:"Authentication code",required:!0},{name:"tag",type:"number",description:"Trace tag",required:!0},{name:"flags",type:"number",description:"Trace flags",required:!0},{name:"path",type:"string",description:"Optional repeater path (hex encoded)",required:!1}]}],ov=[{name:"custom",description:"Send any CLI command typed by hand",category:"Custom",raw:!0,params:[{name:"command",type:"string",description:'Full command, e.g. "get bootloader.ver" or "set bluetooth.enabled false"',required:!0}],responseFormat:"Whatever the firmware replies",remoteOnly:!0},{name:"reboot",description:"Restart the remote device",category:"Device Management",dangerous:!0,remoteOnly:!0},{name:"poweroff",description:"Power off the remote device (v1.14.1+)",category:"Device Management",dangerous:!0,remoteOnly:!0},{name:"shutdown",description:"Power off the remote device (alias for poweroff)",category:"Device Management",dangerous:!0,remoteOnly:!0},{name:"clkreboot",description:"Reset clock to May 2024 and reboot",category:"Device Management",dangerous:!0,remoteOnly:!0},{name:"get name",description:"Get device name",category:"Device Info",responseFormat:"> Device name string",remoteOnly:!0},{name:"get radio",description:"Get radio parameters (frequency, bandwidth, spreading factor, coding rate)",category:"Radio Settings",responseFormat:"> freq,bw,sf,cr (example: 906.875,250.000,11,5)",remoteOnly:!0},{name:"get freq",description:"Get frequency only",category:"Radio Settings",responseFormat:"> frequency in MHz (example: 906.875)",remoteOnly:!0},{name:"get tx",description:"Get transmit power",category:"Radio Settings",responseFormat:"> TX power in dBm (example: 17)",remoteOnly:!0},{name:"get af",description:"Get airtime factor",category:"Radio Settings",responseFormat:"> airtime factor value",remoteOnly:!0},{name:"get dutycycle",description:"Get TX duty cycle as a percentage (v1.15.0+)",category:"Radio Settings",responseFormat:"> NN.N%   (example: > 33.3%)",remoteOnly:!0},{name:"get lat",description:"Get latitude coordinate",category:"Location",responseFormat:"> latitude as float (example: 45.123456)",remoteOnly:!0},{name:"get lon",description:"Get longitude coordinate",category:"Location",responseFormat:"> longitude as float (example: -122.654321)",remoteOnly:!0},{name:"get repeat",description:"Get forwarding/repeating status",category:"Network",responseFormat:"> on or off",remoteOnly:!0},{name:"get rxdelay",description:"Get RX delay base",category:"Advanced",responseFormat:"> RX delay value",remoteOnly:!0},{name:"get txdelay",description:"Get TX delay factor",category:"Advanced",responseFormat:"> TX delay value",remoteOnly:!0},{name:"get direct.txdelay",description:"Get direct TX delay factor",category:"Advanced",responseFormat:"> Direct TX delay value",remoteOnly:!0},{name:"get flood.max",description:"Get maximum flood hops",category:"Network",responseFormat:"> max hops value (example: 8)",remoteOnly:!0},{name:"get flood.max.unscoped",description:"Get max flood hops for un-scoped packets (v1.16.0+)",category:"Network",responseFormat:"> max hops value (example: 64)",remoteOnly:!0},{name:"get flood.max.advert",description:"Get max flood hops for adverts (v1.16.0+)",category:"Network",responseFormat:"> max hops value (example: 8)",remoteOnly:!0},{name:"get advert.interval",description:"Get local advertisement interval (minutes)",category:"Network",responseFormat:"> interval in minutes (example: 120)",remoteOnly:!0},{name:"get flood.advert.interval",description:"Get flood advertisement interval (hours)",category:"Network",responseFormat:"> interval in hours (example: 47; firmware default 47 since v1.16.0)",remoteOnly:!0},{name:"get int.thresh",description:"Get interference threshold",category:"Advanced",responseFormat:"> threshold value",remoteOnly:!0},{name:"get agc.reset.interval",description:"Get AGC (automatic gain control) reset interval",category:"Advanced",responseFormat:"> interval value",remoteOnly:!0},{name:"get multi.acks",description:"Get multi-acks setting",category:"Advanced",responseFormat:"> multi-acks value (0 or 1)",remoteOnly:!0},{name:"get allow.read.only",description:"Get read-only access permission setting",category:"Advanced",responseFormat:"> on or off",remoteOnly:!0},{name:"get guest.password",description:"Get guest password",category:"Advanced",responseFormat:"> password string",remoteOnly:!0},{name:"get public.key",description:"Get full public key (hex)",category:"Device Info",responseFormat:"> hex-encoded public key (example: a6ec829f...d9b70772)",remoteOnly:!0},{name:"get role",description:"Get device role",category:"Device Info",responseFormat:"> repeater or client",remoteOnly:!0},{name:"get owner.info",description:"Get owner information text",category:"Device Info",responseFormat:"> owner info string (with | for newlines)",remoteOnly:!0},{name:"get adc.multiplier",description:"Get ADC voltage multiplier",category:"Advanced",responseFormat:"> multiplier value",remoteOnly:!0},{name:"get path.hash.mode",description:"Get path hash mode (v1.14.0+)",category:"Network",responseFormat:"> mode: 0, 1, or 2",remoteOnly:!0},{name:"get loop.detect",description:"Get loop detection level (v1.14.0+)",category:"Network",responseFormat:"> off, minimal, moderate, or strict",remoteOnly:!0},{name:"get bootloader.ver",description:"Get bootloader version (NRF52 only, v1.14.0+)",category:"Device Info",responseFormat:"> bootloader version string",remoteOnly:!0},{name:"get radio.rxgain",description:"Get RX boosted gain mode (SX1262/SX1268; also LR1110 v1.16.0+)",category:"Radio Settings",responseFormat:"> on or off",remoteOnly:!0},{name:"get bridge.type",description:"Get bridge hardware type",category:"Advanced",responseFormat:"> none, rs232, or espnow",remoteOnly:!0},{name:"set name",description:"Set device name",category:"Device Info",params:[{name:"name",type:"string",description:"New name (no special characters: []\\:,?*)",required:!0}],responseFormat:"OK - name changed",remoteOnly:!0},{name:"set af",description:"Set airtime factor",category:"Radio Settings",params:[{name:"val",type:"number",description:"Airtime factor (0-9)",required:!0,min:0,max:9}],responseFormat:"OK - airtime factor set",remoteOnly:!0},{name:"set dutycycle",description:"Set TX duty cycle as a percentage (v1.15.0+, alias for set af)",category:"Radio Settings",params:[{name:"pct",type:"number",description:"Duty cycle percentage (1-100). Firmware converts to airtime_factor = (100/pct) - 1.",required:!0,min:1,max:100}],responseFormat:"OK - NN.N%",remoteOnly:!0},{name:"set repeat",description:"Enable or disable packet forwarding/repeating",category:"Network",params:[{name:"state",type:"select",description:"Enable (on) or disable (off)",required:!0,options:["on","off"]}],responseFormat:"OK - forwarding enabled/disabled",remoteOnly:!0},{name:"set radio",description:"Set radio parameters (reboot required to take effect)",category:"Radio Settings",params:[{name:"params",type:"string",description:"Comma-separated: freq,bw,sf,cr (example: 906.875,250.000,11,5)",required:!0}],responseFormat:"OK - radio parameters set (reboot required)",remoteOnly:!0},{name:"set lat",description:"Set latitude coordinate",category:"Location",params:[{name:"val",type:"number",description:"Latitude (-90 to 90)",required:!0,min:-90,max:90}],responseFormat:"OK - latitude set",remoteOnly:!0},{name:"set lon",description:"Set longitude coordinate",category:"Location",params:[{name:"val",type:"number",description:"Longitude (-180 to 180)",required:!0,min:-180,max:180}],responseFormat:"OK - longitude set",remoteOnly:!0},{name:"set tx",description:"Set transmit power",category:"Radio Settings",params:[{name:"val",type:"number",description:"TX power in dBm",required:!0,min:-9,max:22}],responseFormat:"OK - TX power set",remoteOnly:!0},{name:"set rxdelay",description:"Set RX delay base",category:"Advanced",params:[{name:"val",type:"number",description:"RX delay base in seconds (0-20, v1.16.0+ upper bound)",required:!0,min:0,max:20}],responseFormat:"OK - RX delay set",remoteOnly:!0},{name:"set txdelay",description:"Set TX delay factor",category:"Advanced",params:[{name:"val",type:"number",description:"TX delay factor (0-2, v1.16.0+ upper bound)",required:!0,min:0,max:2}],responseFormat:"OK - TX delay set",remoteOnly:!0},{name:"set direct.txdelay",description:"Set direct TX delay factor",category:"Advanced",params:[{name:"val",type:"number",description:"Direct TX delay factor (0-2, v1.16.0+ upper bound)",required:!0,min:0,max:2}],responseFormat:"OK - direct TX delay set",remoteOnly:!0},{name:"set flood.max",description:"Set maximum flood hops",category:"Network",params:[{name:"val",type:"number",description:"Max hops (0-64)",required:!0,min:0,max:64}],responseFormat:"OK - flood max set",remoteOnly:!0},{name:"set flood.max.unscoped",description:"Set max flood hops for un-scoped packets (v1.16.0+)",category:"Network",params:[{name:"val",type:"number",description:"Max hops (0-64)",required:!0,min:0,max:64}],responseFormat:"OK",remoteOnly:!0},{name:"set flood.max.advert",description:"Set max flood hops for adverts (v1.16.0+)",category:"Network",params:[{name:"val",type:"number",description:"Max hops (0-64)",required:!0,min:0,max:64}],responseFormat:"OK",remoteOnly:!0},{name:"set advert.interval",description:"Set local advertisement interval (minutes)",category:"Network",params:[{name:"val",type:"number",description:"Interval in minutes (60-240, or 0 to disable)",required:!0,min:0,max:240}],responseFormat:"OK - advert interval set",remoteOnly:!0},{name:"set flood.advert.interval",description:"Set flood advertisement interval (hours)",category:"Network",params:[{name:"val",type:"number",description:"Interval in hours (3-168, or 0 to disable)",required:!0,min:0,max:168}],responseFormat:"OK - flood advert interval set",remoteOnly:!0},{name:"set int.thresh",description:"Set interference threshold",category:"Advanced",params:[{name:"val",type:"number",description:"Threshold value",required:!0}],responseFormat:"OK - interference threshold set",remoteOnly:!0},{name:"set agc.reset.interval",description:"Set AGC (automatic gain control) reset interval",category:"Advanced",params:[{name:"val",type:"number",description:"Interval value",required:!0}],responseFormat:"OK - AGC reset interval set",remoteOnly:!0},{name:"set multi.acks",description:"Set multi-acks mode",category:"Advanced",params:[{name:"val",label:"Multi-Acks",type:"select",description:"Enable multi-acks",required:!0,selectOptions:[{label:"On (1)",value:1},{label:"Off (0)",value:0}]}],responseFormat:"OK - multi-acks set",remoteOnly:!0},{name:"set allow.read.only",description:"Set read-only access permission",category:"Advanced",params:[{name:"state",type:"select",description:"Enable (on) or disable (off)",required:!0,options:["on","off"]}],responseFormat:"OK - read-only access updated",remoteOnly:!0},{name:"set guest.password",description:"Set guest password",category:"Advanced",params:[{name:"pwd",type:"string",description:"New guest password",required:!0}],responseFormat:"OK - guest password set",remoteOnly:!0},{name:"set prv.key",description:"Import private key (reboot required, serial-only)",category:"Advanced",params:[{name:"hex",type:"string",description:"64-character hex private key",required:!0}],responseFormat:"OK - private key imported (reboot required)",remoteOnly:!0},{name:"set owner.info",description:"Set owner information text",category:"Device Info",params:[{name:"text",type:"string",description:"Owner info (use | for newlines)",required:!0}],responseFormat:"OK - owner info set",remoteOnly:!0},{name:"set adc.multiplier",description:"Set ADC voltage multiplier",category:"Advanced",params:[{name:"val",type:"number",description:"Multiplier value (0-10, 0 = board default)",required:!0,min:0,max:10}],responseFormat:"OK - ADC multiplier set",remoteOnly:!0},{name:"set path.hash.mode",description:"Set path hash mode for routing (v1.14.0+)",category:"Network",params:[{name:"mode",label:"Path Hash Mode",type:"select",description:"Routing path-hash width",required:!0,selectOptions:[{label:"1-Byte (0)",value:0},{label:"2-Byte (1)",value:1},{label:"3-Byte (2)",value:2}]}],responseFormat:"OK - path hash mode set",remoteOnly:!0},{name:"set loop.detect",description:"Set loop detection level (v1.14.0+)",category:"Network",params:[{name:"mode",type:"select",description:"Mode: off, minimal, moderate, or strict",required:!0,options:["off","minimal","moderate","strict"]}],responseFormat:"OK - loop detection set",remoteOnly:!0},{name:"set radio.rxgain",description:"Set RX boosted gain mode (SX1262/SX1268; also LR1110 v1.16.0+)",category:"Radio Settings",params:[{name:"state",type:"select",description:"Enable (on) or disable (off)",required:!0,options:["on","off"]}],responseFormat:"OK - RX gain mode set",remoteOnly:!0},{name:"set bridge.enabled",description:"Enable or disable the bridge interface",category:"Advanced",params:[{name:"state",type:"select",description:"Enable (on) or disable (off)",required:!0,options:["on","off"]}],responseFormat:"OK - bridge enabled/disabled",remoteOnly:!0},{name:"set bridge.delay",description:"Set bridge packet delay",category:"Advanced",params:[{name:"ms",type:"number",description:"Delay in milliseconds (0-10000)",required:!0,min:0,max:1e4}],responseFormat:"OK - bridge delay set",remoteOnly:!0},{name:"set bridge.source",description:"Set bridge packet source (RX or TX logs)",category:"Advanced",params:[{name:"source",type:"select",description:"Source: rx (logRx) or tx (logTx)",required:!0,options:["rx","tx"]}],responseFormat:"OK - bridge source set",remoteOnly:!0},{name:"set bridge.baud",description:"Set RS232 bridge baud rate",category:"Advanced",params:[{name:"rate",type:"number",description:"Baud rate (9600-115200, board-dependent max)",required:!0,min:9600}],responseFormat:"OK - bridge baud rate set",remoteOnly:!0},{name:"set bridge.channel",description:"Set ESP-NOW bridge channel",category:"Advanced",params:[{name:"ch",type:"number",description:"Channel (1-14)",required:!0,min:1,max:14}],responseFormat:"OK - bridge channel set",remoteOnly:!0},{name:"set bridge.secret",description:"Set ESP-NOW bridge shared secret",category:"Advanced",params:[{name:"key",type:"string",description:"Shared secret string",required:!0}],responseFormat:"OK - bridge secret set",remoteOnly:!0},{name:"ver",description:"Get firmware version and build date",category:"Device Info",responseFormat:"<version> (Build: <date>)",remoteOnly:!0},{name:"board",description:"Get board/manufacturer name",category:"Device Info",responseFormat:"Board name string",remoteOnly:!0},{name:"neighbors",description:"List known neighbor nodes",category:"Network",responseFormat:"Formatted neighbor list",remoteOnly:!0},{name:"neighbor.remove",description:"Remove a neighbor by public key",category:"Network",params:[{name:"pubkey",type:"string",description:"Public key hex string of neighbor to remove",required:!0}],responseFormat:"OK - neighbor removed",remoteOnly:!0},{name:"clock",description:"Get current device time",category:"Device Info",responseFormat:"HH:MM - D/M/Y UTC",remoteOnly:!0},{name:"clock sync",description:"Synchronize clock to sender's timestamp",category:"Device Info",responseFormat:"OK - clock set: HH:MM - D/M/Y UTC",remoteOnly:!0},{name:"time",description:"Set time to epoch seconds",category:"Device Info",params:[{name:"epoch",type:"number",description:"Unix epoch timestamp",required:!0}],responseFormat:"OK - clock set: HH:MM - D/M/Y UTC",remoteOnly:!0},{name:"password",description:"Change admin password (requires prior login)",category:"Advanced",params:[{name:"pwd",type:"string",description:"New admin password",required:!0}],responseFormat:"password now: <pwd>",remoteOnly:!0},{name:"advert",description:"Send a flood advertisement (network-wide broadcast)",category:"Network",responseFormat:"OK - Advert sent",remoteOnly:!0},{name:"advert.zerohop",description:"Send a local-only (zero-hop) advertisement (v1.14.0+)",category:"Network",responseFormat:"OK - zerohop advert sent",remoteOnly:!0},{name:"clear stats",description:"Reset all statistics counters",category:"Advanced",responseFormat:"OK - stats reset",remoteOnly:!0},{name:"log start",description:"Start packet logging",category:"Advanced",responseFormat:"logging on",remoteOnly:!0},{name:"log stop",description:"Stop packet logging",category:"Advanced",responseFormat:"logging off",remoteOnly:!0},{name:"log erase",description:"Erase log file",category:"Advanced",responseFormat:"log erased",remoteOnly:!0},{name:"powersaving",description:"Get power saving status (NRF52 only)",category:"Device Info",responseFormat:"on or off",remoteOnly:!0},{name:"powersaving on",description:"Enable power saving mode (NRF52 only)",category:"Device Info",responseFormat:"ok",remoteOnly:!0},{name:"powersaving off",description:"Disable power saving mode (NRF52 only)",category:"Device Info",responseFormat:"ok",remoteOnly:!0},{name:"start ota",description:"Enter Bluetooth OTA update mode (repeater-only)",category:"Device Management",dangerous:!0,remoteOnly:!0},{name:"tempradio",description:"Temporarily override radio parameters for a duration",category:"Radio Settings",params:[{name:"freq",type:"number",description:"Temporary frequency in MHz",required:!0},{name:"bw",type:"number",description:"Temporary bandwidth in kHz",required:!0},{name:"sf",type:"number",description:"Temporary spreading factor (5-12)",required:!0},{name:"cr",type:"number",description:"Temporary coding rate (5-8)",required:!0},{name:"mins",type:"number",description:"Duration in minutes",required:!0}],responseFormat:"OK - temp params for N mins",remoteOnly:!0},{name:"region",description:"Export the device region map (v1.15.0+)",category:"Regions",responseFormat:"Comma-separated region list (up to 160 chars)",remoteOnly:!0},{name:"region def",description:"Bulk-define the region map in one command (v1.16.0+)",category:"Regions",params:[{name:"spec",type:"string",description:"Space-separated region tokens; each is name, name|jump, or name,jump (| or , redirects nesting to the jump region). Example: socal cencal|socal norcal",required:!0}],responseFormat:'Exported region map, or "Err - <reason>"',remoteOnly:!0},{name:"region load",description:"Reload regions from persistent storage (v1.15.0+)",category:"Regions",remoteOnly:!0},{name:"region save",description:"Persist current region map to storage (v1.15.0+)",category:"Regions",responseFormat:'OK or "Err - save failed"',remoteOnly:!0},{name:"region get",description:"Show one region (name, parent, allow/deny-flood flag) (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Region name (prefix match)",required:!0}],responseFormat:" <name> [(parent)] [F]   (F = flood allowed)",remoteOnly:!0},{name:"region put",description:"Create a region (flood allowed by default) (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Region name",required:!0},{name:"parent",type:"string",description:"Parent region name (optional, defaults to wildcard)",required:!1}],responseFormat:"OK - (flood allowed)",remoteOnly:!0},{name:"region remove",description:"Remove a region (must be empty) (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Region name (exact match)",required:!0}],responseFormat:'OK / "Err - not empty" / "Err - not found"',remoteOnly:!0},{name:"region list",description:"List regions filtered by flood permission (v1.15.0+)",category:"Regions",params:[{name:"filter",type:"select",description:"allowed = flood-permitted regions; denied = flood-blocked regions",required:!0,options:["allowed","denied"]}],remoteOnly:!0},{name:"region home",description:"Get (no arg) or set (with arg) the home region (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Leave empty to read current home; provide a region name (prefix match) to set",required:!1}],responseFormat:" home is [now] <name>",remoteOnly:!0},{name:"region default",description:"Get (no arg) or set (with arg) the default flood scope region (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Leave empty to read current default; provide a region name to set, or <null> to clear",required:!1}],responseFormat:" default scope is [now] <name|<null>>",remoteOnly:!0},{name:"region allowf",description:"Allow flood for a region (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Region name (prefix match)",required:!0}],responseFormat:"OK",remoteOnly:!0},{name:"region denyf",description:"Deny flood for a region (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Region name (prefix match)",required:!0}],responseFormat:"OK",remoteOnly:!0}];var nv;let sv=nv=class extends Mc{constructor(){super(),this.open=!1,this.isLocal=!1,this.narrow=!1,this.nodeName="",this._selectedCommand=null,this._paramValues={},this._response=null,this._executing=!1,this._error=null,this._deviceResponses=[],this._unsubMsg=null,this._feedActive=!1,this._feedSince=0,bh(this,{isOpen:()=>this.open,onEscape:()=>this._onClose()})}_getCommands(){return this.isLocal?iv:ov}_getGroupedCommands(){const e=this._getCommands(),t=new Map;for(const i of e)t.has(i.category)||t.set(i.category,[]),t.get(i.category).push(i);return t}render(){if(!this.open)return;const e=this._getGroupedCommands();return lc(bn||(bn=vd`
      <div
        class="dialog-overlay"
        @click=${0}>
        <div
          class="dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Issue command">
          <div class="dialog-header">
            <div style="flex: 1;">
              <div class="dialog-header-title">Issue Command</div>
              ${0}
            </div>
          </div>
          <div class="dialog-body">
            <!-- Command Selection -->
            <div class="form-group">
              <label class="form-label">Command</label>
              <select
                class="command-select"
                @change=${0}>
                <option value="">-- Select a command --</option>
                ${0}
              </select>
            </div>

            <!-- Command Details -->
            ${0}

            <!-- Live Device Response Feed (remote dialogs only) -->
            ${0}
          </div>
          <div class="dialog-footer">
            <button
              class="dialog-button"
              @click=${0}>
              Close
            </button>
          </div>
        </div>
      </div>
    `),this._onOverlayClick,this.targetPrefix?lc(xn||(xn=vd`<div style="font-size: 12px; color: var(--secondary-text-color); margin-top: 4px;">
                    Target: ${0}
                  </div>`),this.targetPrefix):"",this._onCommandSelected,Array.from(e.entries()).map(([e,t])=>lc(wn||(wn=vd`<optgroup label=${0}>
                      ${0}
                    </optgroup>`),e,t.map(e=>lc(kn||(kn=vd`<option value=${0}>
                            ${0} - ${0}
                          </option>`),e.name,e.name,e.description)))),this._selectedCommand?lc($n||($n=vd`
                  <div class="command-description">
                    <strong>${0}</strong><br />
                    ${0}
                  </div>

                  ${0}

                  <!-- Parameters -->
                  ${0}

                  <!-- Expected Response -->
                  ${0}

                  <!-- Execute Button -->
                  <button
                    class="apply-button"
                    style="width: 100%; margin-top: 12px;"
                    ?disabled=${0}
                    @click=${0}>
                    ${0}
                  </button>

                  <!-- Response Display -->
                  ${0}
                `),this._selectedCommand.name,this._selectedCommand.description,this._selectedCommand.dangerous?lc(Sn||(Sn=vd`<div class="danger-warning">
                        <span class="danger-warning-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg></span>
                        <span>${0}</span>
                      </div>`),this._selectedCommand.dangerMessage||"This is a dangerous operation"):"",this._selectedCommand.params&&this._selectedCommand.params.length>0?lc(Cn||(Cn=vd`
                        <div class="command-params">
                          <label class="form-label">Parameters</label>
                          ${0}
                        </div>
                      `),this._selectedCommand.params.map(e=>this._renderParamInput(e))):"",this._selectedCommand.responseFormat?lc(Mn||(Mn=vd`<div style="margin-top: 12px; font-size: 12px; color: var(--secondary-text-color); font-style: italic;">
                        Expected: ${0}
                      </div>`),this._selectedCommand.responseFormat):"",this._executing,this._executeCommand,this._executing?"Executing...":"Execute",this._response||this._error?lc(zn||(zn=vd`
                        <div class="form-group" style="margin-top: 16px;">
                          <label class="form-label">Response</label>
                          <div
                            class="command-response"
                            style=${0}>
                            ${0}
                          </div>
                        </div>
                      `),this._error?"color: var(--error-color, #db4437);":"",this._error?this._error:this._renderFormattedResponse(this._response)):""):"",!this.isLocal&&this._deviceResponses.length>0?lc(Tn||(Tn=vd`
                  <div class="form-group" style="margin-top: 16px;">
                    <label class="form-label">Responses from device</label>
                    <div class="device-response-feed">
                      ${0}
                    </div>
                  </div>
                `),this._deviceResponses.map(e=>lc(Pn||(Pn=vd`<div class="device-response-row">
                          <span class="drr-time">${0}</span><span class="drr-text">${0}</span>${0}
                        </div>`),new Date(e.ts).toLocaleTimeString(),e.text,void 0!==e.snr?lc(An||(An=vd`<span class="drr-snr"> · SNR ${0}</span>`),e.snr):""))):"",this._onClose)}_renderParamInput(e){var t,i,o;const n=null!==(t=null!==(i=this._paramValues[e.name])&&void 0!==i?i:e.default)&&void 0!==t?t:"",s=null!==(o=e.label)&&void 0!==o?o:e.name;switch(e.type){case"boolean":return lc(Ln||(Ln=vd`
          <div class="form-group">
            <label class="form-toggle">
              <input
                type="checkbox"
                ?checked=${0}
                @change=${0}
              />
              <span class="form-toggle-label">${0}</span>
            </label>
            ${0}
          </div>
        `),!!n,t=>{this._paramValues[e.name]=t.target.checked},s,e.description?lc(En||(En=vd`<div class="form-description">${0}</div>`),e.description):"");case"select":{const t=e.selectOptions?e.selectOptions:(e.options||[]).map(e=>({label:e,value:e}));return lc(In||(In=vd`
          <div class="form-group">
            <label class="form-label">${0}</label>
            <select
              class="form-select"
              @change=${0}>
              <option value="" ?selected=${0}>-- Select --</option>
              ${0}
            </select>
            ${0}
          </div>
        `),s,i=>{const o=i.target.value,n=t.find(e=>String(e.value)===o);this._paramValues[e.name]=n?n.value:o},""===n||void 0===n,t.map(e=>lc(On||(On=vd`<option value=${0} ?selected=${0}>${0}</option>`),String(e.value),String(n)===String(e.value),e.label)),e.description?lc(Rn||(Rn=vd`<div class="form-description">${0}</div>`),e.description):"")}case"bitmask":var r,a;return lc(Dn||(Dn=vd`
          <fieldset class="form-group">
            <legend class="form-label">${0}</legend>
            ${0}
            <div class="form-description">Value: ${0}</div>
            ${0}
          </fieldset>
        `),s,(e.bits||[]).map(t=>{var i,o;const n=Number(null!==(i=null!==(o=this._paramValues[e.name])&&void 0!==o?o:e.default)&&void 0!==i?i:0);return lc(Bn||(Bn=vd`
                <label class="form-toggle">
                  <input
                    type="checkbox"
                    ?checked=${0}
                    @change=${0}
                  />
                  <span class="form-toggle-label">${0}</span>
                </label>
              `),(n&t.value)===t.value,i=>{var o,n;const s=i.target.checked,r=Number(null!==(o=null!==(n=this._paramValues[e.name])&&void 0!==n?n:e.default)&&void 0!==o?o:0);this._paramValues[e.name]=s?r|t.value:r&~t.value,this.requestUpdate()},t.label)}),Number(null!==(r=null!==(a=this._paramValues[e.name])&&void 0!==a?a:e.default)&&void 0!==r?r:0),e.description?lc(Nn||(Nn=vd`<div class="form-description">${0}</div>`),e.description):"");case"number":return lc(Fn||(Fn=vd`
          <div class="form-group">
            <label class="form-label">${0}</label>
            <input
              type="number"
              class="form-input"
              ?required=${0}
              ?min=${0}
              ?max=${0}
              .value=${0}
              @input=${0}
            />
            ${0}
          </div>
        `),s,e.required,e.min,e.max,String(n),t=>{const i=t.target;this._paramValues[e.name]=i.value?Number(i.value):""},e.description?lc(qn||(qn=vd`<div class="form-description">${0}</div>`),e.description):"");default:return lc(Hn||(Hn=vd`
          <div class="form-group">
            <label class="form-label">${0}</label>
            <input
              type="text"
              class="form-input"
              ?required=${0}
              .value=${0}
              @input=${0}
            />
            ${0}
          </div>
        `),s,e.required,String(n),t=>{this._paramValues[e.name]=t.target.value},e.description?lc(jn||(jn=vd`<div class="form-description">${0}</div>`),e.description):"")}}_formatValue(e){if(!0===e)return"Yes";if(!1===e)return"No";if(null==e)return"—";if("object"==typeof e)try{return JSON.stringify(e)}catch(t){return String(e)}return"string"==typeof e&&e.length,String(e)}_renderFormattedResponse(e){try{const t=JSON.parse(e);if(t&&"object"==typeof t&&!Array.isArray(t)){const e=Object.entries(t);if(e.length>0)return lc(Zn||(Zn=vd`
            <div style="display: grid; grid-template-columns: auto 1fr; gap: 4px 12px; font-size: 13px;">
              ${0}
            </div>
          `),e.map(([e,t])=>{const i=nv._FRIENDLY_LABELS[e]||e.replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase()),o=nv._VALUE_FORMATTERS[e],n=o?o(t):void 0;if(n&&"object"==typeof n)return lc(Vn||(Vn=vd`
                    <div style="grid-column: 1 / -1; color: var(--secondary-text-color);">${0}</div>
                    ${0}
                  `),i,Object.entries(n).map(([e,t])=>lc(Kn||(Kn=vd`
                      <div style="padding-left: 12px; white-space: nowrap;">${0}</div>
                      <div style="font-family: var(--code-font-family, monospace);">${0}</div>`),e,t?"✓":"✗")));const s=void 0!==n?String(n):this._formatValue(t),r="string"==typeof t&&t.length>24;return lc(Un||(Un=vd`
                  <div style="color: var(--secondary-text-color); white-space: nowrap;">${0}</div>
                  <div style="font-family: var(--code-font-family, monospace); word-break: ${0};">${0}</div>
                `),i,r?"break-all":"normal",s)}))}if(Array.isArray(t))return lc(Wn||(Wn=vd`<pre style="margin: 0; white-space: pre-wrap; font-size: 13px;">${0}</pre>`),JSON.stringify(t,null,2))}catch(e){}return lc(Gn||(Gn=vd`<span style="white-space: pre-wrap;">${0}</span>`),e)}_onCommandSelected(e){const t=e.target.value,i=this._getCommands();this._selectedCommand=i.find(e=>e.name===t)||null;const o={};for(const e of null!==(n=null===(s=this._selectedCommand)||void 0===s?void 0:s.params)&&void 0!==n?n:[]){var n,s;void 0!==e.default&&(o[e.name]=e.default)}this._paramValues=o,this._response=null,this._error=null}async _executeCommand(){if(this._selectedCommand&&this.hass){this._executing=!0,this._response=null,this._error=null;try{let t;if(this.isLocal)t=await Kc(this.hass,this._selectedCommand.name,Object.keys(this._paramValues).length>0?this._paramValues:void 0,this.entryId);else{if(!this.targetPrefix)return void(this._error="No target device specified");const i=this._paramValues;let o=this._selectedCommand.name;var e;if(this._selectedCommand.raw){if(o=String(null!==(e=i.command)&&void 0!==e?e:"").trim(),!o)return void(this._error="Enter a command")}else if(Object.keys(i).length>0){const e=Object.entries(i).map(([,e])=>String(e)).join(" ");o=`${o} ${e}`}t=await Uc(this.hass,this.targetPrefix,o,this.entryId)}t.success?this._response=t.response:this._error=t.response||"Command execution failed"}catch(e){this._error=`Error: ${String(e)}`}finally{this._executing=!1}}}updated(e){(e.has("open")||e.has("targetPrefix")||e.has("isLocal"))&&(this._stopResponseFeed(),this.open&&!this.isLocal&&this._startResponseFeed())}disconnectedCallback(){super.disconnectedCallback(),this._stopResponseFeed()}async _startResponseFeed(){var e;if(!this._feedActive&&!this.isLocal&&this.open&&null!==(e=this.hass)&&void 0!==e&&e.connection){this._feedActive=!0,this._feedSince=Date.now(),this._deviceResponses.length&&(this._deviceResponses=[]);try{const e=await this.hass.connection.subscribeEvents(e=>{var t,i,o;const n=e.data;if(!this._prefixMatches(n.pubkey_prefix))return;if(n.sender_name===this.nodeName)return;const s=Date.parse(null!==(t=n.timestamp)&&void 0!==t?t:"")||Date.now();s<this._feedSince-1e3||(this._deviceResponses=[...this._deviceResponses,{text:null!==(i=n.message)&&void 0!==i?i:"",sender:null!==(o=n.sender_name)&&void 0!==o?o:"",ts:s,snr:"number"==typeof n.snr?n.snr:void 0}])},"meshcore_message");if(!this.open||this.isLocal)return e(),void(this._feedActive=!1);this._unsubMsg=e}catch(e){this._feedActive=!1}}}_stopResponseFeed(){this._unsubMsg&&(this._unsubMsg(),this._unsubMsg=null),this._feedActive=!1}_prefixMatches(e){if(!e||!this.targetPrefix)return!1;const t=Math.min(e.length,this.targetPrefix.length,12);return e.slice(0,t).toLowerCase()===this.targetPrefix.slice(0,t).toLowerCase()}_onOverlayClick(e){e.target===e.currentTarget&&this._onClose()}_onClose(){this._selectedCommand=null,this._paramValues={},this._response=null,this._error=null,this._stopResponseFeed(),this._deviceResponses=[],this.dispatchEvent(new CustomEvent("close",{bubbles:!0}))}};function rv(e){var t,i,o;const n=e.entity_id,s=null!==(t=null!==(i=null!==(o=e.original_device_class)&&void 0!==o?o:e.device_class)&&void 0!==i?i:e._stateDeviceClass)&&void 0!==t?t:null;if(n.startsWith("binary_sensor.meshcore_")&&/_err_(pool_full|cad_timeout|rx_timeout)_/.test(n)){const e=n.includes("err_pool_full")?"Radio Fault: Packet Pool":n.includes("err_cad_timeout")?"Radio Fault: CAD Timeout":"Radio Fault: RX-Start Timeout";return{entity_id:n,label:e,icon:"alert",colorScheme:"neutral",sortOrder:13,booleanProblem:!0}}if(n.startsWith("binary_sensor.meshcore_")&&"connectivity"===s)return null;if(n.startsWith("binary_sensor.meshcore_"))return null;if(n.includes("_rate_"))return null;if(n.includes("full_evts"))return null;if(n.includes("node_status")||n.includes("companion_prefix")||n.includes("request_rate")||n.includes("delivery")||n.includes("path_")||n.includes("neighbor_"))return null;if("battery"===s||n.includes("battery_percentage"))return{entity_id:n,label:"Battery",icon:"battery",colorScheme:"battery",sortOrder:1,metricKey:"battery_pct"};if("voltage"===s||n.includes("battery_voltage")||n.includes("_voltage")||n.includes("cv_voltage"))return{entity_id:n,label:"Voltage",icon:"power",colorScheme:"neutral",sortOrder:2};if("duration"===s||n.includes("uptime"))return{entity_id:n,label:"Uptime",icon:"clock",colorScheme:"neutral",sortOrder:3,metricKey:"uptime_hours"};if("signal_strength"===s||n.includes("tx_power"))return{entity_id:n,label:"TX Power",icon:"power",colorScheme:"neutral",sortOrder:6};if("temperature"===s||n.includes("_temperature"))return{entity_id:n,label:"Temperature",icon:"thermometer",colorScheme:"neutral",sortOrder:7,metricKey:"temperature",staticTooltip:"Ambient temperature reported by the node. Informational; no threshold band -- expected ranges depend heavily on where the device is mounted."};if(n.includes("rx_airtime_utilization"))return{entity_id:n,label:"RX Airtime Util",icon:"chart",colorScheme:"neutral",sortOrder:10,metricKey:"rx_airtime_util"};if(n.includes("airtime_utilization"))return{entity_id:n,label:"TX Airtime Util",icon:"chart",colorScheme:"neutral",sortOrder:10,metricKey:"tx_airtime_util"};if(n.includes("rx_airtime"))return{entity_id:n,label:"RX Airtime",icon:"chart",colorScheme:"neutral",sortOrder:9};if(n.includes("airtime"))return{entity_id:n,label:"Airtime",icon:"chart",colorScheme:"neutral",sortOrder:9};if(n.includes("snr")&&!n.includes("neighbor"))return{entity_id:n,label:"SNR",icon:"signal",colorScheme:"signal",sortOrder:4,metricKey:"snr"};if(n.includes("rssi"))return{entity_id:n,label:"RSSI",icon:"signal",colorScheme:"signal",sortOrder:5,metricKey:"rssi"};if(n.includes("noise_floor"))return{entity_id:n,label:"Noise Floor",icon:"signal",colorScheme:"signal",sortOrder:11,metricKey:"noise_floor"};if(n.includes("tx_queue_len"))return{entity_id:n,label:"TX Queue Length",icon:"counter",colorScheme:"neutral",sortOrder:12,metricKey:"tx_queue_len"};if(n.includes("contact_count"))return{entity_id:n,label:"Contacts",icon:"counter",colorScheme:"neutral",sortOrder:8};if(n.includes("channel_util"))return{entity_id:n,label:"Channel Util",icon:"chart",colorScheme:"neutral",sortOrder:10,metricKey:"channel_util"};if(n.startsWith("sensor.meshcore_")){const t=e.original_name||e.name||n.split(".")[1];return{entity_id:n,label:t,icon:"",colorScheme:"neutral",sortOrder:99}}return null}async function av(e){const[t,i]=await Promise.all([e.callWS({type:"config/device_registry/list"}),e.callWS({type:"config/entity_registry/list"})]),o={};for(const e of t)if(e.identifiers)for(const[t,i]of e.identifiers)"meshcore"===t&&(o[i]=e.id);const n={};for(const t of i){var s;if(!t.device_id||t.disabled_by)continue;if(!t.entity_id.startsWith("sensor.meshcore_")&&!t.entity_id.startsWith("binary_sensor.meshcore_"))continue;const i=null===(s=e.states)||void 0===s||null===(s=s[t.entity_id])||void 0===s||null===(s=s.attributes)||void 0===s?void 0:s.device_class,o=rv(i?{...t,_stateDeviceClass:i}:t);o&&(n[t.device_id]||(n[t.device_id]=[]),n[t.device_id].push(o))}for(const e of Object.keys(n))n[e].sort((e,t)=>e.sortOrder-t.sortOrder);return{meshcoreDeviceMap:o,deviceEntities:n}}sv.styles=[Ic,$d(Xn||(Xn=vd`
      :host {
        display: block;
      }

      :host([narrow]) .dialog {
        max-width: 100%;
      }

      .dialog {
        max-width: 500px;
      }

      .danger-warning {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        margin: 8px 0;
        background: rgba(219, 68, 55, 0.1);
        border: 1px solid var(--error-color, #db4437);
        border-radius: 6px;
        font-size: 12px;
        color: var(--error-color, #db4437);
      }

      .danger-warning-icon {
        font-size: 16px;
        flex-shrink: 0;
      }

      .device-response-feed {
        display: flex;
        flex-direction: column;
        gap: 4px;
        max-height: 180px;
        overflow-y: auto;
        font-family: var(--code-font-family, monospace);
        font-size: 12px;
      }

      .device-response-row {
        padding: 4px 8px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        border-radius: 4px;
        word-break: break-word;
      }

      .drr-time,
      .drr-snr {
        color: var(--secondary-text-color);
      }

      .drr-time {
        margin-right: 6px;
      }
    `))],sv._FRIENDLY_LABELS={adv_type:"Device Type",tx_power:"TX Power (dBm)",max_tx_power:"Max TX Power (dBm)",public_key:"Public Key",adv_lat:"Latitude",adv_lon:"Longitude",multi_acks:"Multi-Acks",adv_loc_policy:"Location Ad Policy",telemetry_mode_env:"Telemetry: Environment",telemetry_mode_loc:"Telemetry: Location",telemetry_mode_base:"Telemetry: Base",manual_add_contacts:"Manual Add Contacts",radio_freq:"Frequency (MHz)",radio_bw:"Bandwidth (kHz)",radio_sf:"Spreading Factor",radio_cr:"Coding Rate",name:"Name",path_hash_mode:"Path Hash Mode",firmware_ver:"Firmware Version",board_type:"Board Type",suggested_timeout:"Suggested Timeout (ms)",capabilities:"Capabilities",voltage:"Voltage (mV)",percentage:"Battery (%)",uptime:"Uptime (s)",temperature:"Temperature",max_hops:"Max Hops (0 = unlimited)",config:"Auto-Add Config"},sv._VALUE_FORMATTERS={adv_loc_policy:e=>tv(e,Yg),path_hash_mode:e=>tv(e,Jg),telemetry_mode_env:e=>tv(e,Qg),telemetry_mode_loc:e=>tv(e,Qg),telemetry_mode_base:e=>tv(e,Qg),manual_add_contacts:e=>{if(!0===e)return"Manual Mode";if(!1===e)return"Auto-Add Enabled";const t=Xg(e);return void 0===t?`Unknown (${e})`:t?"Manual Mode":"Auto-Add Enabled"},multi_acks:e=>{const t=Xg(e);return void 0===t?`Unknown (${e})`:t?"Yes":"No"},adv_lat:e=>{const t=Xg(e);return void 0===t?`${e}`:`${t.toFixed(6)}°`},adv_lon:e=>{const t=Xg(e);return void 0===t?`${e}`:`${t.toFixed(6)}°`},config:e=>{const t=Xg(e);return void 0===t?`Unknown (${e})`:function(e,t){const i={};for(const o of t)i[o.label]=(e&o.value)===o.value;return i}(t,ev)}},fd([Lc({type:Boolean})],sv.prototype,"open",void 0),fd([Lc({type:Object})],sv.prototype,"hass",void 0),fd([Lc({type:String})],sv.prototype,"entryId",void 0),fd([Lc({type:String})],sv.prototype,"targetPrefix",void 0),fd([Lc({type:Boolean})],sv.prototype,"isLocal",void 0),fd([Lc({type:Boolean})],sv.prototype,"narrow",void 0),fd([Lc({type:String})],sv.prototype,"nodeName",void 0),fd([Ec()],sv.prototype,"_selectedCommand",void 0),fd([Ec()],sv.prototype,"_paramValues",void 0),fd([Ec()],sv.prototype,"_response",void 0),fd([Ec()],sv.prototype,"_executing",void 0),fd([Ec()],sv.prototype,"_error",void 0),fd([Ec()],sv.prototype,"_deviceResponses",void 0),sv=nv=fd([Tc("meshcore-command-dialog")],sv);let lv=class extends Mc{constructor(){super(),this.narrow=!1,this._managedDevices={repeaters:[],clients:[]},this._contactsByPrefix={},this._loading=!0,this._error=null,this._confirmAction=null,this._confirmDialogOpen=!1,this._commandDialogOpen=!1,this._commandDialogTarget="",this._commandDialogIsLocal=!1,this._statusMessage=null,this._statusMessageTimeout=null,this._remoteBusy=new Set,this._deviceEntities={},this._meshcoreDeviceMap={},this._entityRegistryLoaded=!1,this._hiddenSensors={},this._contextMenu=null,this._overlayPointerStarted=!1,this._settingsDeviceKey=null,this._hiddenSensorsModalKey=null,this._neighborContextMenu=null,this._neighborData={},bh(this,{isOpen:()=>null!==this._contextMenu,onEscape:()=>this._dismissContextMenu(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="tile-context"]')}}),bh(this,{isOpen:()=>null!==this._neighborContextMenu,onEscape:()=>this._dismissNeighborContextMenu(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="neighbor-context"]')}}),bh(this,{isOpen:()=>null!==this._settingsDeviceKey,onEscape:()=>this._closeSettingsModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="device-settings"]')}}),bh(this,{isOpen:()=>null!==this._hiddenSensorsModalKey,onEscape:()=>this._closeHiddenSensorsModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="hidden-sensors"]')}})}connectedCallback(){super.connectedCallback(),this._loadHiddenSensors(),this._loadManagedDevices()}disconnectedCallback(){super.disconnectedCallback(),null!==this._statusMessageTimeout&&(clearTimeout(this._statusMessageTimeout),this._statusMessageTimeout=null)}updated(e){e.has("config")&&this._loadManagedDevices(),e.has("hass")&&this.hass&&!this._entityRegistryLoaded&&this._loadEntityRegistry()}render(){var e,t,i,o,n;return this.hass?lc(Jn||(Jn=vd`
      <div class="devices-layout">
        <div class="content-area">
          ${0}

          ${0}
        </div>
      </div>

      <!-- Confirmation Dialog -->
      <meshcore-confirm-dialog
        .open=${0}
        .title=${0}
        .message=${0}
        @confirm=${0}
        @cancel=${0}>
      </meshcore-confirm-dialog>

      <!-- Command Dialog -->
      <meshcore-command-dialog
        .open=${0}
        .hass=${0}
        .entryId=${0}
        .targetPrefix=${0}
        .nodeName=${0}
        ?isLocal=${0}
        ?narrow=${0}
        @close=${0}>
      </meshcore-command-dialog>

      <!-- Tile Context Menu Modal -->
      ${0}

      <!-- Neighbor Context Menu Modal -->
      ${0}

      <!-- Settings Modal -->
      ${0}

      <!-- Hidden Sensors List Modal -->
      ${0}

      <!-- Status Toast -->
      ${0}
    `),this._error?lc(Qn||(Qn=vd`<div class="error-state"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg> ${0}</div>`),this._error):hc,this._loading?lc(es||(es=vd`<div class="loading-state"><div class="loading-spinner"></div> Loading devices...</div>`)):lc(ts||(ts=vd`
                ${0}
                ${0}
                ${0}
              `),this._renderDeviceSections(this._managedDevices.repeaters,"repeater"),this._renderDeviceSections(this._managedDevices.clients,"client"),0===this._managedDevices.repeaters.length&&0===this._managedDevices.clients.length?lc(is||(is=vd`
                      <div class="empty-state">
                        <div class="empty-text">No managed devices</div>
                        <div class="empty-subtext">Add repeaters or clients in Settings → Integration to manage them here.</div>
                      </div>
                    `)):hc),this._confirmDialogOpen,(null===(e=this._confirmAction)||void 0===e?void 0:e.title)||"",(null===(t=this._confirmAction)||void 0===t?void 0:t.message)||"",this._onConfirmAction,this._onConfirmCancel,this._commandDialogOpen,this.hass,null===(i=this.config)||void 0===i?void 0:i.entry_id,this._commandDialogTarget,null!==(o=null===(n=this.config)||void 0===n?void 0:n.node_name)&&void 0!==o?o:"",this._commandDialogIsLocal,this.narrow,this._onCommandDialogClose,this._contextMenu?lc(os||(os=vd`
        <div class="modal-overlay"
             @pointerdown=${0}
             @click=${0}>
          <div class="modal-card" data-a11y="tile-context"
               role="dialog" aria-modal="true" aria-label="${0} actions"
               @click=${0}
               @pointerdown=${0}>
            <div class="modal-header">
              <span class="modal-title">${0}</span>
              <button class="modal-close" aria-label="Close" @click=${0}
                      @pointerdown=${0}>&times;</button>
            </div>
            <div class="modal-body">
              <button class="modal-action danger" @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg></span>
                Hide Sensor
              </button>
            </div>
          </div>
        </div>
      `),this._onOverlayPointerDown,this._closeContextMenu,this._contextMenu.label,e=>e.stopPropagation(),e=>e.stopPropagation(),this._contextMenu.label,this._dismissContextMenu,e=>e.stopPropagation(),this._hideSensorFromContext):hc,this._neighborContextMenu?lc(ns||(ns=vd`
        <div class="modal-overlay"
             @pointerdown=${0}
             @click=${0}>
          <div class="modal-card" data-a11y="neighbor-context"
               role="dialog" aria-modal="true" aria-label="${0} actions"
               @click=${0}
               @pointerdown=${0}>
            <div class="modal-header">
              <span class="modal-title">${0}</span>
              <button class="modal-close" aria-label="Close" @click=${0}
                      @pointerdown=${0}>&times;</button>
            </div>
            <div class="modal-body">
              <button class="modal-action danger" @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></span>
                Remove Neighbor
              </button>
            </div>
          </div>
        </div>
      `),this._onOverlayPointerDown,this._closeNeighborContextMenu,this._neighborContextMenu.name,e=>e.stopPropagation(),e=>e.stopPropagation(),this._neighborContextMenu.name,this._dismissNeighborContextMenu,e=>e.stopPropagation(),this._removeNeighborFromContext):hc,this._settingsDeviceKey?(()=>{const e=this._getSettingsDeviceContext();return e?lc(ss||(ss=vd`
        <div class="modal-overlay" @click=${0}>
          <div class="modal-card" data-a11y="device-settings"
               role="dialog" aria-modal="true" aria-label="${0} settings"
               @click=${0}>
            <div class="modal-header">
              <span class="modal-title">${0} Settings</span>
              <button class="modal-close" aria-label="Close" @click=${0}>&times;</button>
            </div>
            <div class="modal-body">
              <button class="modal-action" @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg></span>
                View Hidden Sensors (${0})
              </button>

              <!-- Issue Command -->
              <button class="modal-action" ?disabled=${0} @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20 19V7H4v12h16m0-16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h16m-7 14v-2h5v2h-5m-3.42-4L5.57 9H8.4l3.3 3.3c.39.39.39 1.03 0 1.42L8.42 17H5.59l4-4z"/></svg></span>
                Issue Command
              </button>

              <div class="modal-divider"></div>

              <!-- Reboot -->
              <button class="modal-action danger" ?disabled=${0} @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg></span>
                Reboot Device
              </button>

              <!-- Start OTA (repeaters only) -->
              ${0}
            </div>
          </div>
        </div>
      `),this._closeSettingsModal,e.name,e=>e.stopPropagation(),e.name,this._closeSettingsModal,this._openHiddenSensorsList,(this._hiddenSensors[this._settingsDeviceKey]||[]).length,!e.isOnline,()=>{this._closeSettingsModal(),this._openCommandDialog(e.device,!1)},!e.isOnline,()=>{this._closeSettingsModal(),this._confirmActionDialog(`Reboot ${e.name}?`,"The device will restart.",()=>this._executeRemoteAction(e.device,"reboot"))},"repeater"===e.type?lc(rs||(rs=vd`
                <button class="modal-action danger" ?disabled=${0} @click=${0}>
                  <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M5 18h14v2H5v-2zm4.6-2.7L5 10.7l2-1.9 2.6 2.6L17 4l2 2-9.4 9.3z"/></svg></span>
                  Start OTA Update
                </button>
              `),!e.isOnline,()=>{this._closeSettingsModal(),this._confirmActionDialog(`Start OTA on ${e.name}?`,"The device will enter update mode.",()=>this._executeRemoteAction(e.device,"start ota"))}):hc):hc})():hc,this._hiddenSensorsModalKey?this._renderHiddenSensorsModal():hc,this._statusMessage?lc(as||(as=vd`<div class="status-toast ${0}">${0}${0}</div>`),this._statusMessage.type,"success"===this._statusMessage.type?"✓ ":"✗ ",this._statusMessage.text):hc):lc(Yn||(Yn=vd`<div class="content-area"><div class="loading-state"><div class="loading-spinner"></div> Initializing...</div></div>`))}_renderDeviceSections(e,t){return e.map(e=>this._renderDeviceSection(e,t))}_renderDeviceSection(e,t){var i,o,n,s;let r="unknown",a="Unknown";if(e.status_entity_id&&null!==(i=this.hass)&&void 0!==i&&i.states[e.status_entity_id]){const t=this.hass.states[e.status_entity_id].state;"on"===t?(r="online",a="Online"):"off"===t&&(r="offline",a="Offline")}else e.status&&(r="online"===e.status?"online":"offline"===e.status?"offline":"unknown",a="online"===e.status?"Online":"offline"===e.status?"Offline":"Unknown");const l="online"===r,d=this._getManagedDeviceKey(e,t),c=this._getDeviceEntities(e,t),h=(this._hiddenSensors[d]||[]).length,p="repeater"===t&&e.neighbors_enabled,u=this._neighborData[e.pubkey_prefix],m=c.find(e=>"uptime_hours"===e.metricKey),g=l&&m?this._formatUptimeFromEntity(m.entity_id):"",v=this._contactsByPrefix[null===(o=e.pubkey_prefix)||void 0===o?void 0:o.toLowerCase()],f=null==v?void 0:v.adv_lat,_=null==v?void 0:v.adv_lon,y=null==v?void 0:v.last_advert,b="number"==typeof f?f:NaN,x="number"==typeof _?_:NaN,w=Number.isFinite(b)&&Number.isFinite(x)&&(0!==b||0!==x);return p&&!u&&this._loadNeighbors(e),lc(ls||(ls=vd`
      <div class="device-section" @tile-context-menu=${0}>
        <div class="section-header">
          <div class="section-title">
            <div class="section-icon ${0}">
              ${0}
            </div>
            <div>
              <div class="device-name">${0}</div>
              <div class="device-meta">
                <span>${0}</span>
                ${0}
                <span>Key: ${0}</span>
                ${0}
              </div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:4px;">
            <button class="settings-btn" @click=${0} title="Device settings" aria-label="Device settings">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 00-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
            </button>
            <div class="status-badge ${0}"
                 @click=${0}
                 style="${0}">
              <span class="status-dot ${0}"></span>
              ${0}${0}
            </div>
          </div>
        </div>

        ${0}

        ${0}

        <div class="actions-row">
          ${0}
          ${0}
          ${0}
        </div>
      </div>
    `),e=>this._onTileContextMenu(e,d),t,lc("repeater"===t?ds||(ds=vd`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`):cs||(cs=vd`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`)),e.name,"repeater"===t?"Repeater":"Client",e.firmware_version?lc(hs||(hs=vd`<span>Firmware: v${0}</span>`),null!==(n=null===(s=e.firmware_version.match(/(\d+\.\d+\.\d+)/))||void 0===s?void 0:s[1])&&void 0!==n?n:e.firmware_version):hc,e.pubkey_prefix,w?lc(ps||(ps=vd`<span>Loc: ${0}, ${0}</span>`),b.toFixed(4),x.toFixed(4)):hc,()=>this._settingsDeviceKey=d,r,()=>e.status_entity_id&&this._fireMoreInfo(e.status_entity_id),e.status_entity_id?"cursor:pointer":"",r,a,g?lc(us||(us=vd` · ${0}`),g):hc,c.length>0?lc(ms||(ms=vd`
              <meshcore-node-summary
                .hass=${0}
                .device=${0}
                .entities=${0}
                .hiddenCount=${0}
                .fallbackLatitude=${0}
                .fallbackLongitude=${0}
                .fallbackUpdated=${0}>
              </meshcore-node-summary>
            `),this.hass,{...e,type:t},c,h,f,_,y):hc,p?this._renderInlineNeighbors(e,u):hc,this._renderRemoteButton(e,"advert","Flood Advert",l),this._renderRemoteButton(e,"clock sync","Sync Clock",l),this._renderStatusButton(e,l))}_renderInlineNeighbors(e,t){return!t||t.loading?lc(gs||(gs=vd`
        <div class="neighbor-section">
          <div class="subsection-label">Neighbors</div>
          <div class="neighbor-loading"><div class="loading-spinner"></div> Loading neighbors...</div>
        </div>
      `)):0===t.neighbors.length?lc(vs||(vs=vd`
        <div class="neighbor-section">
          <div class="subsection-label">Neighbors</div>
          <div style="font-size: 13px; color: var(--secondary-text-color); padding: 8px 0;">No neighbors found</div>
        </div>
      `)):lc(fs||(fs=vd`
      <div class="neighbor-section">
        <div class="subsection-label">Neighbors (${0})</div>

        ${0}

        <table class="neighbor-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>SNR</th>
              <th>Seen (48h)</th>
              <th>Last Heard</th>
            </tr>
          </thead>
          <tbody>
            ${0}
          </tbody>
        </table>
      </div>
    `),t.neighbors.length,t.chartData.length>0?lc(_s||(_s=vd`
              <div class="chart-container">
                <meshcore-snr-chart
                  .data=${0}
                  .neighbors=${0}
                  width="550"
                  height="200"
                  timeRange="24">
                </meshcore-snr-chart>
              </div>
            `),t.chartData,t.neighbors.map(e=>e.pubkey_prefix)):hc,t.neighbors.map(t=>{var i;return lc(ys||(ys=vd`
              <tr @contextmenu=${0}
                  ${0}>
                <td><code>${0}</code></td>
                <td class=${0}>
                  <span class="clickable-value"
                        @click=${0}>
                    ${0} dB
                  </span>
                </td>
                <td>
                  <span class="clickable-value"
                        @click=${0}>
                    ${0}×
                  </span>
                </td>
                <td>${0}</td>
              </tr>
            `),i=>this._onNeighborRightClick(i,t,e.pubkey_prefix),Pg(()=>this._onNeighborRightClick(new MouseEvent("contextmenu"),t,e.pubkey_prefix)),t.name&&t.name!==t.pubkey_prefix.substring(0,6).toUpperCase()?`${t.name} (${t.pubkey_prefix.substring(0,6).toUpperCase()})`:t.pubkey_prefix.substring(0,6).toUpperCase(),t.snr>5?"snr-good":t.snr>=0?"snr-fair":"snr-poor",i=>{i.stopPropagation(),this._openNeighborMoreInfo(e.pubkey_prefix,t.pubkey_prefix,"snr")},t.snr.toFixed(1),i=>{i.stopPropagation(),this._openNeighborMoreInfo(e.pubkey_prefix,t.pubkey_prefix,"seen")},null!==(i=t.seen_48h)&&void 0!==i?i:0,this._formatRelativeTime(t.last_seen))}))}async _loadEntityRegistry(){if(this.hass&&!this._entityRegistryLoaded){this._entityRegistryLoaded=!0;try{const{meshcoreDeviceMap:e,deviceEntities:t}=await av(this.hass);this._meshcoreDeviceMap=e,this._deviceEntities=t}catch(e){console.error("Failed to load entity registry:",e)}}}_getDeviceEntities(e,t){var i;if(!this.hass||!this.config)return[];const o=this._getManagedDeviceKey(e,t),n=new Set(this._hiddenSensors[o]||[]),s=(null===(i=this.selectedDevice)||void 0===i?void 0:i.entry_id)||"",r=e.pubkey_prefix||"",a=`${s}_${t}_${r}`,l=this._meshcoreDeviceMap[a];if(l&&this._deviceEntities[l])return this._deviceEntities[l].filter(e=>!n.has(e.entity_id));for(const[e,i]of Object.entries(this._meshcoreDeviceMap))if(e.includes(r)&&e.includes(t)&&this._deviceEntities[i])return this._deviceEntities[i].filter(e=>!n.has(e.entity_id));const d=r.substring(0,6).toLowerCase();if(!d)return[];const c=[];for(const e of Object.values(this._deviceEntities))for(const t of e)t.entity_id.toLowerCase().includes(d)&&!n.has(t.entity_id)&&c.push(t);return c.sort((e,t)=>e.sortOrder-t.sortOrder)}async _loadNeighbors(e){if(this.hass){this._neighborData={...this._neighborData,[e.pubkey_prefix]:{neighbors:[],chartData:[],loading:!0,loaded:!1}};try{var t;const i=await async function(e,t,i){try{const o={type:"meshcore_bbs/get_neighbors",target_prefix:t};return i&&(o.entry_id=i),(await e.callWS(o)).neighbors||[]}catch(e){return[]}}(this.hass,e.pubkey_prefix,null===(t=this.config)||void 0===t?void 0:t.entry_id);let o=[];i.length>0&&(o=await this._fetchSNRHistory(i)),this._neighborData={...this._neighborData,[e.pubkey_prefix]:{neighbors:i,chartData:o,loading:!1,loaded:!0}}}catch(t){console.error(`Failed to load neighbors for ${e.name}:`,t),this._neighborData={...this._neighborData,[e.pubkey_prefix]:{neighbors:[],chartData:[],loading:!1,loaded:!0}}}}}async _fetchSNRHistory(e){if(!this.hass)return[];try{const t=e.filter(e=>{var t;return null===(t=e.entity_ids)||void 0===t?void 0:t.snr}).map(e=>e.entity_ids.snr);if(0===t.length)return[];const i=await this.hass.callWS({type:"recorder/statistics_during_period",start_time:new Date(Date.now()-864e5).toISOString(),end_time:(new Date).toISOString(),statistic_ids:t,period:"hour"}),o={};return Object.entries(i).forEach(([t,i])=>{const n=e.find(e=>{var i;return(null===(i=e.entity_ids)||void 0===i?void 0:i.snr)===t});n&&Array.isArray(i)&&i.forEach(e=>{if(e.start&&null!=e.mean){const t=new Date(e.start).getTime();o[t]||(o[t]={}),o[t][n.pubkey_prefix]=e.mean}})}),Object.entries(o).map(([e,t])=>({timestamp:parseInt(e,10),values:t})).sort((e,t)=>e.timestamp-t.timestamp)}catch(e){return[]}}async _loadManagedDevices(){if(this.hass)try{var e;this._loading=!0,this._error=null;const t=await async function(e,t){try{const i={type:"meshcore_bbs/get_managed_devices"};t&&(i.entry_id=t);const o=await e.callWS(i);return{repeaters:o.repeaters||[],clients:o.clients||[]}}catch(e){return{repeaters:[],clients:[]}}}(this.hass,null===(e=this.config)||void 0===e?void 0:e.entry_id);this._managedDevices=t,this._loadContacts()}catch(e){this._error=`Failed to load devices: ${String(e)}`}finally{this._loading=!1}}async _loadContacts(){if(this.hass)try{var e,t;const i=(null===(e=this.selectedDevice)||void 0===e?void 0:e.entry_id)||(null===(t=this.config)||void 0===t?void 0:t.entry_id),o=await Hc(this.hass,i),n={};for(const e of o)e.pubkey_prefix&&(n[e.pubkey_prefix.toLowerCase()]=e);this._contactsByPrefix=n}catch(e){}}async _executeRemoteAction(e,t){if(!this.hass)return;const i=`${e.pubkey_prefix}:${t}`;if(this._remoteBusy.has(i))return;this._remoteBusy=new Set(this._remoteBusy).add(i),this._showStatusMessage(`${e.name}: sending "${t}"…`,"success");const o=e.pubkey_prefix.toLowerCase();let n;const s=new Promise(e=>{const t=window.setTimeout(()=>e(null),2e4);this.hass.connection.subscribeEvents(i=>{var n,s,r;const a=i.data,l=String(null!==(n=a.pubkey_prefix)&&void 0!==n?n:"").toLowerCase();!a.outgoing&&l&&(l.startsWith(o)||o.startsWith(l))&&(window.clearTimeout(t),e(String(null!==(s=null!==(r=a.message)&&void 0!==r?r:a.text)&&void 0!==s?s:"")))},"meshcore_message").then(e=>{n=e}).catch(()=>{})});try{var r;const i=await Uc(this.hass,e.pubkey_prefix,t,null===(r=this.config)||void 0===r?void 0:r.entry_id);if(!i.success)return void this._showStatusMessage(`${e.name}: ${t} failed — ${i.response||"error"}`,"error");const o=i.response||"OK";this._showStatusMessage(`${e.name}: ${t} → ${o} — waiting for the reply…`,"success");const n=await s;n?this._showStatusMessage(`${e.name}: ${n}`,"success"):this._showStatusMessage(`${e.name}: ${t} → ${o} — no reply within 20 s (it may still arrive in the device's chat)`,"error")}catch(i){this._showStatusMessage(`${e.name}: ${t} failed — ${String(i)}`,"error")}finally{var a;null===(a=n)||void 0===a||a();const e=new Set(this._remoteBusy);e.delete(i),this._remoteBusy=e}}_renderRemoteButton(e,t,i,o){const n=this._remoteBusy.has(`${e.pubkey_prefix}:${t}`);return lc(bs||(bs=vd`<button class="action-btn" ?disabled=${0}
      @click=${0}>${0}</button>`),!o||n,()=>this._executeRemoteAction(e,t),n?"Sending…":i)}_renderStatusButton(e,t){const i=this._remoteBusy.has(`${e.pubkey_prefix}:status`);return lc(xs||(xs=vd`<button class="action-btn" ?disabled=${0}
      title="Ask the node for its status now: noise floor, last RSSI/SNR, packet counters"
      @click=${0}>${0}</button>`),!t||i,()=>this._refreshStatus(e),i?"Asking…":"Refresh Status")}async _refreshStatus(e){if(!this.hass)return;const t=`${e.pubkey_prefix}:status`;if(!this._remoteBusy.has(t)){this._remoteBusy=new Set(this._remoteBusy).add(t),this._showStatusMessage(`${e.name}: asking for status…`,"success");try{var i;const t=await Kc(this.hass,"req_status_sync",{contact:e.pubkey_prefix},null===(i=this.config)||void 0===i?void 0:i.entry_id);if(!t.success)return void this._showStatusMessage(`${e.name}: ${t.response||"no response"}`,"error");this._showStatusMessage(`${e.name}: ${function(e){var t;let i;try{i=JSON.parse(e)}catch(t){return e}const o=e=>"number"==typeof i[e]?i[e]:void 0,n=[];return void 0!==o("noise_floor")&&n.push(`noise ${o("noise_floor")} dBm`),void 0!==o("last_rssi")&&n.push(`last RSSI ${o("last_rssi")} dBm${void 0!==o("last_snr")?` / SNR ${o("last_snr")} dB`:""}`),void 0!==o("recv_flood")&&n.push(`rx flood ${o("recv_flood")} / direct ${null!==(t=o("recv_direct"))&&void 0!==t?t:0}`),void 0!==o("bat")&&n.push(`battery ${(o("bat")/1e3).toFixed(2)} V`),n.length?n.join(" · "):"status received"}(t.response)}`,"success")}catch(t){this._showStatusMessage(`${e.name}: status failed — ${String(t)}`,"error")}finally{const e=new Set(this._remoteBusy);e.delete(t),this._remoteBusy=e}}}_fireMoreInfo(e){const t=new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}_formatUptimeFromEntity(e){var t,i,o;const n=null===(t=this.hass)||void 0===t?void 0:t.states[e];if(!n||"unavailable"===n.state||"unknown"===n.state)return"";const s=parseFloat(n.state);if(!Number.isFinite(s))return"";let r;switch(null!==(i=null===(o=n.attributes)||void 0===o?void 0:o.unit_of_measurement)&&void 0!==i?i:"s"){case"d":r=86400*s;break;case"h":r=3600*s;break;case"min":r=60*s;break;default:r=s}if(r<60)return`${Math.floor(r)}s`;if(r<3600)return`${Math.floor(r/60)}m`;if(r<86400){const e=Math.floor(r/3600),t=Math.floor(r%3600/60);return t>0?`${e}h ${t}m`:`${e}h`}const a=Math.floor(r/86400),l=Math.floor(r%86400/3600);return l>0?`${a}d ${l}h`:`${a}d`}_confirmActionDialog(e,t,i){this._confirmAction={title:e,message:t,onConfirm:i},this._confirmDialogOpen=!0}async _onConfirmAction(){if(this._confirmDialogOpen=!1,this._confirmAction)try{await this._confirmAction.onConfirm()}catch(e){this._showStatusMessage(`Error: ${String(e)}`,"error")}this._confirmAction=null}_onConfirmCancel(){this._confirmDialogOpen=!1,this._confirmAction=null}_openCommandDialog(e,t){this._commandDialogTarget=e.pubkey_prefix,this._commandDialogIsLocal=t,this._commandDialogOpen=!0}_onCommandDialogClose(){this._commandDialogOpen=!1,this._commandDialogTarget="",this._commandDialogIsLocal=!1}_getManagedDeviceKey(e,t){var i;return`${(null===(i=this.selectedDevice)||void 0===i?void 0:i.entry_id)||""}_${t}_${e.pubkey_prefix}`}_loadHiddenSensors(){try{const e=localStorage.getItem("meshcore-hidden-sensors");e&&(this._hiddenSensors=JSON.parse(e))}catch(e){this._hiddenSensors={}}}_saveHiddenSensors(){try{localStorage.setItem("meshcore-hidden-sensors",JSON.stringify(this._hiddenSensors))}catch(e){}}_hideSensor(e,t){const i=this._hiddenSensors[e]||[];i.includes(t)||(this._hiddenSensors={...this._hiddenSensors,[e]:[...i,t]},this._saveHiddenSensors())}_unhideSensor(e,t){const i=this._hiddenSensors[e]||[];if(this._hiddenSensors={...this._hiddenSensors,[e]:i.filter(e=>e!==t)},0===this._hiddenSensors[e].length){const t={...this._hiddenSensors};delete t[e],this._hiddenSensors=t}this._saveHiddenSensors()}_unhideAllSensors(e){const t={...this._hiddenSensors};delete t[e],this._hiddenSensors=t,this._saveHiddenSensors()}_onTileContextMenu(e,t){const{entityId:i,label:o}=e.detail;this._contextMenu={entityId:i,label:o,deviceKey:t},this._overlayPointerStarted=!1}_onOverlayPointerDown(){this._overlayPointerStarted=!0}_dismissContextMenu(){this._overlayPointerStarted=!1,this._contextMenu=null}_closeContextMenu(){this._overlayPointerStarted&&this._dismissContextMenu()}_hideSensorFromContext(){this._contextMenu&&(this._hideSensor(this._contextMenu.deviceKey,this._contextMenu.entityId),this._showStatusMessage(`Hidden: ${this._contextMenu.label}`,"success"),this._contextMenu=null)}_onNeighborRightClick(e,t,i){e.preventDefault(),this._neighborContextMenu={name:t.name||t.pubkey_prefix,neighborPubkey:t.pubkey_prefix,repeaterPubkey:i},this._overlayPointerStarted=!1}_dismissNeighborContextMenu(){this._overlayPointerStarted=!1,this._neighborContextMenu=null}_closeNeighborContextMenu(){this._overlayPointerStarted&&this._dismissNeighborContextMenu()}_removeNeighborFromContext(){if(!this._neighborContextMenu)return;const{name:e,neighborPubkey:t,repeaterPubkey:i}=this._neighborContextMenu;this._neighborContextMenu=null,this._confirmActionDialog(`Remove neighbor ${e}?`,"This will remove the neighbor from the repeater and delete its sensors from HA. This cannot be undone.",()=>this._executeRemoveNeighbor(i,t,e))}_openNeighborMoreInfo(e,t,i){var o;const n=e.substring(0,10).toLowerCase(),s=t.substring(0,6).toLowerCase(),r="snr"===i?`sensor.meshcore_${n}_neighbor_${s}`:`sensor.meshcore_${n}_neighbor_${s}_seen`;null!==(o=this.hass)&&void 0!==o&&o.states[r]&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:r},bubbles:!0,composed:!0}))}async _executeRemoveNeighbor(e,t,i){if(this.hass)try{var o,n;const s=await this.hass.callWS({type:"meshcore_bbs/remove_neighbor",entry_id:null===(o=this.config)||void 0===o?void 0:o.entry_id,target_prefix:e,neighbor_pubkey:t}),r=null!==(n=null==s?void 0:s.entities_removed)&&void 0!==n?n:0;this._showStatusMessage(`Removed ${i} (${r} sensors deleted)`,"success");const a=this._managedDevices.repeaters.find(t=>t.pubkey_prefix===e);a&&await this._loadNeighbors(a)}catch(e){this._showStatusMessage(`Failed to remove ${i}: ${e.message||e}`,"error")}}_getSettingsDeviceContext(){const e=this._settingsDeviceKey;if(!e)return null;const t=[...this._managedDevices.repeaters.map(e=>({device:e,type:"repeater"})),...this._managedDevices.clients.map(e=>({device:e,type:"client"}))];for(const{device:o,type:n}of t)if(this._getManagedDeviceKey(o,n)===e){var i;let e=!1;return e=o.status_entity_id&&null!==(i=this.hass)&&void 0!==i&&i.states[o.status_entity_id]?"on"===this.hass.states[o.status_entity_id].state:"online"===o.status,{device:o,type:n,name:o.name,isOnline:e}}return null}_closeSettingsModal(){this._settingsDeviceKey=null}_openHiddenSensorsList(){this._hiddenSensorsModalKey=this._settingsDeviceKey,this._settingsDeviceKey=null}_renderHiddenSensorsModal(){const e=this._hiddenSensorsModalKey,t=(this._hiddenSensors[e]||[]).map(e=>{let t=e;for(const i of Object.values(this._deviceEntities)){const o=i.find(t=>t.entity_id===e);if(o){t=o.label;break}}return{entityId:e,label:t}});return lc(ws||(ws=vd`
      <div class="modal-overlay" @click=${0}>
        <div class="modal-card" data-a11y="hidden-sensors"
             role="dialog" aria-modal="true" aria-label="Hidden sensors"
             @click=${0}>
          <div class="modal-header">
            <span class="modal-title">Hidden Sensors</span>
            <button class="modal-close" aria-label="Close" @click=${0}>&times;</button>
          </div>
          <div class="modal-body">
            ${0}
          </div>
          ${0}
        </div>
      </div>
    `),this._closeHiddenSensorsModal,e=>e.stopPropagation(),this._closeHiddenSensorsModal,0===t.length?lc(ks||(ks=vd`<div class="empty-hidden">No hidden sensors</div>`)):t.map(t=>lc($s||($s=vd`
                  <div class="hidden-sensor-item">
                    <div>
                      <div class="hidden-sensor-name">${0}</div>
                      <div class="hidden-sensor-id">${0}</div>
                    </div>
                    <button class="unhide-btn" @click=${0}>Unhide</button>
                  </div>
                `),t.label,t.entityId,()=>this._unhideSensor(e,t.entityId))),t.length>1?lc(Ss||(Ss=vd`
                <div class="modal-footer">
                  <button class="action-btn" @click=${0}>Unhide All</button>
                </div>
              `),()=>{this._unhideAllSensors(e)}):hc)}_closeHiddenSensorsModal(){this._hiddenSensorsModalKey=null}_showStatusMessage(e,t){this._statusMessage={text:e,type:t},null!==this._statusMessageTimeout&&clearTimeout(this._statusMessageTimeout),this._statusMessageTimeout=window.setTimeout(()=>{this._statusMessage=null,this._statusMessageTimeout=null},5e3)}_formatRelativeTime(e){try{const t=Date.now()-new Date(e).getTime(),i=Math.floor(t/6e4);if(i<1)return"just now";if(i<60)return`${i}m ago`;const o=Math.floor(i/60);return o<24?`${o}h ago`:`${Math.floor(o/24)}d ago`}catch(e){return"unknown"}}};lv.styles=[Ic,$d(Cs||(Cs=vd`
      :host {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      .devices-layout {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .content-area {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 16px;
        background: var(--primary-background-color, #fafafa);
      }

      .content-area::-webkit-scrollbar { width: 6px; }
      .content-area::-webkit-scrollbar-track { background: transparent; }
      .content-area::-webkit-scrollbar-thumb {
        background: var(--scrollbar-thumb, var(--scrollbar-thumb-color, #c1c1c1));
        border-radius: 3px;
      }

      /* Dashboard sections */
      .device-section {
        background: var(--card-background-color, #fff);
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 16px;
      }

      .device-section:last-child {
        margin-bottom: 0;
      }

      .section-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
        gap: 8px;
        flex-wrap: wrap;
      }

      .section-title {
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
        flex: 1 1 auto;
      }

      .section-title > div:last-child {
        min-width: 0;
        flex: 1 1 auto;
      }

      .section-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 8px;
        flex-shrink: 0;
      }

      .section-icon.companion {
        background: rgba(3, 169, 244, 0.12);
        color: #0288d1;
      }

      .section-icon.repeater {
        background: rgba(255, 152, 0, 0.12);
        color: #f57c00;
      }

      .section-icon.client {
        background: rgba(76, 175, 80, 0.12);
        color: #388e3c;
      }

      .device-name {
        font-size: 16px;
        font-weight: 600;
        color: var(--primary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .device-meta {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: 2px;
      }

      .device-meta span {
        margin-right: 12px;
      }

      .status-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 4px 10px;
        border-radius: 12px;
        font-size: 11px;
        font-weight: 600;
        flex-shrink: 0;
        white-space: nowrap;
        max-width: 100%;
      }

      .status-badge.online {
        background: rgba(76, 175, 80, 0.12);
        color: #2e7d32;
      }

      .status-badge.offline {
        background: rgba(114, 114, 114, 0.12);
        color: #616161;
      }

      .status-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
      }

      .status-dot.online { background: #4caf50; }
      .status-dot.offline { background: #9e9e9e; }
      .status-dot.unknown { background: #ff9800; }

      .status-badge.unknown {
        background: rgba(255, 152, 0, 0.12);
        color: #e65100;
      }

      /* Sensor tiles grid */
      .subsection-label {
        font-size: 12px;
        font-weight: 600;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 8px;
        margin-top: 16px;
      }

      .sensor-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
        gap: 8px;
      }

      /* Neighbor section */
      .neighbor-section {
        margin-top: 16px;
      }

      .neighbor-table {
        width: 100%;
        /* separate (not collapse) so the 1px row dividers render the same
           crisp/light line as the node-summary sensor grid, rather than the
           slightly heavier collapsed-border rendering. */
        border-collapse: separate;
        border-spacing: 0;
        font-size: 13px;
        margin-top: 8px;
      }

      .neighbor-table th {
        text-align: left;
        padding: 6px 8px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
        color: var(--secondary-text-color);
        font-weight: 600;
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .neighbor-table tbody tr {
        cursor: context-menu;
      }

      .neighbor-table tbody tr:hover {
        background: var(--table-row-alternative-background-color, rgba(255,255,255,0.05));
      }

      .neighbor-table td {
        padding: 6px 8px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
        color: var(--primary-text-color);
      }

      .neighbor-table code {
        font-size: 12px;
        background: var(--secondary-background-color, #f5f5f5);
        padding: 1px 4px;
        border-radius: 3px;
      }

      .snr-good { color: #4caf50; font-weight: 600; }
      .snr-fair { color: #ff9800; font-weight: 600; }
      .snr-poor { color: #f44336; font-weight: 600; }

      .neighbor-table .clickable-value {
        cursor: pointer;
        border-radius: 4px;
        padding: 2px 4px;
        margin: -2px -4px;
        transition: background 0.15s;
      }

      .neighbor-table .clickable-value:hover {
        background: var(--secondary-background-color, rgba(0,0,0,0.05));
      }

      /* Action buttons */
      .actions-row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 16px;
      }

      .action-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        padding: 6px 12px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 6px;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        white-space: nowrap;
      }

      .action-btn:hover:not(:disabled) {
        background: var(--secondary-background-color, #f5f5f5);
        border-color: var(--primary-color, #03a9f4);
      }

      .action-btn:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .action-btn.primary {
        background: var(--primary-color, #03a9f4);
        color: #fff;
        border-color: var(--primary-color, #03a9f4);
      }

      .action-btn.primary:hover:not(:disabled) {
        opacity: 0.9;
      }

      /* Loading / empty / error */
      .loading-state {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 48px 16px;
        color: var(--secondary-text-color);
        font-size: 14px;
        gap: 8px;
      }

      .loading-spinner {
        width: 20px;
        height: 20px;
        border: 2px solid var(--divider-color, #e0e0e0);
        border-top-color: var(--primary-color, #03a9f4);
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
      }

      .neighbor-loading {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 12px 0;
        color: var(--secondary-text-color);
        font-size: 13px;
      }

      .neighbor-loading .loading-spinner {
        width: 14px;
        height: 14px;
      }

      @keyframes spin { to { transform: rotate(360deg); } }

      .error-state {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 12px 16px;
        color: var(--error-color, #db4437);
        font-size: 13px;
        background: rgba(219, 68, 55, 0.08);
        border-radius: 8px;
        margin-bottom: 16px;
      }

      .empty-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 48px 16px;
        color: var(--secondary-text-color);
        text-align: center;
      }

      .empty-text { font-size: 14px; }
      .empty-subtext { font-size: 12px; margin-top: 8px; opacity: 0.7; }

      /* Toast */
      .status-toast {
        position: fixed;
        bottom: 20px;
        left: 20px;
        right: 20px;
        padding: 12px 16px;
        border-radius: 8px;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        font-size: 13px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
      }

      .status-toast.success { border-left: 4px solid #4caf50; }
      .status-toast.error { border-left: 4px solid var(--error-color, #db4437); color: var(--error-color, #db4437); }

      @keyframes slideIn {
        from { transform: translateY(100%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }

      /* Settings gear button */
      .settings-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border: none;
        border-radius: 6px;
        background: transparent;
        color: var(--secondary-text-color);
        cursor: pointer;
        transition: all 0.2s;
        margin-left: 8px;
        flex-shrink: 0;
      }

      .settings-btn:hover {
        background: var(--secondary-background-color, #f0f0f0);
        color: var(--primary-text-color);
      }

      /* Modal overlay */
      .modal-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.15s ease-out;
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      .modal-card {
        background: var(--card-background-color, #fff);
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        min-width: 260px;
        max-width: 400px;
        max-height: 80vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 20px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }

      .modal-title {
        font-size: 16px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .modal-close {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border: none;
        border-radius: 6px;
        background: transparent;
        color: var(--secondary-text-color);
        cursor: pointer;
        font-size: 18px;
      }

      .modal-close:hover {
        background: var(--secondary-background-color, #f0f0f0);
      }

      .modal-body {
        padding: 8px 0;
        overflow-y: auto;
      }

      .modal-action {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 20px;
        cursor: pointer;
        transition: background 0.15s;
        color: var(--primary-text-color);
        font-size: 14px;
        border: none;
        background: none;
        width: 100%;
        text-align: left;
      }

      .modal-action:hover {
        background: var(--secondary-background-color, #f5f5f5);
      }

      .modal-action.danger {
        color: var(--error-color, #db4437);
      }

      .modal-action-icon {
        display: flex;
        align-items: center;
        color: var(--secondary-text-color);
        flex-shrink: 0;
      }

      .modal-action.danger .modal-action-icon {
        color: var(--error-color, #db4437);
      }

      .modal-action:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .modal-action:disabled:hover {
        background: none;
      }

      .modal-divider {
        height: 1px;
        background: var(--divider-color, #e0e0e0);
        margin: 4px 0;
      }

      /* Hidden sensors list */
      .hidden-sensor-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }

      .hidden-sensor-item:last-child {
        border-bottom: none;
      }

      .hidden-sensor-name {
        font-size: 13px;
        color: var(--primary-text-color);
      }

      .hidden-sensor-id {
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-top: 2px;
      }

      .unhide-btn {
        padding: 4px 10px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 4px;
        background: var(--card-background-color, #fff);
        color: var(--primary-color, #03a9f4);
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        white-space: nowrap;
      }

      .unhide-btn:hover {
        background: var(--secondary-background-color, #f5f5f5);
      }

      .modal-footer {
        padding: 12px 20px;
        border-top: 1px solid var(--divider-color, #e0e0e0);
        display: flex;
        justify-content: flex-end;
      }

      .empty-hidden {
        padding: 20px;
        text-align: center;
        color: var(--secondary-text-color);
        font-size: 13px;
      }

      /* Chart container */
      .chart-container {
        margin-top: 8px;
        overflow-x: auto;
      }
    `))],fd([Lc({type:Object})],lv.prototype,"hass",void 0),fd([Lc({type:Object})],lv.prototype,"config",void 0),fd([Lc({type:Boolean})],lv.prototype,"narrow",void 0),fd([Lc({type:Object})],lv.prototype,"selectedDevice",void 0),fd([Ec()],lv.prototype,"_managedDevices",void 0),fd([Ec()],lv.prototype,"_contactsByPrefix",void 0),fd([Ec()],lv.prototype,"_loading",void 0),fd([Ec()],lv.prototype,"_error",void 0),fd([Ec()],lv.prototype,"_confirmAction",void 0),fd([Ec()],lv.prototype,"_confirmDialogOpen",void 0),fd([Ec()],lv.prototype,"_commandDialogOpen",void 0),fd([Ec()],lv.prototype,"_commandDialogTarget",void 0),fd([Ec()],lv.prototype,"_commandDialogIsLocal",void 0),fd([Ec()],lv.prototype,"_statusMessage",void 0),fd([Ec()],lv.prototype,"_statusMessageTimeout",void 0),fd([Ec()],lv.prototype,"_remoteBusy",void 0),fd([Ec()],lv.prototype,"_deviceEntities",void 0),fd([Ec()],lv.prototype,"_meshcoreDeviceMap",void 0),fd([Ec()],lv.prototype,"_entityRegistryLoaded",void 0),fd([Ec()],lv.prototype,"_hiddenSensors",void 0),fd([Ec()],lv.prototype,"_contextMenu",void 0),fd([Ec()],lv.prototype,"_settingsDeviceKey",void 0),fd([Ec()],lv.prototype,"_hiddenSensorsModalKey",void 0),fd([Ec()],lv.prototype,"_neighborContextMenu",void 0),fd([Ec()],lv.prototype,"_neighborData",void 0),lv=fd([Tc("meshcore-devices-page")],lv);let dv=class extends Mc{constructor(){super(...arguments),this.selected=!1}render(){if(!this.contact)return lc(Ms||(Ms=vd``));const e=this.contact,t=this._getTypeClass(e.type),{label:i,cls:o}=this._getCategoryBadge(e);return lc(zs||(zs=vd`
      <div class=${0}>
        <div class="contact-avatar ${0}">
          ${0}
        </div>
        <div class="contact-info">
          <div class="contact-name">${0}<meshcore-bbs-badge .pubkey=${0}></meshcore-bbs-badge></div>
          <div class="contact-prefix">${0}</div>
          <div class="contact-meta">
            ${0}
          </div>
        </div>
        <span class="category-badge ${0}">${0}</span>
      </div>
    `),this.selected?"contact-card selected":"contact-card",t,this._getTypeIcon(e.type),e.adv_name,e.pubkey_prefix,e.pubkey_prefix,e.lastmod?`Last heard ${new Date(1e3*e.lastmod).toLocaleString()}`:"",o,i)}_getCategoryBadge(e){return e.added_to_node?{label:"Added",cls:"added"}:{label:"Discovered",cls:"discovered"}}_getTypeClass(e){switch(e){case 1:return"client";case 2:return"repeater";case 3:return"room-server";case 4:return"sensor";default:return"unknown"}}_getTypeIcon(e){switch(e){case 0:case 1:return lc(Ts||(Ts=vd`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`));case 2:return lc(Ps||(Ps=vd`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`));case 3:return lc(As||(As=vd`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`));case 4:return lc(Ls||(Ls=vd`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>`));default:return lc(Es||(Es=vd`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`))}}};dv.styles=$d(Is||(Is=vd`
    :host {
      display: block;
      height: 100%;
    }

    .contact-card {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.15s;
      background: var(--card-background-color, #fff);
      height: 100%;
      box-sizing: border-box;
    }

    .contact-card:hover {
      background: rgba(0, 0, 0, 0.02);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    }

    .contact-card.selected {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
      border-color: var(--primary-color, #03a9f4);
    }

    .contact-avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    /* Scale down the inline 20px SVG icons inside avatars so the
       glyph reads as a tag-glyph, not a primary visual. */
    .contact-avatar svg { width: 16px; height: 16px; }

    /* Translucent backgrounds + saturated icon colour. Mirrors the
       category-badge treatment below so the avatar reads as a tag,
       not a brand-bright disc. */
    .contact-avatar.client      { background: rgba(76, 175, 80, 0.15);  color: #388e3c; }
    .contact-avatar.repeater    { background: rgba(255, 152, 0, 0.15);  color: #f57c00; }
    .contact-avatar.room-server { background: rgba(156, 39, 176, 0.15); color: #7b1fa2; }
    .contact-avatar.sensor      { background: rgba(96, 125, 139, 0.15); color: #455a64; }
    .contact-avatar.unknown     { background: rgba(3, 169, 244, 0.15);  color: #0288d1; }

    .contact-info {
      flex: 1;
      overflow: hidden;
    }

    .contact-name {
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .contact-prefix {
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      font-family: monospace;
    }

    .contact-meta {
      font-size: 11px;
      color: var(--secondary-text-color, #727272);
      margin-top: 2px;
    }

    .category-badge {
      font-size: 10px;
      font-weight: 500;
      padding: 2px 8px;
      border-radius: 10px;
      white-space: nowrap;
      flex-shrink: 0;
      align-self: center;
    }
    .category-badge.added {
      background: rgba(3, 169, 244, 0.15);
      color: #0277bd;
    }
    .category-badge.discovered {
      background: rgba(76, 175, 80, 0.15);
      color: #2e7d32;
    }
  `)),fd([Lc({type:Object})],dv.prototype,"contact",void 0),fd([Lc({type:Boolean})],dv.prototype,"selected",void 0),dv=fd([Tc("meshcore-contact-card")],dv);let cv=class extends Mc{constructor(){super(...arguments),this.selected=!1}render(){if(!this.node)return lc(Os||(Os=vd``));const e="adv_name"in this.node,t=e?2===this.node.type:"repeater"===this.node.type,i=e&&3===this.node.type,o=e?1===this.node.type:"client"===this.node.type,n=e&&4===this.node.type,s=e?this.node.adv_name:this.node.name,r=this.node.pubkey_prefix,a=e?this.node.last_advert:void 0;let l=lc(Rs||(Rs=vd`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`)),d="Contact",c="";t?(l=lc(Ds||(Ds=vd`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`)),d="Repeater",c="repeater"):i?(l=lc(Bs||(Bs=vd`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`)),d="Room Server",c="room-server"):n?(l=lc(Ns||(Ns=vd`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>`)),d="Sensor",c="sensor"):o&&(l=lc(Fs||(Fs=vd`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`)),d="Client",c="client");const h=e&&(0!==this.node.adv_lat||0!==this.node.adv_lon),p=a?new Date(1e3*a).toLocaleTimeString():"Unknown";return lc(qs||(qs=vd`
      <div class=${0}>
        <div class="node-header">
          <div class=${0}>${0}</div>
          <div class="node-info">
            <div class="node-name">${0}${0}</div>
            <div class="node-prefix">${0}</div>
            <div class=${0}>${0}</div>
          </div>
        </div>

        <div class="node-meta">
          ${0}
          ${0}
          ${0}
        </div>

        <div class="node-actions">
          ${0}
          ${0}
          <button class="action-btn danger" @click=${0}>Delete</button>
        </div>
      </div>
    `),this.selected?"node-card selected":"node-card",`node-avatar ${c}`,l,s,r?lc(Hs||(Hs=vd`<meshcore-bbs-badge .pubkey=${0}></meshcore-bbs-badge>`),r):"",r,`node-type-label ${c}`,d,a?lc(js||(js=vd`<div class="meta-item"><span><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px;"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg></span><span>${0}</span></div>`),p):lc(Zs||(Zs=vd``)),h?lc(Vs||(Vs=vd`<div class="location-indicator"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 2px;"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>${0}, ${0}</div>`),this.node.adv_lat.toFixed(3),this.node.adv_lon.toFixed(3)):lc(Ks||(Ks=vd``)),e&&this.node.out_path?lc(Us||(Us=vd`<div class="route-info">Route: ${0}...</div>`),this.node.out_path.substring(0,12)):lc(Ws||(Ws=vd``)),e?lc(Gs||(Gs=vd`
            <button class="action-btn" @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>Message</button>
          `),e=>{e.stopPropagation(),this._dispatch("node-message")}):lc(Xs||(Xs=vd``)),t?lc(Ys||(Ys=vd`
            <button class="action-btn" @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>Telemetry</button>
          `),e=>{e.stopPropagation(),this._dispatch("node-telemetry")}):lc(Js||(Js=vd``)),e=>{e.stopPropagation(),this._dispatch("node-delete")})}_dispatch(e){this.dispatchEvent(new CustomEvent(e,{detail:{node:this.node},bubbles:!0,composed:!0}))}};cv.styles=$d(Qs||(Qs=vd`
    :host { display: block; }

    .node-card {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.15s;
      background: var(--card-background-color, #fff);
    }

    .node-card:hover {
      background: rgba(0, 0, 0, 0.02);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    }

    .node-card.selected {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
      border-color: var(--primary-color, #03a9f4);
    }

    .node-header { display: flex; align-items: flex-start; gap: 12px; }

    .node-avatar {
      width: 48px; height: 48px; border-radius: 50%;
      background: var(--primary-color, #03a9f4); color: #fff;
      display: flex; align-items: center; justify-content: center;
      font-weight: 600; font-size: 20px; flex-shrink: 0;
    }

    .node-avatar.repeater { background: #ff9800; }
    .node-avatar.room-server { background: #9c27b0; }
    .node-avatar.sensor { background: #607d8b; }
    .node-avatar.client { background: #4caf50; }

    .node-info { flex: 1; overflow: hidden; }

    .node-name {
      font-size: 14px; font-weight: 500; color: var(--primary-text-color);
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }

    .node-prefix {
      font-size: 12px; color: var(--secondary-text-color, #727272);
      font-family: monospace; margin-top: 2px;
    }

    .node-type-label {
      font-size: 11px; font-weight: 600; color: #fff;
      background: var(--primary-color, #03a9f4);
      padding: 2px 6px; border-radius: 4px;
      margin-top: 4px; display: inline-block;
    }

    .node-type-label.repeater { background: #ff9800; }
    .node-type-label.room-server { background: #9c27b0; }
    .node-type-label.sensor { background: #607d8b; }
    .node-type-label.client { background: #4caf50; }

    .node-meta {
      display: flex; gap: 12px; margin-top: 8px; padding-top: 8px;
      border-top: 1px solid var(--divider-color, #e0e0e0);
      font-size: 11px; color: var(--secondary-text-color, #727272);
    }

    .meta-item { display: flex; align-items: center; gap: 4px; }

    .node-actions { display: flex; gap: 6px; }

    .action-btn {
      padding: 4px 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px; background: transparent;
      color: var(--primary-text-color);
      font-size: 11px; font-weight: 500;
      cursor: pointer; transition: all 0.15s;
    }

    .action-btn:hover {
      background: var(--primary-color, #03a9f4);
      color: #fff;
      border-color: var(--primary-color, #03a9f4);
    }

    .action-btn.danger {
      color: var(--error-color, #db4437);
      border-color: rgba(219, 68, 55, 0.3);
    }

    .action-btn.danger:hover {
      background: var(--error-color, #db4437);
      color: #fff;
      border-color: var(--error-color, #db4437);
    }

    .location-indicator {
      display: inline-flex; align-items: center; gap: 2px;
      padding: 2px 4px; background: rgba(0, 0, 0, 0.05);
      border-radius: 3px; font-size: 10px;
    }

    .route-info {
      font-size: 10px; color: var(--secondary-text-color, #727272);
      font-family: monospace;
    }
  `)),fd([Lc({type:Object})],cv.prototype,"node",void 0),fd([Lc({type:Boolean})],cv.prototype,"selected",void 0),cv=fd([Tc("meshcore-node-card")],cv);const hv={clients:1,repeaters:2,room_servers:3,sensors:4},pv={clients:"Clients",repeaters:"Repeaters",room_servers:"Room Servers",sensors:"Sensors"};let uv=class extends Mc{constructor(){super(...arguments),this.contacts=[],this.channels=[],this.narrow=!1,this._viewportNarrow=!1,this._primaryFilter="all",this._bbsView=null,this.bbsController=new ch(this),this._typeFilter=null,this._searchQuery="",this._displayedContacts=[],this._totalCount=0,this._typeCounts={clients:0,repeaters:0,room_servers:0,sensors:0},this._l1Counts={all:0,added:0,discovered:0},this._loading=!1,this._nodeDetailDialogOpen=!1,this._pendingAction=null,this._sortBy="last_heard",this._onMediaChange=e=>{this._viewportNarrow=e.matches}}connectedCallback(){super.connectedCallback(),this._mediaQuery=window.matchMedia("(max-width: 870px)"),this._viewportNarrow=this._mediaQuery.matches,this._mediaQuery.addEventListener("change",this._onMediaChange),this._loadCounts(),this._loadPage(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._mediaQuery)||void 0===e||e.removeEventListener("change",this._onMediaChange),this._searchTimer&&(clearTimeout(this._searchTimer),this._searchTimer=void 0)}get _isNarrow(){return this.narrow||this._viewportNarrow}updated(e){super.updated(e),this._isNarrow?this.setAttribute("narrow",""):this.removeAttribute("narrow"),e.has("config")&&(this._displayedContacts=[],this._totalCount=0,this._loadCounts(),this._loadPage(!0))}render(){var e,t,i,o,n;return lc(er||(er=vd`
      <div class="nodes-layout">
        <div class="nodes-header">
          <!-- Level 1 filters -->
          <div class="l1-filters">
            ${0}
            ${0}
            ${0}
            ${0}
          </div>

          <!-- Level 2 filters (hidden when L1 = All) -->
          ${0}

          <!-- Search + actions row -->
          <div class="header-actions">
            <div class="search-bar" style="flex: 1;">
              <span class="search-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></span>
              <input
                type="text"
                placeholder=${0}
                .value=${0}
                @input=${0}>
              ${0}
            </div>
            <select class="sort-select"
              .value=${0}
              @change=${0}>
              <option value="last_heard">Last Heard</option>
              <option value="name">Name</option>
              <option value="prefix">Pub Prefix</option>
            </select>
            <button class="clear-btn"
              @click=${0}
              title="Remove discovered contacts older than the configured threshold">
              Clear Stale
            </button>
            <button class="sync-btn"
              @click=${0}>
              ⟳ Sync
            </button>
          </div>
        </div>

        <!-- Content area -->
        <div class="content-area">
          ${0}
        </div>
      </div>

      <!-- Node detail dialog -->
      <meshcore-node-detail-dialog
        .hass=${0}
        .entryId=${0}
        .node=${0}
        .pendingAction=${0}
        ?open=${0}
        @node-detail-closed=${0}
        @node-updated=${0}
        @node-message=${0}
        @node-trace=${0}
        @node-add-contact=${0}
        @node-remove-contact=${0}>
      </meshcore-node-detail-dialog>

    `),this._renderL1Button("all","All"),this._renderL1Button("added","★ Added"),this._renderL1Button("discovered","Discovered"),dh.active?lc(tr||(tr=vd`
              ${0}
              ${0}`),this._renderBbsButton("users","BBS",null!==(e=null===(t=dh.snapshot)||void 0===t?void 0:t.users.length)&&void 0!==e?e:0),this._renderBbsButton("requests","Requests",null!==(i=null===(o=dh.snapshot)||void 0===o?void 0:o.requests.length)&&void 0!==i?i:0)):hc,"all"===this._primaryFilter||this._bbsView?hc:lc(ir||(ir=vd`
            <div class="l2-bar">
              ${0}
            </div>
          `),this._renderL2Buttons()),this._getSearchPlaceholder(),this._searchQuery,this._onSearchInput,this._searchQuery?lc(or||(or=vd`<button class="clear-search" @click=${0}>✕</button>`),()=>{this._searchQuery="",this._loadPage(!0)}):hc,this._sortBy,e=>{this._sortBy=e.target.value,this._loadPage(!0)},()=>this._clearStaleContacts(),()=>this._syncAll(),this._bbsView&&dh.active?this._renderBbsContent():this._renderContactsContent(),this.hass,null===(n=this.config)||void 0===n?void 0:n.entry_id,this._selectedNode,this._pendingAction,this._nodeDetailDialogOpen,()=>{this._nodeDetailDialogOpen=!1},e=>{e.stopPropagation(),this._selectedNode=e.detail.node},()=>this._dispatchNodeAction("message"),()=>this._dispatchNodeAction("trace"),()=>this._dispatchNodeAction("add-contact"),()=>this._dispatchNodeAction("remove-contact"))}_renderL1Button(e,t){const i=this._l1Counts[e],o=this._primaryFilter===e&&!this._bbsView,n=`l1-btn ${e} ${o?"active":""}`;return lc(nr||(nr=vd`
      <button
        class=${0}
        @click=${0}>
        ${0} <span class="l1-count">(${0})</span>
      </button>
    `),n,()=>this._setPrimaryFilter(e),t,i)}_renderBbsButton(e,t,i){const o=this._bbsView===e;return lc(sr||(sr=vd`
      <button
        class=${0}
        title=${0}
        @click=${0}>
        ${0} <span class="l1-count">(${0})</span>
      </button>
    `),"l1-btn bbs "+(o?"active":""),"users"===e?"Contacts with BBS access":"Contacts that wrote to the BBS without access",()=>{this._bbsView=o?null:e},t,i)}_bbsContacts(){const e=dh.snapshot;if(!e||!this._bbsView)return[];const t=[...this.contacts,...this._displayedContacts],i="users"===this._bbsView?e.users.map(e=>({pubkey:e.pubkey,name:e.name})):e.requests.map(e=>({pubkey:e.pubkey,name:e.name||e.pubkey})),o=this._searchQuery.trim().toLowerCase();return i.map(({pubkey:e,name:i})=>{const o=t.find(t=>lh(t.pubkey_prefix,e));return null!=o?o:{public_key:e,pubkey_prefix:e,added_to_node:!1,adv_name:i,type:1,flags:0,adv_lat:0,adv_lon:0,lastmod:0,last_advert:0,out_path:"",out_path_len:0,out_path_hash_mode:0,bbs_placeholder:!0}}).filter(e=>!o||e.adv_name.toLowerCase().includes(o)||e.pubkey_prefix.includes(o))}_renderBbsContent(){if(!dh.snapshot)return lc(rr||(rr=vd`<div class="empty-state"><div class="empty-text">
        ${0}</div></div>`),dh.error?`BBS unavailable: ${dh.error}`:"Loading...");const e=this._bbsContacts();return 0===e.length?lc(ar||(ar=vd`
        <div class="empty-state">
          <div class="empty-text">${0}</div>
          <div class="empty-subtext">${0}</div>
        </div>`),"users"===this._bbsView?"No BBS users":"No pending requests","users"===this._bbsView?"Open a contact and choose “Add to BBS”":"Contacts that message the BBS without access appear here"):lc(lr||(lr=vd`
      <div class="nodes-grid">
        ${0}
      </div>`),e.map(e=>lc(dr||(dr=vd`
          <div @click=${0}>
            <meshcore-contact-card .contact=${0}></meshcore-contact-card>
          </div>
        `),()=>this._openNodeDetail(e),e)))}_renderL2Buttons(){return["clients","repeaters","room_servers","sensors"].filter(e=>this._typeCounts[e]>0).map(e=>{const t=this._typeFilter===e;return lc(cr||(cr=vd`
          <button
            class=${0}
            @click=${0}>
            ${0} <span class="l2-count">(${0})</span>
          </button>
        `),`l2-btn ${e} ${t?"active":""}`,()=>this._setTypeFilter(e),pv[e],this._typeCounts[e])})}_setPrimaryFilter(e){(this._primaryFilter!==e||this._bbsView)&&(this._bbsView=null,this._primaryFilter=e,this._typeFilter=null,this._displayedContacts=[],this._totalCount=0,this._loadPage(!0))}_setTypeFilter(e){this._typeFilter===e?this._typeFilter=null:this._typeFilter=e,this._displayedContacts=[],this._totalCount=0,this._loadPage(!0)}_onSearchInput(e){this._searchQuery=e.target.value,this._searchTimer&&clearTimeout(this._searchTimer),this._searchTimer=setTimeout(()=>this._loadPage(!0),300)}_getSearchPlaceholder(){const e=this._primaryFilter,t=this._typeFilter?pv[this._typeFilter].toLowerCase():"nodes";return"all"===e?"Search all nodes...":`Search ${e} ${t}...`}async _loadPage(e=!1){if(this.hass){this._loading=!0;try{var t;const i=e?0:this._displayedContacts.length,o=this._typeFilter?hv[this._typeFilter]:void 0,n=this._searchQuery.trim()||void 0,s=await Xc(this.hass,this._primaryFilter,{nodeType:o,search:n,limit:50,offset:i,entryId:null===(t=this.config)||void 0===t?void 0:t.entry_id,sortBy:this._sortBy});this._displayedContacts=e?s.contacts:[...this._displayedContacts,...s.contacts],this._totalCount=s.total,this._typeCounts=s.counts}catch(e){console.error("Failed to load contacts:",e)}finally{this._loading=!1}}}async _loadCounts(){if(this.hass)try{var e;this._l1Counts=await async function(e,t){try{const i={type:"meshcore_bbs/get_node_counts"};return t&&(i.entry_id=t),await e.callWS(i)}catch(e){return{all:0,added:0,discovered:0}}}(this.hass,null===(e=this.config)||void 0===e?void 0:e.entry_id)}catch(e){console.error("Failed to load node counts:",e)}}async _clearStaleContacts(){var e;if(!this.hass)return;const t=prompt("Remove discovered contacts older than how many days?","30");if(!t)return;const i=parseInt(t,10);isNaN(i)||i<1||i>365||(await async function(e,t,i){try{const o={type:"meshcore_bbs/clear_discovered_contacts"};return void 0!==t&&(o.days_threshold=t),i&&(o.entry_id=i),await e.callWS(o)}catch(e){return{removed:0}}}(this.hass,i,null===(e=this.config)||void 0===e?void 0:e.entry_id)).removed>0&&(this._loadPage(!0),this._loadCounts(),this.dispatchEvent(new CustomEvent("contacts-changed",{bubbles:!0,composed:!0})))}_syncAll(){this._loadPage(!0),this._loadCounts(),this.dispatchEvent(new CustomEvent("contacts-changed",{bubbles:!0,composed:!0}))}_renderContactsContent(){return this._loading&&0===this._displayedContacts.length?lc(hr||(hr=vd`
        <div class="empty-state">
          <div class="empty-text">Loading...</div>
        </div>
      `)):0===this._displayedContacts.length?this._renderEmptyState():lc(pr||(pr=vd`
      <div class="nodes-grid">
        ${0}
      </div>
      ${0}
    `),this._displayedContacts.map(e=>lc(ur||(ur=vd`
          <div @click=${0}>
            <meshcore-contact-card .contact=${0}></meshcore-contact-card>
          </div>
        `),()=>this._openNodeDetail(e),e)),this._displayedContacts.length<this._totalCount?lc(mr||(mr=vd`
        <div class="load-more">
          <button ?disabled=${0} @click=${0}>
            ${0}
          </button>
        </div>
      `),this._loading,()=>this._loadPage(),this._loading?"Loading...":`Load More (${this._displayedContacts.length} of ${this._totalCount})`):hc)}_renderEmptyState(){const e=this._primaryFilter,t=this._typeFilter;let i=lc(gr||(gr=vd`<svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`)),o="No nodes found",n="";return this._searchQuery?(o="No matching nodes",n=`No results for "${this._searchQuery}"`):"added"===e?(o="No added contacts",n=t?`No added ${pv[t].toLowerCase()}`:"Add discovered contacts to see them here"):"discovered"===e?(o="No discovered nodes",n=t?`No discovered ${pv[t].toLowerCase()}`:"Nodes seen on the mesh will appear here"):"all"===e&&(o="No nodes",n="No contacts or discovered nodes yet"),lc(vr||(vr=vd`
      <div class="empty-state">
        <div class="empty-icon">${0}</div>
        <div class="empty-text">${0}</div>
        ${0}
      </div>
    `),i,o,n?lc(fr||(fr=vd`<div class="empty-subtext">${0}</div>`),n):hc)}_openNodeDetail(e){this._selectedNode=e,this._nodeDetailDialogOpen=!0}_dispatchNodeAction(e){"add-contact"!==e&&"remove-contact"!==e||(this._pendingAction=e),this.dispatchEvent(new CustomEvent("node-action",{detail:{action:e,node:this._selectedNode},bubbles:!0,composed:!0})),"message"!==e&&"delete"!==e||(this._nodeDetailDialogOpen=!1)}clearPendingAction(){this._pendingAction=null}async refreshAfterMutation(e){if(await Promise.all([this._loadPage(!0),this._loadCounts()]),this._nodeDetailDialogOpen&&this._selectedNode&&e){const t=this._displayedContacts.find(t=>!(!t.public_key||t.public_key!==e)||!(!t.pubkey_prefix||!e.startsWith(t.pubkey_prefix)));t?this._selectedNode={...t}:this._nodeDetailDialogOpen=!1}}};uv.styles=$d(_r||(_r=vd`
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .nodes-layout {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .nodes-header {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 12px;
      background: var(--card-background-color, #fff);
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      flex-shrink: 0;
    }

    /* ─── Level 1 filter buttons ────────────────────────────────────── */

    .l1-filters {
      display: flex;
      gap: 6px;
    }

    .l1-btn {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 8px 14px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 20px;
      background: transparent;
      color: var(--secondary-text-color, #727272);
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      border-left: 3px solid transparent;
    }

    .l1-btn:hover {
      background: rgba(0, 0, 0, 0.03);
      color: var(--primary-text-color);
    }

    /* Inactive left-edge accent — same alpha as the active border
       below, so the active/inactive transition doesn't visibly jump
       in saturation. */
    .l1-btn.added,
    .l1-btn.all         { border-left-color: rgba(3, 169, 244, 0.5); }
    .l1-btn.discovered  { border-left-color: rgba(76, 175, 80, 0.5); }
    .l1-btn.bbs         { border-left-color: rgba(156, 39, 176, 0.5); }
    .l1-btn.active.bbs {
      background: rgba(156, 39, 176, 0.12);
      color: #7b1fa2;
      border-color: rgba(156, 39, 176, 0.5);
    }

    /* Active state: translucent category background + saturated text,
       matching the per-card category-badge treatment so the filter
       reads as the same tag concept. Normalize border-left-width back
       to 1px so the filled active button isn't visibly chunkier on the
       left than the other three sides (the 3px accent only makes
       sense as an inactive-state visual cue). */
    .l1-btn.active {
      border-left-width: 1px;
    }
    .l1-btn.active.all,
    .l1-btn.active.added {
      background: rgba(3, 169, 244, 0.15);
      color: #0277bd;
      border-color: rgba(3, 169, 244, 0.5);
      border-left-color: rgba(3, 169, 244, 0.5);
    }
    .l1-btn.active.discovered {
      background: rgba(76, 175, 80, 0.15);
      color: #2e7d32;
      border-color: rgba(76, 175, 80, 0.5);
      border-left-color: rgba(76, 175, 80, 0.5);
    }

    .l1-count {
      font-size: 11px;
      opacity: 0.8;
    }

    /* ─── Level 2 filter buttons ────────────────────────────────────── */

    .l2-bar {
      display: flex;
      gap: 6px;
      align-items: center;
    }

    .l2-btn {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 5px 10px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 14px;
      background: transparent;
      color: var(--secondary-text-color, #727272);
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }

    .l2-btn:hover {
      background: rgba(0, 0, 0, 0.03);
      color: var(--primary-text-color);
    }

    /* Inactive L2 left-edge accent — same alpha as the active border
       below for a clean active/inactive transition. */
    .l2-btn.clients      { border-left: 2px solid rgba(76, 175, 80, 0.5); }
    .l2-btn.repeaters    { border-left: 2px solid rgba(255, 152, 0, 0.5); }
    .l2-btn.room_servers { border-left: 2px solid rgba(156, 39, 176, 0.5); }
    .l2-btn.sensors      { border-left: 2px solid rgba(96, 125, 139, 0.5); }

    /* When active, normalize the left edge back to 1px so the filled
       button doesn't have a chunkier left border than its other edges. */
    .l2-btn.active {
      border-left-width: 1px;
    }

    /* Active L2: same translucent treatment as L1 active and the
       per-card avatar/category-badge. */
    .l2-btn.active.clients {
      background: rgba(76, 175, 80, 0.15);
      color: #388e3c;
      border-color: rgba(76, 175, 80, 0.5);
    }
    .l2-btn.active.repeaters {
      background: rgba(255, 152, 0, 0.15);
      color: #f57c00;
      border-color: rgba(255, 152, 0, 0.5);
    }
    .l2-btn.active.room_servers {
      background: rgba(156, 39, 176, 0.15);
      color: #7b1fa2;
      border-color: rgba(156, 39, 176, 0.5);
    }
    .l2-btn.active.sensors {
      background: rgba(96, 125, 139, 0.15);
      color: #455a64;
      border-color: rgba(96, 125, 139, 0.5);
    }

    .l2-count {
      font-size: 10px;
      opacity: 0.8;
    }

    .l2-spacer {
      flex: 1;
    }

    /* ─── Search bar ────────────────────────────────────────────────── */

    .search-bar {
      display: flex;
      align-items: center;
      gap: 8px;
      background: var(--primary-background-color, #fafafa);
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      padding: 6px 10px;
    }

    .search-icon {
      flex-shrink: 0;
      color: var(--secondary-text-color, #727272);
      display: flex;
    }

    .search-bar input {
      flex: 1;
      border: none;
      background: transparent;
      font-size: 13px;
      color: var(--primary-text-color);
      outline: none;
    }

    .clear-search {
      border: none;
      background: none;
      cursor: pointer;
      color: var(--secondary-text-color, #727272);
      font-size: 16px;
      padding: 0 2px;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .sync-btn {
      padding: 6px 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      background: transparent;
      color: var(--secondary-text-color, #727272);
      font-size: 12px;
      cursor: pointer;
      transition: all 0.15s;
    }
    .sync-btn:hover {
      background: var(--primary-color, #03a9f4);
      color: #fff;
      border-color: var(--primary-color, #03a9f4);
    }

    .sort-select {
      padding: 4px 8px; border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px; background: var(--card-background-color, #fff);
      color: var(--primary-text-color); font-size: 11px; cursor: pointer;
      box-sizing: border-box;
      height: 28px;
      min-height: 28px;
      line-height: normal;
      appearance: menulist;
      -webkit-appearance: menulist;
    }

    /* ─── Content area ──────────────────────────────────────────────── */

    .content-area {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px;
      background: var(--primary-background-color, #fafafa);
    }

    .content-area::-webkit-scrollbar { width: 6px; }
    .content-area::-webkit-scrollbar-track { background: transparent; }
    .content-area::-webkit-scrollbar-thumb {
      background: var(--scrollbar-thumb, var(--scrollbar-thumb-color, #c1c1c1));
      border-radius: 3px;
    }

    .nodes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 8px;
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--secondary-text-color, #727272);
      text-align: center;
    }
    .empty-icon { font-size: 48px; margin-bottom: 16px; opacity: 0.5; }
    .empty-text { font-size: 16px; margin-bottom: 8px; }
    .empty-subtext { font-size: 13px; opacity: 0.7; max-width: 300px; }

    .clear-btn {
      padding: 4px 10px; border: 1px solid rgba(219, 68, 55, 0.3);
      border-radius: 4px; background: transparent;
      color: var(--error-color, #db4437); font-size: 11px;
      font-weight: 500; cursor: pointer; transition: all 0.15s;
    }
    .clear-btn:hover {
      background: var(--error-color, #db4437); color: #fff;
      border-color: var(--error-color, #db4437);
    }

    .confirm-bar {
      display: flex; align-items: center; gap: 8px;
      padding: 8px 12px; background: rgba(219, 68, 55, 0.08);
      border: 1px solid rgba(219, 68, 55, 0.2); border-radius: 6px;
      margin-bottom: 12px; font-size: 12px;
    }
    .confirm-bar button {
      padding: 4px 10px; border: none; border-radius: 4px;
      font-size: 11px; font-weight: 600; cursor: pointer;
    }
    .confirm-bar .yes { background: var(--error-color, #db4437); color: #fff; }
    .confirm-bar .no { background: var(--divider-color, #e0e0e0); color: var(--primary-text-color); }

    .category-badge {
      font-size: 10px; font-weight: 500; padding: 2px 8px;
      border-radius: 10px; white-space: nowrap; flex-shrink: 0; align-self: center;
    }

    .load-more {
      display: flex; justify-content: center; padding: 12px;
    }
    .load-more button {
      padding: 8px 20px; border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px; background: transparent;
      color: var(--primary-text-color); font-size: 12px;
      cursor: pointer; transition: all 0.15s;
    }
    .load-more button:hover {
      background: var(--primary-color, #03a9f4); color: #fff;
      border-color: var(--primary-color, #03a9f4);
    }

    /* ─── Narrow overrides ──────────────────────────────────────────── */

    :host([narrow]) .l1-filters { gap: 4px; flex-wrap: wrap; }
    :host([narrow]) .l1-btn { font-size: 11px; padding: 5px 10px; }
    :host([narrow]) .l2-btn { font-size: 11px; padding: 5px 10px; }
    :host([narrow]) .nodes-grid { grid-template-columns: 1fr; }
  `)),fd([Lc({type:Array})],uv.prototype,"contacts",void 0),fd([Lc({type:Array})],uv.prototype,"channels",void 0),fd([Lc({type:Boolean})],uv.prototype,"narrow",void 0),fd([Lc({type:Object})],uv.prototype,"hass",void 0),fd([Lc({type:Object})],uv.prototype,"config",void 0),fd([Ec()],uv.prototype,"_viewportNarrow",void 0),fd([Ec()],uv.prototype,"_primaryFilter",void 0),fd([Ec()],uv.prototype,"_bbsView",void 0),fd([Ec()],uv.prototype,"_typeFilter",void 0),fd([Ec()],uv.prototype,"_searchQuery",void 0),fd([Ec()],uv.prototype,"_displayedContacts",void 0),fd([Ec()],uv.prototype,"_totalCount",void 0),fd([Ec()],uv.prototype,"_typeCounts",void 0),fd([Ec()],uv.prototype,"_l1Counts",void 0),fd([Ec()],uv.prototype,"_loading",void 0),fd([Ec()],uv.prototype,"_selectedNode",void 0),fd([Ec()],uv.prototype,"_nodeDetailDialogOpen",void 0),fd([Ec()],uv.prototype,"_pendingAction",void 0),fd([Ec()],uv.prototype,"_sortBy",void 0),uv=fd([Tc("meshcore-nodes-page")],uv);const mv=[{key:"max_len",label:"Max message length",min:20,max:200,hint:"Longer replies are split into several messages."},{key:"session_ttl",label:"Session timeout (s)",min:30,max:86400,hint:"Idle time before the next message restarts from the welcome."},{key:"posts_shown",label:"Posts shown",min:1,max:20,hint:"How many posts the board shows."},{key:"main_menu",label:"Main menu id",min:1,max:1e6,hint:"Menu shown first."},{key:"denied_every",label:"Auto-reply interval (s)",min:0,max:86400,hint:"At most one auto-reply per contact in this window (0 = always)."},{key:"admin_page",label:"Admin list page size",min:1,max:20,hint:"Lines per page for !utenti, !richieste, !post."}];function gv(e){var t;return null!==(t=null==e?void 0:e.message)&&void 0!==t?t:String(e)}let vv=class extends Mc{constructor(){super(...arguments),this._draft={},this._saving=!1,this._settingsMsg="",this._settingsErr="",this._menusText=null,this._menuErrors=[],this._menusMsg="",this._importSql=null,this._importName="",this._importSummary=null,this._importMsg="",this._importErr="",this.bbsController=new ch(this),this._resetImport=()=>{this._importSql=null,this._importSummary=null,this._importName=""},this._onFile=async e=>{var t;const i=e.target,o=null===(t=i.files)||void 0===t?void 0:t[0];this._resetImport(),this._importMsg="",this._importErr="",o&&(this._importName=o.name,this._importSql=await o.text(),i.value="",await this._runImport(!0))}}willUpdate(e){e.has("hass")&&this.hass&&dh.attach(this.hass)}get _isAdmin(){var e,t;return null!==(e=null===(t=this.hass)||void 0===t||null===(t=t.user)||void 0===t?void 0:t.is_admin)&&void 0!==e&&e}render(){const e=dh.snapshot;return e?dh.active?this._isAdmin?lc(wr||(wr=vd`
      ${0}
      ${0}
      ${0}
      ${0}
      <div class="card">${0}</div>
    `),this._renderMain(),this._renderMenus(),this._renderPosts(),this._renderImport(),this._renderVersion()):lc(xr||(xr=vd`<div class="card"><div class="card-title">BBS
        <span class="pill ${0}">${0}</span></div>
        <div class="sub">BBS settings can only be changed by a Home Assistant administrator.</div>
        ${0}</div>`),e.settings.enabled?"on":"off",e.settings.enabled?"ON":"OFF",this._renderVersion()):lc(br||(br=vd`<div class="card"><div class="card-title">BBS</div>
        <div class="sub">The BBS runs on <b>${0}</b>.
          Select ${0} in the top-right menu to configure it.
          The bot below has its own radio choice.</div></div>`),dh.radioName||"another radio",dh.radioName||"that radio"):lc(yr||(yr=vd`<div class="card"><div class="card-title">BBS</div>
        <div class="sub">${0}</div>
        ${0}</div>`),dh.error?`BBS unavailable: ${dh.error}`:"Loading…",this._renderVersion())}_renderVersion(){var e;const t=(null===(e=dh.snapshot)||void 0===e?void 0:e.version)||"";return lc(kr||(kr=vd`
      <div class="version">
        MeshCore BBS — integration <b>v${0}</b> · panel <b>v${0}</b>
      </div>
      ${0}`),t||"?",Oc,t&&t!==Oc?lc($r||($r=vd`<div class="warning" style="margin: 8px 0 0;">
        The panel in this browser is older than the installed integration.
        Reload the page with Ctrl+Shift+R (in the HA app: Settings → Companion app → Debugging → Reset frontend cache).
      </div>`)):hc)}_value(e){var t;return null!==(t=this._draft[e])&&void 0!==t?t:dh.snapshot.settings[e]}_set(e,t){this._draft={...this._draft,[e]:t}}_renderMain(){var e,t,i;const o=dh.snapshot,n=o.settings,s=Object.keys(this._draft).length>0;return lc(Sr||(Sr=vd`
      <div class="card">
        <div class="card-title">
          <span>BBS</span>
          <label class="switch">
            <input type="checkbox" .checked=${0} ?disabled=${0}
              @change=${0}>
            <span class="pill ${0}">${0}</span>
          </label>
        </div>
        <p class="sub">
          Contacts with BBS access get the menu when they send a direct message to this node.
          Manage access from any contact (Nodes tab or chat): open it and use the BBS section.
        </p>
        ${0}
        <div class="stats">
          <span><b>${0}</b> active users</span>
          <span><b>${0}</b> admins</span>
          <span><b>${0}</b> pending requests</span>
          <span><b>${0}</b> posts</span>
        </div>

        ${0}
        <div class="grid" style="margin-top: 16px;">
          <div>
            <label>BBS name</label>
            <input type="text" .value=${0}
              @input=${0}>
            <div class="hint">Shown by the {bbs} placeholder.</div>
          </div>
          <div>
            <label>Admin command prefix</label>
            <input type="text" maxlength="3" .value=${0}
              @input=${0}>
            <div class="hint">Admins send e.g. ${0}help over the mesh.</div>
          </div>
          ${0}
          <div class="full">
            <label class="check">
              <input type="checkbox" .checked=${0}
                @change=${0}>
              Auto-reply to contacts without access
            </label>
          </div>
          <div class="full">
            <label>Auto-reply text</label>
            <input type="text" .value=${0}
              @input=${0}>
          </div>
          <div class="full">
            <label class="check">
              <input type="checkbox" .checked=${0}
                @change=${0}>
              Add reception info to the auto-reply
            </label>
            <div class="hint">Appends a line like “Route: 0 hop · SNR: 13.75 · Ricevuto: 30/09/2026 14:27:40”.</div>
          </div>
          <div class="full">
            <label>Notify service for messages from contacts without access</label>
            <input type="text" placeholder="notify.mobile_app_my_phone" .value=${0}
              @input=${0}>
            <div class="hint">Leave empty for no notification. The event <code>meshcore_bbs_request</code> is always fired for automations.</div>
          </div>
        </div>
        <div class="row">
          <button class="primary" ?disabled=${0} @click=${0}>Save settings</button>
          ${0}
          ${0}
          ${0}
        </div>
      </div>`),n.enabled,this._saving,e=>this._saveSettings({enabled:e.target.checked}),n.enabled?"on":"off",n.enabled?"ON":"OFF",n.enabled?hc:lc(Cr||(Cr=vd`<div class="warning">
          The BBS is off. Before turning it on, disable any external BBS automation
          (e.g. the old MeshBBS automation and <code>rest_command.bbs</code>) or both will reply.
        </div>`)),o.users.filter(e=>e.active).length,o.users.filter(e=>e.is_admin).length,o.requests.length,o.posts.length,(null!==(e=null===(t=o.radios)||void 0===t?void 0:t.length)&&void 0!==e?e:0)>1||o.settings.radio_entry_id?(e=>{const t=this._value("radio_entry_id")||"",i=null!==(e=o.radios)&&void 0!==e?e:[],n=t&&!i.some(e=>e.entry_id===t);return lc(Mr||(Mr=vd`
          <div style="margin-top: 16px;">
            <label>Radio for the BBS</label>
            <select .value=${0}
              @change=${0}>
              <option value="" ?selected=${0}>Automatic — first connected radio (may change)</option>
              ${0}
              ${0}
            </select>
            <div class="hint">The BBS answers only messages received by this radio, and replies through it.
              The other radios just show and send messages.
              ${0}
              ${0}</div>
          </div>`),t,e=>this._set("radio_entry_id",e.target.value),!t,n?lc(zr||(zr=vd`<option value=${0} ?selected=${0}>Chosen radio — not connected</option>`),t,!0):hc,i.map(e=>lc(Tr||(Tr=vd`<option value=${0} ?selected=${0}>${0}</option>`),e.entry_id,t===e.entry_id,e.name)),n?lc(Pr||(Pr=vd`<b>The chosen radio is not connected: the BBS is paused until it comes back.</b>`)):hc,t?hc:lc(Ar||(Ar=vd`<b>Pick a radio so the BBS never moves to another one.</b>`)))})():hc,this._value("name"),e=>this._set("name",e.target.value),this._value("admin_prefix"),e=>this._set("admin_prefix",e.target.value),this._value("admin_prefix")||"!",mv.map(e=>lc(Lr||(Lr=vd`
            <div>
              <label>${0}</label>
              <input type="number" min=${0} max=${0} .value=${0}
                @input=${0}>
              <div class="hint">${0}</div>
            </div>`),e.label,e.min,e.max,String(this._value(e.key)),t=>this._set(e.key,Number(t.target.value)),e.hint)),this._value("reply_denied"),e=>this._set("reply_denied",e.target.checked),this._value("denied_text"),e=>this._set("denied_text",e.target.value),null===(i=this._value("denied_info"))||void 0===i||i,e=>this._set("denied_info",e.target.checked),this._value("notify_service"),e=>this._set("notify_service",e.target.value),!s||this._saving,()=>this._saveSettings(this._draft),s?lc(Er||(Er=vd`<button ?disabled=${0} @click=${0}>Discard</button>`),this._saving,()=>{this._draft={}}):hc,this._settingsMsg?lc(Ir||(Ir=vd`<span class="msg">${0}</span>`),this._settingsMsg):hc,this._settingsErr?lc(Or||(Or=vd`<span class="err">${0}</span>`),this._settingsErr):hc)}async _saveSettings(e){if(this.hass){this._saving=!0,this._settingsMsg="",this._settingsErr="";try{await function(e,t){return e.callWS({type:"meshcore_bbs/bbs_settings",settings:t})}(this.hass,e),e===this._draft&&(this._draft={}),this._settingsMsg="Saved.",await dh.refresh()}catch(e){this._settingsErr=gv(e)}finally{this._saving=!1}}}_currentMenusText(){var e;return null!==(e=this._menusText)&&void 0!==e?e:JSON.stringify(dh.snapshot.menus,null,2)}_renderMenus(){return lc(Rr||(Rr=vd`
      <div class="card">
        <div class="card-title">BBS menus</div>
        <p class="sub">
          JSON list of menus. Each option has a <code>key</code>, a <code>label</code> and a
          <code>type</code>: <code>text</code> (with <code>text</code>), <code>menu</code>
          (with the target <code>menu</code> id) or <code>action</code>
          (<code>board</code>, <code>write</code>, <code>exit</code>, <code>hops</code> — replies with
          the route, SNR, RSSI and time of the user's message). Placeholders:
          {name} {bbs} {users} {posts} {date} {time}. Keys m, menu and ? are reserved.
        </p>
        <textarea spellcheck="false" .value=${0}
          @input=${0}></textarea>
        ${0}
        <div class="row">
          <button @click=${0}>Check</button>
          <button class="primary" ?disabled=${0} @click=${0}>Save menus</button>
          ${0}
          ${0}
        </div>
      </div>`),this._currentMenusText(),e=>{this._menusText=e.target.value,this._menusMsg=""},this._menuErrors.length?lc(Dr||(Dr=vd`<ul class="errors">${0}</ul>`),this._menuErrors.map(e=>lc(Br||(Br=vd`<li>${0}</li>`),e))):hc,()=>this._submitMenus(!0),null===this._menusText,()=>this._submitMenus(!1),null!==this._menusText?lc(Nr||(Nr=vd`<button @click=${0}>Discard changes</button>`),()=>{this._menusText=null,this._menuErrors=[],this._menusMsg=""}):hc,this._menusMsg?lc(Fr||(Fr=vd`<span class="msg">${0}</span>`),this._menusMsg):hc)}async _submitMenus(e){if(!this.hass)return;let t;this._menuErrors=[],this._menusMsg="";try{if(t=JSON.parse(this._currentMenusText()),!Array.isArray(t))throw new Error("The menus must be a JSON list [ ... ]")}catch(e){return void(this._menuErrors=[`Invalid JSON: ${gv(e)}`])}try{const{errors:i}=await function(e,t,i=!1){return e.callWS({type:"meshcore_bbs/bbs_menus",menus:t,dry_run:i})}(this.hass,t,e);this._menuErrors=i,i.length||(this._menusMsg=e?"All good.":"Menus saved.",e||(this._menusText=null,await dh.refresh()))}catch(e){this._menuErrors=[gv(e)]}}_renderPosts(){const e=dh.snapshot.posts;return lc(qr||(qr=vd`
      <div class="card">
        <div class="card-title">Bulletin board (${0})</div>
        ${0}
      </div>`),e.length,0===e.length?lc(Hr||(Hr=vd`<div class="sub">No posts yet.</div>`)):e.map(e=>lc(jr||(jr=vd`
          <div class="post">
            <div class="post-body">
              <div class="post-meta">#${0} · ${0} · ${0}</div>
              <div class="post-text">${0}</div>
            </div>
            <button class="danger" title="Delete post" @click=${0}>Delete</button>
          </div>`),e.id,e.author,new Date(1e3*e.created).toLocaleString(),e.body,()=>this._deletePost(e.id))))}async _deletePost(e){var t,i;if(this.hass&&confirm(`Delete post #${e}?`))try{await(t=this.hass,i=e,t.callWS({type:"meshcore_bbs/bbs_delete_post",post_id:i})),await dh.refresh()}catch(e){alert(gv(e))}}_renderImport(){var e,t,i,o,n;const s=this._importSummary;return lc(Zr||(Zr=vd`
      <div class="card">
        <div class="card-title">Import from MeshBBS (MySQL)</div>
        <p class="sub">
          Load a <code>.sql</code> dump of the old MeshBBS database (e.g. exported with HeidiSQL or mysqldump).
          Users, admins, pending requests, posts and menus found in the file replace the current ones;
          settings are kept.
        </p>
        <input type="file" accept=".sql,text/plain" @change=${0}>
        ${0}
        ${0}
        ${0}
      </div>`),this._onFile,s?lc(Vr||(Vr=vd`
          <div class="warning" style="margin-top: 12px;">
            ${0}: ${0} users, ${0} requests,
            ${0} posts, ${0} menus.
            ${0}
          </div>
          <div class="row">
            <button class="primary" @click=${0}>Import and replace</button>
            <button @click=${0}>Cancel</button>
          </div>`),this._importName,null!==(e=s.users)&&void 0!==e?e:0,null!==(t=s.requests)&&void 0!==t?t:0,null!==(i=s.posts)&&void 0!==i?i:0,null!==(o=s.menus)&&void 0!==o?o:0,(null!==(n=s.menu_errors)&&void 0!==n?n:[]).length?lc(Kr||(Kr=vd`<ul class="errors">${0}</ul>`),s.menu_errors.map(e=>lc(Ur||(Ur=vd`<li>${0}</li>`),e))):hc,()=>this._runImport(!1),this._resetImport):hc,this._importMsg?lc(Wr||(Wr=vd`<div class="msg" style="margin-top: 8px;">${0}</div>`),this._importMsg):hc,this._importErr?lc(Gr||(Gr=vd`<div class="err" style="margin-top: 8px;">${0}</div>`),this._importErr):hc)}async _runImport(e){if(this.hass&&null!==this._importSql){this._importErr="";try{const t=await function(e,t,i){return e.callWS({type:"meshcore_bbs/bbs_import",sql:t,dry_run:i})}(this.hass,this._importSql,e);e?this._importSummary=t.summary:(this._importMsg=`Imported ${this._importName}.`,this._resetImport(),this._menusText=null,await dh.refresh())}catch(e){this._importErr=gv(e),this._resetImport()}}}};vv.styles=$d(Xr||(Xr=vd`
    :host { display: block; }
    .card {
      background: var(--card-background-color, #fff);
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 16px;
    }
    .card-title {
      font-size: 15px;
      font-weight: 600;
      color: var(--primary-text-color);
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      flex-wrap: wrap;
    }
    .sub {
      font-size: 13px;
      color: var(--secondary-text-color);
      margin: 0 0 12px;
      line-height: 1.4;
    }
    .warning {
      font-size: 13px;
      padding: 10px 12px;
      border-radius: 8px;
      background: rgba(255, 152, 0, 0.12);
      color: var(--primary-text-color);
      margin-bottom: 12px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 12px 16px;
    }
    label { display: block; font-size: 12px; font-weight: 600; color: var(--secondary-text-color); margin-bottom: 4px; }
    .hint { font-size: 11px; color: var(--secondary-text-color); margin-top: 2px; }
    select { padding: 8px 10px; border: 1px solid var(--divider-color, #e0e0e0); border-radius: 8px;
      background: var(--primary-background-color, #fafafa); color: var(--primary-text-color); font-size: 14px; }
    input[type='text'], input[type='number'], textarea {
      width: 100%;
      box-sizing: border-box;
      padding: 8px 10px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      background: var(--primary-background-color, #fafafa);
      color: var(--primary-text-color);
      font-size: 14px;
      font-family: inherit;
    }
    textarea { font-family: var(--code-font-family, monospace); font-size: 12px; min-height: 280px; resize: vertical; }
    .full { grid-column: 1 / -1; }
    .check { display: flex; align-items: center; gap: 8px; font-size: 14px; color: var(--primary-text-color); }
    .row { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 12px; align-items: center; }
    button {
      padding: 8px 14px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 13px;
      cursor: pointer;
    }
    button:disabled { opacity: 0.6; cursor: default; }
    button.primary { background: var(--primary-color, #03a9f4); border-color: var(--primary-color, #03a9f4); color: var(--text-primary-color, #fff); }
    button.danger { color: var(--error-color, #db4437); }
    .switch { display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 500; }
    .pill { font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 10px; }
    .pill.on { background: rgba(76, 175, 80, 0.15); color: #2e7d32; }
    .pill.off { background: rgba(114, 114, 114, 0.15); color: #616161; }
    .msg { font-size: 12px; color: var(--secondary-text-color); }
    .err { font-size: 12px; color: var(--error-color, #db4437); }
    ul.errors { margin: 8px 0 0; padding-left: 18px; color: var(--error-color, #db4437); font-size: 12px; }
    .post { display: flex; gap: 8px; align-items: flex-start; padding: 8px 0; border-top: 1px solid var(--divider-color, #e0e0e0); }
    .post:first-child { border-top: none; }
    .post-body { flex: 1; min-width: 0; font-size: 13px; overflow-wrap: anywhere; }
    .post-text { white-space: pre-wrap; }
    .post-meta { font-size: 11px; color: var(--secondary-text-color); margin-bottom: 2px; }
    .stats { display: flex; gap: 16px; flex-wrap: wrap; font-size: 13px; color: var(--secondary-text-color); }
    .stats b { color: var(--primary-text-color); }
    .version { font-size: 12px; color: var(--secondary-text-color); }
    .version b { color: var(--primary-text-color); font-weight: 600; }
  `)),fd([Lc({type:Object})],vv.prototype,"hass",void 0),fd([Ec()],vv.prototype,"_draft",void 0),fd([Ec()],vv.prototype,"_saving",void 0),fd([Ec()],vv.prototype,"_settingsMsg",void 0),fd([Ec()],vv.prototype,"_settingsErr",void 0),fd([Ec()],vv.prototype,"_menusText",void 0),fd([Ec()],vv.prototype,"_menuErrors",void 0),fd([Ec()],vv.prototype,"_menusMsg",void 0),fd([Ec()],vv.prototype,"_importSql",void 0),fd([Ec()],vv.prototype,"_importName",void 0),fd([Ec()],vv.prototype,"_importSummary",void 0),fd([Ec()],vv.prototype,"_importMsg",void 0),fd([Ec()],vv.prototype,"_importErr",void 0),vv=fd([Tc("meshcore-bbs-settings")],vv);const fv={route_reply:"Reply with route",path_names:"Path with repeater names",pong:"Pong with the time received"},_v={exact:"Message is",starts_with:"Starts with",contains:"Contains"};function yv(e){var t;return null!==(t=null==e?void 0:e.message)&&void 0!==t?t:String(e)}let bv=class extends Mc{constructor(){super(...arguments),this._config=null,this._channels=[],this._radios=[],this._selected=null,this._dirty=!1,this._saving=!1,this._msg="",this._err="",this.bbsController=new ch(this)}get _isAdmin(){var e,t;return null!==(e=null===(t=this.hass)||void 0===t||null===(t=t.user)||void 0===t?void 0:t.is_admin)&&void 0!==e&&e}willUpdate(e){(e.has("hass")||e.has("entryId"))&&this.hass&&!this._config&&this._load()}async _load(){var e;if(this.hass)try{const[t,i]=await Promise.all([(e=this.hass,e.callWS({type:"meshcore_bbs/bot_get"})),Yc(this.hass)]);this._config=t,this._radios=i,await this._loadChannels()}catch(e){this._err=yv(e)}}get _botRadio(){var e;return(null===(e=this._config)||void 0===e?void 0:e.radio_entry_id)||dh.bbsRadio||this.entryId||void 0}_radioName(e){var t,i,o,n;return e?null!==(t=null!==(i=null===(o=dh.snapshot)||void 0===o||null===(o=o.radios)||void 0===o||null===(o=o.find(t=>t.entry_id===e))||void 0===o?void 0:o.name)&&void 0!==i?i:null===(n=this._radios.find(t=>t.entry_id===e))||void 0===n?void 0:n.title)&&void 0!==t?t:"Unknown radio":""}_connected(e){var t;const i=null===(t=dh.snapshot)||void 0===t?void 0:t.radios;return!e||!i||i.some(t=>t.entry_id===e)}async _loadChannels(){if(!this.hass)return;const e=this._botRadio;this._channelsRadio=e;const t=await jc(this.hass,e);e===this._channelsRadio&&(this._channels=[...t].sort((e,t)=>e.channel_idx-t.channel_idx),this._channels.some(e=>e.channel_idx===this._selected)||(this._selected=this._channels.length?this._channels[0].channel_idx:null))}_setRadio(e){this._update(t=>{t.radio_entry_id=e}),this._loadChannels()}_renderRadio(e,t){var i,o,n;const s=e.radio_entry_id||"",r=null!==(i=null===(o=dh.snapshot)||void 0===o?void 0:o.radios)&&void 0!==i?i:[],a=this._radios.filter(e=>!r.some(t=>t.entry_id===e.entry_id)),l=new Set([...r.map(e=>e.entry_id),...a.map(e=>e.entry_id)]),d=this._radioName(null!==(n=dh.bbsRadio)&&void 0!==n?n:void 0),c=this._botRadio;return lc(Yr||(Yr=vd`
      <div style="margin-bottom: 12px;">
        <label class="small">Radio for the bot</label>
        <select .value=${0} ?disabled=${0} style="min-width: 260px"
          @change=${0}>
          <option value="" ?selected=${0}>Same as the BBS${0}</option>
          ${0}
          ${0}
          ${0}
        </select>
        <div class="msg" style="margin-top: 4px;">
          The bot answers only messages received by this radio and replies through it.
          ${0}
        </div>
      </div>`),s,!t,e=>this._setRadio(e.target.value),!s,d?` (${d})`:"",s&&!l.has(s)?lc(Jr||(Jr=vd`<option value=${0} ?selected=${0}>Chosen radio — not found</option>`),s,!0):hc,r.map(e=>lc(Qr||(Qr=vd`<option value=${0} ?selected=${0}>${0}</option>`),e.entry_id,s===e.entry_id,e.name)),a.map(e=>lc(ea||(ea=vd`<option value=${0} ?selected=${0}>${0} — not connected</option>`),e.entry_id,s===e.entry_id,e.title)),this._connected(c)?hc:lc(ta||(ta=vd`<span class="err">${0} is not connected: the bot is paused until it comes back.</span>`),this._radioName(c)))}_key(e){var t,i;return(null!==(t=null===(i=this._channels.find(t=>t.channel_idx===e))||void 0===i?void 0:i.name)&&void 0!==t?t:String(e)).trim().toLowerCase()}_rules(e){var t,i;return null!==(t=null===(i=this._config)||void 0===i||null===(i=i.channels[this._key(e)])||void 0===i?void 0:i.rules)&&void 0!==t?t:[]}_update(e){if(!this._config)return;const t=JSON.parse(JSON.stringify(this._config));e(t),this._config=t,this._dirty=!0,this._msg=""}_editRules(e,t){var i,o;const n=null!==(i=null===(o=this._channels.find(t=>t.channel_idx===e))||void 0===o?void 0:o.name)&&void 0!==i?i:"";this._update(i=>{var o;const s=null!==(o=i.channels[this._key(e)])&&void 0!==o?o:{name:n,rules:[]};s.name=n,s.rules=t(s.rules),i.channels[this._key(e)]=s})}async _save(e){if(this.hass&&this._config){this._saving=!0,this._err="";try{this._config=await function(e,t){return e.callWS({type:"meshcore_bbs/bot_set",config:t})}(this.hass,null!=e?e:this._config),this._dirty=!1,this._msg="Saved."}catch(e){this._err=yv(e)}finally{this._saving=!1}}}render(){const e=this._config;if(!e)return lc(ia||(ia=vd`<div class="card"><div class="card-title">Bot</div>
        <div class="sub">${0}</div></div>`),this._err?lc(oa||(oa=vd`<span class="err">${0}</span>`),this._err):"Loading…");const t=this._isAdmin,i=this._selected,o=null===i?[]:this._rules(i);return lc(na||(na=vd`
      <div class="card">
        <div class="card-title">
          <span>Bot</span>
          <label class="switch">
            <input type="checkbox" .checked=${0} ?disabled=${0}
              @change=${0}>
            <span class="pill ${0}">${0}</span>
          </label>
        </div>
        <p class="sub">
          Automatic replies on channels. Pick a channel and add commands: when someone sends a matching
          message on that channel, the bot replies there with the route the message took — as one line
          (repeaters, SNR, RSSI, reception time) or as the list of repeaters with their names.
          Case doesn't matter; the bot never answers itself and answers each sender at most once per cooldown.
          A reply too long for one message is sent as numbered parts (1/2, 2/2).
        </p>
        ${0}
        <div>
          <label class="small">Cooldown per sender (seconds)</label>
          <input type="number" min="0" max="3600" style="width: 120px" .value=${0} ?disabled=${0}
            @input=${0}>
        </div>

        <div class="channels">
          ${0}
          ${0}
        </div>

        ${0}

        ${0}
      </div>`),e.enabled,!t||this._saving,t=>this._save({...e,enabled:t.target.checked}),e.enabled?"on":"off",e.enabled?"ON":"OFF",this._renderRadio(e,t),String(e.cooldown),!t,e=>this._update(t=>{t.cooldown=Number(e.target.value)||0}),0===this._channels.length?lc(sa||(sa=vd`<span class="msg">No channels found on the radio.</span>`)):hc,this._channels.map(e=>{const t=this._rules(e.channel_idx).length;return lc(ra||(ra=vd`<button class="chan ${0}"
              @click=${0}>
              ${0}${0}</button>`),i===e.channel_idx?"on":"",()=>{this._selected=e.channel_idx},e.name||`Channel ${e.channel_idx}`,t?lc(aa||(aa=vd`<span class="n">(${0})</span>`),t):hc)}),null!==i?lc(la||(la=vd`
          ${0}
          ${0}
          <div class="row">
            <button class="btn" ?disabled=${0}
              @click=${0}>+ Add command</button>
          </div>
          <div class="example"><b>Reply with route:</b> @[Alfa 10] | 9a92,86a8,146c (3 hops) | SNR: -9.25 dB | RSSI: -122 dBm | Received at: 14:56:15</div>
          <div class="example" style="white-space: pre-line"><b>Path with repeater names</b> (names from the radio's contacts, Unknown if not found):
@[Alfa 10] 3 hops
9A92: Cesura90 Repeater
86A8: Unknown
146C: Feltre Repeater</div>
        `),0===o.length?lc(da||(da=vd`<div class="msg">No commands on this channel yet.</div>`)):hc,o.map((e,o)=>lc(ca||(ca=vd`
            <div class="rule">
              <input type="text" placeholder="Command, e.g. test" .value=${0} ?disabled=${0}
                @input=${0}>
              <select .value=${0} ?disabled=${0}
                @change=${0}>
                ${0}
              </select>
              <select .value=${0} ?disabled=${0}
                @change=${0}>
                ${0}
              </select>
              <label class="check"><input type="checkbox" .checked=${0} ?disabled=${0}
                @change=${0}>On</label>
              <button class="btn danger" ?disabled=${0} title="Remove command"
                @click=${0}>✕</button>
            </div>`),e.trigger,!t,e=>this._editRules(i,t=>t.map((t,i)=>i===o?{...t,trigger:e.target.value}:t)),e.match,!t,e=>this._editRules(i,t=>t.map((t,i)=>i===o?{...t,match:e.target.value}:t)),Object.keys(_v).map(t=>lc(ha||(ha=vd`<option value=${0} ?selected=${0}>${0}</option>`),t,e.match===t,_v[t])),e.action,!t,e=>this._editRules(i,t=>t.map((t,i)=>i===o?{...t,action:e.target.value}:t)),Object.keys(fv).map(t=>lc(pa||(pa=vd`<option value=${0} ?selected=${0}>${0}</option>`),t,e.action===t,fv[t])),e.enabled,!t,e=>this._editRules(i,t=>t.map((t,i)=>i===o?{...t,enabled:e.target.checked}:t)),!t,()=>this._editRules(i,e=>e.filter((e,t)=>t!==o)))),!t,()=>this._editRules(i,e=>[...e,{trigger:"",match:"exact",action:"route_reply",enabled:!0}])):hc,t?lc(ua||(ua=vd`
          <div class="row">
            <button class="btn primary" ?disabled=${0} @click=${0}>
              ${0}</button>
            ${0}
            ${0}
            ${0}
          </div>`),!this._dirty||this._saving,()=>this._save(),this._saving?"Saving…":"Save bot",this._dirty?lc(ma||(ma=vd`<button class="btn" @click=${0}>Discard</button>`),()=>{this._config=null,this._dirty=!1,this._load()}):hc,this._msg?lc(ga||(ga=vd`<span class="msg">${0}</span>`),this._msg):hc,this._err?lc(va||(va=vd`<span class="err">${0}</span>`),this._err):hc):lc(fa||(fa=vd`<div class="msg" style="margin-top: 8px;">Only a Home Assistant administrator can change the bot.</div>`)))}};bv.styles=$d(_a||(_a=vd`
    :host { display: block; }
    .card { background: var(--card-background-color, #fff); border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 12px; padding: 20px; margin-bottom: 16px; }
    .card-title { font-size: 15px; font-weight: 600; color: var(--primary-text-color); margin-bottom: 12px;
      display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap; }
    .sub { font-size: 13px; color: var(--secondary-text-color); margin: 0 0 12px; line-height: 1.4; }
    .switch { display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 500; }
    .pill { font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 10px; }
    .pill.on { background: rgba(76, 175, 80, 0.15); color: #2e7d32; }
    .pill.off { background: rgba(114, 114, 114, 0.15); color: #616161; }
    label.small { display: block; font-size: 12px; font-weight: 600; color: var(--secondary-text-color); margin-bottom: 4px; }
    input[type='text'], input[type='number'], select { box-sizing: border-box; padding: 7px 9px; border-radius: 8px;
      border: 1px solid var(--divider-color, #e0e0e0); background: var(--primary-background-color, #fafafa);
      color: var(--primary-text-color); font-size: 14px; font-family: inherit; }
    .channels { display: flex; flex-wrap: wrap; gap: 6px; margin: 12px 0; }
    .chan { padding: 6px 12px; border-radius: 16px; border: 1px solid var(--divider-color, #e0e0e0);
      background: transparent; color: var(--primary-text-color); font-size: 13px; cursor: pointer; }
    .chan.on { background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.15); border-color: var(--primary-color, #03a9f4); }
    .chan .n { font-size: 11px; color: var(--secondary-text-color); margin-left: 4px; }
    .rule { display: grid; grid-template-columns: minmax(110px, 1fr) minmax(110px, 140px) minmax(150px, 190px) auto auto;
      gap: 8px; align-items: center; padding: 6px 0; border-top: 1px solid var(--divider-color, #e0e0e0); }
    .rule:first-of-type { border-top: none; }
    @media (max-width: 640px) { .rule { grid-template-columns: 1fr 1fr; } }
    .rule input[type='text'] { width: 100%; }
    .rule button.danger { justify-self: start; }
    .check { display: flex; align-items: center; gap: 4px; font-size: 12px; color: var(--secondary-text-color); }
    button.btn { padding: 7px 12px; border-radius: 8px; border: 1px solid var(--divider-color, #e0e0e0);
      background: var(--card-background-color, #fff); color: var(--primary-text-color); font-size: 13px; cursor: pointer; }
    button.btn:disabled { opacity: 0.6; cursor: default; }
    button.primary { background: var(--primary-color, #03a9f4); border-color: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff); }
    button.danger { color: var(--error-color, #db4437); }
    .row { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; margin-top: 12px; }
    .example { font-family: var(--code-font-family, monospace); font-size: 12px; background: var(--secondary-background-color, #f5f5f5);
      border-radius: 8px; padding: 8px 10px; margin-top: 10px; overflow-wrap: anywhere; }
    .msg { font-size: 12px; color: var(--secondary-text-color); }
    .err { font-size: 12px; color: var(--error-color, #db4437); }
  `)),fd([Lc({type:Object})],bv.prototype,"hass",void 0),fd([Lc({type:String})],bv.prototype,"entryId",void 0),fd([Ec()],bv.prototype,"_config",void 0),fd([Ec()],bv.prototype,"_channels",void 0),fd([Ec()],bv.prototype,"_radios",void 0),fd([Ec()],bv.prototype,"_selected",void 0),fd([Ec()],bv.prototype,"_dirty",void 0),fd([Ec()],bv.prototype,"_saving",void 0),fd([Ec()],bv.prototype,"_msg",void 0),fd([Ec()],bv.prototype,"_err",void 0),bv=fd([Tc("meshcore-bot-settings")],bv);const xv=[{step:"generating",label:"Generating new key"},{step:"importing",label:"Sending key to device"},{step:"rebooting",label:"Rebooting device"},{step:"reconnecting",label:"Waiting for device reconnect"},{step:"reloading",label:"Reloading MeshCore integration"},{step:"verifying",label:"Verifying new identity"}];let wv=class extends Mc{constructor(){super(),this.narrow=!1,this._deviceConfig=null,this._loading=!0,this._error=null,this._editValues={},this._saving=!1,this._commandDialogOpen=!1,this._confirmAction=null,this._confirmDialogOpen=!1,this._locationSource="manual",this._importKeyValue="",this._exportedKey="",this._exportingKey=!1,this._deviceEntities={},this._meshcoreDeviceMap={},this._entityRegistryLoaded=!1,this._hiddenSensors={},this._contextMenu=null,this._overlayPointerStarted=!1,this._settingsModalOpen=!1,this._keyManagementModalOpen=!1,this._identityFlowState={kind:"closed"},this._identityFlowUnsubscribe=null,this._renameSuccess=null,this._hiddenSensorsModalKey=null,this._statusMessage=null,this._statusMessageTimeout=null,this._onCompanionTrace=()=>{var e;const t=null===(e=this.selectedDevice)||void 0===e?void 0:e.entry_id;this.dispatchEvent(new CustomEvent("companion-trace-requested",{detail:{entryId:t},bubbles:!0,composed:!0}))},bh(this,{isOpen:()=>null!==this._contextMenu,onEscape:()=>this._closeContextMenu(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="tile-context"]')}}),bh(this,{isOpen:()=>this._settingsModalOpen,onEscape:()=>this._closeSettingsModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="companion-settings"]')}}),bh(this,{isOpen:()=>this._keyManagementModalOpen,onEscape:()=>this._closeKeyManagementModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="key-management"]')}}),bh(this,{isOpen:()=>null!==this._hiddenSensorsModalKey,onEscape:()=>this._closeHiddenSensorsModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="hidden-sensors"]')}}),bh(this,{isOpen:()=>"closed"!==this._identityFlowState.kind,onEscape:()=>{"success"!==this._identityFlowState.kind&&"failure"!==this._identityFlowState.kind||this._closeIdentityFlowModal()},getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="identity-flow"]')}}),bh(this,{isOpen:()=>null!==this._renameSuccess,onEscape:()=>this._closeRenameSuccessModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="rename-success"]')}})}connectedCallback(){super.connectedCallback(),this._loadDeviceConfig(),this._loadHiddenSensors()}disconnectedCallback(){super.disconnectedCallback(),null!==this._statusMessageTimeout&&(clearTimeout(this._statusMessageTimeout),this._statusMessageTimeout=null)}updated(e){e.has("config")&&this._loadDeviceConfig(),e.has("hass")&&this.hass&&!this._entityRegistryLoaded&&this._loadEntityRegistry()}async _loadDeviceConfig(){if(this.hass){this._loading=!0,this._error=null;try{var e,t;this._deviceConfig=await Zc(this.hass,null===(e=this.config)||void 0===e?void 0:e.entry_id),null!==(t=this._deviceConfig)&&void 0!==t&&t.location_source&&(this._locationSource=this._deviceConfig.location_source)}catch(e){this._error=`Failed to load device configuration: ${String(e)}`}finally{this._loading=!1}}}render(){var e,t,i,o,n,s,r,a;return this._loading?lc(ya||(ya=vd`
        <div class="settings-page">
          <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--secondary-text-color);">
            <div style="display: flex; align-items: center; gap: 8px;">
              <div class="loading-spinner"></div>
              <span>Loading settings...</span>
            </div>
          </div>
        </div>
      `)):this._error?lc(ba||(ba=vd`
        <div class="settings-page">
          <div style="padding: 16px; color: var(--error-color); font-size: 14px;">
            ${0}
          </div>
          <div class="settings-container">
            <meshcore-bbs-settings .hass=${0}></meshcore-bbs-settings>
          <meshcore-bot-settings .hass=${0} .entryId=${0}></meshcore-bot-settings>
          </div>
        </div>
      `),this._error,this.hass,this.hass,null===(r=this.config)||void 0===r?void 0:r.entry_id):this._deviceConfig?lc(wa||(wa=vd`
      <div class="settings-page">
        <div class="settings-container">
          <!-- Companion Device Card (full width at top) -->
          ${0}

          <!-- Two-column grid for settings cards -->
          <div class="settings-grid">
            <!-- Companion Information -->
            <div class="device-section">
              <div class="card-title">General</div>
              ${0}
            </div>

            <!-- Radio & RF Settings -->
            <div class="device-section">
              <div class="card-title">Radio</div>
              ${0}
            </div>

            <!-- Location -->
            <div class="device-section">
              <div class="card-title">Location</div>
              ${0}
            </div>
          </div>

          <!-- Built-in BBS (full width) -->
          <meshcore-bbs-settings .hass=${0}></meshcore-bbs-settings>
          <meshcore-bot-settings .hass=${0} .entryId=${0}></meshcore-bot-settings>

        </div>
      </div>

      <!-- Modals & Dialogs -->
      ${0}

      <!-- Settings Modal -->
      ${0}

      <!-- Key Management Modal -->
      ${0}

      <!-- Hidden Sensors Modal -->
      ${0}

      <!-- Identity Flow Modal (streaming progress) -->
      ${0}

      <!-- Rename Success Modal (persistent dialog) -->
      ${0}

      <!-- Status Toast -->
      ${0}

      <!-- Dialogs -->
      <meshcore-confirm-dialog
        .open=${0}
        .title=${0}
        .message=${0}
        .requireTyped=${0}
        ?dangerous=${0}
        @confirm=${0}
        @cancel=${0}>
      </meshcore-confirm-dialog>

      <meshcore-command-dialog
        .open=${0}
        .hass=${0}
        .entryId=${0}
        ?isLocal=${0}
        ?narrow=${0}
        @close=${0}>
      </meshcore-command-dialog>
    `),this.selectedDevice?this._renderCompanionCard():hc,this._renderDeviceInfo(),this._renderRadioSettings(),this._renderLocation(),this.hass,this.hass,null===(e=this.config)||void 0===e?void 0:e.entry_id,this._contextMenu?lc(ka||(ka=vd`
        <div class="modal-overlay"
             @pointerdown=${0}
             @click=${0}>
          <div class="modal-card" data-a11y="tile-context"
               role="dialog" aria-modal="true" aria-label="${0} actions"
               @click=${0}
               @pointerdown=${0}>
            <div class="modal-header">
              <span class="modal-title">${0}</span>
              <button class="modal-close" aria-label="Close" @click=${0}
                      @pointerdown=${0}>&times;</button>
            </div>
            <div class="modal-body">
              <button class="modal-action danger" @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg></span>
                Hide Sensor
              </button>
            </div>
          </div>
        </div>
      `),this._onOverlayPointerDown,this._closeContextMenu,this._contextMenu.label,e=>e.stopPropagation(),e=>e.stopPropagation(),this._contextMenu.label,this._closeContextMenu,e=>e.stopPropagation(),this._hideSensorFromContext):hc,this._settingsModalOpen?lc($a||($a=vd`
        <div class="modal-overlay" @click=${0}>
          <div class="modal-card" data-a11y="companion-settings"
               role="dialog" aria-modal="true" aria-label="Companion settings"
               @click=${0}>
            <div class="modal-header">
              <span class="modal-title">Companion Settings</span>
              <button class="modal-close" aria-label="Close" @click=${0}>&times;</button>
            </div>
            <div class="modal-body">
              <button class="modal-action" @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg></span>
                View Hidden Sensors (${0})
              </button>

              <button class="modal-action" @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20 19V7H4v12h16m0-16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h16m-7 14v-2h5v2h-5m-3.42-4L5.57 9H8.4l3.3 3.3c.39.39.39 1.03 0 1.42L8.42 17H5.59l4-4z"/></svg></span>
                Issue Command
              </button>

              <div class="modal-divider"></div>

              <button class="modal-action danger" @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg></span>
                Reboot Device
              </button>

              <button class="modal-action danger" @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12.65 10a6 6 0 110 4H10v2H8v-2H6v-2h6.65zM17 14a2 2 0 100-4 2 2 0 000 4z"/></svg></span>
                Key Management
              </button>
            </div>
          </div>
        </div>
      `),this._closeSettingsModal,e=>e.stopPropagation(),this._closeSettingsModal,this._openHiddenSensorsList,(this._hiddenSensors[this._getCompanionDeviceKey()]||[]).length,this._openCommandDialogForCompanion,this._handleRebootFromModal,this._openKeyManagementModal):hc,this._keyManagementModalOpen?lc(Sa||(Sa=vd`
        <div class="modal-overlay" @click=${0}>
          <div class="modal-card" data-a11y="key-management"
               role="dialog" aria-modal="true" aria-label="Key management"
               style="max-width: 440px;"
               @click=${0}>
            <div class="modal-header">
              <span class="modal-title">Key Management</span>
              <button class="modal-close" aria-label="Close" @click=${0}>&times;</button>
            </div>
            <div class="modal-body" style="padding: 16px 20px;">
              ${0}
            </div>
          </div>
        </div>
      `),this._closeKeyManagementModal,e=>e.stopPropagation(),this._closeKeyManagementModal,this._renderIdentityManagement()):hc,this._hiddenSensorsModalKey?this._renderHiddenSensorsModal():hc,this._renderIdentityFlowModal(),this._renderRenameSuccessModal(),this._statusMessage?lc(Ca||(Ca=vd`
        <div class="status-toast ${0}">
          ${0}
        </div>
      `),this._statusMessage.type,this._statusMessage.text):hc,this._confirmDialogOpen,(null===(t=this._confirmAction)||void 0===t?void 0:t.title)||"",(null===(i=this._confirmAction)||void 0===i?void 0:i.message)||"",null===(o=this._confirmAction)||void 0===o?void 0:o.requireTyped,!(null===(n=this._confirmAction)||void 0===n||!n.requireTyped),this._onConfirmAction,this._onConfirmCancel,this._commandDialogOpen,this.hass,null===(s=this.config)||void 0===s?void 0:s.entry_id,!0,this.narrow,this._onCommandDialogClose):lc(xa||(xa=vd`
        <div class="settings-page">
          <div class="settings-container">
            <div style="padding: 16px 0; color: var(--secondary-text-color);">No device config loaded</div>
            <meshcore-bbs-settings .hass=${0}></meshcore-bbs-settings>
          <meshcore-bot-settings .hass=${0} .entryId=${0}></meshcore-bot-settings>
          </div>
        </div>`),this.hass,this.hass,null===(a=this.config)||void 0===a?void 0:a.entry_id)}_renderCompanionCard(){var e;if(!this.selectedDevice)return hc;const t=this.selectedDevice,i=t.connected,o=this._getCompanionDeviceKey(),n=this._getCompanionEntities(),s=(this._hiddenSensors[o]||[]).length,r=n.find(e=>e.entity_id.includes("node_count")),a=r?null===(e=this.hass)||void 0===e||null===(e=e.states[r.entity_id])||void 0===e?void 0:e.state:void 0,l=a&&"unavailable"!==a&&"unknown"!==a?a:void 0;return lc(Ma||(Ma=vd`
      <div class="device-section" @tile-context-menu=${0}>
        <div class="companion-header">
          <div class="section-title">
            <div class="section-icon companion">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M9,2A1,1 0 0,0 8,3C8,8.67 8,14.33 8,20C8,21.11 8.89,22 10,22H15C16.11,22 17,21.11 17,20V9C17,7.89 16.11,7 15,7H10V3A1,1 0 0,0 9,2M10,9H15V13H10V9Z"/></svg>
            </div>
            <div>
              <div class="device-name">${0}</div>
              <div class="device-meta">
                <span>Companion</span>
                <span>Firmware: ${0}</span>
                <span>Key: ${0}</span>
                ${0}
              </div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:4px;">
            <button class="settings-btn" @click=${0} title="Device settings" aria-label="Device settings">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 00-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
            </button>
            <div class="status-badge ${0}">
              <span class="status-dot ${0}"></span>
              ${0}
            </div>
          </div>
        </div>

        ${0}

        <div class="actions-row">
          <button class="action-btn" ?disabled=${0} @click=${0}>Local Advert</button>
          <button class="action-btn" ?disabled=${0} @click=${0}>Flood Advert</button>
          <button class="action-btn" ?disabled=${0} @click=${0}>Sync Clock</button>
          <button class="action-btn" ?disabled=${0} @click=${0}>Trace</button>
        </div>
      </div>
    `),e=>this._onTileContextMenu(e,o),t.name,t.firmware||"unknown",t.pubkey_prefix,void 0!==l?lc(za||(za=vd`<span>Added nodes: ${0}</span>`),l):hc,()=>this._settingsModalOpen=!0,i?"online":"offline",i?"online":"offline",i?"Connected":"Offline",n.length>0?lc(Ta||(Ta=vd`
              <meshcore-node-summary
                .hass=${0}
                .device=${0}
                .entities=${0}
                .hiddenCount=${0}>
              </meshcore-node-summary>
            `),this.hass,this._companionDescriptor(t),n,s):hc,!i,()=>this._executeCompanionAction("send_advert",void 0,"Local Advert"),!i,()=>this._executeCompanionAction("send_advert",{flood:!0},"Flood Advert"),!i,()=>this._executeCompanionAction("set_time",{val:Math.floor(Date.now()/1e3)},"Sync Clock"),!i,this._onCompanionTrace)}_renderHiddenSensorsModal(){const e=this._hiddenSensorsModalKey,t=(this._hiddenSensors[e]||[]).map(e=>{let t=e;for(const i of Object.values(this._deviceEntities)){const o=i.find(t=>t.entity_id===e);if(o){t=o.label;break}}return{entityId:e,label:t}});return lc(Pa||(Pa=vd`
      <div class="modal-overlay" @click=${0}>
        <div class="modal-card" data-a11y="hidden-sensors"
             role="dialog" aria-modal="true" aria-label="Hidden sensors"
             @click=${0}>
          <div class="modal-header">
            <span class="modal-title">Hidden Sensors</span>
            <button class="modal-close" aria-label="Close" @click=${0}>&times;</button>
          </div>
          <div class="modal-body">
            ${0}
          </div>
          ${0}
        </div>
      </div>
    `),this._closeHiddenSensorsModal,e=>e.stopPropagation(),this._closeHiddenSensorsModal,0===t.length?lc(Aa||(Aa=vd`<div class="empty-hidden">No hidden sensors</div>`)):t.map(t=>lc(La||(La=vd`
                  <div class="hidden-sensor-item">
                    <div>
                      <div class="hidden-sensor-name">${0}</div>
                      <div class="hidden-sensor-id">${0}</div>
                    </div>
                    <button class="unhide-btn" @click=${0}>Unhide</button>
                  </div>
                `),t.label,t.entityId,()=>this._unhideSensor(e,t.entityId))),t.length>1?lc(Ea||(Ea=vd`
                <div class="modal-footer">
                  <button class="action-btn" @click=${0}>Unhide All</button>
                </div>
              `),()=>{this._unhideAllSensors(e)}):hc)}_renderDeviceInfo(){var e;if(this._deviceConfig)return lc(Ia||(Ia=vd`
      <div class="info-row">
        <span class="info-label">Hardware Model</span>
        <span class="info-value">${0}</span>
      </div>

      <div class="info-row">
        <span class="info-label">Public Key</span>
        <span class="info-value" style="display: flex; align-items: center; gap: 6px;">
          ${0}
          <button
            style="border: none; background: none; cursor: pointer; padding: 2px; color: var(--secondary-text-color); display: flex; align-items: center;"
            title="Copy public key"
            @click=${0}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
          </button>
        </span>
      </div>

      ${0}

      <div class="danger-zone" style="margin-top: 16px;">
        <div class="danger-zone-title">Rename Device</div>
        <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">
          Changing the device name will change all entity IDs. Automations, scripts, and dashboards using current entity IDs will need to be updated.
        </div>
        <div style="display: flex; gap: 8px;">
          <input
            type="text"
            class="form-input"
            style="flex: 1;"
            .value=${0}
            @input=${0}
          />
          <button class="danger-button"
            ?disabled=${0}
            @click=${0}>
            Rename
          </button>
        </div>
      </div>
    `),this._deviceConfig.hardware_model,this._deviceConfig.pubkey,()=>this._copyToClipboard(this._deviceConfig.pubkey),this._deviceConfig.connection_type?lc(Oa||(Oa=vd`
        <div class="info-row">
          <span class="info-label">Connection</span>
          <span class="info-value">${0}${0}</span>
        </div>
      `),this._deviceConfig.connection_type.toUpperCase(),this._deviceConfig.connection_address?lc(Ra||(Ra=vd` — ${0}`),this._deviceConfig.connection_address):""):"",null!==(e=this._editValues.name)&&void 0!==e?e:this._deviceConfig.name,e=>{this._editValues.name=e.target.value},!this._editValues.name||this._editValues.name===this._deviceConfig.name,this._handleNameSave)}_renderRadioSettings(){var e,t,i,o;if(!this._deviceConfig)return;const n=this._hasChanges("radio-settings",["tx_power","frequency","bandwidth","spreading_factor","coding_rate","path_hash_mode"]);return lc(Da||(Da=vd`
      <div class="section-row">
        <div class="form-group-inline">
          <label class="form-label">TX Power (dBm)${0}</label>
          <input
            type="number"
            class="form-input"
            min="1"
            .value=${0}
            @input=${0}
          />
        </div>
        <div class="form-group-inline">
          <label class="form-label">Frequency (MHz)</label>
          <input
            type="number"
            class="form-input"
            step="0.001"
            .value=${0}
            @input=${0}
          />
        </div>
      </div>

      <div class="section-row">
        <div class="form-group-inline">
          <label class="form-label">Bandwidth (kHz)</label>
          <select
            class="form-select"
            @change=${0}>
            ${0}
          </select>
        </div>
        <div class="form-group-inline">
          <label class="form-label">Spreading Factor</label>
          <select
            class="form-select"
            @change=${0}>
            ${0}
          </select>
        </div>
      </div>

      <div class="section-row">
        <div class="form-group-inline">
          <label class="form-label">Coding Rate</label>
          <select
            class="form-select"
            @change=${0}>
            ${0}
          </select>
        </div>
        <div class="form-group-inline">
          <label class="form-label">Path Hash Mode</label>
          <select
            class="form-select"
            @change=${0}>
            ${0}
          </select>
        </div>
      </div>

      <button
        class="apply-button"
        style="width: 100%; margin-top: 12px;"
        ?disabled=${0}
        @click=${0}>
        ${0}
      </button>

      <div style="margin-top: 12px; padding: 8px; background: rgba(0, 0, 0, 0.02); border-radius: 6px; font-size: 12px; color: var(--secondary-text-color);">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>Radio changes require device reboot to take effect
      </div>
    `),this._deviceConfig.max_tx_power?lc(Ba||(Ba=vd` <span style="font-weight: 400; opacity: 0.7;">max ${0}</span>`),this._deviceConfig.max_tx_power):hc,String(null!==(e=null!==(t=this._editValues.tx_power)&&void 0!==t?t:this._deviceConfig.tx_power)&&void 0!==e?e:17),e=>{this._editValues.tx_power=Number(e.target.value)},String(null!==(i=null!==(o=this._editValues.frequency)&&void 0!==o?o:this._deviceConfig.frequency)&&void 0!==i?i:906.875),e=>{this._editValues.frequency=Number(e.target.value)},e=>{this._editValues.bandwidth=Number(e.target.value)},[7.8,10.4,15.6,20.8,31.25,41.7,62.5,125,250,500].map(e=>{var t,i;const o=null!==(t=null!==(i=this._editValues.bandwidth)&&void 0!==i?i:this._deviceConfig.bandwidth)&&void 0!==t?t:250;return lc(Na||(Na=vd`<option value=${0} ?selected=${0}>${0}</option>`),e,Number(o)===e,e)}),e=>{this._editValues.spreading_factor=Number(e.target.value)},[7,8,9,10,11,12].map(e=>{var t,i;const o=null!==(t=null!==(i=this._editValues.spreading_factor)&&void 0!==i?i:this._deviceConfig.spreading_factor)&&void 0!==t?t:11;return lc(Fa||(Fa=vd`<option value=${0} ?selected=${0}>${0}</option>`),e,Number(o)===e,e)}),e=>{this._editValues.coding_rate=Number(e.target.value)},[5,6,7,8].map(e=>{var t,i;const o=null!==(t=null!==(i=this._editValues.coding_rate)&&void 0!==i?i:this._deviceConfig.coding_rate)&&void 0!==t?t:5;return lc(qa||(qa=vd`<option value=${0} ?selected=${0}>${0}</option>`),e,Number(o)===e,e)}),e=>{this._editValues.path_hash_mode=Number(e.target.value)},[[0,"0 - 1 byte"],[1,"1 - 2 byte"],[2,"2 - 3 byte"]].map(([e,t])=>{var i,o;const n=null!==(i=null!==(o=this._editValues.path_hash_mode)&&void 0!==o?o:this._deviceConfig.path_hash_mode)&&void 0!==i?i:0;return lc(Ha||(Ha=vd`<option value=${0} ?selected=${0}>${0}</option>`),e,Number(n)===e,t)}),!n||this._saving,()=>this._handleApply("radio-settings"),this._saving?"Applying...":"Apply Radio Settings")}_renderLocation(){var e,t,i,o,n,s,r,a;if(!this._deviceConfig)return;const l="ha_location"===this._locationSource,d=l?null===(e=this.hass)||void 0===e?void 0:e.states["zone.home"]:null,c=this._locationSource!==(null!==(t=this._deviceConfig.location_source)&&void 0!==t?t:"manual"),h=this._hasChanges("location",["latitude","longitude"]),p=c||h,u=String(l&&d?null!==(i=d.attributes.latitude)&&void 0!==i?i:0:null!==(o=null!==(n=this._editValues.latitude)&&void 0!==n?n:this._deviceConfig.latitude)&&void 0!==o?o:0),m=String(l&&d?null!==(s=d.attributes.longitude)&&void 0!==s?s:0:null!==(r=null!==(a=this._editValues.longitude)&&void 0!==a?a:this._deviceConfig.longitude)&&void 0!==r?r:0);return lc(ja||(ja=vd`
      <div class="section-row">
        <div class="form-group-inline">
          <label class="form-label">Latitude</label>
          <input
            type="number"
            class="form-input"
            step="0.000001"
            min="-90"
            max="90"
            .value=${0}
            ?disabled=${0}
            @input=${0}
          />
        </div>
        <div class="form-group-inline">
          <label class="form-label">Longitude</label>
          <input
            type="number"
            class="form-input"
            step="0.000001"
            min="-180"
            max="180"
            .value=${0}
            ?disabled=${0}
            @input=${0}
          />
        </div>
      </div>
      ${0}

      <div class="section-row">
        <div class="form-group-inline">
          <label class="form-label">Location Source</label>
          <select
            class="form-select"
            .value=${0}
            @change=${0}>
            <option value="manual">Manual (coordinates above)</option>
            <option value="gps">GPS (device hardware)</option>
            <option value="ha_location">Home Assistant Zone</option>
          </select>
          <div style="font-size: 11px; color: var(--secondary-text-color); margin-top: 4px;">
            How the device determines its coordinates
          </div>
        </div>
      </div>

      <button
        class="apply-button"
        style="width: 100%; margin-top: 12px;"
        ?disabled=${0}
        @click=${0}>
        ${0}
      </button>
    `),u,l,e=>{this._editValues.latitude=Number(e.target.value)},m,l,e=>{this._editValues.longitude=Number(e.target.value)},l?lc(Za||(Za=vd`
        <div style="font-size: 11px; color: var(--secondary-text-color); margin-top: -8px; margin-bottom: 8px;">
          Using coordinates from Home Assistant zone.home
        </div>
      `)):"",this._locationSource,e=>{this._locationSource=e.target.value},!p||this._saving,this._applyLocation,this._saving?"Applying...":"Apply Location Settings")}_renderIdentityManagement(){return lc(Va||(Va=vd`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div class="danger-zone" style="margin-top: 0;">
          <div class="danger-zone-title">Export Private Key</div>
          <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">
            Back up the key before reflashing: importing it later restores the same identity, contacts' trust and entity IDs. Anyone with this key can impersonate the node — keep it private.
          </div>
          ${0}
        </div>
        <div class="danger-zone" style="margin-top: 0;">
          <div class="danger-zone-title">Regenerate Identity</div>
          <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">
            Creates a new key pair. All contacts will need to re-add you. This will change all entity IDs — automations, scripts, and dashboards using current entity IDs will need to be updated.
          </div>
          <button class="danger-button" @click=${0}>
            Regenerate Identity
          </button>
        </div>
        <div class="danger-zone" style="margin-top: 0;">
          <div class="danger-zone-title">Import Private Key</div>
          <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">
            Importing a key changes the device identity. This will change all entity IDs — automations, scripts, and dashboards using current entity IDs will need to be updated.
          </div>
          <div style="display: flex; gap: 8px;">
            <input
              type="text"
              class="form-input"
              style="flex: 1; font-family: monospace;"
              placeholder="Hex private key"
              .value=${0}
              @input=${0}
            />
            <button
              class="danger-button"
              ?disabled=${0}
              @click=${0}>
              Import
            </button>
          </div>
        </div>
      </div>
    `),this._exportedKey?lc(Ka||(Ka=vd`
            <textarea
              class="form-input"
              readonly
              rows="3"
              style="width: 100%; box-sizing: border-box; font-family: monospace; font-size: 12px; word-break: break-all; resize: none;"
              .value=${0}
              @focus=${0}
            ></textarea>
            <div style="display: flex; gap: 8px; margin-top: 8px;">
              <button class="dialog-button" @click=${0}>Copy</button>
              <button class="dialog-button" @click=${0}>Hide</button>
            </div>
          `),this._exportedKey,e=>e.target.select(),()=>this._copyToClipboard(this._exportedKey),()=>{this._exportedKey=""}):lc(Ua||(Ua=vd`
            <button class="dialog-button" ?disabled=${0} @click=${0}>
              ${0}
            </button>
          `),this._exportingKey,this._handleExportKey,this._exportingKey?"Reading…":"Show private key"),this._showRegenIdentityConfirm,this._importKeyValue,e=>{this._importKeyValue=e.target.value},!this._importKeyValue.trim(),this._handleImportKeyConfirm)}_hasChanges(e,t){return!!this._deviceConfig&&t.some(e=>void 0!==this._editValues[e]&&this._editValues[e]!==this._deviceConfig[e])}async _handleApply(e){if(!this.hass||!this._deviceConfig)return;let t=[];switch(e){case"device-name":t=["name"];break;case"radio-settings":t=["tx_power","frequency","bandwidth","spreading_factor","coding_rate","path_hash_mode"]}const i={};for(const e of t)void 0!==this._editValues[e]&&(i[e]=this._editValues[e]);this._saving=!0;try{var o;const e=await Vc(this.hass,i,null===(o=this.config)||void 0===o?void 0:o.entry_id);if(e.success){this._deviceConfig&&(this._deviceConfig={...this._deviceConfig,...i});for(const e of t)delete this._editValues[e];this._editValues={...this._editValues},e.rename?this._renameSuccess=e.rename:this._showStatusMessage(`Saved: ${t.join(", ")}`,"success")}else this._showStatusMessage(e.error?`Save failed: ${e.error}`:"Save failed","error")}catch(e){this._showStatusMessage(`Error: ${String(e)}`,"error")}finally{this._saving=!1}}async _copyToClipboard(e){await kh(e)?this._showStatusMessage("Copied to clipboard","success"):this._showStatusMessage("Failed to copy","error")}_showStatusMessage(e,t){this._statusMessage={text:e,type:t},null!==this._statusMessageTimeout&&clearTimeout(this._statusMessageTimeout),this._statusMessageTimeout=window.setTimeout(()=>{this._statusMessage=null,this._statusMessageTimeout=null},5e3)}_handleNameSave(){var e;const t=this._editValues.name,i=null===(e=this._deviceConfig)||void 0===e?void 0:e.name;if(void 0===t||t===i)return;const o=e=>(e||"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,""),n=o(null!=i?i:""),s=o(String(t));this._confirmAction={title:"Rename Device",message:`Renaming the device will rename all entity IDs ending in _${n} to _${s}. Any automations, scripts, or dashboards referencing entity IDs by the old name will need updating. A repair issue will list every renamed entity. Continue?`,onConfirm:async()=>{await this._handleApply("device-name")}},this._confirmDialogOpen=!0}_handleRebootFromModal(){this._settingsModalOpen=!1,this._confirmAction={title:"Reboot Device",message:"Are you sure you want to reboot the device? The device will be temporarily unavailable.",onConfirm:()=>this._executeDeviceCommand("reboot")},this._confirmDialogOpen=!0}async _executeDeviceCommand(e){if(this.hass)try{var t;const i=await Kc(this.hass,e,void 0,null===(t=this.config)||void 0===t?void 0:t.entry_id);i.success?this._showStatusMessage(`Device ${e} initiated`,"success"):this._showStatusMessage(`Command failed: ${i.response}`,"error")}catch(e){this._showStatusMessage(`Error: ${String(e)}`,"error")}}async _applyLocation(){if(this.hass&&this._deviceConfig){this._saving=!0;try{var e;const i=["latitude","longitude"],o={};if("ha_location"===this._locationSource){const e=this.hass.states["zone.home"];if(!e||null==e.attributes.latitude||null==e.attributes.longitude)return void this._showStatusMessage("Could not read zone.home coordinates from Home Assistant","error");o.latitude=e.attributes.latitude,o.longitude=e.attributes.longitude}else for(const e of i)void 0!==this._editValues[e]&&(o[e]=this._editValues[e]);if(Object.keys(o).length>0){var t;const e=await Vc(this.hass,o,null===(t=this.config)||void 0===t?void 0:t.entry_id);if(!e.success)return void this._showStatusMessage(e.error?`Failed to save coordinates: ${e.error}`:"Failed to save coordinates","error");this._deviceConfig&&(this._deviceConfig={...this._deviceConfig,...o});for(const e of i)delete this._editValues[e];this._editValues={...this._editValues}}if(!(await async function(e,t,i){try{const o={type:"meshcore_bbs/set_location_source",source:t};return i&&(o.entry_id=i),await e.callWS(o)}catch(e){return{success:!1}}}(this.hass,this._locationSource,null===(e=this.config)||void 0===e?void 0:e.entry_id)).success)return void this._showStatusMessage("Failed to update location source","error");await this._loadDeviceConfig(),this._showStatusMessage("Location settings applied","success")}catch(e){this._showStatusMessage(`Error: ${String(e)}`,"error")}finally{this._saving=!1}}}_showRegenIdentityConfirm(){this._confirmAction={title:"Regenerate Identity",message:"This will create a new cryptographic identity, reboot the device, and migrate all entity IDs to the new key prefix. Existing automations referencing entity IDs by the old prefix will need updating. All contacts must re-add this device. This cannot be undone.",requireTyped:"REGENERATE",onConfirm:async()=>{var e;this.hass&&(this._closeKeyManagementModal(),this._startIdentityFlow("regenerate",{type:"meshcore_bbs/regenerate_identity",payload:null!==(e=this.config)&&void 0!==e&&e.entry_id?{entry_id:this.config.entry_id}:{}}))}},this._confirmDialogOpen=!0}_handleImportKeyConfirm(){const e=this._importKeyValue.trim().replace(/\s+/g,"");e&&(64===e.length||128===e.length?/^[0-9a-fA-F]+$/.test(e)?(this._confirmAction={title:"Import Private Key",message:"Importing a private key will replace the device identity, reboot the device, and migrate all entity IDs to the new key prefix. Existing automations referencing entity IDs by the old prefix will need updating. All contacts must re-add this device.",requireTyped:"IMPORT",onConfirm:()=>this._importIdentityKey()},this._confirmDialogOpen=!0):this._showStatusMessage("Private key must be hex (0-9, a-f)","error"):this._showStatusMessage("Private key must be 64 or 128 hex characters","error"))}async _importIdentityKey(){var e;if(!this.hass||!this._importKeyValue.trim())return;const t=this._importKeyValue.trim().replace(/\s+/g,"");this._closeKeyManagementModal(),this._importKeyValue="";const i={private_key:t};null!==(e=this.config)&&void 0!==e&&e.entry_id&&(i.entry_id=this.config.entry_id),this._startIdentityFlow("import",{type:"meshcore_bbs/import_identity",payload:i})}_startIdentityFlow(e,t){if(!this.hass)return;this._identityFlowUnsubscribe&&(this._identityFlowUnsubscribe(),this._identityFlowUnsubscribe=null),this._identityFlowState={kind:"progress",flow:e,currentStep:"generating",completedSteps:new Set};const{unsubscribe:i}=function(e,t,i,o){let n,s=null;const r=new Promise(e=>{n=e});let a={success:!1,code:"unknown",message:"Identity flow terminated without a result event."};return e.connection.subscribeMessage(e=>{if("done"===e.step&&e.success&&e.old_pubkey&&e.new_pubkey){const t={success:!0,old_pubkey:e.old_pubkey,new_pubkey:e.new_pubkey,warning:e.warning};a=t,o({type:"result",data:t})}else"done"!==e.step&&o({type:"progress",step:e.step})},{type:t,...i}).then(e=>{s=e,n(a)}).catch(e=>{const t={success:!1,code:e.code||"error",message:e.message||"Identity flow failed."};o({type:"error",data:t}),n(t)}),{unsubscribe:()=>{s&&s()},done:r}}(this.hass,t.type,t.payload,t=>{if("progress"===t.type){if("progress"!==this._identityFlowState.kind)return;const e=new Set(this._identityFlowState.completedSteps);e.add(this._identityFlowState.currentStep),this._identityFlowState={...this._identityFlowState,currentStep:t.step,completedSteps:e}}else"result"===t.type?this._identityFlowState={kind:"success",flow:e,oldPubkey:t.data.old_pubkey,newPubkey:t.data.new_pubkey,warning:t.data.warning}:"error"===t.type&&(this._identityFlowState={kind:"failure",flow:e,code:t.data.code,message:t.data.message})});this._identityFlowUnsubscribe=i}_closeIdentityFlowModal(){this._identityFlowUnsubscribe&&(this._identityFlowUnsubscribe(),this._identityFlowUnsubscribe=null);const e="success"===this._identityFlowState.kind;this._identityFlowState={kind:"closed"},e&&this._loadDeviceConfig()}_renderIdentityFlowModal(){const e=this._identityFlowState;if("closed"===e.kind)return hc;const t="regenerate"===e.flow?"Regenerate Identity":"Import Private Key",i="regenerate"===e.flow?"Regenerating Identity":"Importing Identity",o="regenerate"===e.flow?"Identity Regenerated":"Identity Imported",n="regenerate"===e.flow?"Identity Regeneration Failed":"Identity Import Failed";let s,r;"progress"===e.kind?(s=lc(Wa||(Wa=vd`
        <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;">
          This typically takes 5–10 seconds. Please don't close this dialog.
        </div>
        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px;">
          ${0}
        </ul>
      `),xv.map(t=>{const i=e.completedSteps.has(t.step),o=e.currentStep===t.step;let n="○",s="var(--secondary-text-color)";return i?(n="✓",s="var(--success-color, #28a745)"):o&&(n="⏳",s="var(--primary-color)"),lc(Ga||(Ga=vd`
              <li style="display: flex; align-items: center; gap: 8px; color: ${0}; font-size: 14px;">
                <span style="font-family: monospace; width: 1em;">${0}</span>
                <span>${0}</span>
              </li>
            `),s,n,t.label)})),r=hc):"success"===e.kind?(s=lc(Xa||(Xa=vd`
        <div style="font-size: 32px; text-align: center; margin-bottom: 8px;">✅</div>
        <div style="font-size: 14px; margin-bottom: 16px;">
          The device's identity has been replaced and verified.
        </div>
        <div style="font-family: monospace; font-size: 12px; background: var(--card-background-color, #f5f5f5); padding: 8px 12px; border-radius: 4px; margin-bottom: 12px;">
          <div><span style="color: var(--secondary-text-color);">Old key:</span> ${0}…</div>
          <div><span style="color: var(--secondary-text-color);">New key:</span> ${0}… <span style="color: var(--success-color, #28a745); font-size: 11px;">(verified after reload)</span></div>
        </div>
        ${0}
      `),e.oldPubkey.slice(0,12),e.newPubkey.slice(0,12),e.warning?lc(Ya||(Ya=vd`
          <div style="font-size: 13px; color: var(--secondary-text-color); margin-top: 12px; padding: 8px 12px; border-left: 3px solid var(--warning-color, #f0ad4e); background: var(--warning-color-bg, rgba(240, 173, 78, 0.08));">
            <strong>Follow-up:</strong>
            <ul style="margin: 4px 0 0 16px; padding: 0;">
              <li>${0}</li>
              <li>Check Settings → Repairs for the entity-ID migration list.</li>
            </ul>
          </div>
        `),e.warning):hc),r=lc(Ja||(Ja=vd`
        <button class="modal-action" @click=${0}>Close</button>
      `),this._closeIdentityFlowModal)):(s=lc(Qa||(Qa=vd`
        <div style="font-size: 32px; text-align: center; margin-bottom: 8px;">❌</div>
        <div style="font-size: 14px; margin-bottom: 12px;">
          ${0}
        </div>
        <div style="font-family: monospace; font-size: 12px; background: var(--card-background-color, #f5f5f5); padding: 8px 12px; border-radius: 4px;">
          <div><span style="color: var(--secondary-text-color);">Error code:</span> ${0}</div>
          <div style="margin-top: 4px; word-break: break-word;"><span style="color: var(--secondary-text-color);">Message:</span> ${0}</div>
        </div>
      `),"regenerate"===e.flow?"The device firmware rejected the new key. Your device identity is unchanged.":"The import did not take effect. Your device identity may be unchanged.",e.code,e.message),r=lc(el||(el=vd`
        <button class="modal-action" @click=${0}>Close</button>
      `),this._closeIdentityFlowModal));const a="progress"===e.kind?i:"success"===e.kind?o:n;return lc(tl||(tl=vd`
      <div class="modal-overlay">
        <div class="modal-card" data-a11y="identity-flow"
             role="dialog" aria-modal="true" aria-label=${0}
             style="max-width: 480px;"
             @click=${0}>
          <div class="modal-header">
            <span class="modal-title">${0}</span>
            ${0}
          </div>
          <div class="modal-body" style="padding: 20px;">
            ${0}
            ${0}
          </div>
        </div>
      </div>
    `),t,e=>e.stopPropagation(),a,"progress"===e.kind?hc:lc(il||(il=vd`
              <button class="modal-close" aria-label="Close" @click=${0}>&times;</button>
            `),this._closeIdentityFlowModal),s,r?lc(ol||(ol=vd`<div style="margin-top: 20px; display: flex; justify-content: flex-end;">${0}</div>`),r):hc)}_closeRenameSuccessModal(){this._renameSuccess=null,this._loadDeviceConfig(),this.dispatchEvent(new CustomEvent("device-renamed",{bubbles:!0,composed:!0}))}_renderRenameSuccessModal(){const e=this._renameSuccess;return e?lc(nl||(nl=vd`
      <div class="dialog-overlay">
        <div class="dialog"
             role="dialog" aria-modal="true" aria-label="Device renamed"
             data-a11y="rename-success"
             @click=${0}>
          <div class="dialog-header">
            <div class="dialog-header-title">Device renamed</div>
          </div>
          <div class="dialog-body">
            <p style="margin: 0 0 12px 0;">
              The MeshCore device was renamed from
              <code>${0}</code> to <code>${0}</code>.
            </p>
            <p style="margin: 0 0 12px 0;">
              ${0}
              ${0}
              automatically migrated from the
              <code>_${0}</code> suffix to
              <code>_${0}</code>.
            </p>
            <p style="margin: 0 0 12px 0;">
              If you have automations, scripts, or dashboards
              referencing the old entity IDs, you will need to
              update them manually to use the new suffix.
            </p>
            <p style="margin: 0; color: var(--secondary-text-color); font-size: 13px;">
              The full list of renamed entity IDs is available in
              Settings → Repairs.
            </p>
          </div>
          <div class="dialog-footer">
            <button class="dialog-button primary"
                    @click=${0}>Close</button>
          </div>
        </div>
      </div>
    `),e=>e.stopPropagation(),e.old_name,e.new_name,e.count,1===e.count?"entity ID was":"entity IDs were",e.old_suffix,e.new_suffix,this._closeRenameSuccessModal):hc}async _onConfirmAction(){if(this._confirmDialogOpen=!1,this._confirmAction)try{await this._confirmAction.onConfirm()}catch(e){this._error=`Error: ${String(e)}`}this._confirmAction=null}_onConfirmCancel(){this._confirmDialogOpen=!1,this._confirmAction=null}_onCommandDialogClose(){this._commandDialogOpen=!1}async _loadEntityRegistry(){if(this.hass&&!this._entityRegistryLoaded){this._entityRegistryLoaded=!0;try{const{meshcoreDeviceMap:e,deviceEntities:t}=await av(this.hass);this._meshcoreDeviceMap=e,this._deviceEntities=t}catch(e){console.error("Failed to load entity registry:",e)}}}_getCompanionEntities(){var e;if(!this.hass||!this.selectedDevice)return[];const t=this._getCompanionDeviceKey(),i=new Set(this._hiddenSensors[t]||[]),o=this.selectedDevice.entry_id,n=this._meshcoreDeviceMap[o];if(n&&this._deviceEntities[n])return this._deviceEntities[n].filter(e=>!i.has(e.entity_id));const s=(null===(e=this.selectedDevice.pubkey_prefix)||void 0===e||null===(e=e.substring(0,6))||void 0===e?void 0:e.toLowerCase())||"";if(!s)return[];const r=[];for(const[e,t]of Object.entries(this._deviceEntities))if(!Object.entries(this._meshcoreDeviceMap).some(([t,i])=>i===e&&(t.includes("_repeater_")||t.includes("_client_"))))for(const e of t)e.entity_id.toLowerCase().includes(s)&&!i.has(e.entity_id)&&r.push(e);return r.sort((e,t)=>e.sortOrder-t.sortOrder)}_getCompanionDeviceKey(){var e;return(null===(e=this.selectedDevice)||void 0===e?void 0:e.entry_id)||"companion"}_companionDescriptor(e){return{type:"companion",name:e.name,pubkey_prefix:e.pubkey_prefix,connected:e.connected,firmware:e.firmware,entry_id:e.entry_id}}_loadHiddenSensors(){try{const e=localStorage.getItem("meshcore-hidden-sensors");e&&(this._hiddenSensors=JSON.parse(e))}catch(e){this._hiddenSensors={}}}_saveHiddenSensors(){try{localStorage.setItem("meshcore-hidden-sensors",JSON.stringify(this._hiddenSensors))}catch(e){}}_hideSensor(e,t){const i=this._hiddenSensors[e]||[];i.includes(t)||(this._hiddenSensors={...this._hiddenSensors,[e]:[...i,t]},this._saveHiddenSensors())}_unhideSensor(e,t){const i=this._hiddenSensors[e]||[];if(this._hiddenSensors={...this._hiddenSensors,[e]:i.filter(e=>e!==t)},0===this._hiddenSensors[e].length){const t={...this._hiddenSensors};delete t[e],this._hiddenSensors=t}this._saveHiddenSensors()}_unhideAllSensors(e){const t={...this._hiddenSensors};delete t[e],this._hiddenSensors=t,this._saveHiddenSensors()}async _executeCompanionAction(e,t,i){if(!this.hass)return;const o=i||e;try{var n;const i=await Kc(this.hass,e,t,null===(n=this.config)||void 0===n?void 0:n.entry_id);this._showStatusMessage(`Companion: ${o} → ${i.response||"OK"}`,"success")}catch(e){this._showStatusMessage(`Companion: ${o} failed — ${String(e)}`,"error")}}_onTileContextMenu(e,t){const{entityId:i,label:o}=e.detail;this._contextMenu={entityId:i,label:o,deviceKey:t},this._overlayPointerStarted=!1}_onOverlayPointerDown(){this._overlayPointerStarted=!0}_closeContextMenu(){this._overlayPointerStarted&&(this._overlayPointerStarted=!1,this._contextMenu=null)}_hideSensorFromContext(){this._contextMenu&&(this._hideSensor(this._contextMenu.deviceKey,this._contextMenu.entityId),this._showStatusMessage(`Hidden: ${this._contextMenu.label}`,"success"),this._contextMenu=null)}_closeSettingsModal(){this._settingsModalOpen=!1}_openHiddenSensorsList(){this._hiddenSensorsModalKey=this._getCompanionDeviceKey(),this._settingsModalOpen=!1}_closeHiddenSensorsModal(){this._hiddenSensorsModalKey=null}_openCommandDialogForCompanion(){this._commandDialogOpen=!0,this._settingsModalOpen=!1}_openKeyManagementModal(){this._keyManagementModalOpen=!0,this._settingsModalOpen=!1}_closeKeyManagementModal(){this._keyManagementModalOpen=!1,this._exportedKey=""}async _handleExportKey(){if(this.hass){this._exportingKey=!0;try{var e;const t=await Kc(this.hass,"export_private_key",void 0,null===(e=this.config)||void 0===e?void 0:e.entry_id),i=t.success?function(e){let t;try{t=JSON.parse(e)}catch(t){return{ok:!1,reason:"error",detail:e}}const i=t&&"object"==typeof t?t:{},o="string"==typeof i.private_key?i.private_key.trim().toLowerCase():"";return/^[0-9a-f]{128}$/.test(o)?{ok:!0,key:o}:"private_key_export_disabled"===i.reason?{ok:!1,reason:"disabled",detail:e}:{ok:!1,reason:"error",detail:e}}(t.response):null;null!=i&&i.ok?this._exportedKey=i.key:i&&"disabled"===i.reason?this._showStatusMessage("Key export is disabled in this firmware","error"):this._showStatusMessage(`Export failed: ${i?i.detail:t.response}`,"error")}catch(e){this._showStatusMessage(`Error: ${String(e)}`,"error")}finally{this._exportingKey=!1}}}};wv.styles=[Ic,$d(sl||(sl=vd`
      :host {
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      .settings-page {
        display: flex;
        flex-direction: column;
        height: 100%;
        background: var(--primary-background-color, #fafafa);
      }

      .settings-container {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
      }

      .settings-container::-webkit-scrollbar {
        width: 6px;
      }

      .settings-container::-webkit-scrollbar-track {
        background: transparent;
      }

      .settings-container::-webkit-scrollbar-thumb {
        background: var(--scrollbar-thumb, var(--scrollbar-thumb-color, #c1c1c1));
        border-radius: 3px;
      }

      .section-row {
        display: flex;
        gap: 12px;
        margin-bottom: 16px;
      }

      .section-row.full {
        flex: 1;
      }

      .form-group-inline {
        flex: 1;
      }

      .danger-zone {
        margin-top: 16px;
        padding: 12px;
        border: 2px solid var(--error-color, #db4437);
        border-radius: 8px;
        background: rgba(219, 68, 55, 0.05);
      }

      .danger-zone-title {
        font-size: 13px;
        font-weight: 600;
        color: var(--error-color, #db4437);
        margin-bottom: 12px;
      }

      .danger-zone-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .info-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 0;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }

      .info-row:last-child {
        border-bottom: none;
      }

      .info-label {
        font-size: 13px;
        color: var(--secondary-text-color);
        font-weight: 500;
      }

      .info-value {
        font-size: 13px;
        color: var(--primary-text-color);
        font-family: monospace;
        font-weight: 500;
        word-break: break-all;
      }

      .settings-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
        margin-bottom: 16px;
      }

      .settings-grid > .device-section {
        margin-bottom: 0;
      }

      @media (max-width: 768px) {
        .settings-grid {
          grid-template-columns: 1fr;
        }
      }

      .card-title {
        font-size: 15px;
        font-weight: 600;
        color: var(--primary-text-color);
        margin-bottom: 16px;
      }

      /* ─── Companion Device Card Styles ─── */

      .device-section {
        background: var(--card-background-color, #fff);
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 16px;
      }

      .companion-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
        gap: 8px;
        flex-wrap: wrap;
      }

      .section-title {
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
        flex: 1 1 auto;
      }

      .section-title > div:last-child {
        min-width: 0;
        flex: 1 1 auto;
      }

      .section-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 8px;
        flex-shrink: 0;
      }

      .section-icon.companion {
        background: rgba(3, 169, 244, 0.12);
        color: #0288d1;
      }

      .device-name {
        font-size: 16px;
        font-weight: 600;
        color: var(--primary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .device-meta {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: 2px;
      }

      .device-meta span {
        margin-right: 12px;
      }

      .status-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 4px 10px;
        border-radius: 12px;
        font-size: 11px;
        font-weight: 600;
        flex-shrink: 0;
        white-space: nowrap;
        max-width: 100%;
      }

      .status-badge.online {
        background: rgba(76, 175, 80, 0.12);
        color: #2e7d32;
      }

      .status-badge.offline {
        background: rgba(114, 114, 114, 0.12);
        color: #616161;
      }

      .status-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
      }

      .status-dot.online {
        background: #4caf50;
      }

      .status-dot.offline {
        background: #9e9e9e;
      }

      .subsection-label {
        font-size: 12px;
        font-weight: 600;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 8px;
        margin-top: 16px;
      }

      .sensor-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
        gap: 8px;
      }

      .actions-row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 16px;
      }

      .action-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        padding: 6px 12px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 6px;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        white-space: nowrap;
      }

      .action-btn:hover:not(:disabled) {
        background: var(--secondary-background-color, #f5f5f5);
        border-color: var(--primary-color, #03a9f4);
      }

      .action-btn:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .settings-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border: none;
        border-radius: 6px;
        background: transparent;
        color: var(--secondary-text-color);
        cursor: pointer;
        transition: all 0.2s;
        margin-left: 8px;
        flex-shrink: 0;
      }

      .settings-btn:hover {
        background: var(--secondary-background-color, #f0f0f0);
        color: var(--primary-text-color);
      }

      /* Modal overlay */
      .modal-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.15s ease-out;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      .modal-card {
        background: var(--card-background-color, #fff);
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        min-width: 260px;
        max-width: 400px;
        max-height: 80vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 20px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }

      .modal-title {
        font-size: 16px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .modal-close {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border: none;
        border-radius: 6px;
        background: transparent;
        color: var(--secondary-text-color);
        cursor: pointer;
        font-size: 18px;
      }

      .modal-close:hover {
        background: var(--secondary-background-color, #f0f0f0);
      }

      .modal-body {
        padding: 8px 0;
        overflow-y: auto;
      }

      .modal-action {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 20px;
        cursor: pointer;
        transition: background 0.15s;
        color: var(--primary-text-color);
        font-size: 14px;
        border: none;
        background: none;
        width: 100%;
        text-align: left;
      }

      .modal-action:hover {
        background: var(--secondary-background-color, #f5f5f5);
      }

      .modal-action.danger {
        color: var(--error-color, #db4437);
      }

      .modal-action-icon {
        display: flex;
        align-items: center;
        color: var(--secondary-text-color);
        flex-shrink: 0;
      }

      .modal-action.danger .modal-action-icon {
        color: var(--error-color, #db4437);
      }

      .modal-action:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .modal-action:disabled:hover {
        background: none;
      }

      .modal-divider {
        height: 1px;
        background: var(--divider-color, #e0e0e0);
        margin: 4px 0;
      }

      /* Hidden sensors list */
      .hidden-sensor-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }

      .hidden-sensor-item:last-child {
        border-bottom: none;
      }

      .hidden-sensor-name {
        font-size: 13px;
        color: var(--primary-text-color);
      }

      .hidden-sensor-id {
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-top: 2px;
      }

      .unhide-btn {
        padding: 4px 10px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 4px;
        background: var(--card-background-color, #fff);
        color: var(--primary-color, #03a9f4);
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        white-space: nowrap;
      }

      .unhide-btn:hover {
        background: var(--secondary-background-color, #f5f5f5);
      }

      .modal-footer {
        padding: 12px 20px;
        border-top: 1px solid var(--divider-color, #e0e0e0);
        display: flex;
        justify-content: flex-end;
      }

      .empty-hidden {
        padding: 20px;
        text-align: center;
        color: var(--secondary-text-color);
        font-size: 13px;
      }

      /* Status toast */
      .status-toast {
        position: fixed;
        bottom: 20px;
        left: 20px;
        right: 20px;
        padding: 12px 16px;
        border-radius: 8px;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        font-size: 13px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
      }

      .status-toast.success {
        border-left: 4px solid #4caf50;
      }

      .status-toast.error {
        border-left: 4px solid var(--error-color, #db4437);
        color: var(--error-color, #db4437);
      }

      @keyframes slideIn {
        from {
          transform: translateY(100%);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
    `))],fd([Lc({type:Object})],wv.prototype,"hass",void 0),fd([Lc({type:Object})],wv.prototype,"config",void 0),fd([Lc({type:Boolean})],wv.prototype,"narrow",void 0),fd([Lc({type:Object})],wv.prototype,"selectedDevice",void 0),fd([Ec()],wv.prototype,"_deviceConfig",void 0),fd([Ec()],wv.prototype,"_loading",void 0),fd([Ec()],wv.prototype,"_error",void 0),fd([Ec()],wv.prototype,"_editValues",void 0),fd([Ec()],wv.prototype,"_saving",void 0),fd([Ec()],wv.prototype,"_commandDialogOpen",void 0),fd([Ec()],wv.prototype,"_confirmAction",void 0),fd([Ec()],wv.prototype,"_confirmDialogOpen",void 0),fd([Ec()],wv.prototype,"_locationSource",void 0),fd([Ec()],wv.prototype,"_importKeyValue",void 0),fd([Ec()],wv.prototype,"_exportedKey",void 0),fd([Ec()],wv.prototype,"_exportingKey",void 0),fd([Ec()],wv.prototype,"_deviceEntities",void 0),fd([Ec()],wv.prototype,"_meshcoreDeviceMap",void 0),fd([Ec()],wv.prototype,"_entityRegistryLoaded",void 0),fd([Ec()],wv.prototype,"_hiddenSensors",void 0),fd([Ec()],wv.prototype,"_contextMenu",void 0),fd([Ec()],wv.prototype,"_settingsModalOpen",void 0),fd([Ec()],wv.prototype,"_keyManagementModalOpen",void 0),fd([Ec()],wv.prototype,"_identityFlowState",void 0),fd([Ec()],wv.prototype,"_renameSuccess",void 0),fd([Ec()],wv.prototype,"_hiddenSensorsModalKey",void 0),fd([Ec()],wv.prototype,"_statusMessage",void 0),wv=fd([Tc("meshcore-settings-page")],wv);let kv=class extends Mc{constructor(){super(),this.open=!1,this.contactName="",this.result=null,this.error="",this.availableRepeaters=[],this.targetContact=null,this.pathMode="discovery",this.pathHops=[],this.enteredPath="",this._repeaterFilter="",this._running=!1,this._onPathModeChange=e=>{this.pathMode=e.target.value},this._onExplicitPathInput=e=>{this.enteredPath=e.target.value},this._onRunTrace=()=>{if(!this._canRunTrace())return;const e="discovery"===this.pathMode?void 0:this._buildPathString();this._running=!0,this.dispatchEvent(new CustomEvent("trace-requested",{detail:{pathMode:this.pathMode,path:e},bubbles:!0,composed:!0}))},bh(this,{isOpen:()=>this.open,onEscape:()=>this._close()})}willUpdate(e){if(e.has("open")&&this.open&&!e.get("open")){const e=this.targetContact;if(!e||2!==e.type&&3!==e.type&&4!==e.type)this.pathMode="discovery",this.pathHops=[];else{this.pathMode="select";const t=this._resolveCachedHops(e);this.pathHops=t||[]}this.enteredPath="",this._repeaterFilter="",this._running=!1}(e.has("result")&&this.result||e.has("error")&&this.error)&&(this._running=!1)}_resolveCachedHops(e){var t,i;if(1!==(null!==(t=e.out_path_hash_mode)&&void 0!==t?t:0))return null;const o=(e.out_path||"").toLowerCase(),n=null!==(i=e.out_path_len)&&void 0!==i?i:0;if(!o||n<=0)return null;if(o.length<4*n)return null;const s=[];for(let e=0;e<n;e++){const t=o.substring(4*e,4*(e+1)),i=this.availableRepeaters.find(e=>(e.pubkey_prefix||"").toLowerCase().startsWith(t));if(!i)return null;s.push(i)}return s}render(){return this.open?lc(al||(al=vd`
      <div class="dialog-backdrop" @click=${0}>
        <div
          class="dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Trace ${0}"
          @click=${0}>
          <div class="dialog-header">
            <div class="dialog-title">Trace ${0}</div>
            <button class="dialog-close" aria-label="Close" @click=${0}>✕</button>
          </div>
          <div class="dialog-content">
            ${0}
          </div>
        </div>
      </div>
    `),this._close,this.contactName,e=>e.stopPropagation(),this.contactName,this._close,this._renderBody()):lc(rl||(rl=vd``))}_renderBody(){return this.error?lc(ll||(ll=vd`<div class="error-box">${0}</div>`),this.error):this.result?this._renderResult(this.result):this._running?lc(dl||(dl=vd`<div class="info-value">Tracing…</div>`)):this._renderInput()}_renderInput(){return lc(cl||(cl=vd`
      <div class="form-group">
        <label class="form-label">Path Type</label>
        <select
          class="form-select"
          .value=${0}
          @change=${0}
        >
          <option value="discovery">Path discovery (auto)</option>
          <option value="select">Select repeaters</option>
          <option value="explicit">Enter path</option>
        </select>
      </div>

      ${0}

      ${0}

      <div class="dialog-actions">
        <button
          class="btn-primary"
          ?disabled=${0}
          @click=${0}
        >
          Run Trace
        </button>
      </div>
    `),this.pathMode,this._onPathModeChange,"discovery"===this.pathMode?lc(hl||(hl=vd`<div class="info-item path-hint">
            Flood path discovery will find a route automatically. May time
            out if the target is many hops away or unreachable by flood.
          </div>`)):"select"===this.pathMode?this._renderRepeaterPicker():this._renderExplicitInput(),"discovery"!==this.pathMode&&this._canRunTrace()?lc(pl||(pl=vd`<div class="info-item">
            <div class="info-label">Resolved Path</div>
            <div class="resolved-path">${0}</div>
          </div>`),this._buildPathString()):lc(ul||(ul=vd``)),!this._canRunTrace(),this._onRunTrace)}_renderRepeaterPicker(){var e,t,i;const o=new Set(this.pathHops.map(e=>e.public_key)),n=this._repeaterFilter.trim().toLowerCase(),s=[...this.availableRepeaters].filter(e=>!o.has(e.public_key)).filter(e=>{if(!n)return!0;const t=(e.adv_name||"").toLowerCase(),i=(e.pubkey_prefix||"").toLowerCase();return t.includes(n)||i.startsWith(n)}).sort((e,t)=>(e.adv_name||"").localeCompare(t.adv_name||"")),r=(null===(e=this.targetContact)||void 0===e?void 0:e.adv_name)||(null===(t=this.targetContact)||void 0===t?void 0:t.pubkey_prefix)||"(no target)",a=(null===(i=this.targetContact)||void 0===i||null===(i=i.pubkey_prefix)||void 0===i?void 0:i.substring(0,2).toUpperCase())||"--";return lc(ml||(ml=vd`
      <div class="info-item">
        <div class="info-label">Repeaters (in order, source → target)</div>
        <div class="repeater-picker">
          <div class="picker-column">
            <div class="picker-column-label">Available</div>
            <input
              type="text"
              class="form-input picker-search"
              placeholder="Filter by name or pubkey prefix…"
              .value=${0}
              @input=${0}
              autocomplete="off"
              spellcheck="false"
            />
            <div class="picker-list">
              ${0}
            </div>
          </div>
          <div class="picker-column">
            <div class="picker-column-label">Path</div>
            <div class="picker-list">
              ${0}
            </div>
          </div>
        </div>
      </div>

      <div class="info-item">
        <div class="info-label">Target</div>
        <div class="target-row">
          <span class="target-name">${0}</span>
          <span class="target-hex">${0}</span>
        </div>
      </div>
    `),this._repeaterFilter,e=>{this._repeaterFilter=e.target.value},0===s.length?lc(gl||(gl=vd`<div class="picker-empty">${0}</div>`),n?"No matches":"No repeaters available"):s.map(e=>lc(vl||(vl=vd`
                      <div
                        class="picker-item"
                        @click=${0}
                        title="Add ${0}"
                      >
                        <span class="name">${0}</span>
                        <span class="hop-hex">${0}</span>
                      </div>
                    `),()=>this._addRepeater(e),e.adv_name,e.adv_name||e.pubkey_prefix,e.pubkey_prefix.substring(0,2).toUpperCase())),0===this.pathHops.length?lc(fl||(fl=vd`<div class="picker-empty">Click a repeater to add (or leave empty for direct-neighbor)</div>`)):this.pathHops.map((e,t)=>lc(_l||(_l=vd`
                      <div class="picker-item">
                        <span class="ordinal">${0}</span>
                        <span class="name">${0}</span>
                        <span class="hop-hex">${0}</span>
                        <button
                          class="picker-item-btn"
                          ?disabled=${0}
                          @click=${0}
                          title="Move up"
                        >▲</button>
                        <button
                          class="picker-item-btn"
                          ?disabled=${0}
                          @click=${0}
                          title="Move down"
                        >▼</button>
                        <button
                          class="picker-item-btn"
                          @click=${0}
                          title="Remove"
                        >✕</button>
                      </div>
                    `),t+1,e.adv_name||e.pubkey_prefix,e.pubkey_prefix.substring(0,2).toUpperCase(),0===t,()=>this._moveRepeater(t,-1),t===this.pathHops.length-1,()=>this._moveRepeater(t,1),()=>this._removeRepeater(t))),r,a)}_renderExplicitInput(){var e,t,i;const o=!!this.enteredPath&&!this._isValidExplicitHops(),n=(null===(e=this.targetContact)||void 0===e?void 0:e.adv_name)||(null===(t=this.targetContact)||void 0===t?void 0:t.pubkey_prefix)||"(no target)",s=(null===(i=this.targetContact)||void 0===i||null===(i=i.pubkey_prefix)||void 0===i?void 0:i.substring(0,2).toUpperCase())||"--";return lc(yl||(yl=vd`
      <div class="info-item">
        <div class="info-label">Outbound Hops (comma-separated hex)</div>
        <input
          type="text"
          class="form-input"
          placeholder="AE  (or AE,CD for multiple hops, or empty for direct neighbor)"
          .value=${0}
          @input=${0}
          autocomplete="off"
          spellcheck="false"
        />
        <div class="path-hint">
          Enter outbound hops only — the target and return hops are added
          automatically.  For a direct-neighbor target, leave this empty.
          Each hop is 2, 4, or 8 hex chars (1, 2, or 4 bytes); all hops
          must be the same width.  1 byte is recommended — 2-byte and
          4-byte hashes may not complete round-trip in some meshes.
        </div>
        ${0}
      </div>
      <div class="info-item">
        <div class="info-label">Target</div>
        <div class="target-row">
          <span class="target-name">${0}</span>
          <span class="target-hex">${0}</span>
        </div>
      </div>
    `),this.enteredPath,this._onExplicitPathInput,lc(o?bl||(bl=vd`<div class="path-error">
              Invalid format — hex pairs separated by commas, all
              the same width (2, 4, or 8 chars).
            </div>`):xl||(xl=vd``)),n,s)}_addRepeater(e){this.pathHops=[...this.pathHops,e]}_removeRepeater(e){this.pathHops=this.pathHops.filter((t,i)=>i!==e)}_moveRepeater(e,t){const i=e+t;if(i<0||i>=this.pathHops.length)return;const o=[...this.pathHops];[o[e],o[i]]=[o[i],o[e]],this.pathHops=o}_isValidExplicitHops(){const e=this.enteredPath.trim();if(!e)return!0;const t=e.split(",").map(e=>e.trim());if(0===t.length)return!1;const i=t[0].length;if(![2,4,8].includes(i))return!1;const o=/^[0-9a-fA-F]+$/;return t.every(e=>e.length===i&&o.test(e))}_canRunTrace(){return"discovery"===this.pathMode||("select"===this.pathMode?!!this.targetContact:"explicit"===this.pathMode&&!!this.targetContact&&this._isValidExplicitHops())}_buildPathString(){if("select"===this.pathMode){if(!this.targetContact)return"";const e=this.targetContact.pubkey_prefix.substring(0,2).toUpperCase(),t=this.pathHops.map(e=>e.pubkey_prefix.substring(0,2).toUpperCase());return 0===t.length?e:[...t,e,...[...t].reverse()].join(",")}if("explicit"===this.pathMode){if(!this.targetContact)return"";const e=this.targetContact.pubkey_prefix.substring(0,2).toUpperCase(),t=this.enteredPath.trim();if(!t)return e;const i=t.split(",").map(e=>e.trim().toUpperCase());return[...i,e,...[...i].reverse()].join(",")}return""}_renderResult(e){const t=(e.path||[]).filter(e=>e.hash);return lc(wl||(wl=vd`
      <div class="info-item">
        <div class="info-label">Round Trip</div>
        <div class="info-value rtt-value">${0}</div>
      </div>

      <div class="info-item">
        <div class="info-label">Hops</div>
        <div class="info-value">
          ${0}
        </div>
      </div>

      ${0}

      ${0}

      ${0}
    `),e.response_time,0===e.hops?"Direct (0 hops)":`${e.hops}`,null!==e.final_snr&&void 0!==e.final_snr?lc(kl||(kl=vd`
            <div class="info-item">
              <div class="info-label">Final SNR (at this device)</div>
              <div class="info-value">${0} dB</div>
            </div>
          `),e.final_snr.toFixed(2)):lc($l||($l=vd``)),"number"==typeof e.final_rssi?lc(Sl||(Sl=vd`
            <div class="info-item">
              <div class="info-label">RSSI (at this device)</div>
              <div class="info-value">${0} dBm</div>
            </div>
          `),e.final_rssi):lc(Cl||(Cl=vd``)),t.length>0?lc(Ml||(Ml=vd`
            <div class="info-item">
              <div class="info-label">Return Path (per-hop SNR)</div>
              <div class="hop-list">
                ${0}
              </div>
            </div>
          `),t.map((e,t)=>lc(zl||(zl=vd`
                    <div class="hop-row">
                      <span>Hop ${0}: ${0}</span>
                      <span>${0} dB</span>
                    </div>
                  `),t+1,e.hash,e.snr.toFixed(2)))):lc(Tl||(Tl=vd``)))}_close(){this.open=!1,this.dispatchEvent(new CustomEvent("trace-dialog-closed",{bubbles:!0,composed:!0}))}};kv.styles=[Ic,$d(Pl||(Pl=vd`
    :host { display: contents; }

    .dialog-backdrop {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      animation: fadeIn 0.2s;
    }

    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

    .dialog {
      background: var(--card-background-color, #fff);
      border-radius: 8px;
      max-width: 700px;
      width: 90%;
      max-height: 85vh;
      overflow-y: auto;
      box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
      animation: slideUp 0.3s;
    }

    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    .dialog-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
    }

    .dialog-title { font-size: 18px; font-weight: 600; color: var(--primary-text-color); }

    .dialog-close {
      background: none; border: none; font-size: 20px; cursor: pointer;
      color: var(--secondary-text-color); padding: 0;
      width: 32px; height: 32px;
      display: flex; align-items: center; justify-content: center;
    }

    .dialog-close:hover { color: var(--primary-text-color); }

    .dialog-content { padding: 16px; }

    .info-item {
      padding: 8px;
      background: var(--primary-background-color, #fafafa);
      border-radius: 6px;
      margin-bottom: 8px;
    }

    .info-label {
      font-size: 11px; color: var(--secondary-text-color, #727272);
      text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;
    }

    .info-value {
      font-size: 13px; color: var(--primary-text-color);
      margin-top: 4px; font-family: monospace;
    }

    .rtt-value {
      font-size: 24px; font-weight: 600;
      font-family: inherit;
      color: var(--primary-color, #03a9f4);
    }

    .hop-list {
      margin-top: 4px;
      font-family: monospace;
      font-size: 12px;
    }

    .hop-row {
      display: flex;
      justify-content: space-between;
      padding: 2px 0;
    }

    .hop-row + .hop-row {
      border-top: 1px dashed var(--divider-color, #e0e0e0);
    }

    .error-box {
      padding: 12px;
      background: rgba(219, 68, 55, 0.08);
      border: 1px solid rgba(219, 68, 55, 0.2);
      border-radius: 6px;
      color: var(--error-color, #db4437);
      font-size: 13px;
    }

    /* Input phase */

    select, input[type="text"] {
      width: 100%;
      padding: 8px 10px;
      margin-top: 4px;
      font-size: 14px;
      color: var(--primary-text-color);
      background: var(--card-background-color, #fff);
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      box-sizing: border-box;
      font-family: inherit;
    }

    select:focus, input[type="text"]:focus {
      outline: none;
      border-color: var(--primary-color, #03a9f4);
    }

    input[type="text"] {
      font-family: monospace;
    }

    .path-hint {
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      font-style: italic;
      padding: 8px;
    }

    .path-error {
      margin-top: 6px;
      font-size: 12px;
      color: var(--error-color, #db4437);
    }

    .repeater-picker {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    .picker-column {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .picker-column-label {
      font-size: 11px;
      color: var(--secondary-text-color, #727272);
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.5px;
      margin-bottom: 2px;
    }

    .picker-list {
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-height: 60px;
      max-height: 200px;
      overflow-y: auto;
      padding: 4px;
      background: var(--card-background-color, #fff);
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
    }

    /* Picker-search uses .form-input for sizing / padding
       / border / border-radius (panel-wide form convention).  Local
       .picker-search only supplies picker-column-specific spacing. */
    .picker-search {
      margin-bottom: 4px;
    }

    .picker-item {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 6px 8px;
      background: var(--primary-background-color, #fafafa);
      border-radius: 4px;
      font-size: 12px;
      cursor: pointer;
      user-select: none;
    }

    .picker-item:hover {
      background: var(--secondary-background-color, #eef);
    }

    .picker-item[disabled] {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .picker-item .name {
      flex: 1;
      font-family: inherit;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .picker-item .hop-hex {
      font-family: monospace;
      font-size: 11px;
      color: var(--secondary-text-color, #727272);
    }

    .picker-item .ordinal {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 20px;
      height: 20px;
      border-radius: 10px;
      background: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
      font-size: 11px;
      font-weight: 600;
      font-family: inherit;
    }

    .picker-item-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--secondary-text-color);
      padding: 2px 4px;
      font-size: 14px;
      line-height: 1;
    }

    .picker-item-btn:hover:not(:disabled) {
      color: var(--primary-text-color);
    }

    .picker-item-btn:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    .picker-empty {
      padding: 12px 8px;
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      font-style: italic;
      text-align: center;
    }

    .dialog-actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      padding-top: 8px;
    }

    .btn-primary {
      padding: 8px 16px;
      font-size: 14px;
      font-weight: 500;
      color: var(--text-primary-color, #fff);
      background: var(--primary-color, #03a9f4);
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .btn-primary:hover:not(:disabled) {
      filter: brightness(0.95);
    }

    .btn-primary:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .resolved-path {
      margin-top: 4px;
      font-family: monospace;
      font-size: 12px;
      color: var(--primary-text-color);
      background: var(--primary-background-color, #fafafa);
      padding: 6px 8px;
      border-radius: 4px;
      word-break: break-all;
    }

    /* Target row for both Select and Enter-path modes. */
    .target-row {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 12px;
      background: rgba(3, 169, 244, 0.08);
      border: 1px solid rgba(3, 169, 244, 0.25);
      border-radius: 6px;
      font-size: 13px;
      margin-top: 4px;
    }

    .target-row .target-name {
      flex: 1;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .target-row .target-hex {
      font-family: monospace;
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
    }
  `))],fd([Lc({type:Boolean})],kv.prototype,"open",void 0),fd([Lc({type:String})],kv.prototype,"contactName",void 0),fd([Lc({type:Object})],kv.prototype,"result",void 0),fd([Lc({type:String})],kv.prototype,"error",void 0),fd([Lc({type:Array})],kv.prototype,"availableRepeaters",void 0),fd([Lc({type:Object})],kv.prototype,"targetContact",void 0),fd([Ec()],kv.prototype,"pathMode",void 0),fd([Ec()],kv.prototype,"pathHops",void 0),fd([Ec()],kv.prototype,"enteredPath",void 0),fd([Ec()],kv.prototype,"_repeaterFilter",void 0),fd([Ec()],kv.prototype,"_running",void 0),kv=fd([Tc("meshcore-trace-dialog")],kv);let $v=class extends Mc{constructor(){super(),this.open=!1,this.contacts=[],this._typeFilter="all",this._search="",this._onTypeChange=e=>{this._typeFilter=e.target.value},this._onSearchInput=e=>{this._search=e.target.value},this._close=()=>{this.dispatchEvent(new CustomEvent("target-picker-closed",{bubbles:!0,composed:!0}))},bh(this,{isOpen:()=>this.open,onEscape:()=>this._close()})}willUpdate(e){e.has("open")&&this.open&&!e.get("open")&&(this._typeFilter="all",this._search="")}render(){if(!this.open)return lc(Al||(Al=vd``));const e=this._search.trim().toLowerCase(),t=this.contacts.filter(e=>{switch(this._typeFilter){case"all":default:return!0;case"client":return 1===e.type;case"repeater":return 2===e.type;case"room_server":return 3===e.type;case"sensor":return 4===e.type}}).filter(t=>{if(!e)return!0;const i=(t.adv_name||"").toLowerCase(),o=(t.pubkey_prefix||"").toLowerCase();return i.includes(e)||o.startsWith(e)}).sort((e,t)=>(e.adv_name||"").localeCompare(t.adv_name||""));return lc(Ll||(Ll=vd`
      <div class="dialog-backdrop" @click=${0}>
        <div
          class="dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Choose trace target"
          @click=${0}>
          <div class="dialog-header">
            <div class="dialog-title">Choose Trace Target</div>
            <button class="dialog-close" aria-label="Close" @click=${0} title="Close">✕</button>
          </div>
          <div class="dialog-content">
            <div class="filter-row">
              <div class="form-group" style="margin: 0;">
                <label class="form-label">Type</label>
                <select
                  class="form-select"
                  .value=${0}
                  @change=${0}
                >
                  <option value="all">All</option>
                  <option value="client">Companion / Client</option>
                  <option value="repeater">Repeater</option>
                  <option value="room_server">Room Server</option>
                  <option value="sensor">Sensor</option>
                </select>
              </div>
              <div class="form-group" style="margin: 0;">
                <label class="form-label">Search</label>
                <input
                  class="form-input"
                  type="text"
                  placeholder="Name or pubkey prefix…"
                  .value=${0}
                  @input=${0}
                  autocomplete="off"
                  spellcheck="false"
                />
              </div>
            </div>
            <div class="results-list">
              ${0}
            </div>
          </div>
        </div>
      </div>
    `),this._close,e=>e.stopPropagation(),this._close,this._typeFilter,this._onTypeChange,this._search,this._onSearchInput,0===t.length?lc(El||(El=vd`<div class="empty">No matching contacts</div>`)):t.map(e=>lc(Il||(Il=vd`
                    <div
                      class="result-row"
                      @click=${0}
                      title="Trace to ${0}"
                    >
                      <span class="result-icon">${0}</span>
                      <span class="result-name">${0}</span>
                      <span class="result-hex">${0}</span>
                    </div>
                  `),()=>this._select(e),e.adv_name||e.pubkey_prefix,this._iconFor(e.type),e.adv_name||e.pubkey_prefix,(e.pubkey_prefix||"").substring(0,2).toUpperCase())))}_iconFor(e){switch(e){case 2:return lc(Ol||(Ol=vd`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V10h4.27c.15-.86.45-1.66.87-2.36l-1.82-1.06a.5.5 0 01-.18-.68l.5-.87a.5.5 0 01.68-.18l1.81 1.05C19.66 4.66 20.78 4 22 4v2c-.8 0-1.54.32-2.08.84l1.5 2.6a.5.5 0 01-.18.68l-.87.5a.5.5 0 01-.68-.18L18.2 7.92c-.14.65-.2 1.33-.2 2.08 0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6z"/></svg>`));case 3:return lc(Rl||(Rl=vd`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M4 6h16v4H4V6zm0 8h16v4H4v-4zm2-6.5A.5.5 0 116 7a.5.5 0 010 .5zm0 8A.5.5 0 116 15a.5.5 0 010 .5z"/></svg>`));case 4:return lc(Dl||(Dl=vd`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2a4 4 0 00-4 4v7.55A5.5 5.5 0 1015.5 20a5.47 5.47 0 00.5-2.45V6a4 4 0 00-4-4zm0 2a2 2 0 012 2v8.1a3.5 3.5 0 11-4 0V6a2 2 0 012-2z"/></svg>`));default:return lc(Bl||(Bl=vd`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`))}}_select(e){this.dispatchEvent(new CustomEvent("target-selected",{detail:e,bubbles:!0,composed:!0}))}};$v.styles=[Ic,$d(Nl||(Nl=vd`
      :host { display: contents; }

      .dialog-backdrop {
        position: fixed;
        top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeIn 0.2s;
      }

      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

      .dialog {
        background: var(--card-background-color, #fff);
        border-radius: 8px;
        max-width: 560px;
        width: 90%;
        max-height: 85vh;
        display: flex;
        flex-direction: column;
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
        animation: slideUp 0.3s;
      }

      @keyframes slideUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }

      .dialog-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }

      .dialog-title {
        font-size: 18px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .dialog-close {
        background: none; border: none; font-size: 20px; cursor: pointer;
        color: var(--secondary-text-color); padding: 0;
        width: 32px; height: 32px;
        display: flex; align-items: center; justify-content: center;
      }

      .dialog-close:hover { color: var(--primary-text-color); }

      .dialog-content {
        padding: 16px;
        overflow-y: auto;
      }

      .filter-row {
        display: grid;
        grid-template-columns: minmax(140px, 200px) 1fr;
        gap: 8px;
        margin-bottom: 12px;
      }

      @media (max-width: 520px) {
        .filter-row { grid-template-columns: 1fr; }
      }

      .results-list {
        display: flex;
        flex-direction: column;
        gap: 4px;
        max-height: 50vh;
        overflow-y: auto;
        padding: 4px;
        background: var(--primary-background-color, #fafafa);
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 6px;
      }

      .result-row {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 12px;
        background: var(--card-background-color, #fff);
        border-radius: 6px;
        cursor: pointer;
        user-select: none;
        font-size: 14px;
        transition: background 0.15s;
      }

      .result-row:hover {
        background: var(--secondary-background-color, #eef);
      }

      .result-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        color: var(--primary-color, #03a9f4);
        flex-shrink: 0;
      }

      .result-name {
        flex: 1;
        color: var(--primary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .result-hex {
        font-family: monospace;
        font-size: 12px;
        color: var(--secondary-text-color, #727272);
        flex-shrink: 0;
      }

      .empty {
        padding: 24px 12px;
        text-align: center;
        color: var(--secondary-text-color, #727272);
        font-style: italic;
        font-size: 13px;
      }
    `))],fd([Lc({type:Boolean})],$v.prototype,"open",void 0),fd([Lc({type:Array})],$v.prototype,"contacts",void 0),fd([Ec()],$v.prototype,"_typeFilter",void 0),fd([Ec()],$v.prototype,"_search",void 0),$v=fd([Tc("meshcore-target-picker")],$v);let Sv=class extends Mc{constructor(){super(...arguments),this.status=null,this.radios=[],this._pending=null,this._busy=!1,this._error="",this._warning=""}_radioFor(e){return this.radios.find(t=>t.entry_id===e)}_open(e,t){this._error="",this._warning="",this._pending={radio:e,action:t}}_close(){this._busy||(this._pending=null)}async _confirm(){if(!this.hass||!this._pending)return;const{radio:e,action:t}=this._pending;this._busy=!0,this._error="";try{if("reload"===t)await(i=this.hass,o=e.entry_id,i.callWS({type:"meshcore_bbs/reload_radio",entry_id:o}));else{const i=await function(e,t,i){return e.callWS({type:"meshcore_bbs/set_radio_enabled",entry_id:t,enabled:i})}(this.hass,e.entry_id,"enable"===t);null!=i&&i.bluetooth_error&&(this._warning=i.bluetooth_error)}this._warning||(this._pending=null),this.dispatchEvent(new CustomEvent("radios-changed",{detail:{entryId:e.entry_id,action:t},bubbles:!0,composed:!0}))}catch(e){const t=e;this._error=(null==t?void 0:t.message)||String(e)}finally{this._busy=!1}var i,o}_renderStatus(){const e=this.device;if(!e||null===this.status)return hc;const t="online"===this.status,i=t?"Connected":"Disconnected",o=this._radioFor(e.entry_id);return"ble"!==(null==o?void 0:o.connection_type)?lc(Fl||(Fl=vd`<span class="connection-status ${0}">
        <span class="status-dot"></span>${0}</span>`),t?"online":"offline",i):lc(ql||(ql=vd`<button type="button" class="connection-status ${0}"
        title=${0}
        @click=${0}>
      <span class="status-dot"></span>${0}</button>`),t?"online":"offline",t?"Disconnect this Bluetooth radio":"Try to reconnect",()=>this._open(o,t?"disconnect":"reload"),i)}_renderDisabled(){return this.radios.filter(e=>e.disabled&&"ble"===e.connection_type).map(e=>lc(Hl||(Hl=vd`<button type="button" class="connection-status off" title="Reconnect ${0}"
          @click=${0}>
        <span class="status-dot"></span>${0} · off</button>`),e.title,()=>this._open(e,"enable"),e.title))}_renderDialog(){const e=this._pending;if(!e)return hc;const t=e.radio.title,i={disconnect:{title:`Disconnect ${t}?`,body:"The MeshCore entry is disabled and the radio is blocked in the system Bluetooth, which drops the link, so the radio is free for e.g. the phone app. The pairing (PIN) is kept.",hint:'Click its "off" chip in the header to reconnect.',button:"Disconnect",cls:"danger"},reload:{title:`Reconnect ${t}?`,body:"The MeshCore entry is reloaded and Home Assistant tries to connect to the radio again.",hint:"Make sure the radio is on, in range and not connected to another device.",button:"Reconnect",cls:"primary"},enable:{title:`Reconnect ${t}?`,body:"The radio is unblocked in the system Bluetooth and the MeshCore entry is enabled again, so Home Assistant connects to it.",hint:"Disconnect it from the phone app first. Connecting can take a few seconds.",button:"Reconnect",cls:"primary"}}[e.action];return lc(jl||(jl=vd`
      <div class="dialog-overlay" @click=${0}>
        <div class="dialog" role="dialog" aria-modal="true" aria-label=${0}
             @click=${0}>
          <div class="dialog-header"><div class="dialog-header-title">${0}</div></div>
          <div class="dialog-body">
            <p>${0}</p>
            <div class="hint">${0}</div>
            ${0}
            ${0}
          </div>
          <div class="dialog-footer">
            ${0}
          </div>
        </div>
      </div>`),this._close,i.title,e=>e.stopPropagation(),i.title,i.body,i.hint,this._error?lc(Zl||(Zl=vd`<div class="error">${0}</div>`),this._error):hc,this._warning?lc(Vl||(Vl=vd`<div class="error">Done, but the system Bluetooth could not be updated: ${0}.
                  ${0}</div>`),this._warning,"disconnect"===e.action?'The radio may stay connected: run "bluetoothctl block <MAC>" on the host.':'If it does not connect, run "bluetoothctl unblock <MAC>" on the host.'):hc,this._warning?lc(Kl||(Kl=vd`<button class="dialog-button primary" @click=${0}>Close</button>`),this._close):lc(Ul||(Ul=vd`
                <button class="dialog-button" ?disabled=${0} @click=${0}>Cancel</button>
                <button class="dialog-button ${0}" ?disabled=${0} @click=${0}>
                  ${0}
                </button>`),this._busy,this._close,i.cls,this._busy,this._confirm,this._busy?"Please wait…":i.button))}render(){return lc(Wl||(Wl=vd`${0}${0}${0}`),this._renderStatus(),this._renderDisabled(),this._renderDialog())}};Sv.styles=[Ic,$d(Gl||(Gl=vd`
      :host { display: contents; }
      .connection-status {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 4px 10px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 500;
        border: 1px solid;
        font-family: inherit;
        white-space: nowrap;
      }
      button.connection-status { cursor: pointer; }
      button.connection-status:hover { filter: brightness(1.15); }
      .online {
        color: #4caf50;
        border-color: rgba(76, 175, 80, 0.4);
        background: rgba(76, 175, 80, 0.08);
      }
      .offline {
        color: var(--error-color, #db4437);
        border-color: rgba(219, 68, 55, 0.4);
        background: rgba(219, 68, 55, 0.08);
      }
      .off {
        color: var(--secondary-text-color);
        border-color: var(--divider-color, #e0e0e0);
        background: transparent;
      }
      .status-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; background: currentColor; }
      .dialog { max-width: 380px; text-align: left; }
      .dialog-body p { margin: 0 0 8px; font-size: 14px; color: var(--primary-text-color); }
      .hint { font-size: 12px; color: var(--secondary-text-color); }
      .error { color: var(--error-color, #db4437); font-size: 13px; margin-top: 8px; }
      .dialog-button.primary {
        background: var(--primary-color, #03a9f4);
        border-color: var(--primary-color, #03a9f4);
        color: #fff;
      }
      .dialog-button.danger {
        background: var(--error-color, #db4437);
        border-color: var(--error-color, #db4437);
        color: #fff;
      }
    `))],fd([Lc({attribute:!1})],Sv.prototype,"hass",void 0),fd([Lc({attribute:!1})],Sv.prototype,"device",void 0),fd([Lc({attribute:!1})],Sv.prototype,"status",void 0),fd([Lc({attribute:!1})],Sv.prototype,"radios",void 0),fd([Ec()],Sv.prototype,"_pending",void 0),fd([Ec()],Sv.prototype,"_busy",void 0),fd([Ec()],Sv.prototype,"_error",void 0),fd([Ec()],Sv.prototype,"_warning",void 0),Sv=fd([Tc("meshcore-radio-connection")],Sv);let Cv=class extends Mc{constructor(){super(),this.narrow=!1,this._config=null,this._activeTab="chat",this._devices=[],this._radios=[],this._radioRetryTimers=[],this._contacts=[],this._channels=[],this._selectedEntryId=null,this._loading=!0,this._loadingStarted=!1,this._error=null,this._unsubscribeList=[],this._unread=new Jc,this._pendingChatTarget=null,this._activeChatEntityId=null,this._deviceDropdownOpen=!1,this._onDocClickForDropdown=e=>{var t;const i=e.composedPath?e.composedPath():[],o=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".device-info-wrap");o&&i.includes(o)||this._closeDeviceDropdown()},this._onDocKeyForDropdown=e=>{"Escape"===e.key&&this._closeDeviceDropdown()},this._traceDialogOpen=!1,this._traceDialogContactName="",this._traceDialogResult=null,this._traceDialogError="",this._traceDialogPubkeyPrefix="",this._traceDialogEntryId=void 0,this._traceDialogTargetContact=null,this._targetPickerOpen=!1,this._pendingTraceEntryId=void 0,this._onRadiosChanged=e=>{var t;const i=null===(t=e.detail)||void 0===t?void 0:t.action;this._radioRetryTimers.forEach(e=>clearTimeout(e)),this._radioRetryTimers=[],this._refreshDevices(),"disconnect"!==i&&(this._radioRetryTimers=[4e3,1e4,2e4,4e4].map(e=>window.setTimeout(()=>{this._refreshDevices()},e)))},this._onTraceRequested=async e=>{if(!this.hass)return;const{pathMode:t,path:i}=e.detail;try{const e=await async function(e,t,i,o="discovery",n){const s={type:"meshcore_bbs/trace",pubkey_prefix:t};return i&&(s.entry_id=i),"select"!==o&&"explicit"!==o||!n||(s.path=n),e.callWS(s)}(this.hass,this._traceDialogPubkeyPrefix,this._traceDialogEntryId,t,i);try{const t=await Kc(this.hass,"get_stats_radio",void 0,this._traceDialogEntryId),i=t.success?function(e){try{var t;const i=null===(t=JSON.parse(e))||void 0===t?void 0:t.last_rssi;return"number"==typeof i&&Number.isFinite(i)?i:void 0}catch(e){return}}(t.response):void 0;void 0!==i&&(e.final_rssi=i)}catch(e){}this._traceDialogResult=e}catch(e){this._traceDialogError=(null==e?void 0:e.message)||(null==e?void 0:e.code)||"Unknown error"}},this._onCompanionTraceRequested=e=>{var t,i,o;this._pendingTraceEntryId=null!==(t=null!==(i=null===(o=e.detail)||void 0===o?void 0:o.entryId)&&void 0!==i?i:this._selectedEntryId)&&void 0!==t?t:void 0,this._targetPickerOpen=!0},this._onTargetPicked=e=>{const t=e.detail;this._targetPickerOpen=!1,t&&(this._traceDialogPubkeyPrefix=t.pubkey_prefix,this._traceDialogEntryId=this._pendingTraceEntryId,this._traceDialogContactName=t.adv_name||t.pubkey_prefix,this._traceDialogTargetContact=t,this._traceDialogResult=null,this._traceDialogError="",this._traceDialogOpen=!0)},this._unread.onMarkReadRequested(e=>{this._handleMarkReadRequested(e)})}connectedCallback(){var e;super.connectedCallback(),this._loadData(),this._setupSubscriptions(),this.hass&&(dh.attach(this.hass),Sh.attach(this.hass,null!==(e=this._selectedEntryId)&&void 0!==e?e:void 0))}disconnectedCallback(){super.disconnectedCallback(),this._radioRetryTimers.forEach(e=>clearTimeout(e)),this._radioRetryTimers=[],this._teardownSubscriptions(),dh.detach(),this._closeDeviceDropdown()}_toggleDeviceDropdown(){this._deviceDropdownOpen?this._closeDeviceDropdown():this._openDeviceDropdown()}_openDeviceDropdown(){this._deviceDropdownOpen||(this._deviceDropdownOpen=!0,setTimeout(()=>{document.addEventListener("click",this._onDocClickForDropdown,!0),document.addEventListener("keydown",this._onDocKeyForDropdown,!0)},0))}_closeDeviceDropdown(){this._deviceDropdownOpen&&(this._deviceDropdownOpen=!1,document.removeEventListener("click",this._onDocClickForDropdown,!0),document.removeEventListener("keydown",this._onDocKeyForDropdown,!0))}_selectDevice(e){e!==this._selectedEntryId&&(this._selectedEntryId=e,this._pendingChatTarget=null,Promise.all([this._loadDeviceData(),this._loadUnreadCounts()])),this._closeDeviceDropdown()}_setupSubscriptions(){var e;this._teardownSubscriptions(),null!==(e=this.hass)&&void 0!==e&&null!==(e=e.connection)&&void 0!==e&&e.subscribeEvents&&(this.hass.connection.subscribeEvents(e=>{e.data.entry_id===this._selectedEntryId&&this._loadDeviceData()},"meshcore_channels_updated").then(e=>{this._unsubscribeList.push(e)}),this.hass.connection.subscribeEvents(e=>{e.data.entry_id===this._selectedEntryId&&this._loadDeviceData()},"meshcore_channel_removed").then(e=>{this._unsubscribeList.push(e)}),this.hass.connection.subscribeEvents(e=>{var t;this._activeChatEntityId&&(null===(t=e.data)||void 0===t?void 0:t.entity_id)===this._activeChatEntityId||this._loadUnreadCounts()},"meshcore_unread_updated").then(e=>{this._unsubscribeList.push(e)}))}_teardownSubscriptions(){this._unsubscribeList.length>0&&(this._unsubscribeList.forEach(e=>{try{e()}catch(e){}}),this._unsubscribeList=[])}updated(e){var t,i;e.has("hass")&&this.hass&&(dh.attach(this.hass),Sh.attach(this.hass,null!==(t=this._selectedEntryId)&&void 0!==t?t:void 0)),e.has("_selectedEntryId")&&(dh.setActiveEntry(this._selectedEntryId),this.hass&&Sh.attach(this.hass,null!==(i=this._selectedEntryId)&&void 0!==i?i:void 0)),e.has("hass")&&this.hass&&!this._config&&!this._loadingStarted&&this._loadData()}get _selectedDevice(){return this._devices.find(e=>e.entry_id===this._selectedEntryId)}render(){var e,t,i;if(this._loading)return lc(Xl||(Xl=vd`
        <div class="panel">
          <div class="center-message">
            <div class="spinner"></div>
          </div>
        </div>
      `));if(this._error&&!this._config){const e="No MeshCore devices found"===this._error;return lc(Yl||(Yl=vd`
        <div class="panel">
          <div class="center-message">
            <div>
              <p>${0}</p>
              ${0}
              <p style="font-size: 12px; margin-top: 8px;">
                ${0}
              </p>
            </div>
          </div>
        </div>
      `),this._error,this._radios.some(e=>e.disabled)?lc(Jl||(Jl=vd`<div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-top: 12px;">
                    <meshcore-radio-connection .hass=${0} .radios=${0}
                      @radios-changed=${0}></meshcore-radio-connection>
                  </div>`),this.hass,this._radios,this._onRadiosChanged):"",e?lc(Ql||(Ql=vd`Open <a href="/config/repairs">Settings &rarr; System &rarr; Repairs</a>
                         for setup guidance, or add the MeshCore integration via
                         <a href="/config/integrations">Settings &rarr; Devices &amp; Services</a>.`)):"Check that the MeshCore integration is loaded and connected.")}const o=this._selectedDevice;return lc(ed||(ed=vd`
      <div class="panel">
        <div class="panel-header">
          <div class="header-left">
            ${0}
            <div class="panel-title">MeshCore BBS</div>
          </div>
          <div class="header-right">
            <meshcore-radio-connection
              .hass=${0}
              .device=${0}
              .status=${0}
              .radios=${0}
              @radios-changed=${0}>
            </meshcore-radio-connection>
            ${0}
            ${0}
          </div>
        </div>

        ${0}

        <div class="tab-bar">
          <button
            class=${0}
            @click=${0}>
            Chat
          </button>
          <button
            class=${0}
            @click=${0}>
            Devices
          </button>
          <button
            class=${0}
            @click=${0}>
            Nodes
          </button>
          <button
            class=${0}
            @click=${0}>
            Settings
          </button>
        </div>

        <div class="page-container">
          ${0}
        </div>

        <meshcore-trace-dialog
          ?open=${0}
          .contactName=${0}
          .result=${0}
          .error=${0}
          .availableRepeaters=${0}
          .targetContact=${0}
          @trace-requested=${0}
          @trace-dialog-closed=${0}>
        </meshcore-trace-dialog>

        <meshcore-target-picker
          ?open=${0}
          .contacts=${0}
          @target-selected=${0}
          @target-picker-closed=${0}>
        </meshcore-target-picker>
      </div>
    `),this.narrow||"always_hidden"===(null===(e=this.hass)||void 0===e?void 0:e.dockedSidebar)?lc(td||(td=vd`<button class="menu-icon" @click=${0} aria-label="Toggle sidebar">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                </button>`),this._toggleMenu):lc(id||(id=vd``)),this.hass,o,o?this._getNodeStatus(o):null,this._radios,this._onRadiosChanged,o&&null!==this._getBatteryLevel(o)?lc(od||(od=vd`
                  <span class="battery-indicator">
                    <span class="battery-icon">
                      <span class="battery-fill ${0}"
                            style="width: ${0}%"></span>
                    </span>
                    <span class="battery-pct">${0}%</span>
                  </span>`),this._getBatteryLevel(o)>50?"high":this._getBatteryLevel(o)>20?"medium":"low",this._getBatteryLevel(o),this._getBatteryLevel(o)):lc(nd||(nd=vd``)),this._devices.length>1?lc(sd||(sd=vd`
                  <div class="device-info-wrap">
                    <button
                      type="button"
                      class="device-switcher"
                      aria-haspopup="listbox"
                      aria-expanded=${0}
                      @click=${0}>
                      <span class="device-name">${0}</span>
                      <span class="device-prefix">(${0})</span>
                      <span class="device-switcher-caret" aria-hidden="true">▾</span>
                    </button>
                    ${0}
                  </div>
                `),this._deviceDropdownOpen?"true":"false",this._toggleDeviceDropdown,(null==o?void 0:o.name)||"",(null==o||null===(t=o.pubkey_prefix)||void 0===t?void 0:t.substring(0,6))||"",this._deviceDropdownOpen?lc(rd||(rd=vd`
                          <ul class="device-switcher-menu" role="listbox">
                            ${0}
                          </ul>
                        `),this._devices.map(e=>{var t;return lc(ad||(ad=vd`
                                <li
                                  role="option"
                                  aria-selected=${0}
                                  class=${0}
                                  @click=${0}>
                                  <span class="device-name">
                                    ${0}${0}
                                  </span>
                                  <span class="device-prefix">
                                    (${0})
                                  </span>
                                </li>
                              `),e.entry_id===this._selectedEntryId?"true":"false",e.entry_id===this._selectedEntryId?"active":"",()=>this._selectDevice(e.entry_id),e.name,e.connected?"":" — offline",(null===(t=e.pubkey_prefix)||void 0===t?void 0:t.substring(0,6))||"?")})):""):lc(ld||(ld=vd`
                  <div class="device-info-wrap">
                    <span class="device-name">${0}</span>
                    <span class="device-prefix">(${0})</span>
                  </div>
                `),(null==o?void 0:o.name)||"",(null==o||null===(i=o.pubkey_prefix)||void 0===i?void 0:i.substring(0,6))||""),this._error?lc(dd||(dd=vd`<div class="error-banner">${0}</div>`),this._error):lc(cd||(cd=vd``)),"chat"===this._activeTab?"active":"",()=>this._activeTab="chat","devices"===this._activeTab?"active":"",()=>this._activeTab="devices","nodes"===this._activeTab?"active":"",()=>this._activeTab="nodes","settings"===this._activeTab?"active":"",()=>this._activeTab="settings",this._renderActivePage(),this._traceDialogOpen,this._traceDialogContactName,this._traceDialogResult,this._traceDialogError,this._contacts.filter(e=>2===e.type||3===e.type||4===e.type),this._traceDialogTargetContact,this._onTraceRequested,()=>{this._traceDialogOpen=!1},this._targetPickerOpen,this._contacts,this._onTargetPicked,()=>{this._targetPickerOpen=!1})}_renderActivePage(){switch(this._activeTab){case"chat":return lc(hd||(hd=vd`
          <meshcore-bbs-page
            .hass=${0}
            .config=${0}
            .conversations=${0}
            .unread=${0}
            .selectedId=${0}
            .narrow=${0}
            @active-entity-changed=${0}
            @node-action=${0}
            @contacts-changed=${0}
            @channels-changed=${0}></meshcore-bbs-page>`),this.hass,this._config,[...this._channels,...this._contacts.filter(e=>e.added_to_node)],this._unread,this._pendingChatTarget,this.narrow,this._onActiveEntityChanged,this._handleNodeAction,()=>this._loadDeviceData(),()=>this._loadDeviceData());case"devices":return lc(pd||(pd=vd`
          <meshcore-devices-page
            .hass=${0}
            .config=${0}
            .selectedDevice=${0}
            .narrow=${0}></meshcore-devices-page>`),this.hass,this._config,this._selectedDevice,this.narrow);case"nodes":return lc(ud||(ud=vd`
          <meshcore-nodes-page
            .hass=${0}
            .config=${0}
            .contacts=${0}
            .channels=${0}
            .narrow=${0}
            @node-action=${0}
            @contacts-changed=${0}></meshcore-nodes-page>`),this.hass,this._config,this._contacts,this._channels,this.narrow,this._handleNodeAction,()=>this._loadDeviceData());case"settings":return lc(md||(md=vd`
          <meshcore-settings-page
            .hass=${0}
            .config=${0}
            .selectedDevice=${0}
            .narrow=${0}
            @companion-trace-requested=${0}
            @device-renamed=${0}></meshcore-settings-page>`),this.hass,this._config,this._selectedDevice,this.narrow,this._onCompanionTraceRequested,this._onDeviceRenamed)}}_toggleMenu(){this.dispatchEvent(new Event("hass-toggle-menu",{bubbles:!0,composed:!0}))}_deviceEntitySuffix(e){return{prefix:(e.pubkey_prefix||e.pubkey||"").substring(0,6).toLowerCase(),name:(e.name||"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}}_getNodeStatus(e){if(!this.hass)return null;const{prefix:t,name:i}=this._deviceEntitySuffix(e),o=`sensor.meshcore_${t}_node_status_${i}`,n=this.hass.states[o];return n?n.state:null}_getBatteryLevel(e){if(!this.hass)return null;const{prefix:t,name:i}=this._deviceEntitySuffix(e),o=`sensor.meshcore_${t}_battery_percentage_${i}`,n=this.hass.states[o];if(!n||"unknown"===n.state||"unavailable"===n.state)return null;const s=parseFloat(n.state);return isNaN(s)?null:Math.round(s)}async _loadData(){if(this.hass&&!this._loadingStarted){this._loadingStarted=!0,this._loading=!0,this._error=null;try{var e;const[t,i]=await Promise.all([qc(this.hass),Yc(this.hass)]);if(this._devices=t,this._radios=i,0===t.length)return this._error="No MeshCore devices found",void(this._loading=!1);const o=t.find(e=>e.connected);this._selectedEntryId=(o||t[0]).entry_id;const n=o||t[0];this._config={node_name:n.name,node_prefix:(null===(e=n.pubkey_prefix)||void 0===e?void 0:e.substring(0,6))||"",entry_id:n.entry_id,...Nc,...Fc},await this._loadDeviceData(),await this._loadUnreadCounts()}catch(e){const t=e instanceof Error?e.message:String(e);this._error=`Failed to load: ${t}`,console.error("MeshCore panel load error:",e)}finally{this._loading=!1}}}async _refreshDevices(){if(!this.hass)return;const[e,t]=await Promise.all([qc(this.hass),Yc(this.hass)]);return this._radios=t,0===e.length?(this._devices=[],this._config=null,void(this._error="No MeshCore devices found")):this._config?(this._devices=e,void(e.some(e=>e.entry_id===this._selectedEntryId)||this._selectDevice((e.find(e=>e.connected)||e[0]).entry_id))):(this._loadingStarted=!1,void await this._loadData())}async _loadDeviceData(){if(!this.hass||!this._selectedEntryId)return;const e=this._selectedEntryId;try{const[i,o]=await Promise.all([Hc(this.hass,e),jc(this.hass,e)]);if(e!==this._selectedEntryId)return;this._contacts=i,this._channels=o;const n=this._selectedDevice;var t;n&&this._config&&(this._config={...this._config,node_name:n.name,node_prefix:(null===(t=n.pubkey_prefix)||void 0===t?void 0:t.substring(0,6))||"",entry_id:n.entry_id})}catch(e){console.error("Failed to load device data:",e)}}_onActiveEntityChanged(e){var t;this._activeChatEntityId=(null===(t=e.detail)||void 0===t?void 0:t.entityId)||null}async _onDeviceRenamed(){if(this.hass)try{this._devices=await qc(this.hass);const t=this._selectedDevice;var e;t&&this._config&&(this._config={...this._config,node_name:t.name,node_prefix:(null===(e=t.pubkey_prefix)||void 0===e?void 0:e.substring(0,6))||"",entry_id:t.entry_id})}catch(e){console.error("Failed to refresh devices after rename:",e)}}async _loadUnreadCounts(){if(this.hass)try{const e=await async function(e,t){try{const i={type:"meshcore_bbs/get_unread_counts"};t&&(i.entry_id=t);const o=await e.callWS(i);return{unread:o.unread||{},last_read:o.last_read||{}}}catch(e){return{unread:{},last_read:{}}}}(this.hass,this._selectedEntryId||void 0);this._unread.ingestBackendData(e,this._activeChatEntityId)}catch(e){}}_handleMarkReadRequested(e){e&&this.hass&&(async function(e,t,i){try{const o={type:"meshcore_bbs/mark_conversation_read",entity_id:t};return i&&(o.entry_id=i),await e.callWS(o)}catch(e){return{success:!1}}}(this.hass,e,this._selectedEntryId||void 0).catch(()=>{}),this._unread.clearEntity(e),this._loadUnreadCounts())}async _handleNodeAction(e){const{action:t,node:i}=e.detail;if(!this.hass||!i)return;const o=i.public_key||"",n=i.pubkey_prefix||"",s=this._selectedEntryId||void 0;switch(t){case"message":n&&(this._pendingChatTarget=n,this._activeTab="chat");break;case"remove-contact":if(o)try{await Gc(this.hass,o,s),await this._loadDeviceData(),await this._refreshNodesPageAfterMutation(o)}finally{this._clearNodesPagePending()}break;case"add-contact":if(o)try{await Wc(this.hass,o,i.adv_name||void 0,s),await this._loadDeviceData(),await this._refreshNodesPageAfterMutation(o)}finally{this._clearNodesPagePending()}break;case"trace":n&&(this._traceDialogPubkeyPrefix=n,this._traceDialogEntryId=s,this._traceDialogContactName=i.adv_name||n,this._traceDialogTargetContact="adv_name"in i?i:null,this._traceDialogResult=null,this._traceDialogError="",this._traceDialogOpen=!0);break;case"delete":case"remove":o&&(await Gc(this.hass,o,s),await this._loadDeviceData());break;default:console.warn("Unhandled node action:",t)}}async _refreshNodesPageAfterMutation(e){var t;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("meshcore-nodes-page");if(i&&"function"==typeof i.refreshAfterMutation)try{await i.refreshAfterMutation(e)}catch(e){console.error("Failed to refresh nodes-page after mutation:",e)}}_clearNodesPagePending(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("meshcore-nodes-page");t&&"function"==typeof t.clearPendingAction&&t.clearPendingAction()}};Cv.styles=[Ic,$d(gd||(gd=vd`
      :host {
        display: block;
        width: 100%;
        height: 100vh;
      }

      .panel {
        display: flex;
        flex-direction: column;
        height: 100%;
        background: var(--primary-background-color, #fafafa);
      }

      .panel-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 16px;
        background: var(--card-background-color, #fff);
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
        flex-shrink: 0;
        gap: 12px;
      }

      .panel-title {
        font-size: 18px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .device-info {
        font-size: 13px;
        color: var(--secondary-text-color);
      }

      /* The multi-entry device switcher is a custom dropdown (button +
         listbox) instead of a native <select>, so each option can
         render name + pubkey-prefix as separate visual lines and so the
         collapsed display does not duplicate the prefix. The
         single-entry case shares the same wrap class and same
         name+prefix sibling layout. node_name and identity keys are
         independent fields by firmware design; showing both makes the
         distinction visible to the user. */
      .device-info-wrap {
        position: relative; /* anchor for the absolutely-positioned menu */
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 6px;
        min-width: 0; /* allow children to shrink in narrow header */
      }

      .device-switcher {
        position: relative; /* anchor for absolute caret in column mode */
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 6px;
        padding: 8px 12px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 8px;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        font: inherit;
        font-size: 13px;
        text-align: left;
        box-sizing: border-box;
        min-height: 39px;
        line-height: normal;
        cursor: pointer;
        max-width: 250px;
      }

      .device-switcher:hover {
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
      }

      .device-switcher-caret {
        margin-left: 4px;
        opacity: 0.6;
        font-size: 11px;
      }

      .device-prefix {
        font-size: 0.85em;
        opacity: 0.75;
        white-space: nowrap;
      }

      .device-switcher-menu {
        position: absolute;
        top: calc(100% + 4px);
        right: 0;
        z-index: 10;
        margin: 0;
        padding: 4px 0;
        list-style: none;
        width: max-content; /* size to widest item, not parent button */
        min-width: 140px; /* small floor so the menu never gets skinny */
        max-width: 280px;
        background: var(--card-background-color, #fff);
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      .device-switcher-menu li {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 8px 12px;
        cursor: pointer;
        gap: 0;
      }

      .device-switcher-menu li:hover {
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
      }

      .device-switcher-menu li.active {
        background: rgba(3, 169, 244, 0.1);
      }

      .device-switcher-menu li .device-name {
        font-size: 13px;
        line-height: 1.2;
      }

      .device-switcher-menu li .device-prefix {
        line-height: 1.1;
      }

      /* Mobile / narrow header: stack name and prefix vertically inside
         the button (multi-entry) and inside the wrap (single-entry).
         The caret is pulled out of the flex column flow and pinned to
         the right edge of the button so it doesn't end up as a third
         row below the prefix. Extra right-padding leaves room for it.
         Two gates fire this: the panel's own [narrow] attribute (set by
         HA's responsive sidebar via the reflected 'narrow' property)
         and a viewport media query as a fallback for desktop browsers
         in narrow viewports. The :host([narrow]) and @media blocks are
         duplicated rather than comma-combined because CSS does not
         allow mixing a selector with an at-rule in a single rule list. */
      :host([narrow]) .device-info-wrap,
      :host([narrow]) .device-switcher {
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        gap: 0;
      }

      :host([narrow]) .device-switcher {
        padding-right: 28px; /* room for the absolutely-positioned caret */
      }

      :host([narrow]) .device-switcher-caret {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 0;
      }

      :host([narrow]) .device-prefix {
        line-height: 1.1;
      }

      @media (max-width: 480px) {
        .device-info-wrap,
        .device-switcher {
          flex-direction: column;
          align-items: flex-end;
          justify-content: center;
          gap: 0;
        }
        .device-switcher {
          padding-right: 28px;
        }
        .device-switcher-caret {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          margin-left: 0;
        }
        .device-prefix {
          line-height: 1.1;
        }
      }

      .menu-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border: none;
        background: none;
        cursor: pointer;
        color: var(--primary-text-color);
        border-radius: 50%;
        padding: 0;
        flex-shrink: 0;
      }

      .menu-icon:hover {
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.1));
      }

      .header-left {
        display: flex;
        align-items: center;
        gap: 12px;
        flex: 1;
      }

      .header-right {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-shrink: 0;
      }

      .connection-status {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 4px 10px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 500;
        border: 1px solid;
      }

      .connection-status.online {
        color: #4caf50;
        border-color: rgba(76, 175, 80, 0.4);
        background: rgba(76, 175, 80, 0.08);
      }

      .connection-status.offline {
        color: var(--error-color, #db4437);
        border-color: rgba(219, 68, 55, 0.4);
        background: rgba(219, 68, 55, 0.08);
      }

      .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .status-dot.online {
        background: #4caf50;
      }

      .status-dot.offline {
        background: var(--error-color, #db4437);
      }

      .battery-indicator {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 12px;
        font-weight: 500;
        color: var(--secondary-text-color);
      }

      .battery-icon {
        position: relative;
        width: 18px;
        height: 10px;
        border: 1.5px solid var(--secondary-text-color, #888);
        border-radius: 2px;
        display: flex;
        align-items: center;
        padding: 1px;
      }

      .battery-icon::after {
        content: '';
        position: absolute;
        right: -4px;
        top: 50%;
        transform: translateY(-50%);
        width: 2px;
        height: 5px;
        background: var(--secondary-text-color, #888);
        border-radius: 0 1px 1px 0;
      }

      .battery-fill {
        height: 100%;
        border-radius: 1px;
        transition: width 0.3s ease;
      }

      .battery-fill.high {
        background: #4caf50;
      }

      .battery-fill.medium {
        background: #ff9800;
      }

      .battery-fill.low {
        background: var(--error-color, #db4437);
      }

      .battery-pct {
        min-width: 28px;
        text-align: right;
      }

      /* Mobile: compact header indicators */
      @media (max-width: 870px) {
        .connection-status {
          padding: 0;
          border: none;
          background: none !important;
          gap: 0;
          font-size: 0;
        }

        .connection-status .status-dot {
          width: 8px;
          height: 8px;
        }

        .battery-pct {
          display: none;
        }

        .battery-indicator {
          gap: 0;
        }

        .battery-icon {
          width: 13.5px;
          height: 7.5px;
          border-width: 1.25px;
        }

        .battery-icon::after {
          right: -3px;
          width: 1.5px;
          height: 4px;
        }
      }

      .tab-bar {
        display: flex;
        background: var(--card-background-color, #fff);
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
        flex-shrink: 0;
      }

      .tab-bar button {
        flex: 1;
        padding: 12px 16px;
        border: none;
        background: transparent;
        color: var(--secondary-text-color, #727272);
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        border-bottom: 3px solid transparent;
        min-height: 48px;
      }

      .tab-bar button:hover {
        color: var(--primary-text-color);
        background: rgba(0, 0, 0, 0.02);
      }

      .tab-bar button.active {
        color: var(--primary-color, #03a9f4);
        border-bottom-color: var(--primary-color, #03a9f4);
      }

      .page-container {
        flex: 1;
        overflow: hidden;
        display: flex;
      }

      .page-container > * {
        flex: 1;
        overflow: hidden;
      }

      .error-banner {
        padding: 12px 16px;
        background: rgba(219, 68, 55, 0.08);
        color: var(--error-color, #db4437);
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
        font-size: 13px;
      }

      .center-message {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: var(--secondary-text-color);
        padding: 24px;
      }

      .spinner {
        width: 32px;
        height: 32px;
        border: 3px solid var(--divider-color, #e0e0e0);
        border-top-color: var(--primary-color, #03a9f4);
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
      }

      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `))],fd([Lc({type:Object})],Cv.prototype,"hass",void 0),fd([Lc({type:Boolean,reflect:!0})],Cv.prototype,"narrow",void 0),fd([Lc({type:Object})],Cv.prototype,"panel",void 0),fd([Ec()],Cv.prototype,"_config",void 0),fd([Ec()],Cv.prototype,"_activeTab",void 0),fd([Ec()],Cv.prototype,"_devices",void 0),fd([Ec()],Cv.prototype,"_radios",void 0),fd([Ec()],Cv.prototype,"_contacts",void 0),fd([Ec()],Cv.prototype,"_channels",void 0),fd([Ec()],Cv.prototype,"_selectedEntryId",void 0),fd([Ec()],Cv.prototype,"_loading",void 0),fd([Ec()],Cv.prototype,"_loadingStarted",void 0),fd([Ec()],Cv.prototype,"_error",void 0),fd([Ec()],Cv.prototype,"_unsubscribeList",void 0),fd([Ec()],Cv.prototype,"_pendingChatTarget",void 0),fd([Ec()],Cv.prototype,"_deviceDropdownOpen",void 0),fd([Ec()],Cv.prototype,"_traceDialogOpen",void 0),fd([Ec()],Cv.prototype,"_traceDialogContactName",void 0),fd([Ec()],Cv.prototype,"_traceDialogResult",void 0),fd([Ec()],Cv.prototype,"_traceDialogError",void 0),fd([Ec()],Cv.prototype,"_traceDialogPubkeyPrefix",void 0),fd([Ec()],Cv.prototype,"_traceDialogEntryId",void 0),fd([Ec()],Cv.prototype,"_traceDialogTargetContact",void 0),fd([Ec()],Cv.prototype,"_targetPickerOpen",void 0),fd([Ec()],Cv.prototype,"_pendingTraceEntryId",void 0),Cv=fd([Tc("meshcore-bbs-panel")],Cv);export{Cv as MeshCorePanel};
