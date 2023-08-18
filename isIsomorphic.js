// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. 
//No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
 

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.



// below code not working ---------------------

//want to make a map of both strings occursances and then compare the occurances and return true if theyre equal


var isIsomorphic = function(s, t) {
    let sMap = {}
    let tMap = {}

    for(let i = 0; i < s.length; i++){
        if(sMap[s[i]]){
            sMap[s[i]]++
        } else {
            sMap[s[i]] = 1
        }

        if(tMap[t[i]]){
            tMap[t[i]]++
        } else {
            tMap[t[i]] = 1
        }
    }

    for(let j = 0; j < sMap.length; j++){
        if(sMap[j] === tMap[j]){
            continue
        }
        return true
    }
    return false
    
};



//--------------------------------------------


var isIsomorphic = function(s, t) {
    //if the lengths are not the same cannot be isomorphic
    if (s.length !== t.length) {
        return false; // Different lengths cannot be isomorphic
    }

    //create a map of the s input
    const sMap = {};
    //create a map of the t input
    const tMap = {};

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (!sMap[charS]) {
            sMap[charS] = charT;
        } else if (sMap[charS] !== charT) {
            return false; // Mismatch in mapping
        }

        if (!tMap[charT]) {
            tMap[charT] = charS;
        } else if (tMap[charT] !== charS) {
            return false; // Mismatch in mapping
        }
    }

    return true; // Strings are isomorphic
};