// Given an integer array nums, return true if any value appears at least twice in the array, 
//and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


//-------------not working------------------//
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
     //sort the input array
    let sortedArray = nums.sort((a, b) => a - b)
    console.log(sortedArray)

    //loop thru sorted array
    for(i = 0; i < sortedArray.length; i ++){
        //make a j var to check two vars
        j = i + 1;

        //if the index i is equal to index j or if the last two are the ssame return true
        if(sortedArray[i] === sortedArray[j] || sortedArray.length - 1 === sortedArray.length - 2){
            return true
        } else {
            //else return false
            return false
        }
    }
};



//---------woring solutions----------------//

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
     //sort the inpit array
    nums.sort((a,b) => a-b);

    //loop thru the sorted array 
    for(let i = 0; i < nums.length; i++){
        //if nums index i and index i plus one are the same return true
        if(nums[i] === nums[i+1]){
            return true
        }
    }
    //else return false
    return false
};

// Time complexity: O(n)
// Space complexity: O(n)
var containsDuplicate = function(nums) {
    const s = new Set(nums); 
    return s.size !== nums.length
};