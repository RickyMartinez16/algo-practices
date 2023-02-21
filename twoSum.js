// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

var twoSum = function(nums, target) {
    //make an answer array
    let answer = []

    //loop thru input nums
    for(let i = 0; i < nums.length; i++){
        //make a j var to get the second number
        let j = i + 1
        
        //if the two numbers i and j equal the target
        if(nums[i] + nums[j] == target){
            //push them into the answer array
            answer.push(i, j)
            //else if thet dont 
        } else {
            //loop thru again to find another element. as i moves up then k moves up
            for(let k = i + 1; k < nums.length; k++){
                if(nums[i] + nums[k] == target ){
                    answer.push(i, k)
                }
            }
        }
    }
    //slice the array to only get 2 indices
    return answer.slice(0,2)
};



//tried this brute force first time couldnt get it but had the idea----------------------------

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};