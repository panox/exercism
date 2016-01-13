var PhoneNumber = function(phone) {
  this.phone = phone;
};

PhoneNumber.prototype.number = function() {
  var re = /[^\d]/g;
  var result = this.phone.replace(re, "");
  if (result.length === 11 && result[0] === "1") {
    return "hi";
  }
  return result;
};

module.exports = PhoneNumber;
