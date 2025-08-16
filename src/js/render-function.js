import { refs } from './refs.js';

export function renderCategories(categories) {
  const categoriesWithAll = ['All', ...categories];
  const markup = categoriesWithAll
    .map(
      category => `
      <li class="categories__item">
        <button class="categories__btn" type="button">${category}</button>
      </li>
    `
    )
    .join('');

  refs.categoriesList.innerHTML = markup;
}
