var Robot = function() {
  this.name = generatName();
};

function generatName() {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z' ];
  var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var char1 = alphabet[Math.floor(Math.random() * 24)];
  var char2 = alphabet[Math.floor(Math.random() * 24)];
  var number1 = numbers[Math.floor(Math.random() * 8)];
  var number2 = numbers[Math.floor(Math.random() * 8)];
  var number3 = numbers[Math.floor(Math.random() * 8)];
  return char1+char2+number1+number2+number3;
}

module.exports = Robot;
