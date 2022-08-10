function caesarCipher(s, k) {
  // let lowerCaseS = s.toLowerCase();
  let finalMessage = "";

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];

    if (letter.match(/[a-zA-Z]/)) {
      let code = s.charCodeAt(i) + k;

      if (code > 122) {
        code = code - 26;
      }
      if (code < 65) {
        code = code + 52;
      }

      let newLetter = String.fromCharCode(code);
      finalMessage += newLetter;
    } else {
      finalMessage += letter;
    }
  }
  return finalMessage;
}


// 12
// Hello_World!
// 4

// Lipps_[svph!

//expected: Lipps_Asvph!

//10
//www.abc.xy
//87

//´´´. .µ¶

//expected: fff.jkl.gh


//https://www.petefreitag.com/cheatsheets/ascii-codes/