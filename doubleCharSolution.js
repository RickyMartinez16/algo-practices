function doubleChar(str) {
  let final = [];       //final array
  for (let i = 0; i < str.length; i++) {    //loop thru input
    final.push(str[i]);     //push each letter in twice
    final.push(str[i]);
  }
  return final.join("");        //join the array as a string
}


//---------//

const doubleChar = (str) => str.split("").map(c => c + c).join("");
//split the string into an array, map the array creating a new one, each character C map it to C + C. then join at the end to make stirng