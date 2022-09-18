function friend(friends) {
  let friendsArray = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      friendsArray.push(friends[i]);
    }
  }
  return friendsArray;
}
