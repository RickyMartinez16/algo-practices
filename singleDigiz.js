// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.
// Example 2:

// Input: num = 0
// Output: 0
 

// Constraints:

// 0 <= num <= 231 - 1


var addDigits = function(num) {
    //turn each number into a string and split it to get indicual numbers
    let splitString = String(num).split("")
    //keep track of final 
    let final = 0
    
    //for each number in the split string array turn it into a number and add it to the final number 
    splitString.forEach((number) => final += Number(number))

    //if the final is greater than 9
    if(final > 9){
        //recuse the same function
        return addDigits(final)
    } else {
        return final
    }
    
};