var Robot = function() {
  this.name = generatName();
};

function randomNine() {
  return Math.floor(Math.random() * 9);
}
function randomTwentySix() {
  return Math.floor(Math.random() * 26);
}

function generatName() {
  var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
  var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var char1 = alphabet[randomTwentySix()];
  var char2 = alphabet[randomTwentySix()];
  var number1 = numbers[randomNine()];
  var number2 = numbers[randomNine()];
  var number3 = numbers[randomNine()];
  var newName = char1+char2+number1+number2+number3;
  return newName;
}

Robot.prototype.reset = function () {
  this.name = generatName();
};

module.exports = Robot;
