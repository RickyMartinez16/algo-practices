// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
 // typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false


var isAnagram = function(s, t) {
    //split the input s string. then sort it
    let sortedS = s.split("").sort()
    //split the input t string. then sort it
    let sortedT = t.split("").sort()
    
    //use the JSON.stringfy method to compare the contents of the array
    //cant just === to comapre sortedS and sortedT
    // the === operator checks for strict equality between two variables, 
    // which means it checks if both variables are referring to the exact same object in memory.
    return JSON.stringify(sortedS) === JSON.stringify(sortedT)
};