import uuid from 'uuid';

export default class Artist {

  id = ``
  x = ``
  y = ``
  desc = ``

  constructor(x, y, desc) {
    this.id = uuid.v4();
    this.x = x;
    this.y = y;
    this.desc = desc;
  }

  toggleSelected() {
    this.selected = !this.selected;
  }

}
