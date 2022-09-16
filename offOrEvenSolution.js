function oddOrEven(array) {
  const sumWithInitial = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,      //reduce the array to one value
    0
  );
  if (sumWithInitial % 2 == 0) {    //if the value's remainder after diving by 2 is 0 then return even
    return "even";
  } else {          //else return odd
    return "odd";
  }
}
