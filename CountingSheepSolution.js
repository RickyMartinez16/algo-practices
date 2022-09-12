function countSheeps(arrayOfSheep) {
  let finalArray = [];      //set var array empty 
  for (let i = 0; i < arrayOfSheep.length; i++) {   //for loop thru input array
    if (arrayOfSheep[i] === true) {     //if index of array is true push it into new array
      finalArray.push(arrayOfSheep[i]);
    }
  }
  return finalArray.length;     //return array length
}
