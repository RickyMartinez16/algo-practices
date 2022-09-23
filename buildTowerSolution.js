//-----not working-----//

function towerBuilder(nFloors) {
  let floorsArray = [];
  let floor = "*";
  while (nFloors > floorsArray.length) {
    floorsArray.push(floor);
    floor += "**";
    console.log(floorsArray);
  }
  return floorsArray;
}

//-------working----//

function towerBuilder(nFloors) {
  var tower = [];       //empty array
  for (var i = 0; i < nFloors; i++) {       //run as long as the number of floors you need
    tower.push(     //pushing in the string example: "    ***    "
      " ".repeat(nFloors - i - 1) +     //calculate number of spaces
        "*".repeat(i * 2 + 1) +         //calcyalte number of stars
        " ".repeat(nFloors - i - 1)     //calculate number of spaces
    );
  }
  return tower;     //return the tower array
}

//.repeat(num) repeats the specified string a specific number of times


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat