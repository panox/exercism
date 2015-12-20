var Year = function() {};

Year.prototype.isLeap = function(year) {
  return (year % 4 === 0);
};

module.exports = Year;
