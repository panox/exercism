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
  var result = this.phone.substring(0,3);
  return result;
};

PhoneNumber.prototype.toString = function() {
  var phone = this.phone;
  var result = '(' + phone.substring(0,3) + ')' + ' ' + phone.substring(4,3) + '-' + phone.substring(7,4);
  return result;
};

module.exports = PhoneNumber;
