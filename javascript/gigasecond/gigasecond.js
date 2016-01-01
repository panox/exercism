var Gigasecond = function(startDate) {
  this.startDate = startDate;
};

Gigasecond.prototype.date = function() {
  var startDate = this.startDate;
  var gigasecond = Math.pow(10,9);
  if (startDate.getTime() < 0 ) {
    endDateSeconds = startDate.getTime() + gigasecond*1000;
    return new Date(endDateSeconds);
  }
  startDate.setSeconds(startDate.getSeconds() + gigasecond);
  return startDate;
};

module.exports = Gigasecond;
