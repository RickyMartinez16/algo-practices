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


var singleNumber = function(nums) {
    //make a map
    let map = {}

    //loop thru input
    for(let i = 0; i < nums.length; i++){
        //if number isnt in map add it to map
        if(!map[nums[i]]){
            map[nums[i]] = 1
        } else {
            //else add one to the valeu
            map[nums[i]]++
        }
    }

    //if map val is 1 thats the only one reutnr it
    if(map[nums] === 1){
        return map[nums]
    }
};