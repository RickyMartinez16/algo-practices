// Square the value of every element in the array. Presume that you will only get numbers in the input array.

const input = [1, 2, 3, 4, 5];




let mapPow = input.map(function (num) {
    return Math.pow(num, 2);
});
  
  // or written with Arrow function
  input.map((num) => Math.pow(num, 2));

  console.log(mapPow)

//   [1, 4, 9, 16, 25];