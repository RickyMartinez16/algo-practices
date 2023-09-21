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

    //loop thru the input nums array
    for(let i = 0; i < nums.length; i++){
        //if the number exists in the map
        if(map[nums[i]]){
            //add one of the value
            map[nums[i]]++
        } else {
            //otherwise create the key and set the value to 1
            map[nums[i]] = 1
        }
    }

    //major will keep track of the key
    let major = 0
    //max freq will keep track of the value
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