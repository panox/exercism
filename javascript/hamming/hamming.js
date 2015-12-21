var Hamming = function() {};

Hamming.prototype.compute = function(a, b) {
  var aSplit = a.split(''), bSplit = b.split('');
  return aSplit.filter(function(i) {return bSplit.indexOf(i) < 0;}).length;
};

module.exports = Hamming;
