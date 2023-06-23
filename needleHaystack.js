// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, 
//or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.


function strStr(haystack, needle) {
    //if the needle is empty
    if (needle === "") {
        //return 0
        return 0;
    }
    //if the needle length is longer than the haystack length it cannot be in there
    if (needle.length > haystack.length) {
        //return -1
        return -1;
    }

    //loop thru the haystack the difference of haystack minus needle
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        //if the haystack has substring starting with i and going to needle.length (check the lengtho f the substring to equal the needle) if its thesame as needle
        if (haystack.substring(i, i + needle.length) === needle) {
            //return the index it started with
            return i;
        }
    }

    return -1;
}