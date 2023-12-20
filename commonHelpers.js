import{S as l,i as u}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f=document.querySelector(".gallery"),d=document.querySelector(".search-form");document.querySelector(".loader");const a=document.querySelector(".search");console.log(a);const p="https://pixabay.com/api/",m="41296916-da04ab2f63441e92262fae4bb";d.addEventListener("submit",g);function h(){a.classList.add("loader"),a.textContent=""}function y(){a.classList.remove("loader"),a.textContent="Search"}function g(o){o.preventDefault(),h();const r=o.currentTarget,n=r.elements.query.value;b(n).then(L).catch(s=>console.log("error")).finally(()=>r.reset()).then(()=>y())}function b(o){return fetch(`${p}?key=${m}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>r.json()).catch(r=>{console.log("error")})}function L(o){if(o.hits.length===0)v();else{const n=S(o.hits);f.innerHTML=n}lightbox=new l(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250})}function S(o){return o.map(({webformatURL:r,largeImageURL:n,tags:s,likes:e,views:t,comments:i,downloads:c})=>`
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
            </div>`).join("")}function v(){u.warning({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!"})}
//# sourceMappingURL=commonHelpers.js.map
