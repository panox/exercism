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
  this.onEarth = function() { return this.calculate(this.seconds, 'Earth'); };
  this.onMercury = function() { return this.calculate(this.seconds, 'Mercury'); };
  this.onVenus = function() { return this.calculate(this.seconds, 'Venus'); };
  this.onMars = function() { return this.calculate(this.seconds, 'Mars'); };
  this.onJupiter = function() { return this.calculate(this.seconds, 'Jupiter'); };
  this.onSaturn = function() { return this.calculate(this.seconds, 'Saturn'); };
  this.onUranus = function() { return this.calculate(this.seconds, 'Uranus'); };
  this.onNeptune = function() { return this.calculate(this.seconds, 'Neptune'); };
};

module.exports = SpaceAge;
