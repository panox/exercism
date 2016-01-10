var BeerSong = function() {};

BeerSong.prototype.verse = function(number) {
  var song = "";
  if (number === 1) {
    song += '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
  }
  else if (number === 0 ) {
    song += 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
  }
  else {
    song = number+ ' bottles of beer on the wall, '+number+' bottles of beer.\n';
    song += 'Take one down and pass it around, '+(number-1)+' bottles of beer on the wall.\n' ;
  }
  return song;
};

BeerSong.prototype.sing = function(startNumber, endNumber) {
  var song = "";
  for (var i = startNumber; i > 0; i--) {
    song = startNumber+ ' bottles of beer on the wall, '+ i +' bottles of beer.\n';
    song += 'Take one down and pass it around, ' + i + ' bottles of beer on the wall.\n\n';
  }
  return song;
};

module.exports = BeerSong;
