// Given an integer array nums sorted in non-decreasing order, remove the duplicates 
//in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, 
//you must instead have the result be placed in the first part of the array nums. More formally, 
//if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. 
//It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.


//i dont know what its asking to return? array? or just int?

var removeDuplicates = function(nums) {
    //if the input array is empty reurn 0
    if(nums.length === 0) return 0

    //let i = 0
    let i = 0
    //loop thru nums array starting at second element
    for(let j = 1; j < nums.length; j++){
        //compare the two elements. if they are not the same
        if(nums[i] !== nums[j]){
            //increment i
            i++
            //make nums[i] equal to nums;j
            nums[i] = nums[j]
        }
    }

    //return i plus 1 for length
    return i + 1
};