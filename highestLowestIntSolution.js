function highAndLow(numbers) {
  let sortedNumbers = numbers.split(" ").sort((a, b) => a - b);
  if (sortedNumbers.length === 1) {
    return numbers + " " + numbers;
  } else {
    let first = sortedNumbers.pop();
    let second = sortedNumbers.shift();
    return first + " " + second;
  }
}

//------alternate soltuion -------//
function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
