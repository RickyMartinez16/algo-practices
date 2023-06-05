// Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

// The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.  

 

// Example 1:

// Input: n = 4
// Output: "pppz"
// Explanation: "pppz" is a valid string since the character 'p' occurs three times and the character 'z' occurs once. Note that there are many other valid strings such as "ohhh" and "love".
// Example 2:

// Input: n = 2
// Output: "xy"
// Explanation: "xy" is a valid string since the characters 'x' and 'y' occur once. Note that there are many other valid strings such as "ag" and "ur".
// Example 3:

// Input: n = 7
// Output: "holasss"


var generateTheString = function(n) {
    //make an array
    let array = []
    //check if the input is odd or even
      if(n % 2 === 0){
        while(array.length < n - 1){
          array.push("p")
        }
        array.push("z")
      } else {
        while(array.length < n){
          array.push("p")
        }
      }
      return array.join("")
  };