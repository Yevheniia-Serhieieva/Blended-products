export function toogleActiveClass(elements, activeEl, activeClass) {
    elements.forEach(el => {
        el.classList.remove(activeClass);
    })
    activeEl.classList.add(activeClass);
}