// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. 
//You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


var majorityElement = function(nums) {
    //make a map
    let map = {}

    for(let i = 0; i < nums.length; i++){
        
        if(map[nums[i]]){
            map[nums[i]]++
        } else {
            map[nums[i]] = 1
        }
    }

    // Find the number with the highest value (most occurrences)
    let maxOccurrences = 0;
    let numberWithMaxOccurrences = null;
    for (let num in map) {
        if (map[num] > maxOccurrences) {
            maxOccurrences = map[num];
            numberWithMaxOccurrences = num;
        }
    }

    // Return the number with the highest value
    return numberWithMaxOccurrences;
};