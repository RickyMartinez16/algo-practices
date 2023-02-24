// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
//The relative order of the elements may be changed.

// Since it is impossible to change the length of the array in some languages, 
//you must instead have the result be placed in the first part of the array nums. 
//More formally, if there are k elements after removing the duplicates, 
//then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.


// In computer science, an in-place algorithm is an algorithm which transforms input using no auxiliary data structure. 
//However, a small amount of extra storage space is allowed for auxiliary variables. 
//The input is usually overwritten by the output as the algorithm executes. 
//An in-place algorithm updates its input sequence only through replacement or swapping of elements.


// This is how you solve all "in place" questions. 

// I have been stuck on "in place" problems for too long..

// if index[i] == val. zeroStartIdx ++, then you get your number!


var removeElement = function(nums, val) {
    //make a zero start index
    var zeroStartIdx = 0;

    //for loop thru array input
    for(let i=0;i<nums.length;i++){
        //if the nums[i] element doesnt equal the value
        if(nums[i]!==val){
            //change nums at the zero start index to nums[i]
            nums[zeroStartIdx]=nums[i];
            //increment the zero start index
            zeroStartIdx++
        }
    }
    //return zero start index
    return zeroStartIdx; 
};