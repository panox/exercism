var Anagram = function(word) {
    this.word = word;
};

Anagram.compare = function(one, two) {
    one = one.split("").sort().join();
    two = two.split("").sort().join();
    if (one.lenght !== two.length) {
        return [];
    }
    return one === two;
};

Anagram.prototype.matches = function(array) {
    var word = this.word;
    var result;
    array.forEach(function(entry) {
        result = Anagram.compare(word, entry);
    });
    return result;
};

module.exports = Anagram;
