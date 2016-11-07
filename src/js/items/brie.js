import { Item } from "./item";

class Brie extends Item {

  tick () {
    this.sellIn--;

    if (this.sellIn <= 0) {
      this.quality += 2;
    } else {
      this.quality += 1;
    }

    if (this.quality > 50) {
      this.quality = 50;
    }
  }
}

export { Brie };
