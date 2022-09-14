function invert(array) {
  const map1 = array.map((x) => x * -1);    //map a new array and multiply is -1 to get the inverse 
  return map1;
}

//------best prac-----//

const invert = array => array.map(num => -num);