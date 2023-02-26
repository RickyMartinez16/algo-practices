//not working//

var Ball = function(ballType) {
    if(!ballType){
      return new Ball().ballType("regular")
    }
    return new Ball().ballType(ballType)
  };


  //working//------------------------------------

  var Ball = function(ballType) {
    this.ballType = ballType || 'regular';      //when using classes THIS keyword. this ballType is given ballType or regular if balltype empty
  };