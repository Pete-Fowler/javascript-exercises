/*
Implement a function that takes 2 integers and returns the sum of every number 
between(and including) them:

Example: sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10

Psuedocode: 
create an array from start to end
add each of the numbers together

*/

const sumAll = function(start, end) {
    let sum = 0;
    if (start < 0 || end < 0 || typeof start !== "number" || typeof end !== 
    "number") {
        return "ERROR";
    }
    if (start < end) {
        for(let i = start; i <= end; i++) {
            sum += i;
        }
    } else if (end < start) {
        for(let i = end; i <= start; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
