var SpaceAge = function(seconds) {
  this.seconds = seconds;
};

SpaceAge.prototype.onEarth = function() {
  var seconds = this.seconds;
  return parseFloat((seconds/31557600).toFixed(2));
};

module.exports = SpaceAge;
