var SpaceAge = function(seconds) {
  this.seconds = seconds;
};

SpaceAge.prototype.onEarth = function() {
  var seconds = this.seconds;
  return seconds/31557600;
};

module.exports = SpaceAge;
