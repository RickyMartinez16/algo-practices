// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

// function fiveAndGreaterOnly(arr) {
//     return arr.filter(num => num > 5)
//   }
//   // test
//   console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]


//------------------------------------------------------------------------------------------------------------------------------------//

// Given an array of numbers, return a new array that only includes the even numbers.

// function evensOnly(arr) {
//     return arr.filter(num => num % 2 == 0)
//   }
//   // test
//   console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]


//-------------------------------------------------------------------------------------------------------------------------------------//

//3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

function fiveCharactersOrFewerOnly(arr) {
    return arr.filter(word => word.length <= 5)
  }
  // test
  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]