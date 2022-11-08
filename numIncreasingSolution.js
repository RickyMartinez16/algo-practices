function numberIncreasing(n) {
    while (n > 1) {
      if (n % 3 === 0 && n % 5 !== 0) return true;
      n -= 5;
    } 
    return n === 1;
  }