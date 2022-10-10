function correct(inputString) {
    // organize the corrections in a human-readable object/map
    const corrections = {
      "5": "S",
      "0": "O",
      "1": "I",
    };
  
    // use a regex (//)
    // search for 5 or 0 or 1 ([501])
    // do this for the whole input (g)
    // if it finds a mistake, run the function that takes the mistake and replaces it with the correct char from the corrections object
    return inputString.replace(/[501]/g, (char) => corrections[char]);
  }


  //----best----//


  correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')  //regex