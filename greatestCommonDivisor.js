// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

 

// Example 1:

// Input: nums = [2,5,6,9,10]
// Output: 2
// Explanation:
// The smallest number in nums is 2.
// The largest number in nums is 10.
// The greatest common divisor of 2 and 10 is 2.
// Example 2:

// Input: nums = [7,5,6,8,3]
// Output: 1
// Explanation:
// The smallest number in nums is 3.
// The largest number in nums is 8.
// The greatest common divisor of 3 and 8 is 1.
// Example 3:

// Input: nums = [3,3]
// Output: 3
// Explanation:
// The smallest number in nums is 3.
// The largest number in nums is 3.
// The greatest common divisor of 3 and 3 is 3.


var findGCD = function(nums) {


    // Start iteration from given two numbers 20 and 30, we subtract the smaller number (20) from the larger number (30), which leaves us with 10.
    // Then, we are going to subtract the smaller number (10) from the larger number (20), which leaves us with 10.
    // Since the two numbers are now equal, we take 10 as Greatest Common Divisor (GCD) for 20 and 30.

    function gcd(a, b) {
        while(a != b){
            if(a > b) {
                a -= b;
            }
            else {
                b -= a;
            }
        }
        return a;
  }

    //   In the above code, on each iteration, the smaller integer is subtracted from the larger integer. 
    //And the result is assigned to a variable holding the larger integer. The while loop continues iteration 
    //until both the integers become equal.
  
      const sort = nums.sort((a, b) => a - b)
      
      return gcd(sort[0], sort[sort.length-1])
  };