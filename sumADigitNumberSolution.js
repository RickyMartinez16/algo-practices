function sumDigits(number) {
  let string = String(number);

  let array = string.split("");

  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].match(/^[0-9]+$/)) count += Number(array[i]);
  }
  return count;
}
