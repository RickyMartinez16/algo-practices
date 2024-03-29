// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

 

// Example ONE:

// Input: s = "abacbc"
// Output: true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.
// Example 2:

// Input: s = "aaabb"
// Output: False
// Explanation: The characters that appear in s are 'a' and 'b'.
// 'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.

var areOccurrencesEqual = function(s) {
    //create a map
    let map = {}

    //loop thru the input 
    for(let i = 0; i < s.length; i++){
        //if the key does not exist in the map
      if(!map[s[i]]){
          //create the key and set the value at 1
        map[s[i]] = 1
      } else {
          //if it already exists then just add one to it
        map[s[i]]++
      }
    }
    
    //just get the values of the map
    let values = Object.values(map);
    
    //check if every value is equal to the first value
    let allEqual = values.every(val => val === values[0]);

    //return if theyre all true or false
    return allEqual
};