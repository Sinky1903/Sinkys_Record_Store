var Record = function(artist, title, price) {
  this.artist = artist;
  this.title = title;
  this.price = price;
  this.showRecordInfo = function(record) {
    return this.artist + " " + this.title + " " + this.price;
  };
};


module.exports = Record;