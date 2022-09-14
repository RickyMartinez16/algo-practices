function findShort(s) {
  let wordSplitArray = s.split(" ");

  let shortestWordLength = Infinity;

  for (let i = 0; i < wordSplitArray.length; i++) {
    if (wordSplitArray[i].length < shortestWordLength) {
      shortestWordLength = wordSplitArray[i].length;
    }
  }
  return shortestWordLength;
}
