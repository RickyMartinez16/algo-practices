// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Graph

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

function squareArea(A){
    //get the circumfrence 
    var circum = 4 * A;

    //get the radius
    var radius = circum / (2 * Math.PI);

    //get the area
    var area = Math.pow(radius, 2);

    //round to nearest second decimal
    return Math.round(area*100)/100
  }