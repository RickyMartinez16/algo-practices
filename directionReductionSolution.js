function dirReduc(plan) {
  var opposite = {      //make an object with key values containing opposite of each key
    NORTH: "SOUTH",
    EAST: "WEST",
    SOUTH: "NORTH",
    WEST: "EAST",
  };
  return plan.reduce(function (dirs, dir) {             
    if (dirs[dirs.length - 1] === opposite[dir]) dirs.pop();
    else dirs.push(dir);
    return dirs;
  }, []);
}
