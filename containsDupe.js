// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109


var containsDuplicate = function(nums) {
    //use a set to find the unqie numbers
    const unique = new Set(nums)

    //compare the size of the set and the length of the input array
    if(unique.size < nums.length){
        //if unique is less than nums return true
        return true
    }

    return false
};