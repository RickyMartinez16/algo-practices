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



  function high(x){
    let alphabets = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    
    let words = x.split(" ");
    let highestScore = 0;
    let highestScoreWord = "";
    
    for (let word of words) {
      let lettersSum = 0;
      
      for (let letter of word) {
        lettersSum += alphabets.indexOf(letter) + 1;
      }
      
      if (lettersSum > highestScore) {
        highestScore = lettersSum;
        highestScoreWord = word;
      }
    }
    
    return highestScoreWord;
  }