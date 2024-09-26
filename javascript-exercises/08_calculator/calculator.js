const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
  let a = arr.reduce((total, toBeAdded) => {
    return total + toBeAdded
  }, 0)
  return a
};

const multiply = function (arr) {
  let a = arr.reduce((total, toBeAdded) => {
    return total * toBeAdded
  }, 1)
  return a
};

const power = function(a,b) {
	return a ** b
};

const factorial = function(a) {
  if (a == 0) {
    return 1;
  }

  return a * factorial(a - 1);
};

console.log(sum([7,11]))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
