const palindromes = function (str) {
    let newStr = str.toLowerCase().replace(/[^a-z]/g, '');
    return (
        newStr.split('').reverse().join('') === newStr);
};
// initial attempt was lengthy and complicated and used extra variables and a 
// for loop




// Do not edit below this line
module.exports = palindromes;