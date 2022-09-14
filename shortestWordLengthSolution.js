function findShort(s) {
  let wordSplitArray = s.split(" ");       //split the array into indivdual workds

  let shortestWordLength = Infinity;    //make a variable a really high numnber

  for (let i = 0; i < wordSplitArray.length; i++) {     //for loop to check each word in the split array
    if (wordSplitArray[i].length < shortestWordLength) {    //if the current word is less than shortestWord var
      shortestWordLength = wordSplitArray[i].length;    // change the shortest word var to that word
    }
  }
  return shortestWordLength;    //return shortest word var
}
