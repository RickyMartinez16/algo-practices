// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

function solve(arr){  
    //make a variable of the alphabet lowercase
    var alphabeth = "abcdefghijklmnopqrstuvwxyz";

    //make a map. check each letter of input arr and make it lowercase. split it. the filter the map. if i equals aplhabet indexof y. length of map
    return arr.map(x => x.toLowerCase().split('').filter((y,i) => i==alphabeth.indexOf(y)).length);
  };



  
  function solve(arr){  
      //make an alphabet var
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
    //make arry to keep count
    let final = []

    //loop thru the input array
    for (let i = 0; i < arr.length; i++) {
        //make count var
      let count = 0;

      //loop to get a new j var
      for (let j = 0; j < arr[i].length; j++) {
            //if arr var to lowercase equals alphabet element
        if (arr[i][j].toLowerCase() === alphabet[j]) {
            //add one to the count
          count++;
        }
      }
      //add the final count to the final array
      final.push(count); 
    }
    return final
  };