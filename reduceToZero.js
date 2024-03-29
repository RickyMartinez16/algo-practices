// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

 

// Example 1:

// Input: num = 14
// Output: 6
// Explanation: 
// Step 1) 14 is even; divide by 2 and obtain 7. 
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3. 
// Step 4) 3 is odd; subtract 1 and obtain 2. 
// Step 5) 2 is even; divide by 2 and obtain 1. 
// Step 6) 1 is odd; subtract 1 and obtain 0.
// Example 2:

// Input: num = 8
// Output: 4
// Explanation: 
// Step 1) 8 is even; divide by 2 and obtain 4. 
// Step 2) 4 is even; divide by 2 and obtain 2. 
// Step 3) 2 is even; divide by 2 and obtain 1. 
// Step 4) 1 is odd; subtract 1 and obtain 0.
// Example 3:

// Input: num = 123
// Output: 12




//------------working---------------//

var numberOfSteps = function(num) {
    //make a var to keep count of how many steps
    let steps = 0

    //make a loop to constalty run if num is greater than 0
    while(num > 0){
        //check if the number is even
        if(num % 2 === 0){
            //if it is then divide it by 2
            num = num / 2
            //if it is not even then subtract one to make it even
        } else {
            num = num - 1
        }
        //add one to the steps count if the loop has to run again
        steps++
    }
    return steps
};