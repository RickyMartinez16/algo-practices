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

