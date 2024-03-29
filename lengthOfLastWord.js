// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6


// Explanation: The last word is "joyboy" with length 6.




//working mine--------------------------------------------\\

var lengthOfLastWord = function(s) {
    //split the words by spaces, filter the words to not include space characters
    let justWordsMap = s.split(" ").filter((word) => word.length > 0)

    //get the last word in new array array length
    return justWordsMap[justWordsMap.length - 1].length

};

//trim method removes white sapce from front and back of string

    let trimSplit = s.trim().split(" ")
    
    return trimSplit[trimSplit.length - 1].length