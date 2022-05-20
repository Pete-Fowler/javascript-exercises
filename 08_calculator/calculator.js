const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	if (array.length === 0) {
    return 0;
  } else {
  return array.reduce(function (prev, current) {
    return prev + current;
  }, 0);
}
};

const multiply = function(array) {
  return array.reduce((prev, current) => prev * current);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
  if (n <= 1) {
    return 1;
  } else {
  for (let i = n; i > 1; i--) {
    n *= i - 1;
  }
  return n;
}
  // recursive method:
  // if (n=1) {
  //   return 1;
  // } else {
  //   return n * factorial(n - 1);
  // }
	
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
