// Given an integer array nums, move all 0's to the end of it while 
//maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1


var moveZeroes = function(nums) {
    //edge case
    //check if the nums input includes a 0
    //if no zeros then just return the nums array
    if(!nums.includes(0)) return nums

    //keep track of where you want your first non zero index to be
    //it will start at 0
    let nonZeroIndex = 0;

    //loop thru the input
    for(let i = 0; i < nums.length; i++){
        //check if the ith elelemtn is NOT a zero
        if(nums[i] !== 0){
            //change the values of nums[i] and nums[nonzeroindex]. swap them
            [nums[i], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[i]];
            //add one of the nonzeroidnex to move your pointer up
            nonZeroIndex++
        }
    }

    //return the same array correct
    //will be in place swaps in the same array
    return nums
};


