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
    // array.forEach(function(entry) {
    //     return compare(word, entry);
    // });
};

module.exports = Anagram;
