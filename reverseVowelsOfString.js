// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"


var reverseVowels = function(s) {
    //make an array to keep track of the vowels
    let finalArray = []
    let vowels = ["a", "e", "i", "o", "u"];

    let stringSplit = s.split("")

    for(let i = 0; i < stringSplit.length; i++){
        if(vowels.includes(stringSplit[i].toLowerCase())){
            finalArray.push(stringSplit[i])
        }
    }

    for(let i = 0; i < stringSplit.length; i++){
        if(vowels.includes(stringSplit[i].toLowerCase())){
           stringSplit[i] = finalArray.pop()
        }
    }

    return stringSplit.join("")
};