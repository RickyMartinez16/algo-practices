// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using 
//the letters from magazine and false otherwise.

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



var canConstruct = function(ransomNote, magazine) {
    //make a map of the ransom characters
    let ransomChars = {};
    //make a map of the magazine characters
    let magazineChars = {};

    // Count the occurrences of each character in the ransom note

    //loop thru the ransome note. each letter is called char
    for (let char of ransomNote) {
        //check if each char is in ransomChars map
        if (char in ransomChars) {
            //if it is then add one to the value
            ransomChars[char]++;
        } else {
            //if not then add the key and value as 1
            ransomChars[char] = 1;
        }
    }

    // Count the occurrences of each character in the magazine

    //loop thru the characters in magainze
    for (let char of magazine) {
        //check if the character is in the magazine char map
        if (char in magazineChars) {
            magazineChars[char]++;
        } else {
            magazineChars[char] = 1;
        }
    }

    // Check if the ransom note can be constructed
    for (let char in ransomChars) {
        if (!(char in magazineChars) || ransomChars[char] > magazineChars[char]) {
            return false;
        }
    }

    return true;
};