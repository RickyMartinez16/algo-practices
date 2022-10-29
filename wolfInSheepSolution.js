function warnTheSheep(queue) {
  if (queue[queue.length - 1] === "wolf") {     //if the queue at the last index equals wolf
    return "Pls go away and stop eating my sheep";      //return message
  } else {
    let index = queue.indexOf("wolf");  //find the index of wolf
    return `Oi! Sheep number ${queue.length - 1 - index}! You are about to be eaten by a wolf!`;  //return message with mathed index postion
  }
}
