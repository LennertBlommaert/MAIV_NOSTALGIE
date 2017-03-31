const getViewportSize = () => {
  return {
    width: window.document.documentElement.clientWidth,
    height: window.document.documentElement.clientHeight
  };
};

const getCurrentScroll = () => {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
};

const getElemInfo = elem => {
  let offsetTop = 0;
  let offsetLeft = 0;
  const offsetHeight = elem.offsetHeight;
  const offsetWidth = elem.offsetWidth;

  do {
    if (!isNaN(elem.offsetTop)) {
      offsetTop += elem.offsetTop;
    }
    if (!isNaN(elem.offsetLeft)) {
      offsetLeft += elem.offsetLeft;
    }
  } while ((elem = elem.offsetParent) !== null);

  return {
    top: offsetTop,
    left: offsetLeft,
    height: offsetHeight,
    width: offsetWidth
  };
};

const checkVisibility = elem => {
  const viewportSize = getViewportSize();
  const currentScroll = getCurrentScroll();
  const elemInfo = getElemInfo(elem);
  const spaceOffset = 0.2;
  const elemHeight = elemInfo.height;
  const elemWidth = elemInfo.width;
  const elemTop = elemInfo.top;
  const elemLeft = elemInfo.left;
  const elemBottom = elemTop + elemHeight;
  const elemRight = elemLeft + elemWidth;

  const checkBoundaries = () => {
        // Defining the element boundaries and extra space offset
    const top = elemTop + elemHeight * spaceOffset;
    const left = elemLeft + elemWidth * spaceOffset;
    const bottom = elemBottom - elemHeight * spaceOffset;
    const right = elemRight - elemWidth * spaceOffset;

        // Defining the window boundaries and window offset
    const wTop = currentScroll.y + 0;
    const wLeft = currentScroll.x + 0;
    const wBottom = currentScroll.y - 0 + viewportSize.height;
    const wRight = currentScroll.x - 0 + viewportSize.width;

        // Check if the element is within boundary
    return (top < wBottom) && (bottom > wTop) && (left > wLeft) && (right < wRight);
  };

  return checkBoundaries();
};

const onTransitionEnd = () => {
  // console.log(e.classList.contains(endClassName);
  document.querySelector(`.glue--1__img-paris`).classList.add(`revealedAll`);
  document.querySelector(`.glue--1__img-berlin`).classList.add(`revealedAll`);
  document.querySelector(`.glue--1__img-nikon`).classList.add(`revealedAll`);

};

const toggleElement = ($elements, endClassName) => {
  for (let i = 0;i < $elements.length;i ++) {
    if (checkVisibility($elements[i])) {
      $elements[i].classList.add(endClassName);
      $elements[i].addEventListener(`transitionend`, onTransitionEnd);
    } else {
      $elements[i].classList.remove(endClassName);
    }
  }
};

const onScroll = ($animateIn, endClassName) => {
  window.requestAnimationFrame(() => {
    toggleElement($animateIn, endClassName);
  });



};

export default (($animateIn, endClassName) => {
  window.addEventListener(`scroll`, e => onScroll($animateIn, endClassName, e));
});
