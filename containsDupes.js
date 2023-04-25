// Given an integer array nums, return true if any value appears at least twice in the array, 
//and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


//-------------not working------------------//
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
     //sort the input array
    let sortedArray = nums.sort((a, b) => a - b)
    console.log(sortedArray)

    //loop thru sorted array
    for(i = 0; i < sortedArray.length; i ++){
        j = i + 1;
        if(sortedArray[i] === sortedArray[j] || sortedArray.length - 1 === sortedArray.length - 2){
            return true
        } else {
            return false
        }
    }
};