/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {render} from 'react-dom';
import InfluenceMeterApp from './containers/InfluenceMeterApp';
import HarmoniumApp from './containers/HarmoniumApp';
import imageViewer from './lib/imageViewer';
import infographic from './lib/infographic';
import audioPlayer from './lib/audioPlayer';
import stickyNav from './lib/stickyNav';
import animateIn from './lib/animateIn';
import scrollToItem from './lib/scrollToItem';


const init = () => {

  initAutoScroll();
  infographic(`assets/data/features.csv`);
  initCases();
  initAlbums();

  render(
    <InfluenceMeterApp  />,
    document.querySelector(`.influenceMeterApp-react-mount`)
  );

  render(
    <HarmoniumApp  />,
    document.querySelector(`.harmoniumApp-react-mount`)
  );

  stickyNav();

};

const initAutoScroll = () => {

  const $scrollIndicator = document.querySelector(`.scroll-indicator`);
  $scrollIndicator.addEventListener(`click`, () => scrollToItem(`muse`));

};

const initCases = () => {
  const $cases = document.querySelectorAll(`.case`);

  for (let i = 0;i < $cases.length;i ++) {
    imageViewer($cases[i]);
  }

  animateIn($cases, `revealedX`);

  const $caseImgs = document.querySelectorAll(`.case-img`);
  animateIn($caseImgs, `revealedX`);
};

const initAlbums = () => {
  const $audioTags = document.querySelectorAll(`.album`);

  for (let i = 0;i < $audioTags.length;i ++) {
    audioPlayer($audioTags[i]);
  }
};

init();
