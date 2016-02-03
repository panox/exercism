var Robot = function() {
  this.name = generatName();
  this.reset = function () {
    this.name = generatName();
  };
};

function randomNine() {
  return Math.floor(Math.random() * 9);
}
function randomTwentySix() {
  return Math.floor(Math.random() * 26);
}

function generatName() {
  var name = "";
  var aplphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";

  for( var i=0; i < 2; i++ ) {
      name += aplphabet.charAt(Math.floor(Math.random() * aplphabet.length));
  }
  for( var j=0; j < 3; j++ ) {
    name += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  return name;
}

module.exports = Robot;
