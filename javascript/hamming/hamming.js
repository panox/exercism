var Hamming = function() {};

Hamming.prototype.compute = function(a, b) {
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
  return equals.length;
};

module.exports = Hamming;
