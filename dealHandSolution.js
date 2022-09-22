function dealHand(deck, hand_size) {
  let hand = [];

  while (hand.length < hand_size) {
    let card = getRandomItem(deck);
    
    if (!hand.includes(card)) {
      hand.push(card);
    }

    if (hand.length === hand_size) {
      return hand;
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
