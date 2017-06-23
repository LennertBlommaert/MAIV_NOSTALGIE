import React, {Component} from 'react';

import Staff from '../components/Staff';
import CurrentNote from '../components/CurrentNote';
import Note from '../models/Note';

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
      new Note(1, `DO`, `do.mp3`),
      new Note(2, `RE`, `re.mp3`),
      new Note(3, `MI`, `mi.mp3`),
      new Note(4, `FA`, `fa.mp3`),
      new Note(5, `SOL`, `sol.mp3`),
      new Note(6, `LA`, `la.mp3`),
      new Note(7, `SI`, `si.mp3`),
      new Note(8, `DO`, `do2.mp3`),
    ]
  }

  handleActivateNote = id => {

    const {notes} = this.state;

    const pNote = notes.find(a => a.isActive === true);
    if (pNote) pNote.toggleIsActive();

    const note = notes.find(a => a.id === id);
    note.toggleIsActive();

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
