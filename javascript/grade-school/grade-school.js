var School = function() {
  this.schoolBody = {};
};

School.prototype.roster = function() {
  return this.schoolBody;
};
School.prototype.add = function(name, grade) {

};

module.exports = School;
