// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace 
//and initial word order.

 

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "God Ding"
// Output: "doG gniD"


var reverseWords = function(s) {
    //split the words
    let words = s.split(" ");
    //make a final array
    let array = []

    //loop thru the array of words
    for(let i = 0; i < words.length; i++){
        //push into the new array each word after it is split and then reversed and then joined again
        array.push(words[i].split("").reverse().join(""))
    }
    //return a final joined sentence
    return array.join(" ")
};