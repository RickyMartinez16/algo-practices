function isValidWalk(walk) {
  let ns = 0, we = 0;       //set two vars to count north south and west east
  for (let dir of walk) {       //loop thru the walk array
    if (dir == "n") ns += 1;    //if the direction in the array is n add 1 to the ns var
    if (dir == "s") ns -= 1;    //if the direction in the array is s sub 1 to the ns var
    if (dir == "w") we += 1;    //if the direction in the array is w add 1 to the we var
    if (dir == "e") we -= 1;    //if the direction in the array is e sub 1 to the we var
  }

  return walk.length == 10 && ns === 0 && we === 0;     //return true if walk length is 10 and ns and we are 0. else false
}
