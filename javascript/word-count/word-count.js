var Words = function() {
  this.countInArray = function () {
    return 1;
  };
};

Words.prototype.count = function(phrase) {
  var arrayOfWords = phrase.split(" ");
  var objOfWords = {};
  for (var i = 0; i < arrayOfWords.length; i++) {
    objOfWords[arrayOfWords[i]] = this.countInArray();
  }
  return objOfWords;
};

module.exports = Words;
