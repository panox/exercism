var Words = function() {};

Words.prototype.count = function(phrase) {
  var arrayOfWords = phrase.split(" ");
  var objOfWords = {};
  objOfWords[arrayOfWords[0]] = 1;
  return objOfWords;
};

module.exports = Words;
