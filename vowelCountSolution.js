function getCount(str) {
    let count = str.match(/[aeiou]/gi);     //  .match returns an array. returns an array that contains any vowels
    return count === null ? 0 : count.length;      //if count is null return 0 if not return count.length 
}