function findMultiples(integer, limit) {
    let array = []      //make empty array var
    let int = 0     //make int var
    while(int + integer <= limit){  //while int plus given integer is less than or equal to limit
      int += integer    //int equals plus the give intger
      array.push(int)   //push the int into the final array
    }
    return array        //return the final array
  }
  