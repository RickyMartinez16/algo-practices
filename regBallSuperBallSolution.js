//not working//

var Ball = function(ballType) {
    if(!ballType){
      return new Ball().ballType("regular")
    }
    return new Ball().ballType(ballType)
  };