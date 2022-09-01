function highAndLow(numbers) {
  let sortedNumbers = numbers.split(" ").sort((a, b) => a - b);  //split numbers into an array and then sort them low to high
  if (sortedNumbers.length === 1) {     //if theres only 1 in array 
    return numbers + " " + numbers;     //return it twice
  } else {                              // else 
    let first = sortedNumbers.pop();    //highest (last) is grabbed via pop
    let second = sortedNumbers.shift(); //lowest (first) is grabbed via shift
    return first + " " + second;        //return both
  }
}

//------alternate soltuion -------//
function highAndLow(numbers) {
  numbers = numbers.split(" ");     //split nunbers into an array
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;      // return max from spreaded numbers array and min from spread numbers array
}
