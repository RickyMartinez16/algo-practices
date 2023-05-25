// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

// Example 1:

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15
// Example 2:

// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21


var subtractProductAndSum = function(n) {
    //turn the input into a string, then split the string an an array of strings
    let splitNum = String(n).split("")
    //make an array of strings by mapping over the splitNums array and turning each string into a Number
    let nums = splitNum.map(string => Number(string))
    
    //redeuce the sum of the nums
    const sum = nums.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    //redude the product of nums
    const product = nums.reduce(
      (accumulator, currentValue) => accumulator * currentValue,
      1
    );

    //return the difference
    return product - sum
};