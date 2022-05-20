<<<<<<< HEAD
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
	
=======
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
>>>>>>> 0d30036be47a20bbfcbf423b49df3b41696f641b
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
