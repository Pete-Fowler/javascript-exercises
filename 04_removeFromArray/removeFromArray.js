/*
Lessons:
- Had to switch which for loop was nested because originally I had it skipping 
a value. 
- Falsely assumed I had no syntax errors and ran into later trouble because my 
syntax error of array.splice(array[i] -1, 1) somehow managed to pass tests. So
NEVER ASSUME YOU DON'T HAVE A SYNTAX ERROR and double check MDN docs.
*/

const removeFromArray = function(array, ...args) {
    for (let j = 0; j < args.length; j++)
        for (let i = 0; i < array.length; i++) {
         {
            if (array[i] === args[j]) {
                array.splice(i, 1);                
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
