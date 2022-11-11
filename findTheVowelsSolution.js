function vowelIndices(word) {
    var arr = [];   //make an array
    for(var i = 0; i < word.length; i++) {      //loop thru the word
      if(/[aeioyu]/i.test(word[i])) {       //use regex to check if a vowel matches each letter index
        arr.push(i+1);      //push that index plus one into the array
      }
    }
    return arr;     //return final array
  }