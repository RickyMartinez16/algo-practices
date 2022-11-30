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
    string = string.split('').map(function (el) {       //split the string and then map thru it. looking at each element
      if (el === el.toUpperCase()) {        //if element eqauls element to upper case
        el = ' ' + el       //change the element to add a space
      }
      return el     //return the element 
    })
    return string.join('')      //join the final array
  }