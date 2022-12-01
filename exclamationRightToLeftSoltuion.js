function remove(s,n){
    while(n) {  //while n is truthy 
      s = s.replace("!", "");   //replace ! with nothing. this goes in order from left to right
      n--;  //minus one from n
    }
    return s;
  }