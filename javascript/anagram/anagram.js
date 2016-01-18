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

    if (Anagram.compare(word, array[0])) {
        return [array[0]];
    }
    else {
        return [];
    }

};

module.exports = Anagram;
