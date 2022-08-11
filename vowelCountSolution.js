function getCount(str) {
    let count = str.match(/[aeiou]/gi);
    return count === null ? 0 : count.length;
  }