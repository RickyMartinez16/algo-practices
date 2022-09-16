function areYouPlayingBanjo(name) {
  let lowerCaseName = name.toLowerCase();    //make the name all lowercase who cares about case
  if (lowerCaseName.charAt(0) === "r") {    //check the first letter in the name
    return name + " plays banjo";       //if its "r" return the playing nbanjo
  } else {
    return name + " does not play banjo";       //if not return not playing
  }
}
