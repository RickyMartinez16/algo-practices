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

// const input = [1, -4, 12, 0, -3, 29, -150];
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



// let mapSumPos = input.filter((num) => num > 0).reduce((accum, current) => accum + current, 0)

// console.log(mapSumPos)


//------------------------------------------------------------------------------------------------//


// Calculate the mean and median values of the number elements from the input array.

// const input = [12, 46, 32, 64];


// input.sort((a, b) => a - b);        //sort the input array

// input.reduce(   //reduce the input array
//   (accumulator, currentValue, index, array) => {        //take the 4 values
//     accumulator.mean += currentValue / array.length;    //accumulator.mean = add the currentVal / array.length

//     if (Math.abs(index + 1 - array.length / 2) < 1) {       //if positive version of (math.abs) index + 1 - array.length / 2 is greater thna one
//       accumulator.median = currentValue;    //then the accumulator.median is the current valeu
//     }

//     return accumulator; //return the accumulator should hae two valurs
//   },
//   { mean: 0, median: 0 }
// );

// console.log(mean)



//-------------------------------------------------------------------------------------------------------//


// The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.


const input = "George Raymond Richard Martin";

let initials = input.split(" ").map((word) => word[0]).join("") //split the input by each word, map over each word and getthe first letter into a map, then join the map

console.log(initials)