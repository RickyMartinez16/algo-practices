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
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.


var isPalindrome = function(s) {
    //split the input into an array. reverse it. join the array. remove non alpha numeric chars. chaneg them all to lowercase
    let reverse = s.split("").reverse().join("").replace(/[^a-zA-Z0-9]/g, "").toLowerCase()

    //check if the reverse var is equal to the input merge and removed non alpha numeric lowercase
    if(reverse === s.split("").join("").replace(/[^a-zA-Z0-9]/g, "").toLowerCase()){
        //if theyre the same return true
        return true
    }

    //all else return fasle
    return false

};