function findNextSquare(sq) {
  let inputSq = Math.sqrt(sq);
  if (inputSq % 1 !== 0) {
    return -1;
  }
  let newSquare = inputSq + 1;
  return newSquare * newSquare;
}
