// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

var isPalindrome = function(s) {
    //split the input
    let split = s.split("")
 
    //get the string by reversing the split and then joining it to remove it from array then turn it to lowercase
    let string = split.reverse("").join("").toLowerCase()
 
    //get the final string by removing all non alpha numeric with a regex
     const finalString = string.replace(/[^a-zA-Z0-9]/g, "");
 
     //return true or flase is final string is the same as final string split then and then reversed and then joined again
     return finalString == finalString.split("").reverse("").join("")
 };