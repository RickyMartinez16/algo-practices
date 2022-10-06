function doubleChar(str) {
  let final = [];       //final array
  for (let i = 0; i < str.length; i++) {    //loop thru input
    final.push(str[i]);     //push each letter in twice
    final.push(str[i]);
  }
  return final.join("");        //join the array as a string
}
