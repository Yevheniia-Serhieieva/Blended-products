import { refs } from './refs.js';

export function renderProducts(products) {
  const markup = products.map(({id, title, thumbnail, category, price, brand}) => `
    <li class="products__item" data-id="${id}">
        <img class="products__image" src="${thumbnail}" alt="${title}" />
        <p class="products__title">${title}</p>
        <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${brand}</p>
        <p class="products__category">Category: ${category}</p>
        <p class="products__price">Price: $${price}</p>
    </li>
  `).join('');

  refs.productsList.insertAdjacentHTML('beforeend', markup); 
}