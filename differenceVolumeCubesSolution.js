function findDifference(a, b) {
  const sumA = a.reduce(
    (previousValue, currentValue) => previousValue * currentValue,
    1
  );
  console.log(sumA);
  const sumB = b.reduce(
    (previousValue, currentValue) => previousValue * currentValue,
    1
  );
  console.log(sumB);
  return Math.abs(sumA - sumB);
}
