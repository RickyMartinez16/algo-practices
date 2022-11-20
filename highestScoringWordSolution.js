//not working//

function high(x){
    let arrayWords = x.split(" ")   //split the strings to indivisual words
    let charCode = 0
    console.log(arrayWords)
    for(let i = 0; i < arrayWords.length; i++){     //loop thru the words
      let letters = arrayWords[i].split("")     //split the words into letters
      for(let j = 0; j < letters[i].length; j++){   ////loop thru the letters of each word
        charCode += charCodeAt(letters[i][j])
      }
    }
  }