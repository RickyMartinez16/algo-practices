function index(array, n) {
  if (array[n]) {       //if the index exists in the array
    return Math.pow(array[n], n);       //raise that number to the nth power
  } else {
    return -1;      //if it doesnt exist return -1
  }
}
