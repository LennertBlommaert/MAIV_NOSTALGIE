import ucWords from '../lib/ucWords';

export default class Note {

  id = 0
  name = ``
  isActive = false
  sound = {}

  constructor(id, name, audioFilename) {
    this.id = id;
    this.name = name;
    this.sound = new Audio(`assets/audio/${ucWords(audioFilename)}`);
  }

  toggleIsActive() {
    this.isActive = !this.isActive;
  }

}
