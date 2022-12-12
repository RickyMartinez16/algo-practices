// Make an array of numbers that are doubles of the first array

// function doubleNumbers(arr){
//     return arr.map((num) => num * 2)
//   }
  
//   console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]


//------------------------------------------------------------------------------------------------------------------//

// Take an array of numbers and make them strings

// function stringItUp(arr){
//     return arr.map((num) => String(num))
//   }
  
//   console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]


//--------------------------------------------------------------------------------------------------------------------------------------//

//Capitalize each of an array of names

function capitalizeNames(arr){
    return arr.map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
  }
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]