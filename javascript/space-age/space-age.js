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
  this.calculate = function (seconds, planet) {
    return parseFloat((seconds/this.yearSec[planet]).toFixed(2));
  };
};

SpaceAge.prototype.onEarth = function() {
  return this.calculate(this.seconds, 'Earth');
};
SpaceAge.prototype.onMercury = function() {
  return this.calculate(this.seconds, 'Mercury');
};
SpaceAge.prototype.onVenus = function() {
  return this.calculate(this.seconds, 'Venus');
};
SpaceAge.prototype.onMars = function() {
  return this.calculate(this.seconds, 'Mars');
};
SpaceAge.prototype.onJupiter = function() {
  return this.calculate(this.seconds, 'Jupiter');
};
SpaceAge.prototype.onSaturn = function() {
  return this.calculate(this.seconds, 'Saturn');
};
SpaceAge.prototype.onUranus = function() {
  return this.calculate(this.seconds, 'Uranus');
};
SpaceAge.prototype.onNeptune = function() {
  return this.calculate(this.seconds, 'Neptune');
};

module.exports = SpaceAge;
