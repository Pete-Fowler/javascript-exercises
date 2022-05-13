/* Create a function that returns a specific member of the Fibonacci sequence:

> A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

```javascript
fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)

function will take num input for which member of the sequence to return
represent fib in code

*/

const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    } else {
    let fib = [];
    fib[0] = 0;
    fib[1] = 1;
    for (let i = 2; i <= num; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[num];
    }
};

// Do not edit below this line
module.exports = fibonacci;
