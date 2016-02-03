var ETL = function() {};

ETL.prototype.transform = function(old) {
  var obj = {};
  for (var oldKey in old) {
    old[oldKey].forEach(function (item) {
      obj[item] = oldKey;
    });
  }
  return obj;
};

module.exports = ETL;
