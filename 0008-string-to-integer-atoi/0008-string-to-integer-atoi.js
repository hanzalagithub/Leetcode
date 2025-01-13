/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const INT_MAX = 2 ** 31 - 1; 
    const INT_MIN = -(2 ** 31); 
    const match = s.trim().match(/^([+-]?\d+)/); 
    if (!match) return 0; 
    const num = parseInt(match[1], 10); 
    return Math.max(Math.min(num, INT_MAX), INT_MIN);
};
let s = "42"; 
console.log(myAtoi(s));