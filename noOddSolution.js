function noOdds( values ){
    let evenArray = [];     //make an empty array to hold the even numbers
    for(let i = 0; i < values.length; i++){     //loop thru the input array
      if(values[i] % 2 == 0){       //if the numbers remainder is 0 when divded by 2
        evenArray.push(values[i])       //push the number into the even array
      }
    }
    return evenArray        //return even array
  }