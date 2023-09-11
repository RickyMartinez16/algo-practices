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
        return ""
    }

    let prefix = strs[0]

    for(let i = 1; i < strs.length; i++){
        while(strs[i].indexOf(prefix) != 0){
            prefix = prefix.slice(0, prefix.length - 1)
        }

        if(prefix === ""){
            return ""
        }
    }
    return prefix
};