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

Anagram.prototype.matches = function(array) {
    var word = this.word;
    var resultArray = [];
    for (var i = 0; i < array.length; i++) {
        if (Anagram.compare(word, array[i])) {
            resultArray.push(array[i]);
        }
    }
    return resultArray;
};

module.exports = Anagram;
