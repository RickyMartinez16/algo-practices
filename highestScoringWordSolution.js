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
    ];  // make alphabet array
    
    let words = x.split(" ");       //split the input sentence to indciual words
    let highestScore = 0;       //make a var to keep the hghest score
    let highestScoreWord = "";  //make a var to keep the highest word
    
    for (let word of words) {       //loop thru the words at each indivuaual word
      let lettersSum = 0;      //make a var to keep track of the sum
      
      for (let letter of word) {    //loop thru each letter of each word one word at a time
        lettersSum += alphabets.indexOf(letter) + 1;    //letter sum += alphabtets index plus one for proper number
      }
      
      if (lettersSum > highestScore) {      //if the lettersum is greaer than highest score
        highestScore = lettersSum;      //make the highest score equal to the nwe letter some
        highestScoreWord = word;        //and the highest score word is the word you are looking at
      }
    }
    
    return highestScoreWord;        //return the highest score word var
  }