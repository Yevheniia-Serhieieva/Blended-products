import"./assets/styles-JE8YjOlG.js";import{a}from"./assets/vendor-CdRcHFKY.js";const C="https://dummyjson.com",r={PRODUCTS:"/products",PRODUCT_BY_ID:"/products/",SEARCH_PRODUCTS:"/products/search",CATEGORIES:"/products/category-list",PRODUCTS_BY_CATEGORY:"/products/category/"},p=12;a.defaults.baseURL=C;async function m(t){const o=(t-1)*p,{data:e}=await a.get(`${r.PRODUCTS}?limit=${p}&skip=${o}`);return e}async function E(){const{data:t}=await a.get(`${r.CATEGORIES}`);return t}async function P(t){const{data:o}=await a.get(`${r.PRODUCT_BY_ID}${t}`);return o}async function b(t){const{data:o}=await a.get(`${r.PRODUCTS_BY_CATEGORY}${t}`);return o}const s={categoriesList:document.querySelector(".categories"),modalProduct:document.querySelector(".modal-product"),productsList:document.querySelector(".products"),modal:document.querySelector(".modal"),modalCloseBtn:document.querySelector(".modal__close-btn")};function k(t){const e=["All",...t].map(c=>`
      <li class="categories__item">
        <button class="categories__btn" type="button">${c}</button>
      </li>
    `).join("");s.categoriesList.innerHTML=e}function v({thumbnail:t,title:o,tags:e,description:c,shippingInformation:d,returnPolicy:i,price:l,id:u}){const f=e?`<ul class="modal-product__tags">${e.map(L=>`<li class="modal-product__tag">${L}</li>`).join("")}</ul>`:"",$=`<img class="modal-product__img" src="${t}" alt="${o}" />
            <div class="modal-product__content">
            <p class="modal-product__title">${o}</p>
            ${f}
            <p class="modal-product__description">${c}</p>
            <p class="modal-product__shipping-information">Shipping: ${d}</p>
            <p class="modal-product__return-policy">Return Policy: ${i}</p>
            <p class="modal-product__price">Price: ${l}$</p>
            <button class="modal-product__buy-btn" type="button">Buy</button>
            </div>`;s.modalProduct.innerHTML=$}function _(t){const o=t.map(({id:e,title:c,thumbnail:d,category:i,price:l,brand:u})=>`
    <li class="products__item" data-id="${e}">
        <img class="products__image" src="${d}" alt="${c}" />
        <p class="products__title">${c}</p>
        <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${u}</p>
        <p class="products__category">Category: ${i}</p>
        <p class="products__price">Price: $${l}</p>
    </li>
  `).join("");s.productsList.insertAdjacentHTML("beforeend",o)}function T(t,o,e){t.forEach(c=>{c.classList.remove(e)}),o.classList.add(e)}function w(){s.modal.classList.add("modal--is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",g),s.modal.addEventListener("click",y),s.modalCloseBtn.addEventListener("click",n)}function n(){s.modal.classList.remove("modal--is-open"),document.body.style.overflow="",window.removeEventListener("keydown",g),s.modal.removeEventListener("click",y),s.modalCloseBtn.removeEventListener("click",n)}function g(t){t.key==="Escape"&&n()}function y(t){t.target===s.modal&&n()}let S=1,R;async function B(){try{const t=await E();k(t);const{products:o,total:e}=await m(S);if(!(o!=null&&o.length))return;_(o)}catch(t){console.error(`Error init page, ${t}`)}}async function A(t){if(t.target.nodeName!=="BUTTON")return;s.productsList.innerHTML="";const o=t.target.textContent.toLowerCase(),e=document.querySelectorAll(".categories__btn");T(e,t.target,"categories__btn--active");let c;o==="all"?c=await m():c=await b(o),_(c.products)}async function D(t){const o=t.target.closest(".products__item");if(o)try{const e=+o.dataset.id;R=e;const c=await P(e);v(c),w()}catch(e){console.log("Error: ",e)}}document.addEventListener("DOMContentLoaded",B);s.categoriesList.addEventListener("click",A);s.productsList.addEventListener("click",D);
//# sourceMappingURL=index.js.map
