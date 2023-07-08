// Given an array nums containing n distinct numbers in the range [0, n], 
//return the only number in the range that is missing from the array.

 

// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 
//2 is the missing number in the range since it does not appear in nums.
// Example 2:

// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 
//2 is the missing number in the range since it does not appear in nums.
// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 
//8 is the missing number in the range since it does not appear in nums.



var missingNumber = function (nums) {
    //find the range of nums
  range = nums.length;

  //if theres only 1 number in the array 
  if (range == 1) {
      //loop thru it to see what it includes
    for (let i = 0; i < 2; i++) {
        //if it doesn't inlucde i then return i
      if (!nums.includes(i)) {
        return i;
      }
    }
  }

  //if the range is only 2 
  if (range == 2) {
      //do same as above loop
    for (let i = 0; i < 3; i++) {
      if (!nums.includes(i)) {
        return i;
      }
    }
  }

  //loop to run as many times as the range plus 1 to account for it being the last number missing
  for (let i = 0; i < range + 1; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
};