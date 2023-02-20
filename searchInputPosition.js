// Given a sorted array of distinct integers and a target value, return the index if the target is found. 
//If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4


//solved-----------------------

var searchInsert = function(nums, target) {
    //check if the target is in the nums input if it is just return the index
    if(nums.indexOf(target) > 0){
        return nums.indexOf(target)
    } else {
        //put target in nums
        //sort numbers
        //find index of target
        nums = [...nums, target]
        let sortedNumbers = nums.sort((a, b) => a - b)
        return sortedNumbers.indexOf(target)
    }
};