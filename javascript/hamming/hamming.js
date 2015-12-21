var Hamming = function() {};

Hamming.prototype.compute = function(a, b) {
  if (a === b) {
    return 0;
  }
};

module.exports = Hamming;
