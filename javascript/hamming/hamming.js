var Hamming = function() {};

Hamming.prototype.compute = function(a, b) {
  if (a.length !== b.length) {
    throw new Error('DNA strands must be of equal length.');
  }
  if (a == b ) {
    return 0;
  }
  else {
    var aSplit = a.split(''), bSplit = b.split('');
    var equals = [];

    aSplit.forEach( function (letter, index) {
      if (letter == bSplit[index]) {
        equals.push(true);
      }
      else  {
        equals.push(false);
      }
    });
    return equals.toString().match(/false/g).length;
  }
};

module.exports = Hamming
