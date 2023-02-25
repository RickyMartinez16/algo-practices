// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


//working not my solution ----------------------------------------

//make an object with the symbols and values

symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

var romanToInt = function(s) {
    //keep count var
    value = 0;

    //loop thru input
    for(let i = 0; i < s.length; i+=1){
        //check if symbols[s(input) and each element of input] is less than the next element of input the value subtracts the symbals value. else is adds the symbols value
        symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]]: value += symbols[s[i]]
    }
    return value
};


const I = 1
const V = 5
const X = 10
const L = 50
const C = 100
const D = 500
const M = 1000

let pairs = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

var romanToInt = function(s) {
    if(s.length > 15){
        return
    }
    //make sure only allowed letters are in the string
    const allowedLetters = /([IVXLCDM])+/g
    // console.log(allowedLetters.test(s))

    //make a count var
    let count = 0
    //loop thru input
    for(let i = 0; i < s.length; i++){
        //make anther vr to comapre
        let j = i + 1

        //if pairs value is less than next pairs value
        if(pairs[s[i]] < pairs[s[j]]){
            //subtract current from count
            count -= pairs[s[i]]
        } else {
            //else add tocount
            count += pairs[s[i]]
        }
    }

    // console.log(s[i] + s[j])
    return count
};