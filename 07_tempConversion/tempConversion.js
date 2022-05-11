/*Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:
```
ftoc(32) // fahrenheit to celsius, should return 0

ctof(0) // celsius to fahrenheit, should return 32
```

Because we are human, we want the result temperature to be rounded to one decimal place
-32 times 5/9

*/
const ftoc = function(temp) {
  let C = (temp - 32) * (5 / 9);
  return Math.round(C * 10) / 10;
};

const ctof = function(temp) {
  let F = temp * (9 / 5) + 32;
  return Math.round(F * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
