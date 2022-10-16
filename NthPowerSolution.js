function index(array, n){
    if(array[n]){
      return Math.pow(array[n], n)
    } else {
      return -1
    }
  }