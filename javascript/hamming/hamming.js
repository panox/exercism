var Hamming = function() {};

Hamming.prototype.compute = function(a, b) {
  if (a === b) {
    return 0;
  }
  else if (a !== b) {
    return 1;
  }
};

module.exports = Hamming;
