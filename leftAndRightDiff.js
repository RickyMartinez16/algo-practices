// Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

// answer.length == nums.length.
// answer[i] = |leftSum[i] - rightSum[i]|.
// Where:

// leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
// Return the array answer.

 

// Example 1:

// Input: nums = [10,4,8,3]
// Output: [15,1,11,22]
// Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
// Example 2:

// Input: nums = [1]
// Output: [0]
// Explanation: The array leftSum is [0] and the array rightSum is [0].
// The array answer is [|0 - 0|] = [0].




var leftRigthDifference = function(nums) {
    //keep track of left sum
    let left = [];
    //keep track of right sum
    let right = [];
    //keep track of final sum
    let final = []
    //keep track of what to add to each side
    let startL = 0
    let startR = 0

    //start a loop to push into each side array
    for(let i = 0; i < nums.length; i++){
        //as long as theyre shorter than nums array
        if(left.length < nums.length){
            //push start into left
            left.push(startL);
            //add the next number to the start
            startL+=nums[i]

            //same for right
            right.push(startR)
            //but go reverse
            startR+=nums[nums.length - 1 - i]
        }
    }
    //reverse the right array to get in correct order for final sum
    right = right.reverse()

    //run another loop to get final sum
    for(let j = 0; j < nums.length; j++){
        //math.abs
        final.push(Math.abs(left[j] - right[j]))
    }
    return final
};