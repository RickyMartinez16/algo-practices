function duplicateEncode(word){
    return word     
      .toLowerCase()    //make the input word lowercase
      .split('')    //split the word to get each letter
      .map( function (a, i, w) {            //map thru the word
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'     //return either ( or ) depending on indexOf and lastIndexOf. 
      })
      .join('');    //join the map
  }


  function duplicateEncode(word){
   
    var unique='';
    word = word.toLowerCase();
    for(var i=0; i<word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    return unique;

}