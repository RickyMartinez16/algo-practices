//not working

// complete the function
function solution(string) {
    let stringSplit = string.split("");
    for(let i = 0; i < stringSplit.length; i++){
      let j = i + 1
      if(stringSplit[i] === stringSplit[i].toLowerCase() && stringSplit[j] === stringSplit[j].toUpperCase()){
        stringSplit.splice(i, 0, " ")
      }
    }
  return stringSplit.join("")
}


//working//

function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
  }