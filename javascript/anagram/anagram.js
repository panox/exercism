var Anagram = function(word) {
    this.word = word;
};

Anagram.compare = function(one, two) {
    one = one.split("").sort().join();
    two = two.split("").sort().join();
    return one === two;
};

Anagram.prototype.matches = function(array) {
    var word = this.word;
    array.forEach(function(entry) {
        if (Anagram.compare(word, entry)) {
            return entry;
        }
        else {
            return [];
        }
    });
};

module.exports = Anagram;
