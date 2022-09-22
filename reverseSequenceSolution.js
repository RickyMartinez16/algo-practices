const reverseSeq = (n) => {
  let array = [];   //set empty array
  let int = n;  //let the int start at the input number
  while (array.length < n) {    //while the array length is less than n
    array.push(int);        //push the int
    int = int - 1;      //then change the int to be one less to count down
  }
  return array;     //return the array
};
