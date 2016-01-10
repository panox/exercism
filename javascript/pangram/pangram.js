var Pangram = function(phrase) {
  this.phrase = phrase;
};

Pangram.prototype.isPangram = function() {
  if (this.phrase === '') {
    return false;
  }
  else  {
    var regex = /([a-z])(?!.*\1)/g;
    return (this.phrase.match(regex)).length === 26;
  }
};

module.exports = Pangram;
