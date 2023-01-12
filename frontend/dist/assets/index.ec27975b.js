const l=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};l();function c(){return window.go.main.App.ListImages()}document.querySelector("#app").innerHTML=`
      <div class="images" id="images"></div>
      <div class="input-box" id="input">
        <input class="input" id="name" type="text" autocomplete="off" />
        <button class="btn" onclick="listImages()">Greet</button>
      </div>
    </div>
`;let u=document.getElementById("name");u.focus();let a=document.getElementById("images");window.listImages=function(){try{c().then(n=>{a.innerText=result.map}).catch(n=>{console.error(n)})}catch(n){console.error(n)}};
