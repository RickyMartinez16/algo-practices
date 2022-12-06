// Square the value of every element in the array. Presume that you will only get numbers in the input array.

// const input = [1, 2, 3, 4, 5];

// let mapPow = input.map(function (num) {
//     return Math.pow(num, 2);
// });
  
//   // or written with Arrow function
//   input.map((num) => Math.pow(num, 2));

//   console.log(mapPow)

//   [1, 4, 9, 16, 25];

//-----------------------------------------------------------//

// If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.

const input = [1, -4, 12, 0, -3, 29, -150];
// let postArray = []

// let mapSumPos = input.map(function(num){
//     let posArray = []
//     if(num > 0){ posArray.push(num)}
//     return sumWithInitial = posArray.reduce(
//         (accumulator, currentValue) => accumulator + currentValue,
//        0
//       );
// }

// )

// let mapSumPos = input
//   .filter(function (num) {
//     return num > 0;
//   })
//   .reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
//   }, 0);



let mapSumPos = input.filter((num) => num > 0).reduce((accum, current) => accum + current, 0)

console.log(mapSumPos)