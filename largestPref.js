// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.


var longestCommonPrefix = function(strs) {
    //edge case
    // if the lengoth of the input array is 0 
    if(strs.length < 1){
        //return empty string
        return ""
    }

    //the prefix starts as the whole first string
    let prefix = strs[0]

    //loop thru the input array of strings
    for(let i = 1; i < strs.length; i++){
        //while loop
        //whike the ith string starting at index 1
        //if the indexOf the prefix does not equal 0
        //if the prefix is not found at the beginning of each string
        while(strs[i].indexOf(prefix) != 0){
            //slice the end off the prefix
            prefix = prefix.slice(0, prefix.length - 1)
        }

        //if the prefix ever gets to an empty string 
        if(prefix === ""){
            //just return the empty string
            return ""
        }
    }
    return prefix
};