import { refs } from "./refs";


export function renderModalProduct({thumbnail, title, tags, description, shippingInformation, returnPolicy, price, id}) {

    const tagsMarkup = tags ? `<ul class="modal-product__tags">${tags.map(tag => `<li class="modal-product__tag">${tag}</li>`).join('')}</ul>` : '';
    const markup = `<img class="modal-product__img" src="${thumbnail}" alt="${title}" />
            <div class="modal-product__content">
            <p class="modal-product__title">${title}</p>
            ${tagsMarkup}
            <p class="modal-product__description">${description}</p>
            <p class="modal-product__shipping-information">Shipping: ${shippingInformation}</p>
            <p class="modal-product__return-policy">Return Policy: ${returnPolicy}</p>
            <p class="modal-product__price">Price: ${price}$</p>
            <button class="modal-product__buy-btn" type="button">Buy</button>
            </div>`
        

    refs.modalProduct.innerHTML = markup;
}

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

