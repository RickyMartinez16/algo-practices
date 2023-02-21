// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


//solved--------------------

var isPalindrome = function(x) {
    //10 edge case?
    if(x == 10 ) return false

    //trun input to string
    let string = String(x)
    //split the string
    let split = string.split("")
   
    console.log(split.reverse().join(""))
    console.log(split.join(""))
    
    //join the string to get number. if it is the same as the string reversed its true
    if(split.join("") == split.reverse().join("")){
        return true
    }
    return false
};


//cleaner version of mine ---------------------\\\

var isPalindrome = function(x) {
    let pali = x.toString()
    .split('')
    .reverse()
    .join('')
    let normal = x.toString()
   return (pali === normal)
};