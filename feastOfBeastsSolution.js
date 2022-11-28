function feast(beast, dish) {

    if(beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1)){
        //if first ltter and last letter same return else else return false
      return true
    } else {
      return false
    }
  }