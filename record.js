var Record = function(artist, title, price) {
  this.artist = artist;
  this.title = title;
  this.price = price;
  var getRecordInfo = function() {
    return this.artist + " " + this.title + " " + this.price;
  };
};

// console.log(this.getRecord());

module.exports = Record;