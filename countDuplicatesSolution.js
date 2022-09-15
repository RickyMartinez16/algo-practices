//------not working-----//

function duplicateCount(text) {
  let upperCaseText = text.toUpperCase();
  let splitText = upperCaseText.split("");
  let count = 0;
  for (let i = 0; i < splitText.length; i++) {
    for (let k = i + 1; k < splitText.length; k++) {
      if (splitText[i] === splitText[k]) {
        count++;
        console.log(count);
      }
    }
  }
  return count;
}

//------working-----//

function duplicateCount(text) {
  return (
    text
      .toLowerCase()        //text to lowercase
      .split("")        //split the text to make a new array
      .sort()       //sort the new array aplgabetically
      .join("")     //join them to make one string
      .match(/([^])\1+/g) || []     //match if theyre the same next to one another or an empty array.
  ).length;     //length of the matches. .match outputs and array so can use .length 
}

//First, Sort Array of parameters text And Group the same letters
//Second, Make array again using regex. This regex make array that same strings.
// Last, We can get Length of Array

function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  }