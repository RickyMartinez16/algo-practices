const reverseSeq = (n) => {
  let array = [];
  let int = n;
  while (array.length < n) {
    array.push(int);
    int = int - 1;
  }
  return array;
};
