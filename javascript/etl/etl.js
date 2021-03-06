var ETL = function() {};

ETL.prototype.transform = function(old) {
  var obj = {};
  for (var oldKey in old) {
    old[oldKey].forEach(function (item) {
      item = item.toLowerCase();
      obj[item] = parseInt(oldKey);
    });
  }
  return obj;
};

module.exports = ETL;
