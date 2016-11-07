import { Item } from "./item";

class Normal extends Item {

  tick () {
    this.sellIn--;
    if (this.quality === 0) {
      return;
    }

    if (this.sellIn > 0) {
      this.quality--;
    } else {
      this.quality -= 2;
    }
  }
}

export { Normal };
