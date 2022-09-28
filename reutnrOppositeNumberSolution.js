function opposite(number) {
  if (number > 0) {     //if the nymber is negative
    return -Math.abs(number);       //reutnr its positive
  } else if (number < 0) {      //if the number is positibe
    return Math.abs(number);        //return its negative
  } else {      //if number is 0
    return 0;    //return 0
  }
}


//-----best practiee-----//

function opposite(number) {
    return(-number);
  }