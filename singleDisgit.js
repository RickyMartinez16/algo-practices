// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.


var singleNumber = function(nums) {
    //create a map
    let map = {}

    //loop thru the input
    for(let i = 0; i < nums.length; i++){
        //if the key exits in the map
        if(map[nums[i]]){
            //add one to the value
            map[nums[i]]++
        } else {
            //otherwise make the value 1
            map[nums[i]] = 1
        }
    }

    //loop thru the new map
    for (let key in map) {
        // console.log(`${key}: ${map[key]}`);
        //check each key
        //if the value for that key is 1
        if(map[key] === 1){
            return key
        }
    }
    
};