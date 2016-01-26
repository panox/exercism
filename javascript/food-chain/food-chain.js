var FoodChain = function() {};

FoodChain.prototype.verse = function(number) {
  var song = "";
  var map = ['empty', 'fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse'];
  song += 'I know an old lady who swallowed a '+map[number]+'.\n';
  switch(number) {
      case 8:
        song += 'She\'s dead, of course!\n';
        break;
      case 7:
        song += 'I don\'t know how she swallowed a cow!\n';
        song += 'She swallowed the cow to catch the goat.\n';
      case 6:
        if (number === 6) {
          song += 'Just opened her throat and swallowed a goat!\n';
        }
        song += 'She swallowed the goat to catch the dog.\n';
      case 5:
        if (number === 5) {
          song += 'What a hog, to swallow a dog!\n';
        }
        song += 'She swallowed the dog to catch the cat.\n';
      case 4:
        if (number === 4) {
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
  if (number !== 8) {
    song += 'Perhaps she\'ll die.\n';
  }
  return song;
};

FoodChain.prototype.verses = function(start, end) {
  var song = '';
  for (var i = start; i <= end; i++) {
    song+= FoodChain.prototype.verse(i);
    if (i !== end) {
      song+= '\n\n';
    }
  }
  return song;
};

module.exports = FoodChain;
