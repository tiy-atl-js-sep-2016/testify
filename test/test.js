// Import Chai
import chai from 'chai';

// Import Any Files to Test
import { fizz } from "../src/js/main";

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('Fizzbuzz returns values for different kinds of numbers', function () {
  it('should return the number for "basic" numbers', function () {
    let result = fizz(4);
    assert.equal(result, 4);
  });

  // Your Tests Here
});

// UNCOMMENT THE SECTION BELOW FOR HARD MODE

// import { GildedRose } from "../src/js/hard";

// describe('An inventory system ...', function () {
//   it("test_normal_item_before_sell_date", function () {
//     let item = new GildedRose(5, 10, 'normal');
//     item.tick();
//     assert.equal(9, item.quality);
//     assert.equal(4, item.sellIn);
//   });

//   it("test_normal_item_on_sell_date", function () {
//     let item = new GildedRose(0, 10, 'normal');
//     item.tick();
//     assert.equal(8, item.quality);
//     assert.equal(-1, item.sellIn);
//   });

//   it("test_normal_item_after_sell_date", function () {
//     let item = new GildedRose(-10, 10, 'normal');
//     item.tick();
//     assert.equal(8, item.quality);
//     assert.equal(-11, item.sellIn);
//   });

//   it("test_normal_item_of_zero_quality", function () {
//     let item = new GildedRose(5, 0, 'normal');
//     item.tick();
//     assert.equal(0, item.quality);
//     assert.equal(4, item.sellIn);
//   });

//   it("test_brie_before_sell_date", function () {
//     let item = new GildedRose(5, 10, 'Aged Brie');
//     item.tick();
//     assert.equal(11, item.quality);
//     assert.equal(4, item.sellIn);
//   });

//   it("test_brie_before_sell_date_with_max_quality", function () {
//     let item = new GildedRose(5, 50, 'Aged Brie');
//     item.tick();
//     assert.equal(50, item.quality);
//     assert.equal(4, item.sellIn);
//   });

//   it("test_brie_on_sell_date", function () {
//     let item = new GildedRose(0, 10, 'Aged Brie');
//     item.tick();
//     assert.equal(12, item.quality);
//     assert.equal(-1, item.sellIn);
//   });

//   it("test_brie_on_sell_date_near_max_quality", function () {
//     let item = new GildedRose(0, 49, 'Aged Brie');
//     item.tick();
//     assert.equal(50, item.quality);
//     assert.equal(-1, item.sellIn);
//   });

//   it("test_brie_on_sell_date_with_max_quality", function () {
//     let item = new GildedRose(0, 50, 'Aged Brie');
//     item.tick();
//     assert.equal(50, item.quality);
//     assert.equal(-1, item.sellIn);
//   });

//   it("test_brie_after_sell_date", function () {
//     let item = new GildedRose(-10, 10, 'Aged Brie');
//     item.tick();
//     assert.equal(12, item.quality);
//     assert.equal(-11, item.sellIn);
//   });

//   it("test_brie_after_sell_date_with_max_quality", function () {
//     let item = new GildedRose(-10, 50, 'Aged Brie');
//     item.tick();
//     assert.equal(50, item.quality);
//     assert.equal(-11, item.sellIn);
//   });

//   it("test_sulfuras_before_sell_date", function () {
//     let item = new GildedRose(5, 80, 'Sulfuras, Hand of Ragnaros');
//     item.tick();
//     assert.equal(80, item.quality);
//     assert.equal(5, item.sellIn);
//   });

//   it("test_sulfuras_on_sell_date", function () {
//     let item = new GildedRose(0, 80, 'Sulfuras, Hand of Ragnaros');
//     item.tick();
//     assert.equal(80, item.quality);
//     assert.equal(0, item.sellIn);
//   });

//   it("test_sulfuras_after_sell_date", function () {
//     let item = new GildedRose(-10, 80, 'Sulfuras, Hand of Ragnaros');
//     item.tick();
//     assert.equal(80, item.quality);
//     assert.equal(-10, item.sellIn);
//   });

//   it("test_backstage_pass_long_before_sell_date", function () {
//     let item = new GildedRose(11, 10, 'Backstage passes to a TAFKAL80ETC concert');
//     item.tick();
//     assert.equal(11, item.quality);
//     assert.equal(10, item.sellIn);
//   });

//   it("test_backstage_pass_medium_close_to_sell_date_upper_bound", function () {
//     let item = new GildedRose(10, 10, 'Backstage passes to a TAFKAL80ETC concert');
//     item.tick();
//     assert.equal(12, item.quality);
//     assert.equal(9, item.sellIn);
//   });

//   it("test_backstage_pass_medium_close_to_sell_date_upper_bound_at_max_quality", function () {
//     let item = new GildedRose(10, 50, 'Backstage passes to a TAFKAL80ETC concert');
//     item.tick();
//     assert.equal(50, item.quality);
//     assert.equal(9, item.sellIn);
//   });

//   it("test_backstage_pass_medium_close_to_sell_date_lower_bound", function () {
//     let item = new GildedRose(6, 10, 'Backstage passes to a TAFKAL80ETC concert');
//     item.tick();
//     assert.equal(12, item.quality);
//     assert.equal(5, item.sellIn);
//   });

//   it("test_backstage_pass_medium_close_to_sell_date_lower_bound_at_max_quality", function () {
//     let item = new GildedRose(6, 50, 'Backstage passes to a TAFKAL80ETC concert');
//     item.tick();
//     assert.equal(50, item.quality);
//   });

//   it("test_backstage_pass_very_close_to_sell_date_upper_bound", function () {
//     let item = new GildedRose(5, 10, 'Backstage passes to a TAFKAL80ETC concert');
//     item.tick();
//     assert.equal(13, item.quality);
//     assert.equal(4, item.sellIn);
//   });

//   it("test_backstage_pass_very_close_to_sell_date_upper_bound_at_max_quality", function () {
//     let item = new GildedRose(5, 50, 'Backstage passes to a TAFKAL80ETC concert');
//     item.tick();
//     assert.equal(50, item.quality);
//     assert.equal(4, item.sellIn);
//   });

//   it("test_backstage_pass_very_close_to_sell_date_lower_bound", function () {
//     let item = new GildedRose(1, 10, 'Backstage passes to a TAFKAL80ETC concert');
//     item.tick();
//     assert.equal(13, item.quality);
//     assert.equal(0, item.sellIn);
//   });

//   it("test_backstage_pass_very_close_to_sell_date_lower_bound_at_max_quality", function () {
//     let item = new GildedRose(1, 50, 'Backstage passes to a TAFKAL80ETC concert');
//     item.tick();
//     assert.equal(50, item.quality);
//     assert.equal(0, item.sellIn);
//   });

//   it("test_backstage_pass_on_sell_date", function () {
//     let item = new GildedRose(0, 10, 'Backstage passes to a TAFKAL80ETC concert');
//     item.tick();
//     assert.equal(0, item.quality);
//     assert.equal(-1, item.sellIn);
//   });

//   it("test_backstage_pass_after_sell_date", function () {
//     let item = new GildedRose(-10, 10, 'Backstage passes to a TAFKAL80ETC concert');
//     item.tick();
//     assert.equal(0, item.quality);
//     assert.equal(-11, item.sellIn);
//   });

//   it.skip("test_conjured_item_before_sell_date", function () {
//     let item = new GildedRose(5, 10, 'Conjured Mana Cake');
//     item.tick();
//     assert.equal(8, item.quality);
//     assert.equal(4, item.sellIn);
//   });

//   it.skip("test_conjured_item_at_zero_quality", function () {
//     let item = new GildedRose(5, 0, 'Conjured Mana Cake');
//     item.tick();
//     assert.equal(0, item.quality);
//     assert.equal(4, item.sellIn);
//   });

//   it.skip("test_conjured_item_on_sell_date", function () {
//     let item = new GildedRose(0, 10, 'Conjured Mana Cake');
//     item.tick();
//     assert.equal(6, item.quality);
//     assert.equal(-1, item.sellIn);
//   });

//   it.skip("test_conjured_item_on_sell_date_at_zero_quality", function () {
//     let item = new GildedRose(0, 0, 'Conjured Mana Cake');
//     item.tick();
//     assert.equal(0, item.quality);
//     assert.equal(-1, item.sellIn);
//   });

//   it.skip("test_conjured_item_after_sell_date", function () {
//     let item = new GildedRose(-10, 10, 'Conjured Mana Cake');
//     item.tick();
//     assert.equal(6, item.quality);
//     assert.equal(-11, item.sellIn);
//   });

//   it.skip("test_conjured_item_after_sell_date_at_zero_quality", function () {
//     let item = new GildedRose(-10, 0, 'Conjured Mana Cake');
//     item.tick();
//     assert.equal(0, item.quality);
//     assert.equal(-11, item.sellIn);
//   });

// });
