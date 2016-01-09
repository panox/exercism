var Words = function() {
  this.countInArray = function (array, item) {
    var count = 0;
    for(var i = 0; i < array.length; ++i){
      if(array[i] == item)
      count++;
    }
    return count;
  };
};

Words.prototype.count = function(phrase) {
  var arrayOfWords = phrase.split(/\s+/);
  var objOfWords = {};
  for (var i = 0; i < arrayOfWords.length; i++) {
    var word = arrayOfWords[i];
    objOfWords[word] = this.countInArray(arrayOfWords, word);
  }
  return objOfWords;
};

module.exports = Words;
