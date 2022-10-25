function findAverage(array) {
  if (array.length === 0) {
    return 0;               //if the array is empty return 0
  }
  const initialValue = 0;
  const sum = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );                                //redeuce the array to one number
  return sum / array.length;        //divide the reduced array by the length of the array
}
