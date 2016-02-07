var SpaceAge = function(seconds) {
  this.seconds = seconds;
  this.earthYearSec = 31557600;
  this.yearSec = {
    'Earth'   : this.earthYearSec,
    'Mercury' : this.earthYearSec * 0.2408467,
    'Venus'   : this.earthYearSec * 0.61519726,
    'Mars'    : this.earthYearSec * 1.8808158,
    'Jupiter' : this.earthYearSec * 11.862615,
    'Saturn'  : this.earthYearSec * 29.447498,
    'Uranus'  : this.earthYearSec * 84.016846,
    'Neptune' : this.earthYearSec * 164.79132
  };
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
SpaceAge.prototype.onSaturn = function() {
  var seconds = this.seconds;
  return parseFloat((seconds/(31557600*29.447498)).toFixed(2));
};
SpaceAge.prototype.onUranus = function() {
  var seconds = this.seconds;
  return parseFloat((seconds/(31557600*84.016846)).toFixed(2));
};
SpaceAge.prototype.onNeptune = function() {
  var seconds = this.seconds;
  return parseFloat((seconds/(31557600*164.79132)).toFixed(2));
};

module.exports = SpaceAge;
