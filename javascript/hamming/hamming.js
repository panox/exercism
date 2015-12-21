var Hamming = function() {};

Hamming.prototype.compute = function(a, b) {
  var aSplit = a.split('');
  var bSplit = b.split('');

  var ret = [];
  for(var i in aSplit) {
    if(bSplit.indexOf( aSplit[i] ) > -1){
      ret.push( aSplit[i] );
    }
  }
  return ret.length;

};

module.exports = Hamming;
