//not working//

function high(x){
    let arrayWords = x.split(" ")
    let charCode = 0
    console.log(arrayWords)
    for(let i = 0; i < arrayWords.length; i++){
      let letters = arrayWords[i].split("")
      for(let j = 0; j < letters[i].length; j++){
        charCode += charCodeAt(letters[i][j])
      }
    }
  }