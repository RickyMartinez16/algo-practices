// Given two integer arrays nums1 and nums2, return an array of their intersection. 
//Each element in the result must be unique and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000


var intersection = function(nums1, nums2) {
    //create a new set to hold the intersection numbs
    //using a set so there won't be dupes
    let intSet = new Set()

    //loop thru the nums1 input
    for(let i = 0; i < nums1.length; i++){
        //check if nums1 includes each number from nums1
        if(nums2.includes(nums1[i])){
            //whatever numbers they haave that intersect add them to the intSet
            intSet.add(nums1[i])
        }
    }

    //return the set in an array form
    //Array.from makes it an array
    return Array.from(intSet)
};