var PhoneNumber = function(phone) {
  this.phone = phone;
};

PhoneNumber.prototype.number = function() {
  var re = /[^\d]/g;
  var result = this.phone.replace(re, "");
  if (result.length === 11 && result[0] === "1") {
    result = result.substring(1);
    return result;
  }
  if (result.length === 11 || result.length === 9) {
    return '0000000000';
  }
  return result;
};

PhoneNumber.prototype.areaCode = function() {
  
};

module.exports = PhoneNumber;
