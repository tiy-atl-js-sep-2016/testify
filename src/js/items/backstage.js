import { Item } from "./item";

class Backstage extends Item {

  tick () {
    this.sellIn--;

    if (this.sellIn < 0) {
      this.quality = 0;
    } else if (this.sellIn < 5) {
      this.quality += 3;
    } else if (this.sellIn < 10) {
      this.quality += 2;
    } else {
      this.quality += 1;
    }

    if (this.quality > 50) {
      this.quality = 50;
    }
  }
}

export { Backstage };
