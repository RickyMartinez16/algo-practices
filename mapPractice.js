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

// function namesOnly(arr){
    
//     // return arr.map(namesOnly.name)
//     return arr.map(object => object.name);  //need to map of the obect and return the object.name
//   }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 
//   // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


  //-----------------------------------------------------------------------------------------------------------------------------------//

//   5) Make an array of strings of the names saying whether or not they can go to The Matrix

// function makeStrings(arr){
//     return arr.map(object => object.age > 20 ? `${object.name} can go to The Matrix` : `${object.name} is under age!!`)
//   }
  
//   console.log(makeStrings([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 
//   // ["Angelina Jolie can go to The Matrix", 
//   // "Eric Jones is under age!!", 
//   // "Paris Hilton is under age!!", 
//   // "Kayne West is under age!!", 
//   // "Bob Ziroll can go to The Matrix"]


//------------------------------------------------------------------------------------------------------------------------------------//

// 6) Make an array of the names in h1s, and the ages in h2s

// function readyToPutInTheDOM(arr){
//     return arr.map(object => `<h1>${object.name}</h1><h2>${object.age}</h2>`)
//   }
//   console.log(readyToPutInTheDOM([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 
//   // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
//   // "<h1>Eric Jones</h1><h2>2</h2>", 
//   // "<h1>Paris Hilton</h1><h2>5</h2>", 
//   // "<h1>Kayne West</h1><h2>16</h2>", 
//   // "<h1>Bob Ziroll</h1><h2>100</h2>"]


//-------------------------------------------------------------------------------------------------------------------------------------//

// Square the value of every element in the array. Presume that you will only get numbers in the input array.

// const input = [1, 2, 3, 4, 5];

// function square(array){
//     return array.map((num) => Math.pow(num, 2))
// }

// console.log(square(input))


//-------------------------------------------------------------------------------------------------------------------------------------//

// Sum of every positive element
// If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.

// const input = [1, -4, 12, 0, -3, 29, -150];

// function sumOfPos(array){
//     let posArr = array.filter((num) => num > 0)

//     return posArr.reduce(
//         (accumulator, currentValue) => accumulator + currentValue,
//         0
//       );
// }

// console.log(sumOfPos(input))


//-------------------------------------------------------------------------------------------------------------------------------------//

// Calculate median and mean
// Calculate the mean and median values of the number elements from the input array.

// const input = [12, 46, 32, 64];

// function meanAndMed(arr){
//     let sorted = arr.sort((a, b) => a - b)      //sort the input array
//     sorted.reduce((accum, current, index, arr) => {     //reduce the sorted array to get single mean and single median
//         accum.mean += current / arr.length      //the accum mean is the values added then divided by the length of the array

//         if(Math.abs(index + 1 - arr.length / 2) < 1){   //check if the index, plus one minus the length div by 2 is greater than 1
//             accum.median = current  //then the median is the current number in the array
//         }
//         return accum    //return the accum
//     },{mean: 0, median: 0}      //initial value for the reduce
//     )
// }

// console.log(meanAndMed(input))


//--------------------------------------------------------------------------------------------------------------------------------------//

//Get name initials
//The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.

// const input = "George Raymond Richard Martin";

// function initials(array){
//     let split = array.split(" ")
//     let initials = []
//     for(let name of split){
//         initials.push(name[0])
//     }
//     return initials.join("")
// }

// console.log(initials(input))


//-------------------------------------------------------------------------------------------------------------------------------------//

//Age difference from the youngest and oldest
//Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

// const input = [
//     {
//       name: "John",
//       age: 13,
//     },
//     {
//       name: "Mark",
//       age: 56,
//     },
//     {
//       name: "Rachel",
//       age: 45,
//     },
//     {
//       name: "Nate",
//       age: 67,
//     },
//     {
//       name: "Jeniffer",
//       age: 65,
//     },
//   ];

//   function ageDiff(array){
//       let ages = array.map((object) => Math.max(object.age))
//       return[Math.max(...ages), Math.min(...ages), Math.max(...ages) - Math.min(...ages)]
//   }

//   console.log(ageDiff(input))


//-----------------------------------------------------------------------------------------------------------------------------------//

//Numeronyms
//Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, 
//l10n means localization. You get the Dev numeronyms by taking the first and the last 
//letter and counting the number of letters in between. Words that have less than 4 letters aren't 
//abbreviated, because that would just be odd. The input is a sentence, and you should 
//abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e

const input = "Every developer likes to mix kubernetes and javascript";

function nyms(input){
    let words = input.split(" ")
    return words.map((word) => word.length > 4 ? `${word[0]}${word.length - 2}${word[word.length - 1]}` : word).join(" ")
}

console.log(nyms(input))