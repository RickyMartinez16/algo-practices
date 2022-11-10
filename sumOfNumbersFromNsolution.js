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
      var sum = 0;
      var str = "";
      if (count === 0) {
        return "0=0";
      } else if (count < 0) {
        return count + "<0";
      } else {
        for (var i = 0; i < count; i++) {
          sum += i;
          str += i + "+";
        };
      sum += count;
      str += count + " = " + sum;
      return str;
      };
    };
  
    return SequenceSum;
  
  })();