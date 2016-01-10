var BeerSong = function() {};

BeerSong.prototype.verse = function(number) {
  var song;
  song = number+ ' bottles of beer on the wall, '+number+' bottles of beer.\n';
  song += 'Take one down and pass it around, '+(number-1)+' bottles of beer on the wall.\n' ;
  return song;
};

module.exports = BeerSong;
