function remove (string) {
    if(string.charAt(string.length -1) === "!"){        //if the last character of the string is an exlmcation point
      return string.slice(0, -1)        //return the string slicing off the last letter
    }
    return string       //if not return the ogirinal stirng
  }


  //--------------//

  const remove = s => s.replace(/!$/, '');      //replace the explcamtion with nothing using regex