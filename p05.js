//--------finding ascending numberr

// var arr = [1,4,2,4,0,53]
// var ascend = arr.sort();
// console.log(ascend);

//--------finding descending number
// var arr = [1,4,2,4,0,53]

// var descend = arr.sort((a,b) => b-a);
// console.log(descend);

// var descend = arr.reverse();
// console.log(descend);



// bubble sorting>>>

// function ascending(arr){
//     var done = false;
//     while(!done){
//         done = true;
//         for(var i = 1; i < arr.length; i++){
//             if(arr[i-1] > arr[i]){
//                 done=false;
//                 var tmp = arr[i-1];
//                 arr[i-1] = arr[i];
//                 arr[i] = tmp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(ascending([12, 10, 15, 11, 14]));