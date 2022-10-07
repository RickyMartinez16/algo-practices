const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (fuelLeft * mpg >= distanceToPump) {       //if fuel times miles per gallon is more than or equal to distance
    return true;        //return true
  } else {      //if not return false
    return false;
  }
};


//-----best------//

function zeroFuel(distanceToPump, mpg, fuelLeft) {
    return (distanceToPump > mpg * fuelLeft) ? false : true;        //ternery
  }