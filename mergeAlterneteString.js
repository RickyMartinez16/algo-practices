// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

 

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d
 

// Constraints:

// 1 <= word1.length, word2.length <= 100
// word1 and word2 consist of lowercase English letters.


var mergeAlternately = function(word1, word2) {
    //split each letter in the first word into an array
    let word1Split = word1.split("")
    //split each letter inn the second word into an array
    let word2Split = word2.split("")

    //create an final array we will put the letters in
    let merged = []

    //if the first word is bigger or equal to the second word
    if(word1Split.length >= word2Split.length){
        //loop thru the first word split
        for(let i = 0; i < word1Split.length; i++){
            //merge every other letter
            merged.push(word1Split[i])
            merged.push(word2Split[i])
        }
        return merged.join("")
    } else {
        for(let i = 0; i < word2Split.length; i++){
            merged.push(word1Split[i])
            merged.push(word2Split[i])
        }
        return merged.join("")
    }
};