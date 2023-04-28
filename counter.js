// Given an integer n, return a counter function. This counter function initially returns n and 
//then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

 

// Example 1:

// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.
// Example 2:

// Input: 
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.

//create a variable named createCounter which is a function. the function takes in a parameter (n int)
var createCounter = function (n) {
    //inside the create function make a variable to start th ecounter at number n 
    let counter = n;

    //return a new function 
    return function () {
        //the new function returns counter plus one every time its called
      return counter++;
    };
  };