function noOdds( values ){
    let evenArray = [];
    for(let i = 0; i < values.length; i++){
      if(values[i] % 2 == 0){
        evenArray.push(values[i])
      }
    }
    return evenArray
  }