function removeChar(str) {
  let stringArray = str.split("");  //split the string into an array by letter

  let newArray = stringArray.slice(1, stringArray.length - 1);      //slice the array to remove first and last

  return newArray.join(""); //return the string by joining the array
}
