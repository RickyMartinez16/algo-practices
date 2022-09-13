function abbrevName(name) {
  let names = name.split(" ");      //split the names into an array
  return (names[0].charAt(0) + "." + names[1].charAt(0)).toUpperCase();     //return the first letter of each array to upper case
}
