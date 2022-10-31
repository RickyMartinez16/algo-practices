const multiTable = (number) => {
    let table = '';     //set empty string var
    
    for(let i = 1; i <= 10; i++) {      //loop thru starting at 1 and ending at 10
      table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`; //add this string to table var
    }
                                    //if i is less than 10 \n to make to line if not end
    return table;   //return table
  }