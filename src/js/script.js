/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {render} from 'react-dom';
import InfluenceMeterApp from './containers/InfluenceMeterApp';

const init = () => {

  render(
    <InfluenceMeterApp  />,
    document.querySelector(`.influenceMeterApp-react-mount`)
  );


};

init();
