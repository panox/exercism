var School = function() {
  this.schoolBody = {};
};

School.prototype.roster = function() {
  return this.schoolBody;
};
School.prototype.add = function(name, grade) {
  var schoolBody = this.schoolBody;
  if (schoolBody[grade]) {
    schoolBody[grade].push(name);
  }
  else {
    schoolBody[grade] = [name];
  }
};
School.prototype.grade = function(grade) {
  var schoolBody = this.schoolBody;
  if (schoolBody[grade]) {
    return schoolBody[grade].sort();
  }
  else {
    return schoolBody[grade] = [];
  }
};

module.exports = School;
