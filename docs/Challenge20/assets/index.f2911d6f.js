var f=Object.defineProperty;var u=(o,e,t)=>e in o?f(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var a=(o,e,t)=>(u(o,typeof e!="symbol"?e+"":e,t),t),g=(o,e,t)=>{if(!e.has(o))throw TypeError("Cannot "+t)};var d=(o,e,t)=>{if(e.has(o))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(o):e.set(o,t)};var c=(o,e,t)=>(g(o,e,"access private method"),t);import{DOM as p}from"https://jimmy09140456.github.io/lazydom/dom.js";const w=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}};w();const m=[{id:39,title:"Tech to Look Forward to in 2022",description:"In this episode, Amy and James discuss the future of web development: Astro, Veet, Supabase, SvelteKit, Redwood.js, Blitz.js, GitHub Co-Pilot, Web Assembly, Blockchain, w3, no-code, and low-code.",cover:"cover__episode-39.png",link:"https://www.compressed.fm/episode/39"},{id:38,title:"2021 Gift Guide",description:"This episode is full of picks! Amy and James talk about all of their favorite things, just in time for the holidays.",cover:"cover__episode-38.png",link:"https://www.compressed.fm/episode/38"},{id:37,title:"Building a Course",description:"In this episode, Amy and James discuss all the things that go into course creation: why? What? How? Where to Host? Building the right audience.",cover:"cover__episode-37.png",link:"https://www.compressed.fm/episode/37"},{id:36,title:"SVGs FTW",description:"In this episode, Amy and James discuss all things SVGs: what is, why and when to reach for it, and seven different ways to get an SVG on the page, and the pros and cons of each method.",cover:"cover__episode-36.png",link:"https://www.compressed.fm/episode/36"},{id:35,title:"Crossover Episode with Purrfect Dev",description:"This is a crossover episode with our friends, Alex Patterson and Brittney Postma from the Purrfect.dev podcast. In this episode, we all discuss our jobs. Even though we're all in tech, our day- to - day work looks vastly different.",cover:"cover__episode-35.png",link:"https://www.compressed.fm/episode/35"},{id:34,title:"Getting git",description:"In this episode, Amy and James explain the fundamentals of git and their most-used commands. They also explain basic different workflows, if you're working with a team or by yourself.",cover:"cover__episode-34.png",link:"https://www.compressed.fm/episode/34"},{id:33,title:"Small Design Tweaks that Make All the Difference",description:"In this episode, Amy and James talk about small design tweaks that you can make that will make a big difference. These recommendations are helpful if you're looking for basic principles and guidelines to take your site to the next level.",cover:"cover__episode-33.png",link:"https://www.compressed.fm/episode/33"}];var n,h;class v{constructor(){d(this,n);a(this,"tocUl",new p("aside ul.toc"));a(this,"mainContents",new p("main .columns"));console.log({episodes:m}),c(this,n,h).call(this);const e=this.tocUl.q("li");e!=null&&e.click()}selectToc(e){this.tocUl.a(".selected").forEach(r=>r.classList.remove("selected")),e.classList.add("selected")}updateContents(e){this.mainContents.dot([".cover","",{src:e.cover}],[".title",e.title],[".summary",e.summary],["a","",{href:e.moreLink}])}}n=new WeakSet,h=function(){for(const e of m){const t=this.tocUl.DOM();t.dot([".episode",`Episode ${e.id}`],[".title",e.title]),t.element.addEventListener("click",()=>{this.selectToc(t.element),this.updateContents({episode:`Episode ${e.id}`,title:e.title,cover:`images/${e.cover}`,summary:e.description,moreLink:e.link})})}};new v;
