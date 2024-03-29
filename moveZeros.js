// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]


var moveZeroes = function(nums) {
    //keep track of how many zeros there are
    let zeroCount = 0
    //loop thru the nums array
    for(let i = 0; i < nums.length; i++){
        //if the ith element in the nums array is 0
        if(nums[i] === 0){
            //use the splice method to remove that single element
            nums.splice(i, 1);
            //decrement i by 1 to account for the element you just took out
            i--;
            //add one to the zero count
            zeroCount++
        }
    }
    //run another loop. run it the length of the amount of zeros
    for(let i = 0; i < zeroCount; i++){
        //push that amount of zeros into the nums array. they will be at the end
        nums.push(0)
    }
    return nums
};