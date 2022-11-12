//--------not working----//

function isSortedAndHow(array) {
  
    let a = array.sort(function(a, b){return a - b})    //mutates original array
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



  //------working------//

  function isSortedAndHow(array) {
  
    let a = [...array].sort((a, b) => a - b);       //dont mutate the input array
    console.log(a)
    let d = [...array].sort((a, b) => b - a);
    console.log(d)
    
      if(array.toString() === a.toString()){        //string to compare array
        return "yes, ascending"
      } else if (array.toString() ===  d.toString()){
        return "yes, descending"
      } 
    return "no"
  }