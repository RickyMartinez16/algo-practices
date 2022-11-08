function sumDigits(number) {
  let string = String(number);  //turn the input number into a string

  let array = string.split(""); //split the string into an array

  let count = 0;        //make a count var
  for (let i = 0; i < array.length; i++) {      //loop thru the string array
    if (array[i].match(/^[0-9]+$/)) count += Number(array[i]);  //if ezch element in the array is a number add to the count
  }
  return count; //return the count
}
