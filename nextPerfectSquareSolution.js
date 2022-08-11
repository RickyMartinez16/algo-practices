function findNextSquare(sq) {
  let inputSq = Math.sqrt(sq);   //find the square root of the input
  if (inputSq % 1 !== 0) {         //if the inputSq is NOT a full number return -1
    return -1;      
  }
  let newSquare = inputSq + 1;      //new sqaure + 1
  return newSquare * newSquare;     //multiply to get new perfect square
}
