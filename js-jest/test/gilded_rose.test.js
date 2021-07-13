const {Shop, Item} = require("../src/gilded_rose");

// describe("Gilded Rose", function() {
//   it("should foo", function() {
//     const gildedRose = new Shop([new Item("foo", 0, 0)]);
//     const items = gildedRose.updateQuality();
//     expect(items[0].name).toBe("fixme");
//   });
// });

describe("SellIn decreases each day", function() {
  it("should decrease by 1 each day", function() {
    const testShop = new Shop([new Item("test item", 6, 0)]);
    const updatedShop = testShop.updateQuality();
    expect(updatedShop[0].sellIn).toBe(5);
  });

  it("1 should go to 0", function() {
    const testShop = new Shop([new Item("test item", 1, 5)]);
    const updatedShop = testShop.updateQuality();
    expect(updatedShop[0].sellIn).toBe(0);
  });
});

describe("Once sell by date has passed, Quality degrades twice as fast", function() {
  it("Difference in Quality decrease should double once we pass 0", function() {
    const shopSellIn1 = new Shop([new Item("test item", 1, 5)]);
    const shopSellIn0 = new Shop(shopSellIn1.updateQuality());
    const shopSellInMinus1 = new Shop(shopSellIn0.updateQuality());
    expect(shopSellIn0.items[0].sellIn - shopSellInMinus1.items[0].sellIn).toBe(2*(shopSellIn0.items[0].sellIn-shopSellIn1.items[0].sellIn));
  })
});

describe("Quality never negative unless", function(){
  it("Quality should never be negative", function() {
    const shop = new Shop([new Item("test item", 1, 0)]);
    const updatedShop = new Shop(shop.updateQuality());
    expect(updatedShop.items[0].quality).toBe(0);
  })
});

describe("Aged Brie", function(){
  it("Should increase in quality when sellIn is above 0", function(){
    const shopWithBrie = new Shop([new Item("Aged Brie", 1, 5)]);
    const updatedItems = shopWithBrie.updateQuality();
    expect(updatedItems[0].quality - shopWithBrie.items[0].quality).toBeGreaterThanOrEqual(0);
  })

  it("Should increase in quality when sellIn is below 0", function(){
    const shopWithBrie = new Shop([new Item("Aged Brie", 0, 5)]);
    const updatedItems = shopWithBrie.updateQuality();
    expect(updatedItems[0].quality - shopWithBrie.items[0].quality).toBeGreaterThanOrEqual(0);
  })

});

describe("Quality of an item is never more than 50 unless it is Sulfuras", function(){
  it("Quality of Aged Brie should never go above 50", function(){
    const shopWithBrie = new Shop([new Item("Aged Brie", 0, 50)]);
    const updatedItems = shopWithBrie.updateQuality();
    expect(updatedItems[0].quality).toBeLessThanOrEqual(50);
  })

  it("Need to add another test for a general item", function(){
    const foo = "foo";
    expect(foo).toBe("foo");
  })
});

describe("Sulfuras", function(){
  it("should never decrease in sellIn", function() {
    const shopSulfuras = new Shop([new Item("Sulfuras, Hand of Ragnaros", 5, 5)]);
    const updatedShop = shopSulfuras.updateQuality();
    expect(updatedShop[0].sellIn - shopSulfuras.items[0].sellIn).toBe(0);
  })

  it("should never decrease in quality", function() {
    const shopSulfuras = new Shop([new Item("Sulfuras, Hand of Ragnaros", 5, 5)]);
    const updatedShop = shopSulfuras.updateQuality();
    expect(updatedShop[0].quality - shopSulfuras.items[0].quality).toBeGreaterThanOrEqual(0);
  })
});

describe("Backstage Passes", function() {
  it("should increase in quality by 2 when there are 10 days or less", function() {
    const shop = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 9, 8)]);
    const updatedShop = shop.updateQuality();
    expect(updatedShop[0].quality).toBe(10);
  })

  it("should increase in quality by 3 when there are 5 days or less", function() {
    const shop = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 4, 8)]);
    const updatedShop = shop.updateQuality();
    expect(updatedShop[0].quality).toBe(11);
  })

  it("should have quality 0 when there are less than 0 days", function() {
    const shop = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 8)]);
    const updatedShop = shop.updateQuality();
    expect(updatedShop[0].quality).toBe(0);
  })
});








