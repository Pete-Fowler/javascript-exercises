/*
Leap years are divisible by 4
leap years are divisible by 100 if also divisible by 400
*/

const leapYears = function(year) {
    if(year % 4 !== 0) {
        return false;
    } else if(year % 400 !== 0 && year % 100 === 0) {
        return false;
    } else return true;
}
// Do not edit below this line
module.exports = leapYears;
