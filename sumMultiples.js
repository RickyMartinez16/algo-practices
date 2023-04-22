// Given a positive integer n, find the sum of all integers in the range [1, n] 
//inclusive that are divisible by 3, 5, or 7.

// Return an integer denoting the sum of all numbers in the given range satisfying the constraint.

 

// Example 1:

// Input: n = 7
// Output: 21
// Explanation: Numbers in the range [1, 7] that are divisible by 3, 5, or 7 are 3, 5, 6, 7. The sum of these numbers is 21.
// Example 2:

// Input: n = 10
// Output: 40
// Explanation: Numbers in the range [1, 10] that are divisible by 3, 5, or 7 are 3, 5, 6, 7, 9, 10. The sum of these numbers is 40.
// Example 3:

// Input: n = 9
// Output: 30
// Explanation: Numbers in the range [1, 9] that are divisible by 3, 5, or 7 are 3, 5, 6, 7, 9. The sum of these numbers is 30.




var sumOfMultiples = function(n) {
    //make a var to hold the sum
    let sum = 0;

    //loop to check all the nums from 1 to n
    for(let i = 1; i <= n; i++){
        //check if each is divisble by 3, 5, 7 if they are they will have a remainder of 0
        if( i % 3 == 0 || i % 5 == 0 || i % 7 == 0 ) {
            //if they are you can add the i to the sum
            sum += i
        }
    }
    return sum
};
