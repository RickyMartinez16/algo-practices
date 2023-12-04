// Given an array nums of n integers where nums[i] is in the range [1, n], 
// return an array of all the integers in the range [1, n] that do not appear in nums.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]
 

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n


var findDisappearedNumbers = function(nums) {
    //make a final array to store
    let array = [];
    //make a map to track frequencies
    let map = {}

    //loop thru the input nums to populate the map
    for(let i = 0; i < nums.length; i++){
        //if the nums[i] key exsists in the map already
        if(map[nums[i]]){
            //add one to its value
            map[nums[i]]++
        } else {
            map[nums[i]] = 1
        }
    }

    for(let i = 1; i <= nums.length; i++){
        if(!map[i]){
            array.push(i)
        }
    }

    return array
};