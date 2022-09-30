function wave(str) {
  let waveArr = []; //array where wave will go
  for (let i = 0; i < str.length; i++) {
    //loop thru the string
    let letter = str[i]; //variable each letter
    if (letter === " ") {
      //if the letter is a space continue on in the loop
      continue;
    } else {
      waveArr.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1)); //slice to select letters return the uppercase letter and add the sliced end
    }
  }
  return waveArr; //return final arrray
}

//------best prac------//

function wave(str) {
  let result = [];      //make array to hold final answer

  str.split("").forEach((char, index) => {      //split the string by letter, for each letter check if its lowercase
    if (/[a-z]/.test(char)) {
      result.push(
        str.slice(0, index) + char.toUpperCase() + str.slice(index + 1)
      );
    }
  });

  return result; //return the result array
}
