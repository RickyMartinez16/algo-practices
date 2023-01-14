// Complete the method which returns the number which is most frequent in the given input array. 
//If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3


function highestRank(arr){
    //make an empty object var
    var obj = {};

    //loop thru the array. for each element in the array check 
    arr.forEach(function(elem){
        //check if the element exsits in the object. if it doesnt
       if(obj[elem] === undefined)
        //create the element in the array as a key and make its value zero
        obj[elem] = 0;
        //add 1 to the object value
        obj[elem]++;
    });
    //make vars for keys, highest and key
    var keys = Object.keys(obj), highest = 0, key;

    //loop thru the keys
    keys.forEach(function(elem){
        //if the element is higher than the highest
       if(obj[elem] >= highest){
           //make the highest var that obj[ele]
          highest = obj[elem];
          //make the key the element
          key = elem;
       }
    })
    //parse int the kay to get the numer
    return parseInt(key);
  }