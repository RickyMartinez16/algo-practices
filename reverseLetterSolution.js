//not working//

function reverseLetter(str) {
    console.log(str)
    let regex = /^[a-zA-Z]*$/           //regex wrong. needs to be: let regex = /[^a-z]/gi
    let newString = str.replace(regex, "")
    console.log(newString)
    return newString.split("").reverse().join("")
    
  }

  //------working-----//

  reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');