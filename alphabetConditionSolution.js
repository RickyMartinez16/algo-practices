//not working//

function alphabetPosition(text) {
  let cleanText = text
    .replace(/[^a-zA-Z]/g, "")
    .toLowerCase()
    .split("");
  console.log(cleanText);
  let numberArray = [];
  let n;
  for (let i = 0; i < cleanText.length; i++) {
    n = cleanText.charCodeAt(i) - 97 + 1;
    numberArray.push(n);
  }
  return numberArray.join(" ");
}

//-------working--------//

function alphabetPosition(text) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";      //make alphabet var to compare to
  let alphaNumbers = [];        //final array

  text = text.toLowerCase();    //clean the text

  for (let i = 0; i < text.length; i++) {       //loop thru the input text
    let index = alphabet.indexOf(text[i]);      //find the index of each text letter in the alphabet

    if (index === -1) {     //if the index equals -1 continue because the symbol / space is not in the alphabet
      continue;
    } else {
      alphaNumbers.push(index + 1);     //if the letter is in the alphabet 
    }
  }
  return alphaNumbers.join(" ");        //join the array by a space
}

//indexOf() returns the position of the first occurrence of text[i] in alphabet.
