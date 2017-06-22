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
    currentNote: {},
    notes: [
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

  handleActivateNote = id => {

    const {notes} = this.state;

    const pNote = notes.find(a => a.isActive === true);
    if (pNote) pNote.isActive = !pNote.isActive;

    const note = notes.find(a => a.id === id);
    note.isActive = !note.isActive;

    note.sound.play();

    this.setState({audio: notes, currentNote: note});

  }

  render() {

    const {notes, currentNote} = this.state;

    return (
      <div>
        <Staff onActivateNote={this.handleActivateNote} notes={notes} />
        <div className='harmonium__bg'>
          {
            currentNote.name !== undefined ?
                <CurrentNote note={currentNote.name} />
            : <div className='harmonium__note'>/</div>
          }
        </div>
      </div>
    );
  }

}

export default Harmonium;
