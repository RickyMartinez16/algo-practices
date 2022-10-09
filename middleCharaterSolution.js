// function getMiddle(s){
//   if(s.length % 2 !== 0){
//     console.log(s.charAt(s.length / 2))
//     return s.charAt(s.length / 2) + s.charAt(s.length / 2 + 1)
//   } else{
//     return s.charAt(s.length / 2)
//   }
// }

function getMiddle(s){
   
    let evenOdd = s.length % 2 === 0
    let minMid = s.charAt(s.length/2-1)
    let mid = s.charAt(s.length/2)
    
    return (evenOdd == true)? minMid.concat(mid): mid
  }