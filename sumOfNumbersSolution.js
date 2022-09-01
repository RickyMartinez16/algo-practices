function getSum(a, b) {
  if (a == b) {     //if a is the same as b 
    return a;       //return one of them
  } else if (a < b) {       //else if a is less than b
    return a + getSum(a + 1, b);        //recursively call a plus getSum with a now being a + 1 and then it checks again
  } else {      //else if a is greater than b 
    return a + getSum(a - 1, b);        //recursively call a minus getSum with a now being a - 1
  }
}

//------ best practice solution ------//

const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
  }