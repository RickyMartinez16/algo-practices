function hello(name) {
    if(name){       //if name input exists
      name = name.toLowerCase() //make the name all lower case
      return `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}!`  //then return the first letter as capps and the rest 
    }
    return "Hello, World!"      //else return hellow world"
  }