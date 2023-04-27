// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. 
//Each word consists of lowercase and uppercase English letters.

// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

 

// Example 1:

// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
// Example 2:

// Input: s = "Myself2 Me1 I4 and3"
// Output: "Me Myself and I"
// Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.


//-------------some pass some not-------------//

var sortSentence = function(s) {
    let finalSentence = []
    let sentenceSplit = s.split(" ")
    const regex = /\d+/;

    for(let i = 0; i < sentenceSplit.length; i++){
        let matchedNum = sentenceSplit[i].match(regex);
        console.log(matchedNum)
        finalSentence[i] = sentenceSplit[matchedNum - 1]
    }
    return finalSentence.join(" ").replace(/\d+/g, '');
};

//-------------working----------------//

var sortSentence = function(s) {
    //split the sentence by word. sort that by taking two words
    let sentenceSplit = s.split(" ").sort((a, b) => {
        //and checking the last item in each word becasue it is a number. so it's checking the two numbers
        return a[a.length - 1] - b[b.length - 1]
    })
    return sentenceSplit.join(" ").replace(/\d+/g, '');
};


