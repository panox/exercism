var BeerSong = function() {};

BeerSong.prototype.verse = function(number) {
  if (number === 1) {
    return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
  }
  else if (number === 0 ) {
    return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
  }
  else {
    return +number+' bottles of beer on the wall, '+number+' bottles of beer.\n' + 'Take one down and pass it around, '+(number-1)+' bottles of beer on the wall.\n' ;
  }
};

BeerSong.prototype.sing = function(startNumber, endNumber) {
  endNumber = endNumber || 0;
  var song = "";
  for (var i = startNumber; i >= endNumber; i--) {
    song += this.verse(i);
  }
  return song;
};

module.exports = BeerSong;
