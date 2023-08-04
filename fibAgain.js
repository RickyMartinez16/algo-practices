// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

 

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.


var fib = function(n) {
    //edge case

    //if n is 0 return 0
    if(n === 0) return 0

    //make the fib sequence array
    let fib = [0, 1]

    //loop starting at index 2 and running the length of n + 1
    for(let i = 2; i < n + 1 ; i++){
        //make the next index in the fib array the sum of i - 1 and i - 2
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib[fib.length - 1]
};