var Anagram = function(word) {
    this.word = word;
};

Anagram.prototype.matches = function(array) {
    var word = this.word;
    var result;
    for (var i = 0; i < array.length; i++) {
        if (word.length !== array[i]) {
            result = result || [];
        }
    }
    return result;
};

module.exports = Anagram;
