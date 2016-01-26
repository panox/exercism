var FoodChain = function() {};

FoodChain.prototype.verse = function(number) {
  var song = "";
  var map = ['empty', 'fly', 'spider', 'bird', 'cat', 'dog'];
  song += 'I know an old lady who swallowed a '+map[number]+'.\n';
  switch(number) {
      case 5:
        song += 'What a hog, to swallow a dog!\n';
      case 4:
        if (number === 3) {
          song += 'Imagine that, to swallow a cat!\n';
        }
        song += 'She swallowed the cat to catch the bird.\n';
      case 3:
        if (number === 3) {
          song += 'How absurd to swallow a bird!\n';
        }
        song += 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n';
      case 2:
        if (number === 2) {
          song += 'It wriggled and jiggled and tickled inside her.\n';
        }
        song += 'She swallowed the spider to catch the fly.\n'
      case 1:
        song += 'I don\'t know why she swallowed the fly. ';
  }
  song += 'Perhaps she\'ll die.\n';
  return song;

};

module.exports = FoodChain;
