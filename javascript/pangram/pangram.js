var Pangram = function(phrase) {
  this.phrase = phrase;
};

Pangram.prototype.isPangram = function() {
  if (this.phrase === '') {
    return false;
  }
};

module.exports = Pangram;
