function enough(cap, on, wait) {
    if(on + wait > cap){        //if on and wait is greater than cap
      return Math.abs(cap - (wait + on))        //find the difference 
    } else {
      return 0      //if all good return 0
    }
  }