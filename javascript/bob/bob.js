var Bob = function() {};

Bob.prototype.hey = function(input) {
  if (input === input.toUpperCase()) {
    return 'Whoa, chill out!';
  }
  else {
    return 'Whatever.';
  }
};

module.exports = Bob;
