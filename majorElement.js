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
    //create as hash map
    let map = {}

    //loop thru the input nums array
    for(let i = 0; i < nums.length; i++){
        //if the map already contains the key of num[i]
        if(map[nums[i]]){
            //add one to it's value
            map[nums[i]]++
        } else {
            //if it doesnt already exist then create it and set it to 1
            map[nums[i]] = 1
        }
    }

    //set the key as null
    let maxKey = null;
    let maxValue = -Infinity;

    for (const key of Object.keys(map)) {
        if (map[key] > maxValue) {
            maxValue = map[key];
            maxKey = key;
        }
    }

    return maxKey;


};