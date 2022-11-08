//--------not working--------//

function evaporator(content, evap_per_day, threshold){ 
  
    //content minus evap per day %
    //while 10 % of content is larger than remaining content contnue 
    let finalThres = (100/content ) * threshold
    console.log(finalThres)
    let count = 0
    let percentToMinus = (100 / content) * evap_per_day
    console.log(percentToMinus)
    while(content > finalThres){
      content =- 
      count++
    }
    return count
  }


  //-----working----//

  function evaporator(content, evap_per_day, threshold){ 
    var days = 0;
    var gas = 100;
      while(gas >= threshold){
        gas -= gas * evap_per_day / 100;
        days++;
    }
      return days;
    }