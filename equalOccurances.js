// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

 

// Example 1:

// Input: s = "abacbc"
// Output: true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.
// Example 2:

// Input: s = "aaabb"
// Output: false
// Explanation: The characters that appear in s are 'a' and 'b'.
// 'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.

var areOccurrencesEqual = function(s) {
    let map = {}

    for(let i = 0; i < s.length; i++){
      if(!map[s[i]]){
        map[s[i]] = 1
      } else {
        map[s[i]]++
      }
      
    }
    console.log(map)
    let values = Object.values(map);
    console.log(values)
    let allEqual = values.every(val => val === values[0]);
    return allEqual
};