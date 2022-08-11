function digitalRoot(n) {
    if (n < 10) return n;
    
    return digitalRoot(
      n.toString().split("").reduce((previousValue, currentValue) => {
      return previousValue + +currentValue
    },0))
  
  }

  //recursive