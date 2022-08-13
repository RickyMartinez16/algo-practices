function digitalRoot(n) {
    if (n < 10) return n;     //if n is less than 10 theres only one digit so just return n 
    
    return digitalRoot(       //call digitalRootFunction again. make n a string and split it to put it into an array
      n.toString().split("").reduce((previousValue, currentValue) => {    //reduce the array
      return previousValue + +currentValue    //??
    },0))
  
  }

  //recursive ^

  function digital_root(n) {
    return (n - 1) % 9 + 1;
  }

//   Examples
//   16  -->  1 + 6 = 7
//  942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2