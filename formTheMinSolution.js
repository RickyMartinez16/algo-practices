function minValue(values) {
  let set = new Set();  //make a new set
  values.forEach((number) => set.add(number));  //for each value in the input array add it to the set. the set will remove dups
  let sorted = [...set].sort(function (a, b) {  //sort the new array
    return a - b;
  });
  return Number(sorted.join(""));   //join the array and make it a number
}


//--------------//

function minValue(values){
    let arr = Array.from(new Set(values))       //make an array from a new set that push the values 
    return parseInt(arr.sort().join(''))    //parse int the sorted array after its joined
  }