var BeerSong = function() {};

BeerSong.prototype.verse = function(startNumber, endNumber) {
  var song = "";
  if (startNumber === 1) {
    song += '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
  }
  else if (startNumber === 0 ) {
    song += 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
  }
  else {
    song = startNumber+ ' bottles of beer on the wall, '+startNumber+' bottles of beer.\n';
    song += 'Take one down and pass it around, '+(startNumber-1)+' bottles of beer on the wall.\n' ;
  }
  return song;
};

module.exports = BeerSong;
