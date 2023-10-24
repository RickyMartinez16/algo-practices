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

    //loop thru the pattern
    for(let i = 0; i < pattern.length; i++){

        //create a variable p. it will be each letter in the pattern
        let p = pattern[i];
        //create a variable word. it is each word in the words array
        let word = words[i]

        //check if the pattern 2 word [p] key exsits with a value
        if(pattern2Word[p]){
            //if it does exist but the value does not equal word
            if(pattern2Word[p] !== word){
                //return false
                return false
            }
            //else if the key doesnt exists then create it with the corresponding word key
        } else {
                pattern2Word[p] = word
            } 
        
        //check if the word to pattern map has the word key and val
        if(word2Pattern[word]){
            //check if the key equal p if not 
            if(word2Pattern[word] !== p){
                //return false
                return false
            } 

            //else if it doesnt exsist
        } else {
            //create it 
            word2Pattern[word] = p
        }

    }
    return true

};



function wordPattern(pattern, s) {
    //create an array called words by splitting the s input
    const words = s.split(' ');

    //check if the pattern length is the same as the words array length
    if (pattern.length !== words.length) {
        //if not reutrn false
        return false;
    }

    //create a pattern to word map
    const patternToWord = new Map();
    //create a word to pattern map
    const wordToPattern = new Map();

    //loop thru the patten input
    for (let i = 0; i < pattern.length; i++) {
        //get each letter
        const letter = pattern[i];
        const word = words[i];

        if (!patternToWord.has(letter)) {
            patternToWord.set(letter, word);
        } else {
            if (patternToWord.get(letter) !== word) {
                return false;
            }
        }

        if (!wordToPattern.has(word)) {
            wordToPattern.set(word, letter);
        } else {
            if (wordToPattern.get(word) !== letter) {
                return false;
            }
        }
    }

    return true;
}