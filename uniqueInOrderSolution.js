function uniqueInOrder(iterable) {
  //your code here - remember iterable can be a string or an array
  const result = [];

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      result.push(iterable[i]);
    }
  }

  return result;
}
