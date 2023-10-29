// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

 

// Example 1:

// Input: n = 27
// Output: true
// Explanation: 27 = 33
// Example 2:

// Input: n = 0
// Output: false
// Explanation: There is no x where 3x = 0.
// Example 3:

// Input: n = -1
// Output: false
// Explanation: There is no x where 3x = (-1).
 

// Constraints:

// -231 <= n <= 231 - 1


var isPowerOfThree = function(n) {
    //edge case
    //if n is less than or euqla to 0 return false
    if(n <= 0) return false

    //while loop
    //while the remainder of n / 3 is 0
    while (n % 3 === 0) {
        n /= 3;
    }

    return n === 1;
};