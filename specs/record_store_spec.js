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
    record2 = new Record("King of Leon", "Youth and Young Manhood", 8);
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

  // it('should get all records from inventory', function() {
  //   recStore.addRecord(record1);
  //   recStore.addRecord(record2);
  //   recStore.addRecord(record3);
  //   assert.equal(, recStore.inventory());
  // });

})