// working//

function remove (string) {  
    if(string[string.length - 1] === "!"){
      return string.replace(/\!+$/, "")
    } else {
      return string
    }
  }

  //working//

const remove = s => s.replace(/!+$/, '');