//----------find two consecuative same number

// var arr = [1,1,6,8,4,675,2,1,2,3,3]
// for (var i=1; i<arr.length; i++) {
//     if (arr[i] === arr[i-1]) {
//         console.log(`we have that same match = ${arr[i]}`);
//     }
// }
//check how many times b occured in the array
// let arr = ['a', 'a', 'b', 'b', 'b', 'c', 'c', 'c', 'c'];
// let count = 0;
// for (let element of arr) {
//     if (element === 'c') {
//         count++;
//     }
// }
// console.log(count);

//check how many repetive word in this array string ['geeksforgeeks']
// let str = 'abbccddd';
// let charCount = {};
// for (let char of str) {
//     if (charCount[char]) {
//         charCount[char]++;
//     } else {
//         charCount[char] = 1;
//     }
// }
// console.log(charCount);

// var arr=[1,2,2,3,4,5,5,6,7,7];
// for(var i=1; i<arr.length; i++){
//     if(arr[i]===arr[i-1]){
//         console.log(`we have that same match = ${arr[i]}`)
//     }
// };

// /-------11- loop timeout

// for (let i = 1; i <= 5; i++) {
//     setTimeout( () => console.log(i), 0);
// }


// let str = 'abbccdd';
// let charCount = {};
// for (let char of str){
//     if(charCount[char]){
//         charCount[char]++;

//     }else{
//         charCount[char]=1;
//     }
// }
// console.log(charCount);

// let arr = [1,2,2,3,4,5,5,5,5,6,7,7];
// let arrCount = 0;
// for(let element of arr){
//     if(element === 5){
//         arrCount++;
        
//     }
// }
// console.log(arrCount);

// let a = [1,2,3,4];
// let b=a;
// a.push(5);
// console.log(a,b);

