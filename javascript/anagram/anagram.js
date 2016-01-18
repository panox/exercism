var Anagram = function(word) {
    this.word = word;
};

function compare(one, two) {
    if (one.lenght !== two.length) {
        return [];
    }
}

Anagram.prototype.matches = function(array) {
    var word = this.word;
    var result;
    for (var i = 0; i < array.length; i++) {
        result = compare(word, array[i]);
    }
    return result;
};

module.exports = Anagram;
