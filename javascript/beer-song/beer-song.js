var BeerSong = function() {};

BeerSong.prototype.verse = function(number) {
  var song;
  song = number+ ' bottles of beer on the wall, '+number+' bottles of beer.\n';
  if (number === 1) {
    song = '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
  }
  else {
    song += 'Take one down and pass it around, '+(number-1)+' bottles of beer on the wall.\n' ;
  }
  return song;
};

module.exports = BeerSong;
