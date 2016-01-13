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
  endNumber = endNumber || 1;
  var song = "";
  for (var i = startNumber; i >= endNumber; i--) {


    if (i === 1) {
      song += '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    }
    else {
      song += i.toString() + ' bottles of beer on the wall, '+ i.toString() +' bottles of beer.\n';
      song += 'Take one down and pass it around, ' + (i-1).toString() + ' bottle';
      if (i !== 1) { song += 's';}
      song += ' of beer on the wall.\n';
    }

    if (i !== endNumber) {
      song += '\n';
    }
  }
  return song;
};

module.exports = BeerSong;
