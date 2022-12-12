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

// function capitalizeNames(arr){
//     return arr.map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
//   }
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]


//--------------------------------------------------------------------------------------------------------------------------------------//

//4) Make an array of strings of the names

function namesOnly(arr){
    
    // return arr.map(namesOnly.name)
    return arr.map(object => object.name);  //need to map of the obect and return the object.name
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]