function order(words) {
  return words
    .split(" ")       //split the word input into an array then sort them
    .sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/); //use regex to find a digit and then sort the words
    })
    .join(" "); // join the the array in the new order .join return a string
}
