const onScroll = () => {
  window.requestAnimationFrame(() => {
    const $sidenav = document.querySelector(`.story__nav`);
    if (window.scrollY >= 1550) {
      $sidenav.classList.add(`sticky`);
    } else {
      $sidenav.classList.remove(`sticky`);
    }
  });
};

export default (() => {
  window.addEventListener(`scroll`, onScroll);
});
