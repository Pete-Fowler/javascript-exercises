
  
const fibonacci = function(num) {
    num = parseInt(num);
    if (num < 0) {
    return 'OOPS';
    }
    const sequence = [1, 1];

    for (let i = 0; i < num - 2; i++) {
        let next = sequence[i] + sequence[i+1];
        sequence.push(next);    
    }
    return sequence[num - 1];
};

// recursive answer body of function :
// if (num <= 1) return 1;

// return fibonacci(num - 1) + fibonacci(num - 2);

// Do not edit below this line
module.exports = fibonacci;