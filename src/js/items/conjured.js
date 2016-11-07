import { Item } from "./item";

class Conjured extends Item {

  tick () {
    this.sellIn--;

    if (this.sellIn > 0){
      this.quality -= 2;
    } else if (this.sellIn <= 0) {
      this.quality -= 4;
    }

    if (this.quality < 0) {
      this.quality = 0;
    }
  }
}

export { Conjured };
