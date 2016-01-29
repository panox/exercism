var School = function() {
  this.schoolBody = {};
};

School.prototype.roster = function() {
  return this.schoolBody;
};
School.prototype.add = function(name, grade) {
  this.schoolBody[grade] = [name];
};

module.exports = School;
