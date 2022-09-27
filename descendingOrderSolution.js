function descendingOrder(n) {
  let stringN = String(n);
  let arrayN = stringN.split("");

  let sortedArray = arrayN.sort(function (a, b) {
    return b - a;
  });

  let sortedString = sortedArray.join("");

  return Number(sortedString);
}
