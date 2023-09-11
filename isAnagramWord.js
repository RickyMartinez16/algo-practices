// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?


var isAnagram = function(s, t) {
    //split the s input into an array and then sort in alphabetical order
    let sSorted = s.split("").sort()
    //split the t input into an array and then sort in alphaebtical order
    let tSorted = t.split("").sort()

    //if the lengths of the arrays is not the same
    if(sSorted.length != tSorted.length){
        //return false
        return false
    }

    //loop thru the arrays
    for(let i = 0; i < sSorted.length; i++){
        //if each letter is not the same in the ith position in each array
        if(sSorted[i] != tSorted[i]){
            //retrun false
            return false
        }
    }
    //return true if the loop
    return true
};