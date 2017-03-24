var Record = require('../record');
var assert = require('assert');

describe('Record', function() {

  var record1;
  var record2;
  var record3;

  beforeEach(function () {
    record1 = new Record("Oasis", "Be here now", 10);
  });

  it('should have an artist', function() {
    assert.equal("Oasis", record1.artist);
  });

  it('should have a title', function() {
    assert.equal("Be here now", record1.title);
  });

  it('should have a price', function() {
    assert.equal(10, record1.price);
  });

});