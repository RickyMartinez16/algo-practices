// function accum(s) {
// 	let newS = '';
//   for(let i = 0; i < s.length; i++){
//     newS += s.charAt(i).repeat(i+1) + "-"
//   }
//   return newS
// }

function accum(s) {
    const result = []
    const lowerStr = s.toLowerCase()
  
    for(let i = 0; i < lowerStr.length; i++) {
      let str = lowerStr[i].toUpperCase()
      for(let j = 0; j < i; j++) {
        str += lowerStr[i]
      }
      result.push(str)
    }
  
    return result.join("-")
  }