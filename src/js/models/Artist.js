import ucWords from '../lib/ucWords';
import uuid from 'uuid';

export default class Artist {

  id = 0
  name = ``
  imgPath = ``
  selected = false

  constructor(name, imgPath) {
    this.id = uuid.v4();
    this.name = name;
    this.imgPath = `assets/img/thumbnails/${ucWords(imgPath)}`;
  }

  toggleSelected() {
    this.selected = !this.selected;
  }

}
