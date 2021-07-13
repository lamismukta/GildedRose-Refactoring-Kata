class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
      for(var item of this.items) {
        if(item.quality <= 50){

          if(item.name == 'Aged Brie') {
            if (item.sellIn >= 0) {
              item.quality += 1;
            }
            if (item.sellIn < 0) {
              item.quality += 2;
            }
            item.sellIn -= 1;
          }

          if(item.name.startsWith('Backstage passes')) {
            if(item.sellIn > 10) {
              item.quality += 1;
            }
            if(item.sellIn <= 10 && item.sellIn >5) {
              item.quality += 2;
            }
            if(item.sellIn <= 5 && item.sellIn > 0) {
              item.quality += 3;
            }
            if(item.sellIn <= 0) {
              item.quality = 0;
            }
            item.sellIn -+ 1;
          }

          else if(!item.name.startsWith('Sulfuras')) {
            if(item.sellIn >= 0) {
              var update = item.quality -= 1;
              if(item.name.startsWith('Conjured')) {
                update *= 2;
              }
              item.quality = Math.max(0, update);
            }
            if(item.sellIn < 0) {
              var update = item.quality -= 2;
              if(item.name.startsWith('Conjured')) {
                update *= 2;
              }
              item.quality = Math.max(0, update);
            }
            item.sellIn -= 1;
          }

        }
      }
      return this.items;
    };
  }

//     for (let i = 0; i < this.items.length; i++) {
//       if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//         if (this.items[i].quality > 0) {
//           if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//             this.items[i].quality = this.items[i].quality - 1;
//           }
//         }
//       } else {
//         if (this.items[i].quality < 50) {
//           this.items[i].quality = this.items[i].quality + 1;
//           if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
//             if (this.items[i].sellIn < 11) {
//               if (this.items[i].quality < 50) {
//                 this.items[i].quality = this.items[i].quality + 1;
//               }
//             }
//             if (this.items[i].sellIn < 6) {
//               if (this.items[i].quality < 50) {
//                 this.items[i].quality = this.items[i].quality + 1;
//               }
//             }
//           }
//         }
//       }
//       if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//         this.items[i].sellIn = this.items[i].sellIn - 1;
//       }
//       if (this.items[i].sellIn < 0) {
//         if (this.items[i].name != 'Aged Brie') {
//           if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//             if (this.items[i].quality > 0) {
//               if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//                 this.items[i].quality = this.items[i].quality - 1;
//               }
//             }
//           } else {
//             this.items[i].quality = this.items[i].quality - this.items[i].quality;
//           }
//         } else {
//           if (this.items[i].quality < 50) {
//             this.items[i].quality = this.items[i].quality + 1;
//           }
//         }
//       }
//     }

//     return this.items;
//   }
// }

module.exports = {
  Item,
  Shop
}
