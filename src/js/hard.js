class GildedRose {
  constructor (sellIn, quality, name) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  normalTick () {
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

  agedBrieTick () {
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

  sulfurasTick () {
  }

  backstageTick () {
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

  conjuredTick () {
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

  tick () {
    if (this.name === 'normal') {
      return this.normalTick();
    } else if (this.name === 'Aged Brie') {
      return this.agedBrieTick();
    } else if (this.name === 'Sulfuras, Hand of Ragnaros') {
      return this.sulfurasTick();
    } else if (this.name === 'Backstage passes to a TAFKAL80ETC concert') {
      return this.backstageTick();
    } else if (this.name === 'Conjured Mana Cake') {
      return this.conjuredTick();
    }
  }
}

export { GildedRose };
