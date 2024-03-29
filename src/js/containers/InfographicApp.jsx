import React, {Component} from 'react';

import Feature from '../models/Feature.js';
import Features from '../components/Features.jsx';
import FeatureDescription from '../components/FeatureDescription.jsx';

class InfographicApp extends Component {

  state = {
    currentFeature: new Feature(0, 0, `Hover over the dots to see what assets made Nico such a source of inspiration.`),
    features: [
      new Feature(20, 70, `Although she was deaf in one ear, she became a very influential singer and musician. Nico had a trademark deep and heavy voice with a slight German accent no doubt this contributed to her androgynous image and people describing her as teutonic.`),
      new Feature(66, 79, `Her trademark was her unique instrument: the harmonium, a type of pump organ.  the pedal-powered keyboard instrument makes wheezing, droning sounds which underpin all her later work, and which furnished a suitably haunting, miasmic base for her compositions`),
      new Feature(77, 57, `Nico considered herself a bohemian. She travelled all around the world, and lived a free lifestyle.`),
      new Feature(44, 59, `Most people considered her incredibly handsome, because of her long blond hair, her very defined cheekbones and her eyes which were always covered in thick liner.`),
      new Feature(60, 47, `She had something impressive, almost imposing that people described as germanic or teutonic.`),
    ]
  }

  setSelectedFeature = id => {
    const {features} = this.state;

    const feature = features.find(f => f.id === id);
    feature.toggleSelected();

    this.setState({currentFeature: feature});
  }

  render() {

    const {features, currentFeature} = this.state;

    return (
      <div className='infographic__wrapper'>
        <div>
          <img src='assets/img/infographic.png' />
          <Features setSelectedFeature={this.setSelectedFeature} features={features} currentFeatureId={currentFeature.id} />
        </div>
        <FeatureDescription className='infographic__description' currentFeatureDescription={currentFeature.desc} />
      </div>
    );
  }

}

export default InfographicApp;
