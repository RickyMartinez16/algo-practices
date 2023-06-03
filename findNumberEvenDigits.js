// Given an array nums of integers, return how many of them contain an even number of digits.

 

// Example 1:

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.
// Example 2:

// Input: nums = [555,901,482,1771]
// Output: 1 
// Explanation: 
// Only 1771 contains an even number of digits.


var findNumbers = function(nums) {
    //make an array of string representations of the numbers array
    let strings = nums.map(num => String(num))
    //keep track of count
    let count = 0

    //loop thrur new array
    for(let i = 0; i < strings.length; i++){
        //if the length of the ith number is divisible by 2 its even amount
      if(strings[i].length % 2 === 0){
          //add to the count
        count++
      }
    }
    //return final count
    return count
};