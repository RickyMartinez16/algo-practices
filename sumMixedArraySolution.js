function sumMix(x) {
  console.log(x);
  let xString = x.toString().split(",");
  console.log(xString);
  let numberArray = xString.map(Number);
  console.log(numberArray);

  const sum = numberArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  return sum;
}
