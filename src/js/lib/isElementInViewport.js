export default $element => {

  const rect = $element.getBoundingClientRect();

  if (
    rect.top >= 0
    //&& rect.left >= 0
    && rect.bottom <= (window.innerHeight + rect.height || document.documentElement.clientHeight + rect.height)
    //&& rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) {
    return true;
  }

  return false;
};
