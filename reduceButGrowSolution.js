function grow(x) {
  let sortedArray = x.sort((a, b) => a - b);
  const sumWithInitial = sortedArray.reduce(
    (previousValue, currentValue) => previousValue * currentValue
  );
  return sumWithInitial;
}
