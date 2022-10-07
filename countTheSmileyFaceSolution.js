function countSmileys(arr) {
  if (arr.length === 0) {       //if arr is empty return 0
    return 0;
  }
  let incr = 0;         //let increment counter = 0
  let validSmileys = [      //list of valid smiley faces
    ":)",
    ";)",
    ":D",
    ";D",
    ":-D",
    ":~D",
    ":-)",
    ":~)",
    ";~D",
    ";~)",
    ";-D",
    ";-)",
  ];
  for (let face of arr) {       //loop thru input array let face of array (name each item in the input array face)
    if (validSmileys.includes(face)) {     //if the valid smiley faces we made includes each input face
      incr++;       //add one to the count
    }
  }
  return incr;      //return final count
}
