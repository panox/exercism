var FoodChain = function() {};

FoodChain.prototype.verse = function(number) {
  var song = "";
  var map = ['empty', 'fly', 'spider'];
  song += 'I know an old lady who swallowed a '+map[number]+'.\n';
  if (number === 1) {
    song += 'I don\'t know why she swallowed the '+map[number]+'. '
  }
  else if (number === 2){
    song += 'It wriggled and jiggled and tickled inside her.\n';
    song += 'She swallowed the '+map[number]+' to catch the '+map[number-1]+'.\n' + 'I don\'t know why she swallowed the '+map[number-1]+'. ';
  }
  song += 'Perhaps she\'ll die.\n';
  return song;

};

module.exports = FoodChain;
