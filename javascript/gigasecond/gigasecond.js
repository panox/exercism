var Gigasecond = function(startDate) {
  this.startDate = startDate;
};

Gigasecond.prototype.date = function() {
  var startDate = this.startDate;
  startDate.setSeconds(startDate.getSeconds() + Math.pow(10,9));
  return startDate;
};

module.exports = Gigasecond;
