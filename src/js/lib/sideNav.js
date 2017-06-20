import isElementInViewport from './isElementInViewport';
import scrollToItem from './scrollToItem';

const cases = [
  {
    name: `Chanel`
  },
  {
    name: `Felini`
  },
  {
    name: `Dylan`
  },
  {
    name: `Warhol`
  },
  {
    name: `Underground`
  },
  {
    name: `Cohen`
  },
  {
    name: `Garel`
  },
  {
    name: `Siouxsie`
  },
];

export default () => {

  setNavList();

  window.addEventListener(`scroll`, onScroll);

};

const manageVisibility = () => {
  const $sidenav = document.querySelector(`.story__nav`);
  if (window.scrollY >= 1550) {
    $sidenav.style.opacity = 1;
  } else {
    $sidenav.style.opacity = 0;
  }
};

const handleCaseClick = name => scrollToItem(name);


const setNavList = () => {
  const $sideNavList = document.querySelector(`.story__nav-list`);

  cases.forEach(c => {
    const $li = document.createElement(`li`);
    $li.addEventListener(`click`, () => handleCaseClick(c.name));

    const $span = document.createElement(`span`);
    $span.innerHTML = c.name;
    $li.appendChild($span);

    const $img = document.createElement(`img`);
    $img.setAttribute(`src`, `assets/img/${c.imgFilename}`);
    $img.setAttribute(`width`, 25);
    $img.setAttribute(`height`, 25);
    $li.appendChild($img);

    $li.classList.add(c.name);

    $sideNavList.appendChild($li);
  });

};

const setCurrentCase = () => {
  const $sideNavList = document.querySelector(`.story__nav-list`);

  const currentCase = cases.find(c => {
    const $el = document.getElementById(c.name);
    return isElementInViewport($el);
  });

  if (currentCase) $sideNavList.querySelector(`.${currentCase.name}`).classList.add(`active`);
  // if (currentCase) $sidenav.innerHTML += currentCase.name;

  //console.log(currentCase);
};

const onScroll = () => {
  requestAnimationFrame(() => {

    manageVisibility();
    setCurrentCase();

  });
};
