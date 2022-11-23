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

  const bump = x => x.split``.filter(e => e === 'n').length > 15 ? 'Car Dead' : 'Woohoo!';

  //split input to indivual letters, then filter it. if element equals n and the filter is greater than 15 return car dead else return wooho