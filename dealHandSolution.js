function dealHand(deck, hand_size) {
  let hand = [];    //ser empty array var

  while (hand.length < hand_size) {     //while hand length is less than hand size
    let card = getRandomItem(deck);     //get a random card to card var

    if (!hand.includes(card)) {     //if hand array does not include the card
      hand.push(card);      //push the card into the array
    }

    if (hand.length === hand_size) {        //if the length of the hand array equals the hand size
      return hand;      //rerun the hand
    }
  }
}

function getRandomItem(deck) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * deck.length);

  // get random item
  const item = deck[randomIndex];

  return item;
}
