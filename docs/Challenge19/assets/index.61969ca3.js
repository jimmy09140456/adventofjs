var M=Object.defineProperty;var O=(i,t,e)=>t in i?M(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var n=(i,t,e)=>(O(i,typeof t!="symbol"?t+"":t,e),e),$=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var a=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)};var o=(i,t,e)=>($(i,t,"access private method"),e);const j=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const d of r)if(d.type==="childList")for(const I of d.addedNodes)I.tagName==="LINK"&&I.rel==="modulepreload"&&s(I)}).observe(document,{childList:!0,subtree:!0});function e(r){const d={};return r.integrity&&(d.integrity=r.integrity),r.referrerpolicy&&(d.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?d.credentials="include":r.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(r){if(r.ep)return;r.ep=!0;const d=e(r);fetch(r.href,d)}};j();var c,A,h,f,g,q,w,N,u,L,v,z;const l=class{constructor(t=`.${l.template_placeholder}`,e=document){a(this,c);a(this,h);a(this,g);a(this,w);a(this,u);a(this,v);n(this,"element");n(this,"style");n(this,"classList");const s=o(this,u,L).call(this,t,e);o(this,h,f).call(this,s)?o(this,g,q).call(this,s):this.element=s,o(this,c,A).call(this)}dot(...t){for(let e of t)(e.length>2&&e[1]!=""||e.length==2)&&this.text(e[0],e[1]),e.length==3&&this.attr(e[0],e[2]);return this}DOM(t=`.${l.template_placeholder}`){return new l(t,this.element)}q(t){return o(this,u,L).call(this,t,this.element)}a(t){return this.element.querySelectorAll(t)}static fromElement(t){var s;const e=new l;return e.element=t,o(s=e,c,A).call(s),e}attr(t,e){this.element.querySelectorAll(t).forEach(s=>o(this,v,z).call(this,s,e))}text(t,e){this.element.querySelectorAll(t).forEach(s=>s.textContent=e)}};let p=l;c=new WeakSet,A=function(){var t,e;this.style=(t=this.element)==null?void 0:t.style,this.classList=(e=this.element)==null?void 0:e.classList},h=new WeakSet,f=function(t){return t==null?void 0:t.classList.contains(l.template_placeholder)},g=new WeakSet,q=function(t){var s;const e=(s=t.lazyParent)!=null?s:t.parentElement;this.element=t.cloneNode(!0),e.append(this.element),o(this,w,N).call(this,t)},w=new WeakSet,N=function(t){o(this,h,f).call(this,this.element)&&this.element.classList.remove(l.template_placeholder),t.lazyParent||(t.lazyParent=t.parentElement),o(this,h,f).call(this,t)&&t.remove()},u=new WeakSet,L=function(t,e){l.CACHE.has(e)||l.CACHE.set(e,new Map);const s=l.CACHE.get(e);return s.has(t)||s.set(t,e.querySelector(t)),s.get(t)},v=new WeakSet,z=function(t,e){for(let s in e){const r=[s,e[s]];l.events.includes(s)?t.addEventListener(...r):t.setAttribute(...r)}},n(p,"template_placeholder","lazydom"),n(p,"events",["click","change"]),n(p,"CACHE",new Map);var y,C,E,V,m,P;class B{constructor(t){a(this,y);a(this,E);a(this,m);n(this,"formField",null);n(this,"pwdShown",!1);n(this,"passwdAttributes",{show:{pwdType:"text",pwdImg:"images/hide.svg"},hide:{pwdType:"password",pwdImg:"images/show.svg"}});n(this,"togglePwd",()=>{this.pwdShown?o(this,m,P).call(this,this.passwdAttributes.hide):o(this,m,P).call(this,this.passwdAttributes.show),this.pwdShown=!this.pwdShown,console.log(this.pwdShown)});n(this,"validatePwd",()=>{if(this.formField==null)return;const t=this.pwdInputs[0].value,e=this.pwdInputs[1].value;console.log({password1:t}),console.log({password2:e}),t===e?this.formField.setSuccess():this.formField.setErrors("Confirm Password doesn't match")});this.dom=t,o(this,y,C).call(this),o(this,E,V).call(this)}}y=new WeakSet,C=function(){this.pwdInputs=[this.dom.q('input[name="passwd"]'),this.dom.q('input[name="passwd-repeat"]')],this.pwdTogglers=this.dom.a("a.toggle-pwd"),this.pwdTogglerImgs=this.dom.a("a.toggle-pwd img")},E=new WeakSet,V=function(){this.pwdTogglers.forEach(t=>t.addEventListener("click",this.togglePwd)),this.pwdInputs.forEach(t=>t.addEventListener("change",this.validatePwd))},m=new WeakSet,P=function(t){this.pwdInputs.forEach(e=>e.setAttribute("type",t.pwdType)),this.pwdTogglerImgs.forEach(e=>e.setAttribute("src",t.pwdImg))};class S{constructor(t){this.formField=t}}class K extends S{constructor(){super(...arguments);n(this,"validate",()=>{const e=this.formField.input.value;e!=null&&e!=""?this.formField.setSuccess():this.formField.setErrors(`Input ${this.formField.inputName} is required!`)})}}class R extends S{constructor(){super(...arguments);n(this,"validate",()=>{const e=this.formField.input.value;e!=null&&e.includes("@")?this.formField.setSuccess():this.formField.setErrors("Please input a valid e-mail address.")})}}class U extends S{constructor(){super(...arguments);n(this,"validate",()=>{this.formField.input.value.length>=8?this.formField.setSuccess():this.formField.setErrors("Password less than 8 characters.")})}}var b,T,x,k,F,H;class G{constructor(t){a(this,b);a(this,x);a(this,F);n(this,"validators",{name:K,email:R,passwd:U});this.dom=p.fromElement(t),o(this,b,T).call(this),this.inputName!=="NONAME"&&(o(this,x,k).call(this),o(this,F,H).call(this))}setSuccess(){this.errorsIcon.classList.add("hide"),this.successIcon.classList.remove("hide")}setErrors(t){this.errorsIcon.classList.remove("hide"),this.successIcon.classList.add("hide"),this.errorsMsg.textContent=t}}b=new WeakSet,T=function(){var t,e;this.input=this.dom.q("input"),this.inputName=(e=(t=this.input)==null?void 0:t.getAttribute("name"))!=null?e:"NONAME",this.successIcon=this.dom.q(".success"),this.errorsIcon=this.dom.q(".errors"),this.errorsMsg=this.dom.q(".errors .msg")},x=new WeakSet,k=function(){[this.successIcon,this.errorsIcon].forEach(e=>e.classList.add("hide"))},F=new WeakSet,H=function(){if(!(this.inputName in this.validators))return;const t=new this.validators[this.inputName](this);this.input.addEventListener("focusout",t.validate)};class J{constructor(){n(this,"dom",new p("#app"));n(this,"pwdHandler",new B(this.dom));n(this,"inputFields",new Array);for(const t of this.dom.a(".field")){const e=new G(t);this.inputFields.push(e),e.inputName==="passwd-repeat"&&(this.pwdHandler.formField=e)}}}new J;