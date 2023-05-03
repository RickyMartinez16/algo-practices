// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:

// Input: sentence = "leetcode"
// Output: false



var checkIfPangram = function(sentence) {
    //make a regex to check if each letter is used once
    const regex = /([a-z])(?!.*\1)/g;
    //see how many there are
  const uniqueChars = sentence.toLowerCase().match(regex);
  //if theres 26 it's pangram rerturn true
  return uniqueChars?.length === 26;
};