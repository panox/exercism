var Robot = function() {
  this.name = generatName();
};

function generatName() {
  var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z' ];
  var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var char1 = alphabet[Math.floor(Math.random() * 24)];
  var char2 = alphabet[Math.floor(Math.random() * 24)];
  var number1 = numbers[Math.floor(Math.random() * 8)];
  var number2 = numbers[Math.floor(Math.random() * 8)];
  var number3 = numbers[Math.floor(Math.random() * 8)];
  return char1+char2+number1+number2+number3;
}

Robot.prototype.reset = function () {
  this.name = generatName();
};

module.exports = Robot;
