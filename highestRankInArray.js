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
        //if the object does exist add 1 to the object value
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


//   This code defines a function named "highestRank" which takes an array as an argument. 
//   Inside the function, it creates an empty object called "obj". 
//   It then uses the Array.prototype.forEach method to iterate over each element in the array passed as an argument. 
//   For each element, it checks if the element is not defined in the obj. 
//   If it's not defined, it sets its value to 0, otherwise it increments its value by 1.
//    Then it creates an array of keys from the obj, and initializes highest and key to 0 and undefined respectively. 
//    Then it iterates over the keys array, and for each element, it checks if obj[elem] is greater than or equal to highest. 
//    If it is, it assigns the value of obj[elem] to highest and elem to key. 
//    Finally, it returns the parseInt of key which is the most common element in the array.