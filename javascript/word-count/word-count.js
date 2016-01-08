var Words = function() {};

Words.prototype.count = function(phrase) {
  var arrayOfWords = phrase.split(" ");
  var objOfWords = {};
  for (var i = 0; i < arrayOfWords.length; i++) {
    objOfWords[arrayOfWords[i]] = 1;
  }
  return objOfWords;
};

module.exports = Words;
