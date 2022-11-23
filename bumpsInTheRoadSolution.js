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