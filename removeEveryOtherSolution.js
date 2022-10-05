function removeEveryOther(arr) {
  let finalArray = [];

  for (let i = 0; i < arr.length; i = i + 2) {
    finalArray.push(arr[i]);
  }
  return finalArray;
}
