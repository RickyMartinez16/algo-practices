// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

 

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: n = 3
// Output: false
 

// Constraints:

// -231 <= n <= 231 - 1


function isPowerOfTwo(n) {
    if (n <= 0) {
        return false; // Negative numbers and zero are not powers of two.
    }
    //we calculate the base-2 logarithm (log2) of n using Math.log2(n).
    const logBase2 = Math.log2(n);
    //compare the floor value of the logarithm with the original logarithm value. 
    //If they are equal, it means that n is a power of two.
    return Math.floor(logBase2) === logBase2;
}


