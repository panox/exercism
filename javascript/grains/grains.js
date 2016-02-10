var Grains = function () {
  this.square = function (number) {
    return this.calculate(number).toString();
  };
  this.calculate = function (number) {
    return number;
  };
};
module.exports = Grains;
