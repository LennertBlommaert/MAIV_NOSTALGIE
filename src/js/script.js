/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {render} from 'react-dom';
import InfluenceMeterApp from './containers/InfluenceMeterApp';
import InfographicApp from './containers/InfographicApp';
import HarmoniumApp from './containers/HarmoniumApp';
import imageViewer from './lib/imageViewer';
import audioPlayer from './lib/audioPlayer';
import sideNav from './lib/sideNav';
import animateIn from './lib/animateIn';
import scrollToItem from './lib/scrollToItem';
import video from './lib/video';


const init = () => {

  initAutoScroll();
  video();
  initGlueImages();
  initCases();
  initAlbums();

  handleWindowResize();

  render(
    <InfluenceMeterApp  />,
    document.querySelector(`.influenceMeterApp-react-mount`)
  );

  sideNav();

  window.addEventListener(`resize`, handleWindowResize);
};

const handleWindowResize = () => {

  if (window.innerWidth >= 700) {
    render(
      <InfographicApp  />,
      document.querySelector(`.infographicApp-react-mount`)
    );
  }

  if (window.innerWidth >= 550) {
    render(
      <HarmoniumApp  />,
      document.querySelector(`.harmoniumApp-react-mount`)
    );
  }
};

const initGlueImages = () => {
  const $img = document.querySelectorAll(`.glue__img`);
  animateIn($img, `revealedAll`);
};

const initAutoScroll = () => {

  const $scrollIndicator = document.querySelector(`.scroll-indicator`);
  $scrollIndicator.addEventListener(`click`, () => scrollToItem(`muse`));

};

const initCases = () => {
  const $cases = document.querySelectorAll(`.case`);

  for (let i = 0;i < $cases.length;i ++) {
    $cases[i].classList.add(`translated`);
    imageViewer($cases[i]);
  }

  animateIn($cases, `revealedX`);

  const $caseImgs = document.querySelectorAll(`.case-img`);

  for (let i = 0;i < $caseImgs.length;i ++) {
    $caseImgs[i].classList.add(`translated`);
  }

  animateIn($caseImgs, `revealedX`);
};

const initAlbums = () => {
  const $audioTags = document.querySelectorAll(`.album`);

  for (let i = 0;i < $audioTags.length;i ++) {
    audioPlayer($audioTags[i]);
  }
};

init();
