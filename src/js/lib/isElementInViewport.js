export default $element => {

  const rect = $element.getBoundingClientRect();

  if (
    rect.top >= 0
    //&& rect.left >= 0
    && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    //&& rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) {
    return true;
  }

  return false;
};
