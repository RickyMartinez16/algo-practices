function getDivisorsCnt(n) {
  let array = [];       //make an empty array
  for (let i = 1; i <= n; i++) {        //loop thru starting at 1 as long as i is less than or equal to n
    if (n % i === 0) {      //if the remainder of n divided by i is 0 its a divisor
      array.push(i);    //push it into array
    }
  }
  return array.length;
}
