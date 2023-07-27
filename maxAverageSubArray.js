// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average 
// value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000



var findMaxAverage = function(nums, k) {
    //initialize sum for first k elements of nums input
    let sum = 0;
    for (let i = 0; i < k; i++) {
        //sum of first k elements 
      sum += nums[i];
    }
    
    //max is the greatest sum we find so far from the first loop
    let max = sum;
    //loop thru the rest of the elemnts in the array after the first k
    for (let i = k; i < nums.length; i++) {
        //each iteration of the loop we remove the nums[i - k] contribution to the sum while adding the current nums[i] element
        //this is the "sliding window" method. the subarray length stays the same but the sum is updated
      sum = sum - nums[i - k] + nums[i];
      max = Math.max(max, sum);
    }
    
    return max / k;
  };


