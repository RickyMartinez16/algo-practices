// working//

function remove (string) {  
    if(string[string.length - 1] === "!"){      //if the end of the string is an exlmcation replace all of the ending exlmcations with nothing
      return string.replace(/\!+$/, "")
    } else {
      return string     //else return thestring
    }
  }

  //working//

const remove = s => s.replace(/!+$/, '');