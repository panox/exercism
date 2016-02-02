var Robot = function() {
  this.name = generatName();
};

function randomEight() {
  return Math.floor(Math.random() * 8);
}
function randomTwentyFive() {
  return Math.floor(Math.random() * 25);
}

function generatName() {
  var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
  var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var char1 = alphabet[randomTwentyFive()];
  var char2 = alphabet[randomTwentyFive()];
  var number1 = numbers[randomEight()];
  var number2 = numbers[randomEight()];
  var number3 = numbers[randomEight()];
  var newName = char1+char2+number1+number2+number3;
  return newName;
}

Robot.prototype.reset = function () {
  this.name = generatName();
};

module.exports = Robot;
