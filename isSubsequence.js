// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original 
// string by deleting some (can be none) of the characters without disturbing the 
// relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false


var isSubsequence = function(s, t) {

    //edge case
    //if the s input is empty return true
    if(s.length === 0) return true
    
    //create the s index and start it at 0
  let sIndex = 0;
  //loop thru the t input string
  for(let tIndex = 0; tIndex < t.length; tIndex++){
      //if the sIndex letter of the s input is the same letter as the tindex of the t input
      if(s[sIndex] === t[tIndex]){
          //that means theyre the same letter. so add one to the sIndex to check then next letter. 
          //if theyre not the same letter the t index will incremet checking the next letter. the s will stay the same
          // this is how to check the sequence as well not just includes()
          sIndex++
          //if the sIndex is the same as the length of the s inoput youve reached the end and return true
          if(sIndex === s.length){
              return true
          }
      }
  }
  //return false if completes the loop
  return false
};