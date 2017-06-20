import React, {Component} from 'react';

import Staff from '../components/Staff';
import CurrentNote from '../components/CurrentNote';

/*
  HARMONIUM
  DEF - "The harmonium is a type organ that generates sound as air flows
  past a vibrating piece of thin metal.
*/

class Harmonium extends Component {

  $visualizer

  state = {
    currentAudio: {},
    audio: [
      {
        id: 1,
        isActive: false,
        name: `Do`,
        sound: new Audio(`assets/audio/do.mp3`),
      },
      {
        id: 2,
        isActive: false,
        name: `Re`,
        sound: new Audio(`assets/audio/re.mp3`),
      },
      {
        id: 3,
        isActive: false,
        name: `Mi`,
        sound: new Audio(`assets/audio/mi.mp3`),
      },
      {
        id: 4,
        isActive: false,
        name: `Fa`,
        sound: new Audio(`assets/audio/fa.mp3`),
      },
      {
        id: 5,
        isActive: false,
        name: `Sol`,
        sound: new Audio(`assets/audio/sol.mp3`),
      },
      {
        id: 6,
        isActive: false,
        name: `La`,
        sound: new Audio(`assets/audio/la.mp3`),
      },
      {
        id: 7,
        isActive: false,
        name: `Si`,
        sound: new Audio(`assets/audio/si.mp3`),
      },
      {
        id: 8,
        isActive: false,
        name: `Do`,
        sound: new Audio(`assets/audio/do2.mp3`),
      }
    ]
  }

  handleClickNote = id => {

    const {audio} = this.state;

    const pAudioItem = audio.find(a => a.isActive === true);
    if (pAudioItem) pAudioItem.isActive = !pAudioItem.isActive;

    const audioItem = audio.find(a => a.id === id);
    audioItem.isActive = !audioItem.isActive;

    audioItem.sound.play();

    this.setState({audio: audio, currentAudio: audioItem});

  }

  render() {

    const {audio, currentAudio} = this.state;

    return (
      <div>
        <Staff onClickNote={this.handleClickNote} audio={audio} />
        {
          currentAudio.name !== undefined ?
            <CurrentNote note={currentAudio.name} />
          : ``
        }
      </div>
    );
  }

}

export default Harmonium;
