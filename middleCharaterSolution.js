// function getMiddle(s){
//   if(s.length % 2 !== 0){
//     console.log(s.charAt(s.length / 2))
//     return s.charAt(s.length / 2) + s.charAt(s.length / 2 + 1)
//   } else{
//     return s.charAt(s.length / 2)
//   }
// }

function getMiddle(s){
   
    let evenOdd = s.length % 2 === 0        //is even true 
    let minMid = s.charAt(s.length/2-1)     //find the char to the left of mid
    let mid = s.charAt(s.length/2)      //find the true mid
    
    return (evenOdd == true)? minMid.concat(mid): mid       //if evenodd is true then return minmid + mid, if not return mid
  }


  function getMiddle(s) {
    var middle = s.length / 2;
    return (s.length % 2) 
      ? s.charAt(Math.floor(middle))
      : s.slice(middle - 1, middle + 1);
  }