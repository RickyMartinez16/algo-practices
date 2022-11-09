var number = function (array) {
  let number = 1;
  let finalArray = [];
  for (let i = 0; i < array.length; i++) {
    finalArray.push(number + ": " + array[i]);
    number += 1;
  }
  return finalArray;
};
