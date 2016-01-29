var School = function() {
  this.schoolBody = {};
};

School.prototype.roster = function() {
  var schoolBody = this.schoolBody;
  for (var key in schoolBody) {
    this.grade(key);
  }
  return schoolBody;
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
    schoolBody[grade].sort();
    return schoolBody[grade];
  }
  else {
    return schoolBody[grade] = [];
  }
};

module.exports = School;
