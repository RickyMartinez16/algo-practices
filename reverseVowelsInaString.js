// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"
 

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.


var reverseVowels = function(s) {
    //make an array that will hold the vowels
    let vowelArray = []
    //make an array that will hold the indexes of those vowels
    let indexArray = []
    //split the input into an array
    let sSplit = s.split("")

    //loop thru the input
    for(let i = 0; i < s.length; i++){
        
        //check if each letter in the input if its a vowel or not
        if(/^[aeiou]$/i.test(sSplit[i])){
            //if it is a vowel push the letter into the vowel array
            vowelArray.push(sSplit[i])
            //also push the index of that letter into the array
            indexArray.push(i)
            
        }
    }

    //reverse the vowel array to get the reverse order we want
    let vowelArrayReverse = vowelArray.reverse()

    //loop thru the index array
    for(let i = 0; i < indexArray.length; i++){
        //change the letters in the sSplit array to become the reversed vowels
        sSplit[indexArray[i]] = vowelArrayReverse[i]
    }
    // console.log(sSplit)
    // console.log(vowelArrayReverse)
    // console.log(indexArray)

    //return joined split input
    return sSplit.join("")
};