var PhoneNumber = function(number) {
  this.number = number;
};

PhoneNumber.prototype.number = function() {
  return this.number;
};

module.exports = PhoneNumber;
