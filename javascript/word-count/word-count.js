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
  var arrayOfWords = phrase.split(" ");
  var objOfWords = {};
  for (var i = 0; i < arrayOfWords.length; i++) {
    objOfWords[arrayOfWords[i]] = this.countInArray();
  }
  return objOfWords;
};

module.exports = Words;
