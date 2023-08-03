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


//recursive solution
var addDigits = function(num) {
    //check if the input num is single digit
    if(num < 10) return num
    let stringNum = String(num)

    let splitStringNum = stringNum.split("")

    let sum = 0

    for(let i = 0; i < splitStringNum.length; i++){
        sum += parseInt(splitStringNum[i])  
    }
    return addDigits(sum)
};