import { Item } from "./items/item";
import { Normal } from "./items/normal";
import { Brie } from "./items/brie";
import { Backstage } from "./items/backstage";
import { Conjured } from "./items/conjured";

const ITEM_MAP = {
  'normal': Normal,
  'Aged Brie': Brie,
  'Sulfuras, Hand of Ragnaros': Item,
  'Backstage passes to a TAFKAL80ETC concert': Backstage,
  'Conjured Mana Cake': Conjured
};

class GildedRose {
  constructor (sellIn, quality, name) {
    var itemType = ITEM_MAP[name];
    return new itemType(sellIn, quality);
  }
}

export { GildedRose };
