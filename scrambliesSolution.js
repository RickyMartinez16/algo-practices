//not work ing

function scramble(str1, str2) {
  let split1 = str1.split("");
  console.log(split1);
  let split2 = str2.split("");
  console.log(split2.join(" "));
  for (let i = 0; i < split2.length; i++) {
    if (split1.includes(split2[i])) {
      continue;
      return true;
    }
  }
  return false;
}


function scramble(strToBeChecked, strToCheckFor) {
    let numLetters = {}     //create empty obj
  
    for (const letter of strToCheckFor) {       //loop thru string to check for each letter named letter
      if (numLetters[letter]) numLetters[letter]++      //if the letter exists add one to the value
      else numLetters[letter] = 1       //if it doesnt exsist in the object then add it and start the value at 1
    }
  
    for (const letter of strToBeChecked) {      //loop thru the first string
      if (numLetters[letter] && numLetters[letter] !== 0) numLetters[letter]--      //if the letter exisits and the AND its not zero then subtract one from the value
    }
  
    for (const key in numLetters) {     //loop thru the keys in number letters obj. if a key doesnt equal 0 return false
      if (numLetters[key] !== 0) return false
    }
  
    // Only reaches this far if all good
    return true
  }