// You are given two strings s and t.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Return the letter that was added to t.

 

// Example 1:

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.
// Example 2:

// Input: s = "", t = "y"
// Output: "y"
 

// Constraints:

// 0 <= s.length <= 1000
// t.length == s.length + 1
// s and t consist of lowercase English letters.


var findTheDifference = function(s, t) {
    //create a map for the letters in s
    let sMap = {};
    //create a map for the ltters in t
    let tMap = {};

    //populate the s map
    for(let letter of s){
        //if the s map has a key of the lette already
        if(sMap[letter]){
            //add one of that keys value
            sMap[letter]++
        } else {
            //if it doesnt exist create it and assign it to value of 1
            sMap[letter] = 1
        }
    }

    //populate the t map
    for(let letter of t){
        //if the t map has a key of the letter in t already existing
        if(tMap[letter]){
            //had one to that keys value
            tMap[letter]++
        } else {
            tMap[letter] = 1
        }
    }

    // console.log(sMap)
    // console.log(tMap)

    for(let letter of t){
        if(sMap[letter] !== tMap[letter]){
            return letter
        }
    }
};