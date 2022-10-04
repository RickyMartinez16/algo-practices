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
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphaNumbers = [];

  text = text.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    let index = alphabet.indexOf(text[i]);

    if (index === -1) {
      continue;
    } else {
      alphaNumbers.push(index + 1);
    }
  }
  return alphaNumbers.join(" ");
}
