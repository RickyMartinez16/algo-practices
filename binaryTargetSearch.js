// Given an array of integers nums which is sorted in ascending order, 
//and an integer target, write a function to search target in nums. 
//If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1


var search = function(nums, target) {
    //make the left side
    let leftSide = 0;
    //make the right side
    let rightSide = nums.length - 1;

    //while the left side is less than or eqaul to thr right side
    while (leftSide <= rightSide) {
        //create a mid point to find the middle of the section youre searching
        let midPoint = Math.floor((leftSide + rightSide) / 2);

        //if the middle number in the input nums is the target
        if (nums[midPoint] === target) {
            //simply return the midPoint index
            return midPoint;
            //else if the middle number is less than the target
        } else if (nums[midPoint] < target) {
            //make the left side the midpoint plus 1
            leftSide = midPoint + 1;
            //else you need to move the right side to the left
        } else {
            rightSide = midPoint - 1;
        }
    }
    //if it completes loop return - 1
    return -1;
};