// You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

// Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
// Align the substitution table with the regular English alphabet.
// Each letter in message is then substituted using the table.
// Spaces ' ' are transformed to themselves.
// For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
// Return the decoded message.

 

// Example 1:


// Input: key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"
// Output: "this is a secret"
// Explanation: The diagram above shows the substitution table.
// It is obtained by taking the first appearance of each letter in "the quick brown fox jumps over the lazy dog".
// Example 2:


// Input: key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
// Output: "the five boxing wizards jump quickly"
// Explanation: The diagram above shows the substitution table.
// It is obtained by taking the first appearance of each letter in "eljuxhpwnyrdgtqkviszcfmabo".


var decodeMessage = function (key, message) {
    //find the unique letters in the key. split the input key and then join it. make a new set out of the split to get unique letters. make it into an array. array of unique letters
    let uniqueLetters = Array.from(new Set(key.split(' ').join('')))
    //make a new map
    let letterMap = new Map()
    //split the input message
    let result = message.split('')

    //loop thru the unique letters array
    for (let i = 0; i < uniqueLetters.length; i++) {
        //set the key as the ith unique letter and the letter from char code at 97 + i
        letterMap.set(uniqueLetters[i], String.fromCharCode(97 + i))
    }

    //loop thru the result split
    for (let i = 0; i < result.length; i++) {
        //if the ith letter in the result is not a space
        if (result[i] !== ' ') {
            //the new ith spot in the result will be the value from the letter map with the key of result[i]
            result[i] = letterMap.get(result[i])
        }
    }
    //join the final result
    return result.join('')
};