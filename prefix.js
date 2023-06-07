// You are given an array of strings words and a string pref.

// Return the number of strings in words that contain pref as a prefix.

// A prefix of a string s is any leading contiguous substring of s.

 

// Example 1:

// Input: words = ["pay","attention","practice","attend"], pref = "at"
// Output: 2
// Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".
// Example 2:

// Input: words = ["leetcode","win","loops","success"], pref = "code"
// Output: 0
// Explanation: There are no strings that contain "code" as a prefix.





var prefixCount = function(words, pref) {

    //make a regex of the prefix
    const regex = new RegExp(`^${pref}`);

    //filter thru the words array and create an array of words that have the given prefix. return the length of filtered array
    return words.filter(word => regex.test(word)).length
};