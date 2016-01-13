var PhoneNumber = function(phone) {
  this.phone = phone;
};

PhoneNumber.prototype.number = function() {
  return this.phone;
};

module.exports = PhoneNumber;
