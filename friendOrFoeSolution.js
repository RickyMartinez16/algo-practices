function friend(friends) {
  let friendsArray = [];    //set new empty array
  for (let i = 0; i < friends.length; i++) {    // loop thru input
    if (friends[i].length === 4) {  //check each array item if the length equals 4
      friendsArray.push(friends[i]);    //push it into new array
    }
  }
  return friendsArray;  //return final aray
}
