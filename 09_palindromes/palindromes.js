const palindromes = function (str) {
    let fwdStr = str
    .toLowerCase()
    .replace(/[^A-Za-z]/g, '')
    .split('');

    let bwdStr = [];
    for (let i = 0; i < fwdStr.length; i++) {
        bwdStr.unshift(fwdStr[i]);
    }
    bwdStr = bwdStr.join('');
    fwdStr = fwdStr.join('');
    if (bwdStr === fwdStr) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;