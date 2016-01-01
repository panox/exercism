var Gigasecond = function(startDate) {
  this.startDate = startDate;
};

Gigasecond.prototype.date = function() {
  return this.startDate;
};

module.exports = Gigasecond;
