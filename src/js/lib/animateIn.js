import isElementInViewport from './isElementInViewport';

export default ($elements, endClassName) => {
  window.addEventListener(`scroll`, e => onScroll($elements, endClassName, e));
};

const onScroll = ($elements, endClassName) => {
  requestAnimationFrame(() => {

    $elements.forEach($el => isElementInViewport($el) ? $el.classList.add(endClassName) : null);
    // $elements.forEach($el => isElementInViewport($el) ? $el.classList.add(endClassName) : $el.classList.remove(endClassName));

  });
};
