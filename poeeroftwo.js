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


var isPowerOfTwo = function(n) {
    //edge case

    //check if n equals 0
    if (n == 0)
    //if it does return 0
        return 0;

        //while n does not equal 1
    while (n != 1) {
        //if the remainder of n divided by 2 does not equal 0
        if (n%2 != 0)
        //return 0
            return 0;
        //assign n to n divived by 2
        n = n/2;
    }
    //return 1
    return 1;
};