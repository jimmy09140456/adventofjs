const l=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};l();const s=document.querySelector(".tip-amount span.value"),i=document.querySelector(".total-per-person span.value"),a=document.querySelector(".input-number .bill-amount span"),p=document.querySelector(".input-number .people-number span"),d=document.querySelector(".calculate button"),m=(u,o)=>{s.textContent=u.toFixed(2),i.textContent=o.toFixed(2)};d.addEventListener("click",u=>{const o=document.querySelector('input[name="percentage"]:checked'),r=Number(a.textContent),c=Number(o.value),e=Number(p.textContent),t=r*c,n=(r+t)/e;m(t,n)});