/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x<0) return false;
    let str = x.toString();
    return str===str.split('').reverse().join('');

};
let x = 121;
console.log(isPalindrome(x));