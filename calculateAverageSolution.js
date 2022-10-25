function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  const initialValue = 0;
  const sum = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  return sum / array.length;
}
