// Given an array of integers nums which is sorted in ascending order, and an integer target, 
//write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
 

// Constraints:

// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.


var search = function(nums, target) {
    //set the left side at 0
    let leftSide = 0
    //start the right side at the end of the array
    let rightSide = nums.length - 1


    //while the left side is less than or equal to the right side
    while(leftSide <= rightSide){
        //set a midpoint
        const midPoint = Math.floor((rightSide + leftSide) / 2)
        //if the nums[mid] is the target lucky guess
        if(nums[midPoint] === target){
            //just reutrn the index
            return midPoint
            //else if the midpoint element is less than the target
        } else if(nums[midPoint] < target) {
            //you know the midpoint is to the left of the target. so move the left side closer to the right to squeeze the search
            //make the left side the current midpoint plus one. it cant be anything to the left
            leftSide = midPoint + 1
        } else {
            //else you know the midpoint is greater than the target so you need to move the right side closer to squeeze
            //move the right side to the current midpoint minus one
            rightSide = midPoint - 1
        }
    }
    return -1
};