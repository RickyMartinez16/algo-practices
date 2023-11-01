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
    let vowelArray = []
    let indexArray = []
    let sSplit = s.split("")
    for(let i = 0; i < s.length; i++){
        
        if(/^[aeiou]$/i.test(sSplit[i])){
            vowelArray.push(sSplit[i])
            indexArray.push(i)
            // sSplit.splice(i, i)
        }
    }

    let vowelArrayReverse = vowelArray.reverse()

    for(let i = 0; i < indexArray.length; i++){
        sSplit[indexArray[i]] = vowelArrayReverse[i]
    }
    // console.log(sSplit)
    // console.log(vowelArrayReverse)
    // console.log(indexArray)

    return sSplit.join("")
};