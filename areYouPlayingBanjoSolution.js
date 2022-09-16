function areYouPlayingBanjo(name) {
  let lowerCaseName = name.toLowerCase();
  if (lowerCaseName.charAt(0) === "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}
