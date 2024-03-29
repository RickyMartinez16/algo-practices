// You are given an array of strings names, and an array heights that consists of distinct positive integers. 
//Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.

 

// Example 1:

// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.
// Example 2:

// Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
// Output: ["Bob","Alice","Bob"]
// Explanation: The first Bob is the tallest, followed by Alice and the second Bob.
 

// Constraints:

// n == names.length == heights.length
// 1 <= n <= 103
// 1 <= names[i].length <= 20
// 1 <= heights[i] <= 105
// names[i] consists of lower and upper case English letters.
// All the values of heights are distinct.


var sortPeople = function(names, heights) {
    //make an array of all the people
    let people = []

    //loop thru the names input array
  for(let i = 0; i < names.length; i++){
      //make an object of each persons name and their corresponding height
      //push each person entry into the people array
      //so you have an array of objects
    people.push({name: names[i], height: heights[i]})
  }

  //sort thru the people array and sort them by height largest to smallest
  people.sort((a, b) => b.height - a.height)

  //declare a variable
  //map over the people array and make a new array of sorted names
  //This is an arrow function used as an argument to the map() function. 
  //It takes one argument, person, which represents each element (object) in the people array. 
  //The arrow function then returns the name property of the person object.
  const sortedNames = people.map(person => person.name)

  return sortedNames

};