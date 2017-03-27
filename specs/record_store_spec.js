var RecStore = require('../record_store');
var Record = require('../record');
var assert = require('assert');

describe('Record Store', function() {

  var record1;
  var record2;
  var record3;
  var recStore;

  beforeEach(function() {
    record1 = new Record("Oasis", "Be here now", 10);
    record2 = new Record("Kings of Leon", "Youth and Young Manhood", 8);
    record3 = new Record("Kasabian", "Kasabian", 9);
    recStore = new RecStore("Sinkys", "Aberdeen", 1000, []);
  });

  it('should have a name', function() {
    assert.equal("Sinkys", recStore.name);
  });

  it('should have a city', function() {
    assert.equal("Aberdeen", recStore.city);
  });

  it('should have a balance', function() {
    assert.equal(1000, recStore.balance);
  });

  it('should have an empty inventory', function() {
    assert.equal(0, recStore.inventory.length);
  });

  it('should add record to inventory', function() {
    recStore.addRecord(record1);
    assert.equal(1, recStore.inventory.length);
  });

  it('should get all records from inventory', function() {
    recStore.addRecord(record1);
    recStore.addRecord(record2);
    recStore.addRecord(record3);
    assert.deepEqual([record1, record2, record3], recStore.showInventory());

  });

  it('should increase balance by price of record', function() {
    recStore.addRecord(record1);
    recStore.addRecord(record2);
    recStore.addRecord(record3);
    recStore.sellRecord(record1);
    assert.equal(1010, recStore.balance);
  });

  it('should increase balance by price of record and remove record from inventory', function() {
    recStore.addRecord(record1);
    recStore.addRecord(record2);
    recStore.addRecord(record3);
    recStore.sellRecordFromInventory(record1);
    assert.equal(1010, recStore.balance);
    assert.equal(2, recStore.inventory.length);
  });

  it('should show Balance of store and total of inventory', function() {
    recStore.addRecord(record1);
    recStore.addRecord(record2);
    recStore.addRecord(record3);
    recStore.sellRecord(record1);
    assert.equal(1037, recStore.showMoneyInfo());
  });

})