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
        //if the key exsits in the map
        if(map[s[i]]){
            //add one to its value
            map[s[i]]++
        } else {
            //if not the create the key and assign the value to 1
            map[s[i]] = 1
        }
    }
    

    //loop thru the string
    for(let i = 0; i < s.length; i++){
        //if the map has a key for s[i] and it's value is 1
        if(map[s[i]] === 1){
            //return that index
            return i
        }
    }
    //if it completes the loop reutrn -1
    return -1
};