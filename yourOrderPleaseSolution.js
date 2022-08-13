
function order(words){
    return words.split(' ').sort(function(a, b){        //split the word input into an array then sort them
        return a.match(/\d/) - b.match(/\d/);           //use regex to find a digit and then sort the words
     }).join(' ');                 // join the the array in the new order .join return a string
  } 