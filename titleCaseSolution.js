function titleCase(title, minorWords) {
    var minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];      //set a var minor word to check if the minor words are defeined. if not var is minorwords to lower case. if they are return empty []
    return title.toLowerCase().split(' ').map(function(v, i) {  //return the title to lowecase splitting each word. map over the words
      if(v != "" && ( (minorWords.indexOf(v) === -1) || i == 0)) {  //if v doenst equals an empty string and minor words indexof V is -1 or i == 0
        v = v.split('');    //split the v by each letter
        v[0] = v[0].toUpperCase();  //change v[0] to uppercase
        v = v.join('');     //join the rest of the word
      }
      return v; //return the final v
    }).join(' ');   //then join all the words at the end of remove from array
  }