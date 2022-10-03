function sumArray(array) {
  if (!array) {
    return 0;
  }
  let sortedArray = array.sort((a, b) => a - b);
  console.log(sortedArray);
  let newArray = sortedArray.slice(1, sortedArray.length - 1);
  const sumWithInitial = newArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  return sumWithInitial;
}
