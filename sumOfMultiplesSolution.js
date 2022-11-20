function sumMul(n,m){
    if (n >= m) return "INVALID";       //if n is greater than or qual to n return invaled
  
  var sum = 0;      //make a var to count the sum
    for (var i = n; i < m; i+=n) {      // create a loop where i = n, i runs less than m, and i equals plus n
      sum += i;     //sum equals plus i
    }
    return sum;     //retunr the sum
  }