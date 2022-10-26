var capitals = function (word) {
  var caps = [];        //make an empty array
  for (var i = 0; i < word.length; i++) {       //loop thru the word 
    if (word[i].toUpperCase() == word[i]) caps.push(i);     //if the letter to caps is the same as the letter you know its caps
  }                                                     //then push the index into the new array
  return caps;
};
