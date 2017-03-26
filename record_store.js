var RecStore = function(name, city, balance) {
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
  this.showInventory = function() {
    return this.inventory;
  };
  this.addRecord = function(record) {
    this.inventory.push(record);
  };
  this.sellRecord = function(record, price) {
    if (record.artist === record.artist) {
      this.balance += record.price;
    };
  };
  // this.sellRecordFromInventory = function(record, price) {
  //   if (record.artist === record.artist) {
  //     var index = this.inventory.indexOf(record) {
  //       if (index > -1) {
  //         this.inventory.splice(index, 1);
  //       }this.balance += record.price;
  //   };
  // };
this.showMoneyInfo = function() {
}

};

module.exports = RecStore;