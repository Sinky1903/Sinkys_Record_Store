var Record = require('../record');
var assert = require('assert');

describe('Record', function() {

  var record1;

  beforeEach(function () {
    record1 = new Record("Oasis", "Be Here Now", 10);
  });

  it('should have an artist', function() {
    assert.equal("Oasis", record1.artist);
  });

  it('should have a title', function() {
    assert.equal("Be Here Now", record1.title);
  });

  it('should have a price', function() {
    assert.equal(10, record1.price);
  });

  it('should return record details', function() {
    assert.equal("Oasis Be Here Now 10", record1.showRecordInfo());
  });

});