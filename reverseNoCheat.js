// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)  reverse() method


reverse = function(array) {
    //make an empty array var
    let finalArray = [];
    
    //loop thru the input array. you want to work backwards so start i at the end and work down to get reverse roder
    for(let i = array.length - 1; i >= 0 ; i--){
        //push into final array
      finalArray.push(array[i])
    }
    return finalArray
  }