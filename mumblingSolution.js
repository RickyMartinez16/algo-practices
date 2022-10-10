// function accum(s) {
// 	let newS = '';
//   for(let i = 0; i < s.length; i++){
//     newS += s.charAt(i).repeat(i+1) + "-"
//   }
//   return newS
// }

function accum(s) {
    const result = []       //set an empty array
    const lowerStr = s.toLowerCase()        //lowercase the input
  
    for(let i = 0; i < lowerStr.length; i++) {      // loop thru the lowercase input
      let str = lowerStr[i].toUpperCase()       //set a new var str to uppercase the first letter
      for(let j = 0; j < i; j++) {      //loop thru again
        str += lowerStr[i]              //str var equals the lowercase string i
      }
      result.push(str)      //push the str into the array
    }
  
    return result.join("-")     //join the array with a -
  }

  //-----------best-------//

  function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }

 //split the input string, map over it, new map is character upperCase plus character lowercase repeated i times and then joined by a - 