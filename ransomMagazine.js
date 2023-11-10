// Given two strings ransomNote and magazine, return true if ransomNote can be 
// constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.


var canConstruct = function(ransomNote, magazine) {
    //create a map to hold the frequencies of the magazine letters
    let map = {};

    //populate the map with the letters that are in the magazine
    for(let i = 0; i < magazine.length; i++){
        if(map[magazine[i]]){
            map[magazine[i]]++
        } else {
            map[magazine[i]] = 1
        }
    }

    //loop thru the ransomnote input
    for(let i = 0; i < ransomNote.length; i++){
        //check the if each letter in the ransom note 
        if(map[ransomNote[i]] > 0){
            map[ransomNote[i]]--
        } else {
            return false
        }
    }
    return true
};