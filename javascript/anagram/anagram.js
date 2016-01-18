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
    for (var i = 0; i < array.length; i++) {
        if (Anagram.compare(word, array[i])) {
            return [array[i]];
        }
        else {
            return [];
        }
    }

};

module.exports = Anagram;
