var Anagram = function(word) {
    this.word = word;
};

Anagram.compare = function(one, two) {
    one = one.toLowerCase();
    two = two.toLowerCase();
    if (one === two) {
        return false;
    }
    one = one.split("").sort().join();
    two = two.split("").sort().join();
    return one === two;
};

Anagram.prototype.matches = function(collection) {
    var word = this.word;
    var resultArray = [];
    for (var i = 0; i < collection.length; i++) {
        if (Anagram.compare(word, collection[i])) {
            resultArray.push(collection[i]);
        }
    }
    return resultArray;
};

module.exports = Anagram;
