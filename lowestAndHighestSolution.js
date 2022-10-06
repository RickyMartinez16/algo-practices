function minMax(arr) {
  let final1 = [];
  if (arr.length === 1) {
    final1.push(arr[0], arr[0]);
    return final1;
  }
  let final = [];
  let sortedArr = arr.sort(function (a, b) {
    return a - b;
  });

  final.push(sortedArr.shift());
  final.push(sortedArr.pop());
  return final;
}
