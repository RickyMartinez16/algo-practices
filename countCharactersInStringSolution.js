function count(string) {
  let obj = {};     //create a new empty object
  //   const str2 = str.toLowerCase().replace(/[^A-Za-z]/g, '')
  for (let char of string) {        //loop thru the string (let each input is named char. no need to split("") but has same effect)
    if (obj[char]) {    //if obj[char] i.e "a" key already exsits in the object 
      obj[char]++;      //then add one to its value count
    } else {
      obj[char] = 1;    //if it doesnt exist then add it and make it's count 1
    }
  }
  return obj;       //return the whole obj
}


