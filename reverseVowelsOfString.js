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
    //array of what the vowels are
    let vowels = ["a", "e", "i", "o", "u"];

    //split the input to check each letter
    let stringSplit = s.split("")

    //loop thru the array of input letters
    for(let i = 0; i < stringSplit.length; i++){
        //check if the vowels array includes the letter youre checking from the input string (change to lwoercase)
        if(vowels.includes(stringSplit[i].toLowerCase())){
            //if it exists in the vowels array then push it into the final array
            finalArray.push(stringSplit[i])
        }
    }

    //loop thru the split string
    for(let i = 0; i < stringSplit.length; i++){
        //if the vowels array includes the ith letter from the input string changes to lower case again
        if(vowels.includes(stringSplit[i].toLowerCase())){
            //change the ith letter to the last vowel you pushed into the final array
           stringSplit[i] = finalArray.pop()
        }
    }

    //join the split string
    return stringSplit.join("")
};