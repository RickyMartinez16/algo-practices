// You are given a positive integer array nums.

// The element sum is the sum of all the elements in nums.
// The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.

// Note that the absolute difference between two integers x and y is defined as |x - y|.

 

// Example 1:

// Input: nums = [1,15,6,3]
// Output: 9
// Explanation: 
// The element sum of nums is 1 + 15 + 6 + 3 = 25.
// The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
// The absolute difference between the element sum and digit sum is |25 - 16| = 9.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 0
// Explanation:
// The element sum of nums is 1 + 2 + 3 + 4 = 10.
// The digit sum of nums is 1 + 2 + 3 + 4 = 10.
// The absolute difference between the element sum and digit sum is |10 - 10| = 0.



var differenceOfSum = function (nums) {
    //find the element sum
  const elementSum = nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  //keep track of the diigt sum
  let digitSum = 0;
  //loop thru the input
  for (let i = 0; i < nums.length; i++) {
      //make an array of each digits
    let digitArray = String(nums[i]).split("");

    //loop thru the array of digits
    for (let j = 0; j < digitArray.length; j++) {
      digitSum += Number(digitArray[j]);
    }
  }
  return Math.abs(digitSum - elementSum);
};