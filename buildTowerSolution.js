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
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(
      " ".repeat(nFloors - i - 1) +
        "*".repeat(i * 2 + 1) +
        " ".repeat(nFloors - i - 1)
    );
  }
  return tower;
}



//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat