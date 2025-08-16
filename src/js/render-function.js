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



