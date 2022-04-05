var H=Object.defineProperty;var G=(i,e,t)=>e in i?H(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var r=(i,e,t)=>(G(i,typeof e!="symbol"?e+"":e,t),t),$=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)};var h=(i,e,t)=>($(i,e,"read from private field"),t?t.call(i):e.get(i)),n=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},S=(i,e,t,s)=>($(i,e,"write to private field"),s?s.call(i,t):e.set(i,t),t);var a=(i,e,t)=>($(i,e,"access private method"),t);const I=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const _ of l.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&s(_)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}};I();var y,P,d,q,E,R,L,T,g,x,A,z;const c=class{constructor(e=`.${c.template_placeholder}`,t=document){n(this,y);n(this,d);n(this,E);n(this,L);n(this,g);n(this,A);r(this,"element");r(this,"style");r(this,"classList");const s=a(this,g,x).call(this,e,t);a(this,d,q).call(this,s)?a(this,E,R).call(this,s,t):this.element=s,a(this,y,P).call(this)}dot(e){for(let t of e)t.length>=2&&t[1]!=""&&this.text(t[0],t[1]),t.length==3&&this.attr(t[0],t[2]);return this}DOM(e=`.${c.template_placeholder}`){return new c(e,this.element)}q(e){return a(this,g,x).call(this,e,this.element)}a(e){return this.element.querySelectorAll(e)}static fromElement(e){var s;const t=new c;return t.element=e,a(s=t,y,P).call(s),t}attr(e,t){this.element.querySelectorAll(e).forEach(s=>a(this,A,z).call(this,s,t))}text(e,t){this.element.querySelectorAll(e).forEach(s=>s.textContent=t)}};let m=c;y=new WeakSet,P=function(){var e,t;this.style=(e=this.element)==null?void 0:e.style,this.classList=(t=this.element)==null?void 0:t.classList},d=new WeakSet,q=function(e){return e==null?void 0:e.classList.contains(c.template_placeholder)},E=new WeakSet,R=function(e,t){this.element=e.cloneNode(!0),t.append(this.element),a(this,L,T).call(this,e)},L=new WeakSet,T=function(e){a(this,d,q).call(this,this.element)&&this.element.classList.remove(c.template_placeholder),this.element.style.display==="none"&&(this.element.style.display=""),a(this,d,q).call(this,e)&&e.remove()},g=new WeakSet,x=function(e,t){c.CACHE.has(t)||c.CACHE.set(t,new Map);const s=c.CACHE.get(t);return s.has(e)||s.set(e,t.querySelector(e)),s.get(e)},A=new WeakSet,z=function(e,t){for(let s in t){const o=[s,t[s]];c.events.includes(s)?e.addEventListener(...o):e.setAttribute(...o)}},r(m,"template_placeholder","lazydom"),r(m,"events",["click","change"]),r(m,"CACHE",new Map);var p,b;const f=class{constructor(e=""){n(this,b,e=>{const t=location.hash.replace("#","");this.render(t)});if(h(f,p)!=null)return h(f,p);S(f,p,this),this.current_page=e,this.pages=[],window.addEventListener("hashchange",h(this,b))}addPages(...e){e.forEach(t=>this.pages.push(t))}render(e){if(!!this.pages.includes(e))for(let t of this.pages){const s=document.querySelector(`#${t}`);s&&(s.style.display=t===e?"":"none")}}goTo(e){location.hash===`#${e}`?this.render(e):location.hash=e}};let M=f;p=new WeakMap,b=new WeakMap,n(M,p,null);var u;class O{constructor(e){r(this,"router",new M);n(this,u,void 0);r(this,"page_name");S(this,u,e),this.page_name=e,this.router.addPages(h(this,u)),this.dom=new m(`#${h(this,u)}`)}show(){this.router.goTo(h(this,u))}}u=new WeakMap;const N="images";class F extends O{constructor(e){super("ready");r(this,"actions",[{name:"rock",image:"rock.png"},{name:"paper",image:"paper.png"},{name:"scissors",image:"scissors.png"}]);r(this,"page_actions",{});this.store=e;for(let t of this.actions){const s=this.dom.DOM();s.dot([["img","",{src:[N,t.image].join("/"),alt:t.name}],["p",t.name]]),s.element.addEventListener("click",o=>{this.store.playerAction=t.name,this.store.notify()})}}}var v,j,k,B,C,D;class U extends O{constructor(e){super("results");n(this,v);n(this,k);n(this,C);r(this,"win_classes",{you:".youwin",bot:".botwin",draw:"NOTFOUND"});r(this,"lose_classes",{you:".botwin",bot:".youwin",draw:".botwin, .youwin"});r(this,"bot_action","rock");r(this,"you_action","");r(this,"playGame",()=>{this.you_action=this.store.playerAction,this.bot_action=a(this,v,j).call(this),a(this,k,B).call(this,a(this,C,D).call(this,this.bot_action,this.you_action))});this.store=e,this.store.register(this.page_name,this.playGame)}}v=new WeakSet,j=function(){const e=Math.floor(Math.random()*this.store.actions.length);return this.store.actions[e]},k=new WeakSet,B=function(e){this.dom.dot([[".youact","",{src:`${N}/${this.you_action}.png`}],[".botact","",{src:`${N}/${this.bot_action}.png`}]]);const t=this.win_classes[e],s=this.lose_classes[e];this.dom.a(t).forEach(o=>o.classList.remove("hide")),this.dom.a(s).forEach(o=>o.classList.add("hide"))},C=new WeakSet,D=function(e,t){return e===t?"draw":t==="paper"&&e==="rock"||t==="rock"&&e==="scissors"||t==="scissors"&&e==="paper"?"you":"bot"};var w;class K{constructor(){n(this,w,[]);r(this,"actions",["rock","paper","scissors"]);r(this,"playerAction")}register(e,t){h(this,w).push({name:e,rend:t})}notify(){h(this,w).forEach(e=>e.rend())}}w=new WeakMap;class J{constructor(){r(this,"store",new K);r(this,"ready_page",new F(this.store));r(this,"results_page",new U(this.store));this.ready_page.show()}}new J;