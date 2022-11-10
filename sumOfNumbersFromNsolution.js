//------not working-------//

// var SequenceSum = (function() {
//     function SequenceSum() {}
  
//     SequenceSum.showSequence = function(count) {
//       let final = ""
//       let int = 0
//       let finalCount = 0
//       while(count >= int){
//         final+=int + "+"
//         finalCount += int
//         if(int === count){
//           final+= " = " + finalCount
//         }
//       }
//       return final
//     }



//working//

var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      var sum = 0;      //set a sum var
      var str = "";     //set an empty string var
      if (count === 0) {        //if input count = 0
        return "0=0";       //return 
      } else if (count < 0) {       //else if count is less than 0
        return count + "<0";        //return
      } else {
        for (var i = 0; i < count; i++) {       //loop thru count
          sum += i;     //sum equals plus i
          str += i + "+";       //add 'i+' to the string
        };
      sum += count;     //sum eqauls plus count
      str += count + " = " + sum; //string += count = sum
      return str; //return string
      };
    };
  
    return SequenceSum;
  
  })();