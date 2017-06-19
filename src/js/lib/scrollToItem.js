import scrollToElement from 'scroll-to-element';

export default id => {

  const $element = document.getElementById(id);
  scrollToElement($element, {
    ease: `outSine`,
    duration: 500
  });

};
