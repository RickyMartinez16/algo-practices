function paperwork(n, m) {
    if(n < 0 || m < 0){     //check the condition
      return 0
    }
    return n * m        
  }


  //----best practice-----//

  function paperwork(n, m) {
    return n > 0 && m > 0 ? n * m : 0       //ternery
  }