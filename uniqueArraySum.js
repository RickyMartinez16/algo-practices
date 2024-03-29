// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

 

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// Example 3:

// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.


var sumOfUnique = function(nums) {
    //make a cap to keep track of occurances
    let map = {}
 
    //loop thru the nums input array. for each number
    nums.forEach((num) => {
        //map[num] is the key in the map. assign the value to whatever it already is, or 0, then add 1 to it
      map[num] = (map[num] || 0) + 1
    })

    //can also use a for loop
 
    //get the unqiue array by filtering the nums input. check each number and if it the corresponding key in the map has a value of 1 return that num to the filtered array
    const uniqueArray = nums.filter((num) => map[num] === 1)
 
    //reduce the unique array to one number
    const sum = uniqueArray.reduce(
     (acc, curr) => acc + curr,
     0
   );
 
   //return the final sum
   return sum
 };