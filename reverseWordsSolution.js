function reverseWords(str) {
    let reverseString = str.split("").reverse().join("")    //split the input string by letter into an array. reverse the array. then join the letters again
    let final = reverseString.split(" ").reverse().join(" ")    //now each word is reverse byt not the order, so split the words by space, then reverse them, then join them again by sapce
    return final        //return final string
  }