import{S as l,i as u}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f=document.querySelector(".gallery"),d=document.querySelector(".search-form");document.querySelector(".loader");const a=document.querySelector(".search"),p=document.querySelector(".gallery"),m="https://pixabay.com/api/",h="41296916-da04ab2f63441e92262fae4bb";d.addEventListener("submit",b);function y(){a.classList.add("loader"),a.textContent=""}function g(){a.classList.remove("loader"),a.textContent="Search"}function b(o){o.preventDefault(),y();const r=o.currentTarget,n=r.elements.query.value;L(n).then(S).catch(s=>console.log("error")).finally(()=>r.reset()).then(()=>{g()})}function L(o){return fetch(`${m}?key=${h}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>r.json()).catch(r=>{console.log("error")})}function S(o){if(o.hits.length===0)$();else{const n=v(o.hits);f.innerHTML=n}new l(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}function v(o){return o.map(({webformatURL:r,largeImageURL:n,tags:s,likes:e,views:t,comments:i,downloads:c})=>`
          <div class="photo-card .shadow-drop-2-center">
              <a class="gallery__link" href="${n}">
                <img src="${r}" alt="${s}" loading="lazy" />
              </a>
              <div class="info">
                <p class="info-item">
                  <b>Likes: ${e}</b>
                </p>
                <p class="info-item">
                  <b>Views: ${t}</b>
                </p>
                <p class="info-item">
                  <b>Comments: ${i}</b>
                </p>
                <p class="info-item">
                  <b>Downloads: ${c}</b>
                </p>
              </div>
            </div>`).join("")}function $(){u.warning({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!"}),q()}function q(){p.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
