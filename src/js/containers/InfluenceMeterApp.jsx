import React, {Component} from 'react';

import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Thumbnails from '../components/Thumbnails';
import Bar from '../components/Bar.jsx';
import Result from '../components/Result';

import Artist from '../models/Artist';

@DragDropContext(HTML5Backend)

class InfluenceMeterApp extends Component {

  state = {
    artists: [
      new Artist(`Iggy Pop`, `iggy_pop.jpg`),
      new Artist(`Siouxsie`, `siouxsie_sioux.jpg`),
      new Artist(`Bob Dylan`, `bob_dylan.jpg`),
      new Artist(`Jim Morrison`, `jim_morrison.jpg`),
      new Artist(`Iggy Pop`, `iggy_pop.jpg`),
      new Artist(`Siouxsie`, `siouxsie_sioux.jpg`),
      new Artist(`Bob Dylan`, `bob_dylan.jpg`),
      new Artist(`Jim Morrison`, `jim_morrison.jpg`),
      new Artist(`Iggy Pop`, `iggy_pop.jpg`),
      new Artist(`Siouxsie`, `siouxsie_sioux.jpg`),
    ]
  }

  handleOnThumbnailClick = id => {
    const {artists} = this.state;


    artists.map(a => {
      if (a.id === id) a.selected = !a.selected;
      return a;
    });

    this.setState({artists});
  }

  get nSelected() {
    const {artists} = this.state;
    return artists.filter(a => a.selected).length;
  }

  render() {

    const {artists} = this.state;

    return (

      <div>

        <Thumbnails artists={artists} onThumbnailClick={this.handleOnThumbnailClick} />

        <div className='result'>
          {/* <h4 className='meter__h4'>I am a fan of</h4> */}
          <Bar artists={artists} onThumbnailClick={this.handleOnThumbnailClick} />
          <Result nSelected={this.nSelected} />
        </div>

      </div>

    );
  }

}

export default InfluenceMeterApp;
