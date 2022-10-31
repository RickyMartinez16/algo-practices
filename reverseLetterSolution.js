//not working//

function reverseLetter(str) {
    console.log(str)
    let regex = /^[a-zA-Z]*$/
    let newString = str.replace(regex, "")
    console.log(newString)
    return newString.split("").reverse().join("")
    
  }

  //------working-----//

  