/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {render} from 'react-dom';
import InfluenceMeterApp from './containers/InfluenceMeterApp';
import imageViewer from './lib/imageViewer';
import infographic from './lib/infographic';

const init = () => {

  const $cases = document.querySelectorAll(`.case`);

  for (let i = 0;i < $cases.length;i ++) {
    imageViewer($cases[i]);
  }

  infographic(`assets/data/features.csv`);

  render(
    <InfluenceMeterApp  />,
    document.querySelector(`.influenceMeterApp-react-mount`)
  );

};

init();
