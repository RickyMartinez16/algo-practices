function digitalRoot(n) {
    if (n < 10) return n;
    
    return digitalRoot(
      n.toString().split("").reduce((previousValue, currentValue) => {
      return previousValue + +currentValue
    },0))
  
  }

  //recursive ^

  function digital_root(n) {
    return (n - 1) % 9 + 1;
  }