// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109


var majorityElement = function(nums) {
    //create a map
    let map = {}

    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]]){
            map[nums[i]]++
        } else {
            map[nums[i]] = 1
        }
    }

    let major = 0
    let maxFreq = 0

    for(let key in map){
        console.log(`${key}: ${map[key]}`);
        if(map[key] > maxFreq){
            major = key
            maxFreq = map[key]
        }
    }
    return major
};