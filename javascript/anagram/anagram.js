var Anagram = function(word) {
    this.word = word;
};

Anagram.prototype.matches = function() {
    return this.word;
};

module.exports = Anagram;
