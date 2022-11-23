//not working//

function bump(x){
    let split = x.split("")
    let count = 0
    for(let i = 0; i < split.length; i++ ){
      if(split[i] === "n"){
        count++
      }
    }
          if(count >= 15){
      return "Card Dead"
    } else {
      return "Woohoo!"
    }
  }

  //----working----//

  const bump=x=>x.split('n').length>16?"Car Dead":"Woohoo!"     //split the input by "n"s. if the length of the array is over 16 return car dead else return woohoo