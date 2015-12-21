var Hamming = function() {};

Hamming.prototype.compute = function(a, b) {
  var aSplit = a.split(''), bSplit = b.split('');
  var equals = [];

  aSplit.forEach( function (letter, index) {
    if (letter == bSplit[index]) {
      equals.push(true);
    }
    else  {
      equals.push(false);
    }
  });
  var numOfFalse = 0;
  for(var i=0;i<equals.length;i++){
    if(equals[i] === "false")
    numOfFalse++;
  }
  return numOfFalse;
};

module.exports = Hamming;
