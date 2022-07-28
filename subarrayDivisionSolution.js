function birthday(s, d, m) {
  let result = 0;

  if (s.length == 1) {
    result = 1;
  } else {
    for (let i = 0; i <= s.length - m; i++) {
      let range = i + m - 1;
      let sum = 0;
      // console.log(s[i] + "range: " + s[range]);
      for (let j = i; j <= range; j++) {
        sum += s[j];
      }
      
      if (d == sum) {
        result += 1;
      }
    }
  }
    return result;
}


function birthday(s, d, m) {
    //set count var to return as 0
    let count = 0;
  
    for (let i = 0; i < s.length; i++) {   //lop thru s array
        //slice the s array so you only get m consecutive values. use reduce to add those values
        let curr = s.slice(i, i + m).reduce((accumulator, currentValue) => accumulator + currentValue);
        //if curr var equals d then add one to the count
        if (curr === d) count++;
    }
    //return count
    return count;
}