/*
Implement a function that takes an array and some other arguments then removes 
the other arguments from that array. It will need to

loop through array to search for each arg
    for loop to go through array[0] to array.length -1

remove each arg with a splice()
    nested for loop to loop through each arg - arg[0] through arg.length - 1
    On each loop, check if the values match, and if so, splice them out

how to deal with changing array length after it is spliced?

Example: removeFromArray(['hey', 2, 3, 'ho'], ['hey', 3] should return [2, 'ho'] but is removing 
hey and then ho

at i=1 j=1 it removed ho then got stuck

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
