import iziToast from 'izitoast';
import {
  getCategories,
  getProductById,
  getProducts,
  getProductsByCategories,
} from './products-api';
import {
  renderCategories,
  renderModalProduct,
  renderProducts,
} from './render-function';
import { toggleActiveClass } from './helpers';
import { refs } from './refs';
import { openModal } from './modal';

let currentPage = 1;
let currentID;

export async function initHomePage() {
  try {
    const categories = await getCategories();
    renderCategories(categories);
    const { products, total } = await getProducts(currentPage);

    if (!products?.length) {
      //Notification no products
      //div show 'not found'
      return;
    }

    renderProducts(products);
  } catch (err) {
    console.error(`Error init page, ${err}`);
  }
}

export async function handleCategoryClick(e) {
  if (e.target.nodeName !== 'BUTTON') return;

  refs.productsList.innerHTML = '';

  const category = e.target.textContent.toLowerCase();
  const allButtons = document.querySelectorAll('.categories__btn');

  toggleActiveClass(allButtons, e.target, 'categories__btn--active');

  let productsData;
  if (category === 'all') {
    productsData = await getProducts();
  } else {
    productsData = await getProductsByCategories(category);
  }

  renderProducts(productsData.products);
}

export async function handleProductClick(e) {
  const productItem = e.target.closest('.products__item');

  if (!productItem) return;
  //   console.log(productItem);
  try {
    // console.log(e.target.dataset.id);

    const productID = +productItem.dataset.id;
    currentID = productID;
    const product = await getProductById(productID);
    renderModalProduct(product);
    openModal();
  } catch (err) {
    console.log('Error: ', err);
  }
}
