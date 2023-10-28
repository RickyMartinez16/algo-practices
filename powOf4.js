// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4x.

 

// Example 1:

// Input: n = 16
// Output: true
// Example 2:

// Input: n = 5
// Output: false
// Example 3:

// Input: n = 1
// Output: true
 

// Constraints:

// -231 <= n <= 231 - 1
 



var isPowerOfFour = function(n) {
    //edge case
    //if n is less than or equal to 0 reutnr false
    if(n <= 0) return false

    //while the reaminder of n divived by 4 is 0
    while(n % 4 === 0){
        //n = n divived by 4
        n /= 4
    }

    //return true if n is 1
    //return false if n doesnt equal 1
    return n === 1
};