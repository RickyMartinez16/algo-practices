function countSheeps(arrayOfSheep) {
  let finalArray = [];
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      finalArray.push(arrayOfSheep[i]);
    }
  }
  return finalArray.length;
}
