var FoodChain = function() {};

FoodChain.prototype.verse = function(number) {
  var song = "";
  var map = ['empty', 'fly', 'spider'];
  song += 'I know an old lady who swallowed a '+map[number]+'.\n';
  switch(number) {
      case 2:
        song += 'It wriggled and jiggled and tickled inside her.\n';
        song += 'She swallowed the spider to catch the fly.\n'
      case 1:
        song += 'I don\'t know why she swallowed the fly. ';
  }
  song += 'Perhaps she\'ll die.\n';
  return song;

};

module.exports = FoodChain;
