// Given a string s, find the first non-repeating character in it and return its index. 
// If it does not exist, return -1.

 

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1
 

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.


var firstUniqChar = function(s) {

    //make a map to track the frequencies 
    let map = {}

    //loop thru the string to populate the map
    for(let i = 0; i < s.length; i++){
        if(map[s[i]]){
            map[s[i]]++
        } else {
            map[s[i]] = 1
        }
    }
    

    for(let i = 0; i < s.length; i++){
        if(map[s[i]] === 1){
            return i
        }
    }
    return -1


};