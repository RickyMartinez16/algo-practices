//--------not working----//

function isSortedAndHow(array) {
  
    let a = array.sort(function(a, b){return a - b})
    console.log(a)
    let d = array.sort(function(a, b){return b - a})
    console.log(d)
    
      if(array.toString() === a.toString()){
        return "yes, ascending"
      } else if (array.toString() === d.toString()){
        return "yes, descending"
      } 
    return "no"
  }