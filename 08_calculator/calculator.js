const add = function(num, num2) {
	return num + num2;
};

const subtract = function(num, num2) {
	return num - num2;
};

const sum = function(array) {
  let total = 0;
  for (let num of array) {
    total += num;
  }
  return total;
};
// could also be:
// return array.reduce((previousVal, currentVal) => previousVal + currentVal, 0) 

const multiply = function(array) {
  return array.reduce((previous, current) => previous * current, 1);
};

const power = function(n, p) {
  return Math.pow(n, p);
};

const factorial = function(int) {
	let f = 1;
  for (let i = int; i >= 1; i--) {
    f *= i;
  }
  return f;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
