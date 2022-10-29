function warnTheSheep(queue) {
    console.log(queue.indexOf("wolf"))
    console.log(queue.length)
    if(queue[queue.length - 1] === "wolf"){
      return "Pls go away and stop eating my sheep"
    } else {
      let index = queue.indexOf("wolf")
      return `Oi! Sheep number ${(queue.length - 1) - index}! You are about to be eaten by a wolf!`
    }
  }