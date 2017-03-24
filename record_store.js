var RecStore = function(name, city, balance) {
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
  this.getInventory = function() {
    return this.inventory;
  };
  this.addRecord = function(record) {
    this.inventory.push(record);
  };
  
}

module.exports = RecStore;