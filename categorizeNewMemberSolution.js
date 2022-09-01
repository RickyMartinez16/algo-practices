function openOrSenior(data){
    let array = []  //set new arrat
    for(let i = 0; i < data.length; i++){   //loop thru data array
       if(data[i][0] >= 55 && data[i][1] > 7){      //first spot [0] in each array [i] is less than or eqaul to 55 AND second value [1] is greater than 7
          array.push("Senior")      //push Senior into answer array
        } else {        
          array.push("Open")    //else push Open into answer array
        }
    }  
    return array        //return array
  }


  // ----------- best practice below -------- //

// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }