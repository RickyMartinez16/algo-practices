// Given two integer arrays nums1 and nums2, return an array of their intersection. 
//Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000


var intersect = function(nums1, nums2) {
    //make an array to hold the intersecting numbers
    let intersection = [];
    //make a map to keep track of frequencies
    let map = {};

    //populate the frequencie map
    for(let i = 0; i < nums1.length; i++){
        //if the key exsists in the map
        if(map[nums1[i]]){
            //add one to the key value
            map[nums1[i]]++
        } else {
            //if it doesnt exist make it exist and the value will be 1
            map[nums1[i]] = 1
        }
    }

    //can do the same thing with a let of loop

    // for(let num of nums2){
    //     if(map[num] > 0){
    //         intersection.push(num)
    //         map[num]--
    //     }
    // }
    // return intersection

    //for loop
    for(let i = 0; i < nums2.length; i++){
        if(map[nums2[i]] > 0){
            intersection.push(nums2[i])
            map[nums2[i]]--
        }
    }

    return intersection
};