function lovefunc(flower1, flower2) {
  if ((flower1 + flower2) % 2 != 0) {   //if flower one plus flower 2 remainder does not equal 0 its an odd number
    return true;
  } else {
    return false;
  }
}


//-------diff soltuion-----//

function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;     //checks if each number is odd or even
  }
