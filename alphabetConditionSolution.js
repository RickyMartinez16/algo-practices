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
