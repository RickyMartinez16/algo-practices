function removeChar(str) {
  let stringArray = str.split("");

  let newArray = stringArray.slice(1, stringArray.length - 1);

  return newArray.join("");
}
