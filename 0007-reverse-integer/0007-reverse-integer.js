/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MAX = 2 ** 31 - 1;
     const INT_MIN = -(2 ** 31); 
     let reversed = 0;
     while (x !== 0) { 
        let digit = x % 10; 
     x = Math.trunc(x / 10); reversed = reversed * 10 + digit; 
     if (reversed > INT_MAX || reversed < INT_MIN) 
     return 0; 
     }
      return reversed;
};
let x = 123;
console.log(reverse(x));