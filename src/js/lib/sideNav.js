import isElementInViewport from './isElementInViewport';
import scrollToItem from './scrollToItem';

const cases = [
  {
    name: `Chanel`,
    imgFilename: `chanel_nav.jpg`
  },
  {
    name: `Fellini`,
    imgFilename: `fellini_nav.jpg`
  },
  {
    name: `Dylan`,
    imgFilename: `dylan_nav.jpg`
  },
  {
    name: `Warhol`,
    imgFilename: `warhol_nav.jpg`
  },
  {
    name: `Underground`,
    imgFilename: `underground_nav.jpg`
  },
  {
    name: `Cohen`,
    imgFilename: `cohen_nav.jpg`
  },
  {
    name: `Garel`,
    imgFilename: `garel_nav.jpg`
  },
  {
    name: `Siouxsie`,
    imgFilename: `siouxsie_nav.jpg`
  },
];

export default () => {

  setNavList();

  window.addEventListener(`scroll`, onScroll);

};

const manageVisibility = () => {
  const $sidenav = document.querySelector(`.story__nav`);
  if (window.scrollY >= 1550 && window.scrollY <= 12725) {
    $sidenav.classList.add(`visible`);
  } else {
    $sidenav.classList.remove(`visible`);
  }
};

const handleCaseClick = name => scrollToItem(name);


const setNavList = () => {
  const $sideNavList = document.querySelector(`.story__nav-list`);

  cases.forEach(c => {
    const $li = document.createElement(`li`);
    $li.addEventListener(`click`, () => handleCaseClick(c.name));

    const $img = document.createElement(`img`);
    $img.setAttribute(`src`, `assets/img/${c.imgFilename}`);
    $img.setAttribute(`width`, 45);
    $img.setAttribute(`height`, 45);
    $li.appendChild($img);

    const $span = document.createElement(`span`);
    $span.innerHTML = c.name;
    $li.appendChild($span);

    $li.classList.add(c.name);
    $li.classList.add(`story__nav-list-item`);

    $sideNavList.appendChild($li);
  });

};

const setCurrentCase = () => {
  const $sideNavList = document.querySelector(`.story__nav-list`);

  const currentCase = cases.find(c => {
    const $el = document.getElementById(c.name);
    return isElementInViewport($el);
  });

  resetNavListItems();

  if (currentCase) $sideNavList.querySelector(`.${currentCase.name}`).classList.add(`active`);
  // if (currentCase) $sidenav.innerHTML += currentCase.name;

  //console.log(currentCase);
};

const resetNavListItems = () => {
  const $sideNavListItems = document.querySelectorAll(`.story__nav-list-item`);

  for (let i = 0;i < $sideNavListItems.length;i ++) {
    $sideNavListItems[i].classList.remove(`active`);
  }
};

const onScroll = () => {
  requestAnimationFrame(() => {

    manageVisibility();
    setCurrentCase();

  });
};
