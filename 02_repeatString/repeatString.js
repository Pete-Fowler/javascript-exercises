
const repeatString = function(string, times) {
    let newString = "";
    if (times == 0) {
        return newString;
    }
    if (times < 0) {
        newString = "ERROR";
        return newString;
    }
    for (let i = 1; i <= times; i++) {
        newString += string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
