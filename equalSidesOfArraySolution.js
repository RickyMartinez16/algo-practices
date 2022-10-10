function findEvenIndex(arr) {
  let left = 0;     //set left side of array var
  let right = 0;    //set right side of array var
  let reducer = (accumulator, currentValue) => currentValue + accumulator;      //create reducer function

  for (let i = 0; i < arr.length; i++) {        //loop thru the array
    if (i == 0) {       //if the index is 0
      right = arr.slice(1).reduce(reducer, 0);      //set the right var to slice the first int in array and reduce all to the right
      if (i == right) {     //if i eqauls right 
        return i;       //return i
      }
    } else {  //if index is not zero
      left = arr.slice(0, i).reduce(reducer, 0);        //set left side to slice 0 to i and then reduce them 
      right = arr.slice(i + 1).reduce(reducer, 0);      //set right side to slice i + 1 and reduce them to the right
      if (left == right) {      //if theyre the same 
        return i;       //return i
      }
    }
  }
  return -1;        //if no answer return -1
}


//https://javascript.plainenglish.io/javascript-algorithm-equal-sides-of-an-array-e4e06055bf4a