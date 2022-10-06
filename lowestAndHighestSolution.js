function minMax(arr) {
  let final1 = [];      //final answer array
  if (arr.length === 1) {       //if theres only one number in the input
    final1.push(arr[0], arr[0]);        //push it into final array twice
    return final1;      //return final
  }
  let final = [];       //final var empty array
  let sortedArr = arr.sort(function (a, b) {        //sort the array
    return a - b;
  });

  final.push(sortedArr.shift());        //push the first number into it
  final.push(sortedArr.pop());          //push the last number into it
  return final;                         //reutn the final
}
