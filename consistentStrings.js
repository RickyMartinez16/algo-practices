// You are given a string allowed consisting of distinct characters and an array of strings words. 
//A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

 

// Example 1:

// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
// Example 2:

// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent.
// Example 3:

// Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.



//------------working-------------------//


var countConsistentStrings = function(allowed, words) {
    //make the regex to check for only the letters in the allowed variable. the regex checks for only the given letters
    const regex = new RegExp(`^[${allowed}]+$`);

    //create an array to hold the words that fit
    let array = [];

    //loop thru the input words
    for(let i = 0; i < words.length; i++){
        //if the word passes the regex test push it into the array
        if(regex.test(words[i])){
            array.push(words[i])
        }
    }
    //return the legnth of the final array
    return array.length
};