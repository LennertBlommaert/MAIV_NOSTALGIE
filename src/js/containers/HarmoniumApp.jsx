import React, {Component} from 'react';

import Staff from '../components/Staff';

/*
  HARMONIUM
  DEF - "The harmonium is a type organ that generates sound as air flows
  past a vibrating piece of thin metal.
*/

class Harmonium extends Component {

  state = {
    audio: [
      {
        id: 1,
        sound: new Audio(`assets/audio/do.mp3`),
      },
      {
        id: 2,
        sound: new Audio(`assets/audio/re.mp3`),
      },
      {
        id: 3,
        sound: new Audio(`assets/audio/mi.mp3`),
      },
      {
        id: 4,
        sound: new Audio(`assets/audio/fa.mp3`),
      },
      {
        id: 5,
        sound: new Audio(`assets/audio/sol.mp3`),
      },
      {
        id: 6,
        sound: new Audio(`assets/audio/la.mp3`),
      },
      {
        id: 7,
        sound: new Audio(`assets/audio/si.mp3`),
      },
      {
        id: 8,
        sound: new Audio(`assets/audio/do2.mp3`),
      }
    ]
  }

  handleClickNote = id => {

    const {audio} = this.state;

    const audioItem = audio.find(a => {
      return a.id === id;
    });

    audioItem.sound.play();

  }

  render() {

    const {audio} = this.state;

    return (
      <section>
        <Staff onClickNote={this.handleClickNote} audio={audio} />
      </section>
    );
  }

}

export default Harmonium;
