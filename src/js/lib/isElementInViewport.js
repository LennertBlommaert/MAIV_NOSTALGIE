export default $element => {

  const rect = $element.getBoundingClientRect();

  if (
    rect.top >= 0
    && rect.bottom <= (window.innerHeight + rect.height || document.documentElement.clientHeight + rect.height)
  ) {
    return true;
  }

  return false;
};
