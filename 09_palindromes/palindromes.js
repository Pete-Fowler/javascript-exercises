/*

A string is input
parse out any spaces and punctuation and capitals
    toLowerCase() 
    string.split(" ").join("") or replace() for removing whitespace
    split filter and join to remove punctuation or replace();
        replace looks like a cleaner option /d matches digits, /s matches spaces
        and maybe /W for special characters (not a-z 0-9 and _)
create a new string that is the first string spelled backward
    iterate through backwards with for loop and concat +
    or use split, array reverse, and then join. this could be combined with split
    filter reverse, join
if forwardStr === backwardStr, return true, else return false
*/

const palindromes = function (string) {
    let fwdString = string.toLowerCase().replace(/[\W\s\d]/g, "");    // could use split , filter, join
    let bwdString = fwdString.split("").reverse().join("");  // could use a decreasing for loop instead

    if (fwdString === bwdString) {
        return true;
    } else {
        return false;
    }
};




// Do not edit below this line
module.exports = palindromes;
