var SpaceAge = function(seconds) {
  this.seconds = seconds;
};

SpaceAge.prototype.onEarth = function() {
  var seconds = this.seconds;
  return parseFloat((seconds/31557600).toFixed(2));
};
SpaceAge.prototype.onMercury = function() {
  var seconds = this.seconds;
  return parseFloat((seconds/(31557600*0.2408467)).toFixed(2));
};
SpaceAge.prototype.onVenus = function() {
  var seconds = this.seconds;
  return parseFloat((seconds/(31557600*0.61519726)).toFixed(2));
};
SpaceAge.prototype.onMars = function() {
  var seconds = this.seconds;
  return parseFloat((seconds/(31557600*1.8808158)).toFixed(2));
};
SpaceAge.prototype.onJupiter = function() {
  var seconds = this.seconds;
  return parseFloat((seconds/(31557600*11.862615)).toFixed(2));
};

module.exports = SpaceAge;
