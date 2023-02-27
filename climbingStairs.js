// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


//working------------------------------

//this is DYNAMIC PROGRAMING

var climbStairs = function(n) {
    //mamke a base case array
    const memo = [1, 1, 2, 3]
    //start a for loop at the next element space in base array
    for(let i = 4; i <= n; i++){
        //the next base case aray element is the result of last 2 base cases
        memo[i] = memo[i-1] + memo[i-2]
    }
    //return nth 
    return memo[n]
};

