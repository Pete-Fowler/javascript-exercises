

const reverseString = function(string) {
    let length = string.length;
    let array = [];

    for (let i = string.length; i >= 0; i--) {
        array.push(string.slice(i - 1, i));
    }

    let newString = array.join("");
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
