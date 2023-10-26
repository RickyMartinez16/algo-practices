// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
 

// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.


//this code failing last test
var wordPattern = function(pattern, s) {
    //split the input words into an array named words
    let words = s.split(" ")

    //create a map of the pattern to the word
    let pattern2Word = {};
    //create a map of the word to the pattern
    let word2Pattern = {};

    for(let i = 0; i < pattern.length; i++){

        let p = pattern[i];
        let word = words[i]

        if(pattern2Word[p]){
            if(pattern2Word[p] !== word){
                return false
            }
        } else {
                pattern2Word[p] = word
            } 
        
        if(word2Pattern[word]){
            if(word2Pattern[word] !== p){
                return false
            } 
        } else {
            word2Pattern[word] = p
        }

    }
    return true

};