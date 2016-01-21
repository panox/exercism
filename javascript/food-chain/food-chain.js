var FoodChain = function() {};

FoodChain.prototype.verse = function(number) {
  var song = "";
  var map = ['empty', 'fly', 'spider'];
  if (number === 1) {
    song += 'I know an old lady who swallowed a '+map[number]+'.\nI don\'t know why she swallowed the '+map[number]+'. Perhaps she\'ll die.\n';
  }
  else {
    song += 'I know an old lady who swallowed a '+map[number]+'.\nIt wriggled and jiggled and tickled inside her.\n';
    song += 'She swallowed the '+map[number]+' to catch the '+map[number-1]+'.\n' + 'I don\'t know why she swallowed the '+map[number-1]+'. Perhaps she\'ll die.\n';
  }
  return song;

};

module.exports = FoodChain;
