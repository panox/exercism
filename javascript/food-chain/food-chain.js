var FoodChain = function() {};

FoodChain.prototype.verse = function(number) {
  var song = "";
  song += 'I know an old lady who swallowed a fly.\nI don\'t know why she swallowed the fly.';
  song += ' Perhaps she\'ll die.\n';
  return song;

};

module.exports = FoodChain;
